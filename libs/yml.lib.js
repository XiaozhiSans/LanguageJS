import * as jsyaml from "https://fastly.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.mjs";

export const yml = {
	check: file => {return /(\.ya?ml)$/.test(file)? true: false},
	conver: content => {return jsyaml.load(content)}
}
