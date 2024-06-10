export const language = {
	start() {
		document.cookie.split("; ").forEach(cookie => {
			cookie = cookie.split('=');
			if(cookie[0] === "lang") {
				this.lang = cookie[1];
			} else {return this.init();}
		});
		typeof this.cfg.languages === "string"?
		this.getFile(this.cfg.languages):
		(() => {
			let langLs = Object.entries(this.cfg.languages);
			this.languages = {};
			langLs.forEach(lang=>this.getFile(lang[1], true, lang[0]))
		})();
		findEle("html").lang = this.lang;
	},
	change(lang) {this.set(lang);},
	getVer() {
		let ver = this.version;
		return `v${ver.name.join('.')}-${ver.type}-${ver.build}`;
	},
	getFile(file, append, lang) {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4 && xhr.status === 200) {
				if(!append) {
					this.languages = this.yml.check(file)?
					this.yml.conver(xhr.responseText):
					JSON.parse(xhr.responseText);
				} else {
					this.languages[`${lang}`] = this.yml.check(file)?
					this.yml.conver(xhr.responseText):
					JSON.parse(xhr.responseText);
				}
				this.innerTexts(this.lang, this.languages);
			}
		}
		xhr.open("GET", file, true);
		xhr.send();
	},
	init() {
		let lang = navigator.language.split('-')[0] || "en";
		this.start(lang);
	},
	innerTexts(target, content) {
		let mode = (this.cfg.supportAl)? content["type"] || "al": "xsl";
		mode === "al"?
		Object.entries(content[`${target}`].data).forEach(text => {
			findEles(`[al="${text[0]}"]`).forEach(ele => {
				try {ele.innerHTML = text[1];} catch(e) {console.warn(`${ele}.innerHTML failed. reason: ${e}`);}
			});
		}):
			mode === "xsl"?
			content[`${target}`].forEach(text => {
				findEles(`[${text.split('=')[0]}]`).forEach(ele => {
					try {ele.innerHTML = shiftArray(text.split('=')).join('=');} catch(e) {console.warn(`${ele}.innerHTML failed. reason: ${e}`);}
				});
			}):
		"unsupport type";
	},
	set(lang) {
		let date = new Date();
		date.setDate(date.getDate() + 7);
		document.cookie = `lang=${lang}; expires=${date}`;
		this.innerTexts(lang, this.languages);
	},
	version: {
		name: [0, 1, 0],
		build: "20240610",
		type: "alpha"
	},
}
