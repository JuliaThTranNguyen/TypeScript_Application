# Welcome to TypeScipt 101 basic course
-------------------------------------------------
## Introduction to TypeScript

### What is TypeScript ? Why do we need it? How does it differ from JavaScript?
TypeScript is a programming language created at Microsoft to address shortcomings of JavaScript.

You can think of it like JavaScript sibling.

Now , technically speaking TypeScript is a programming language built on top of JavaScript , so any JavaScript file is a valid TypeSCript file.

![Screenshot from 2023-03-04 16-02-01](https://user-images.githubusercontent.com/49017322/222917330-8686449e-4a74-4cfc-88eb-f7e0bbd0349a.png)


The mosty important feature that typeScript providing is 

![Screenshot from 2023-03-04 14-49-23](https://user-images.githubusercontent.com/49017322/222917358-d5b69c8b-2651-4ecd-912a-3921c9a0c7ed.png)


TypeScript is essentially just JavaSCript with the Type Checking. 
With TypeScript we explicitly set the type of our variables upon declaration just like how we code in statically typed languages. 

![Screenshot from 2023-03-04 14-56-29](https://user-images.githubusercontent.com/49017322/222917386-f167f82b-88b9-43db-8277-5a3e6aa71022.png)


Then we pass our code to the TypeSCript compiler & the compiler will tell us if we are doing somethign wrong , so we can catch the error at compiler time, we do not actualy need to run our application to find bugs.

But TypeScript is also more than just type checking.
Most code editors this days have great support for TypeScript, so they can detect the type of variable and offer productivity features like :

![Screenshot from 2023-03-04 18-28-44](https://user-images.githubusercontent.com/49017322/222917474-5cc03852-01c5-4e81-969c-931edf1787d7.png)

Moreover, TypeScript also provide us with the new features help us write code cleaner and more concise code .
Now, over time this features get added to JavaScript. However, because we have multi browsers and runtime environment for executing the JavaSCript code.
It will take sometimes until all of this new features are all implemented into this browsers.
So , until then , by coding in TypeSCript we can we the features for furture JavaSCript.

SO , in a nutshell , TypeSCript is built on top of a JavaSCript. We can use it like wherever we use JavaSCript, even in the FE or BE . So everything we can do with JavaSCript we can aalso do with TypeScript.

Let take a look about the drawebacks of TypeScript:

![Screenshot from 2023-03-04 15-08-58](https://user-images.githubusercontent.com/49017322/222917496-93f3f3bd-ee76-4de5-bb3b-c002e9bb51e1.png)


At the moment the browser does not understand TypeSCript, therefore wwe need to compiled it into JavaSCript before actually running the application.

![Screenshot from 2023-03-04 15-09-03](https://user-images.githubusercontent.com/49017322/222917507-1e36791c-8826-491b-ba1d-cfc8c2f24c65.png)

TypeSCript helps developers reduce the time and effort of error detection.

![Screenshot from 2023-03-04 15-08-44](https://user-images.githubusercontent.com/49017322/222917513-d05bcd4a-d730-4562-86d0-5691c7da615c.png)




### Settin gup the environment:

#### NodeJS installation:
[General link](https://kinsta.com/blog/how-to-install-node-js/)

#### TypeScript installtion in global mode :
[General link](https://www.typescriptlang.org/download)



### How to configure the TypeSCript Compiler:

#### Creating a configuration file for TypeSCript configurator:
On VSCode terminal, we run:

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

#### Execute the JavaSCript code 
Run: 

```
node dist/index.js
```



### Debugging TypeScript Applications: "Hello World"
WHEN something goes wrong and our code doesn't work as it should.
Then we can run it line by line and establish exactly what happens under the hood.
To do this, we can :

*  Navigate to the "tscon fig.json" file 
*  Enablethis mode:  ""sourceMap" : "true"" 
<i>This will generate a "index.js.map" to show us how each lines of our TypeScript has been generated into JavaScript.</i>


Moreover, we can add some logic to the code and make a break point, to execute our code line by line.
After making the break point, we can go to the "Debug panel" in VScode.
Then click on "create a launch.json file". From the drop down board , select "NodeJS" for debugging mode.

Edit the "launch.json" file with this new line & placed it under the "program" property.

```
"preLaunchTask": "tsc: build - tsconfig.json",
```
`
Then run to see debug.



### Built in types:
Let's take a look at this picture below:

Pic 7 javasc & type s tables of comparison

