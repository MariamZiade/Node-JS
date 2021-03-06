/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.replace("\n", " ").trim();
  var arrayText = text.split(" ");
  console.log(arrayText);

  if (text.trim() === "quit" || text.trim() === "exit") {
    quit();
  } else if (text.trim() === "help") {
    help();
  } else if (arrayText[0] === "hello") {
    hello(arrayText[1]);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (!text) {
    console.log("hello!");
  } else {
    console.log("hello" + " " + text + "!");
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following help command lists all the possible commands

function help() {
  console.log(
    "All the possible commands: \n",
    "\n",
    "hello\n",
    "quit\n",
    "help\n",
    "list\n",
    "add\n",
    "remove\n",
    "update\n",
    "check\n",
    "uncheck\n"
  );
  process.exit();
}

// The following line starts the application
startApp("Mariam Ziad??");
