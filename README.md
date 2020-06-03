## ThoughtRiver - Document Headers - Alex Hudson Solution

Command line tool to read a json file and output headers to another json file

---

## Usage:

- Basic usage is using the 'read' tool. An example command looks like:

1. cd to the root directory/solution (the folder where index.js is saved)
2. run node index.js read <path to the input json file> <optional path to output folder> <optional output filename (.json)>

If the output folder optional argument is left blank the root directory is used.
If the filename is left blank 'headers.json' is used

## Header Logic

The logic to determine a header is that the paragraph text is:

- 1.  not longer than 15 words
- 2.  contains letters
- 3.  a major version (ie begins 1. but not 1.1) or is all caps and unique

## Installation:

- 1. Install node 13.2 or higher on your machine
- 2. cd to the root directory of the project (where the package-lock.json folder is found)
- 3. run npm install
- 4. cd to the solution directory
- 5. run a command

## Testing

- 1. run npm run test to run the tests

Tests are written in jest and comprise unit tests of the readers.js logic. If I had more time I would write more tests for other files and for other commands in the solution.

## Arcitecture

The solution is written in a way to allow for easy extension of the tool. I have seperated the logic of the importer, exporter and the reader into class components which will allow for easy extension of logic.

## Aditional Work

Aditional work to improve this tool would be:

- 1. Testing improvements to test all the tools (the import and export)
- 2. Perhaps one could provide a simple user interface (rather than using the command line)
- 3. Perhaps it might be better to transpile my code using babel instead of requiring node 13.2 or higher
- 4. I wondered if the logic to work out headers could be improved
