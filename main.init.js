/**
 * LanguageJS by XiaozhiSans
 *  v0.1.0-alpha-20240610
 * Licence:
 * 
 *  https://github.com/XiaozhiSans/LanguageJS
 */
import {cfg} from "./language.config.js";
import common from "./libs/common.lib.js";
import {language} from "./libs/main.lib.js";
import {yml} from "./libs/yml.lib.js";

common();

language.cfg = cfg,
language.yml = yml;
globalThis.language = language,
globalThis.changeLang =
globalThis.changeLanguage = (lang) => {return language.change(lang)};

print("language.js", language.getVer(), "by XiaozhiSans");

