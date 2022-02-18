import { exit } from "process";

// Constantes
const inquirer = require("inquirer");
const users = require("./users.json");

// Pergunta do Login
const login = {
  type: "input",
  name: "login",
  message: "LOGIN : ",
};

// Pergunta da senha
const password = {
  type: "input",
  name: "password",
  message: "PASSWORD : ",
};
// VARIAVEIS
var usernameForm: string;
var passwordForm: string;
// Terminal
inquirer
  .prompt([login])
  .then((answers: { login: any }) => {
    // LOGIN RECEBE VALOR
    usernameForm = answers.login;
    inquirer
      .prompt([password])
      .then((answers: { password: any }) => {
        // PASSWORD RECEBE VALOR
        passwordForm = answers.password;
        if (
          Validalogin({ username: usernameForm, password: passwordForm }) ==
          true
        ) {
          console.log("Logged.");
          return true;
          exit;
        }
        console.log("User/Password not exists.");
        return false;
      })
      .catch((error: { isTtyError: any }) => {
        console.log(error.isTtyError);
      });
  })
  .catch((error: { isTtyError: any }) => {
    console.log(error.isTtyError);
  });

function Validalogin(dados: { username: string; password: string }): Boolean {
  let result = users.filter(
    (value: any) =>
      value.username == dados.username && value.password == dados.password
  );
  if (result.length == 1) {
    return true;
  }
  return false;
}
