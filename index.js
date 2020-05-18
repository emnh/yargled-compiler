import * as PIXI from 'pixi.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function append(program, text) {
  return program + text + '\n';
}

function statement(program, text) {
  return program + text + ';\n';
}

let program = "";
program = append(program, function() {
"new function main",
"entrypoint main",
"in main define const app",
"let app be new PIXI application",
"add arg object",
"let width be 800",
"let height be 600",
"let backgroundColor be 0x1099bb",
"let resolution be window devicePixelRatio"
});