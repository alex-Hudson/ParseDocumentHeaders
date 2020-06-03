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
      export ..............export headers to json file
      read ................read headers from imported data or from data already imported
      help ............... show help menu for a command`,

  import: `
      node index.js import <options>
  
      --location ..... the location to use`,

  export: `
      node index.js export <options>
      
      --location ............ the location to use
      --name ................ the file name to use`,

  read: `
      node index.js read <options>
      
      --location ............ the location to use
      --filePath ............ the path for the file to be saved
      --fileName ............ the name of the file to be saved`,
};
