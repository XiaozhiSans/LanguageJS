<div align="right">

English | [简体中文](./README-zh.md)

<sup>language translation may not be 100% acc</sup>

</div>

<div align="center">

# *language.js*

[![repo size](https://img.shields.io/github/repo-size/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logoColor=hotpink&logo=github)](#languagejs)
[![test page](https://img.shields.io/github/actions/workflow/status/XiaozhiSans/languagejs/deploy-test-pages.yml?style=flat-square&color=yellow&label=test%20page&labelColor=black&logoColor=%23eeeeac&logo=github)](https://xsawa.dev.tc/languagejs/)
[![github tag](https://img.shields.io/github/v/tag/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logo=github)](https://github.com/XiaozhiSans/languagejs/tags)
[![jsdelivr hits](https://img.shields.io/jsdelivr/gh/hm/XiaozhiSans/languagejs?style=flat-square&color=orange&labelColor=black&logoColor=orange&logo=jsdelivr)](https://www.jsdelivr.com/package/gh/XiaozhiSans/languagejs)

the *`language.js`* can bring mult-languages to your pages

the *`language.js`* still in alpha test, welcome devlopers [join our dev](https://github.com/XiaozhiSans/languagejs/fork)!

[view test page](https://xsawa.dev.tc/languagejs/)

</div>

# how 2 use

## quickly begin

just add these code to last line of your `html>body`

```html
<script type="module" src="https://fastly.jsdelivr.net/gh/XiaozhiSans/languagejs/main.init.min.js"></script>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", () => {
		language.cfg.languages = `${your_languages_file_path.json}`;
		// mult language files just like this: {en:"./lang/en-US.json",zh:"./lang/zh-CN.json"};
		language.start();
	});
</script>
```

for more info pls read [our wiki](https://github.com/XiaozhiSans/languagejs/wiki)

~~but this wiki still in devlop~~

# supportted language files type

- xsl(with json/yml)

  **X**iaozhi**S**ans**L**ang, *standard language files type of the `language.js`*
- al(with json/yml)

  **A**uto**L**ang, *standard language files type of the `AutoLang`* [^whatIsAl]

for more info pls read [our wiki](https://github.com/XiaozhiSans/languagejs/wiki)

~~but this wiki still in devlop~~

# dependencies

- modern browser that support es6

# about support node

<font size=4><font color=red>**NOT**</font> yet plan to support node</font>

# special thanks

- [nodeca/js-yaml](https://github.com/nodeca/js-yaml)

  support: yml/yaml
- [TheChuan1503/AutoLang](https://github.com/TheChuan1503/AutoLang/)

  support: provide idea

# licence

`undefined`


[^whatIsAl]: another mult-language javascript for html pages, [github repo](https://github.com/TheChuan1503/AutoLang/)
