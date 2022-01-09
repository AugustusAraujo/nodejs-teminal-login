const inquirer = require("inquirer");

const login = {
  type: "input",
  name: "login",
  message: "LOGIN : ",
};
const password = {
  
}
inquirer
  .prompt([
    {
      type: "input",
      name: "password",
      message: "PASSWORD : ",
    }
  ])
  .then((answers) => {
    console.log(answers.login);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      console.error(error);
    }
  });
