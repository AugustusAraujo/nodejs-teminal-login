// Constantes
const inquirer = require("inquirer");
const dbQuery = require("./db").query;

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

// Terminal
inquirer
  .prompt([login])
  .then((answers) => {
    let loginForm = answers.login;
    if (loginForm == "123") {
      inquirer
        .prompt([password])
        .then((answers) => {
          let passwordForm = answers.password;
          if (passwordForm == "123") {
            console.log("Logado");
          }
        })
        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
    } else {
      console.log("User not found/exists");
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      console.error(error);
    }
  });
