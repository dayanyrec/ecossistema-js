import $ from "jquery";
import User from "./user.js";

const name = prompt("Digite seu nome");

let user = new User(name);

$("span").html(`${user.name}. Parabéns pelos seus ${user.age} de vida`);
