<div align="right">

English | [简体中文](./README-zh.md)

<sup>language translation may not be 100% acc</sup>

</div>

<div align="center">

# *language.js*

[![repo size](https://img.shields.io/github/repo-size/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logoColor=hotpink&logo=github)](#)
[![test page](https://img.shields.io/badge/view-test_page-deeppink?style=flat-square&logo=github&logoColor=%23fff&labelColor=%23000
)](https://xsawa.dev.tc/languagejs/)
[![github tag](https://img.shields.io/github/v/tag/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logo=github)](https://github.com/XiaozhiSans/languagejs/tags)
[![jsdelivr hits](https://img.shields.io/jsdelivr/gh/hm/XiaozhiSans/languagejs?style=flat-square&color=orange&labelColor=black&logoColor=orange&logo=jsdelivr)](https://www.jsdelivr.com/package/gh/XiaozhiSans/languagejs)
[![license](https://img.shields.io/github/license/XiaozhiSans/languagejs?style=flat-square&logo=github&labelColor=%23000&color=%23444
)](./LICENSE)

the *`language.js`* can bring mult-languages to your pages

the *`language.js`* still in alpha test, welcome devlopers [join our dev](https://github.com/XiaozhiSans/languagejs/fork)!

[view test page](https://xsawa.dev.tc/languagejs/)

</div>

# how 2 use

## quickly begin

just add these code to last line of your `html>body`

```html
<script type="module" src="https://fastly.jsdelivr.net/gh/XiaozhiSans/languagejs/init.min.js"></script>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", () => {
		language.regFile("./languages.yml");
		/**
		 * or:
		 * language.regFiles("./zh.yml", "./en.yml", ...);
		 */
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

# license

`undefined`


[^whatIsAl]: another mult-language javascript for html pages, [github repo](https://github.com/TheChuan1503/AutoLang/)
