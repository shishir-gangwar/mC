## machine coding problems

### To create a new project :-

      1)  npm init                        // inside project folder
      2)  npm install --save-dev mocha    // install mocha library
      3)  to run test cases, add 
      
                  "scripts": {
                    "test": "mocha"
                   }
                   
          to package.json 
      4)  npm test                        // run test cases

Link for sample test cases :- https://mochajs.org/

                  Problem :
                  require() is not a feature that is built into the browser. It is a specific feature of node.js, not of a browser. So, when you try to have the browser run your script, it does not have require()
                  Solution :
                  To do so you can use tools like browserify or webpack. These tools are module bundler. And their main purpose is to bundle JavaScript files for usage in a browser. I'll give an example of using browserify as I found it easier.
                  Steps :
                  a) Install browserify using
                  $ npm install -g browserify
                  b) Now just use the browserify command to build a bundle starting at main.js :
                  $ browserify main.js > bundle.js
                  c) All of the modules that main.js needs are included in the bundle.js
                  To use this bundle, just toss a
                  <script src="bundle.js"></script> into your html!
