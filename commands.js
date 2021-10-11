const program = require("commander");
// const { Command } = require("commander");
// const program = new Command();
// program.version("0.0.1");
const { addCustomer, findCustomer } = require("./index");
const { prompt } = require("inquirer");

const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer first name",
  },
  {
    type: "input",
    name: "lastname",
    message: "Customer last name",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer phone",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email",
  },
];
program.version("1.0.0").description("Client management system");

program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => {
      addCustomer(answers);
    });
  });

program
  .command("find <name>")
  .alias("f")
  .description("find a customer")
  .action((name) => {
    return findCustomer(name);
  });

program.parse(process.argV);
