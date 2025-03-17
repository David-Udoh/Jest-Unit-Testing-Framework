Jest encounters non-standard JavaScript syntax like ES6 imports (import) / Exports. Configure Jest to transform it using Babel.  

Install Babel using project folder terminal: 

npm install --save-dev babel-jest @babel/core @babel/preset-env 

 

Create a file named ‘.babelrc’ in your project and add/paste configuration: 

{ 

  "presets": ["@babel/preset-env"] 

} 

 

Add a script in your package.json: 

"scripts": { 

  "build": "babel src -d dist" 

} 

Note: Add “build”: “babel src -d dist" in “scripts” taking this format. 

"scripts": { 

"test": "jest", 

"build": "babel src -d dist" 

This script tells Babel to transpile JavaScript files from the src directory and output   the compiled files in the dist directory. 

Create a src folder and move both multiplication.js and multiplication.test.js into it. 

 

Install a Babel CLI as a development dependency: 

npm install --save-dev @babel/cli 

 

Run: 
npm run build 

 

Run babel locally: 

npx babel src -d dist 

 

You can always choose to run globally if problem persists: 

npm install -g @babel/cli 

 

Verify if Babel is properly installed: 

npx babel --version 

 

Reinstall dependencies: 

npm install 

 

Clear jest cache: 

jest --clearCache 
