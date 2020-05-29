const menus = {
  main: `
      outside [command] <options>
  
      parse .............. parse headers for a document
      version ............ show package version
      help ............... show help menu for a command`,

  parse: `
      node index.js parse <options>
  
      --location, -l ..... the location to use`,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
