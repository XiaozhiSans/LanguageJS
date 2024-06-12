<div align="right">

[English](./README.md) | 简体中文

<sup>语言翻译不保证 100% 准确</sup>

</div>

<div align="center">

# *language.js*

[![repo size](https://img.shields.io/github/repo-size/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logoColor=hotpink&logo=github)](#languagejs)
[![test page](https://img.shields.io/github/actions/workflow/status/XiaozhiSans/languagejs/deploy-test-pages.yml?style=flat-square&color=yellow&label=test%20page&labelColor=black&logoColor=%23eeeeac&logo=github)](https://xsawa.dev.tc/languagejs/)
[![github tag](https://img.shields.io/github/v/tag/XiaozhiSans/languagejs?style=flat-square&color=hotpink&labelColor=black&logo=github)](https://github.com/XiaozhiSans/languagejs/tags)
[![jsdelivr hits](https://img.shields.io/jsdelivr/gh/hm/XiaozhiSans/languagejs?style=flat-square&color=orange&labelColor=black&logoColor=orange&logo=jsdelivr)](https://www.jsdelivr.com/package/gh/XiaozhiSans/languagejs)

*`language.js`* 能为你的页面带来多语言支持

目前 *`language.js`* 还处于早期测试版,欢迎各位开发者[加入开发](https://github.com/XiaozhiSans/languagejs/fork)!

[查看效果](https://xsawa.dev.tc/languagejs/)

</div>

# 如何使用

## 快速开始

只需要把这些代码加入你的 `html>body` 最后一行:

```html
<script type="module" src="https://fastly.jsdelivr.net/gh/XiaozhiSans/languagejs/main.init.min.js"></script>
<script type="text/javascript">
	document.addEventListener("DOMContentLoaded", () => {
		language.cfg.languages = `${你的语言文件路径.json}`;
		// 如果有多个语言文件就像这样: {en:"./lang/en-US.json",zh:"./lang/zh-CN.json"};
		language.start();
	});
</script>
```

更多信息请看 [我们的wiki](https://github.com/XiaozhiSans/languagejs/wiki)

~~虽然还在编写就是了~~

# 支持的语言文件标准

- xsl(with json/yml)

  **X**iaozhi**S**ans**L**ang, *`language.js` 的语言文件标准*
- al(with json/yml)

  **A**uto**L**ang , *`AutoLang` [^whatIsAl]的语言文件标准*

更多信息请看 [我们的wiki](https://github.com/XiaozhiSans/languagejs/wiki)

~~虽然还在编写就是了~~

# 依赖项

- 支持es6语法的现代浏览器

# 关于支持 node

<font size=4>目前<font color=red>**没有**</font>打算支持 node</font>

# 特别鸣谢

- [nodeca/js-yaml](https://github.com/nodeca/js-yaml) :

  支持: yml/yaml
- [TheChuan1503/AutoLang](https://github.com/TheChuan1503/AutoLang/)

  支持: 灵感来源

# 协议

`还没选`


[^whatIsAl]: 另一个为 html 页面提供多语言支持的 javascript, [github 仓库](https://github.com/TheChuan1503/AutoLang/)
