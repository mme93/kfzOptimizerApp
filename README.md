# kfzOptimizerApp

Change package.json 

from: devDependencies to: dependencies

"@angular/compiler": "~12.1.1",
"@angular/compiler-cli": "~12.1.1",
"typescript": "~4.2.4"

add to scripts:

"preinstall": "npm install -g @angular/cli",
"postinstall": "ng build --aot --configuration production"

change in scripts start to:

"start": "node server.js",

add engine:

"engine": {
        "node": "14.15.1",
        "npm": "6.14.8"
    }
        
Add server.js File for Heroku Deployment
