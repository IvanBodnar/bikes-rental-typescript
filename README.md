#### Usage
- Clone the repository
- Cd into the cloned folder
- Install the required packages:
``` bash
$ npm install
```

#### Tests execution
- Run tests:
``` bash
$ npm test
```
- Run coverage:
``` bash
$ npm run coverage
```

#### Extras
The .ts files can be transpiled to .js using:
``` bash
$ npm run build
```
A build directory will be created with the .js files inside.

#### Project Description
The project's logic is similar to the one made in Python, except 
for the fact that a CostBuilder class was created, in order to
implement the logic necessary to manage the cost construction on that
class.
I also tried to take advantage of the typing system provided by TypeScript, using 
interfaces and enums to strong type every aspect of the program.
