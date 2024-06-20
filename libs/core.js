import * as jsyaml from "https://fastly.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.mjs";

const version = {
	name: [0, 2, 0],
	build: 20240620,
	type: "alpha"
}, getFile = (file, mode = 0) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {(xhr.readyState === 4 && xhr.status === 200)? (() => {
			let result = {};
			if(mode == 0) {result = language.yml.check(file)? language.yml.conver(xhr.responseText): JSON.parse(xhr.responseText);}
			else {
				let t = language.yml.check(file)? language.yml.conver(xhr.responseText): JSON.parse(xhr.responseText);
				(typeof t.type !== "undefined" && t.type.startsWith("xsl"))? (() => {result[`${t.name}`] = t.lang; result.type = t.type;})(): null;
			} language.temp = result; language.start();
		})(): null;}
		xhr.open("GET", file, true);
		xhr.send();
	}, log = (...any) => language.cfg.debug? print(`[language.js] ${any}`): null;

const injectHTML = (lang, mode = language.modes[0]) => {
	const modes = {
		innerHTML(content, type) {
			(type.startsWith("xsl")? content: Object.entries(content.data)).forEach(text => {
				findEles(type.startsWith("xsl")? `[${text.split('=')[0]}]`: `[al="${text[0]}"]`).forEach(ele => {
					try {ele.innerHTML = (type.startsWith("xsl")? shiftArray(text.split('=')).join('='): text[1]);} catch(e) {console.warn(`${ele}.innerHTML failed. reason: ${e}`);}
				});
			});
		},
		replaceText(content) {
			content.forEach(text => {findEle("html").innerHTML = findEle("html").innerHTML.replaceAll(text.split('=')[0], shiftArray(text.split('=')).join('='))});
		}
	}
	modes[mode](language.temp[lang], language.temp.type || "al");
}

export const language = {
	cfg: {
		/** 检查更新 */
		checkUpdate: true,
		/** 调试模式,会发送控制台调试信息 未开发完善 */
		debug: false,
		/** 默认注入模式 */
		defaultMode: "innerHTML",
		/** 支持 autolang, 此开关现已无意义 */
		supportAl: true,
		// 开发中,无实际意义
		defaultArea: {},
		defaultLang: ''
	},
	change(lang) {this.set(lang);this.innerTexts(lang, this.languages);},
	checkUpdate() {},
	init() {
		let lang = navigator.language.split('-')[0] || "en";
		this.set(lang);
	},
	modes: [
		"innerHTML",
		"replaceText"
	],
	regFile(file) {
		getFile(file);
	},
	regFiles(...files) {
		files.forEach(file => {
			getFile(file, 1);
		});
	},
	set(lang) {
		let date = new Date();
		date.setDate(date.getDate() + 7);
		document.cookie = `language=${lang}; expires=${date}`;
	},
	start(mode = this.cfg.defaultMode) {
		document.cookie.split("; ").forEach(cookie => {
			cookie = cookie.split('=');
			if(cookie[0] === "lang") {
				this.lang = cookie[1];
			} else {return this.init();}
		});

		findEle("html").lang = this.lang;
		injectHTML(this.lang, mode);
	},
	unRegAllFiles() {this.temp = {}; log("unreged all files.");},
	version() {return `v${version.name.join('.')}-${version.type}-${version.build}`;},
	yml: {
		check: file => {return /(\.ya?ml)$/.test(file)? true: false},
		conver: content => {return jsyaml.load(content)}
	}
}

print(`[language.js] ${language.version()} by XiaozhiSans`);
log("core lib loaded\n debug mode is actived, will send log to consloe");
