# This is a simple Hello WOrld application with TypeSCript.
------------------------------------------------
## Setting up the application:
In your terminal:

Make a new empty directory called "Hello world".

Navigate into that folder and run

```
touch index.ts
```
<i>This step will generate a "index.ts" file.</i>

## How to run it:
Open your VSCode terminal , run these:
Firstly, compile the "index.ts":

```
tsc index.ts
```
<i>This step will generate a "index.js" file.</i>


Then create a consiguration file:

```
tsc --init
```

<i>This will create a configuration file called "tsconfig.json"</i>

You can navigate to that "tsconfig.json" & select some of your options & uncomment it to enable.
Then to make sure the new changes has been saved to our application , run this :

```
tsc
```
<i>This will compile all of TypeScript file in this project</i>
According to this "Hello World " example, we will have an extra "dist/index.js" which has hold the compiled file of "src/index.ts". 

## Add some new logic to index.ts to enable debug mode
* Enable "sourceMap" mode in "tsconfig.json"
* Make the "launch.json", and add in new option to run with :
    * ""preLaunchTask": "tsc: build - tsconfig.json","

* Then run to see debug.

## Execute the JavaSCript code 
Run: 

```
node dist/index.js
```
