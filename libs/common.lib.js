const funcs = [
	["exportToGlobal", (...any) => {return console.warn("This function still in devlopment, will skip.");}],
	["findEle", (ele) => {return document.querySelector(ele);}],
	["findEles", (ele) => {return document.querySelectorAll(ele);}],
	["popArray", (array) => {array.pop();return array;}],
	["print", console.log],
	["shiftArray", (array) => {array.shift();return array;}]
];

export default() => {funcs.forEach(func => globalThis[func[0]] = func[1]);}