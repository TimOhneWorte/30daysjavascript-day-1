"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
NodeList.prototype.__proto__ = Array.prototype;
HTMLCollection.prototype.__proto__ = Array.prototype;

const alleKeys = () => $$("div");

const init = () => {

  window.load = addEventListener("keypress", pressKey, false);
  window.load = addEventListener("keyup", releaseKey, false);

}
const pressKey = (e) => {
    
var x = e.which || e.keyCode;
var y = String.fromCharCode(x);
 document.getElementById(y).className ="keydown";
 document.getElementById("ton".concat(y)).play();
};
const releaseKey = (e) => {
var x = e.which || e.keyCode;
var y = String.fromCharCode(x).toLowerCase();
console.log(y);
document.getElementById(y).className ="keyup";
};

init();