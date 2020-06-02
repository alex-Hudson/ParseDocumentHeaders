export default class Help {
  /**
   * Command line help tool
   */
  constructor(args) {
    const subCmd = args[0] === "help" ? args[1] : args[0];
    console.log(menus[subCmd] || menus.main);
  }
}

const menus = {
  main: `
      outside [command] <options>
  
      import ..............import a document into the system
      version ............ show package version
      help ............... show help menu for a command`,

  import: `
      node index.js import <options>
  
      --location, -l ..... the location to use`,

  export: `
  node index.js export <options>
  
  --location, -l ....... the location to use`,

  read: `
  node index.js read <options>
  
  --location, -l ........ the location to use`,
};
