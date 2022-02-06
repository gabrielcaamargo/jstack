import { sayHello } from './sayHello.js'

sayHello('Gabriel')

//To use ESModules natively, we have 2 ways: switch the files extension to .mjs and specify in the import the file extension. Or, in the file package.json, code a flag called: type, and then pass "module" instead of commonjs