/**
 * language.js by @XiaozhiSans
 *  v0.2.0-alpha-20240620
 * Licence:
 * 
 *  https://github.com/XiaozhiSans/languagejs
 */
import {language} from "./libs/core.min.js";
import libs from "./libs/common.lib.min.js";
libs();

globalThis.language = language,
globalThis.changeLang =
globalThis.changeLanguage = language.change;
