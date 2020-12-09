//npm i @sanity/cli -g (if needed)

//npx create-react-app someName

//run: sanity login
//run: sanity init - answer questions, i named sanityTest and used blog
//cd into new folder you named when asked(this is data folder)
//run: sanity start

//run: npm i @sanity/client

//in src, create a file called client.js, this isused to talk to sanity
//in created folder > sanity.json, copy the projectID and paste into client.js
//or go: https://manage.sanity.io/ > login > select project > projectID at top

//allowing url to use data:
//go to: https://manage.sanity.io/ > settings > API > Add new origin > http://localhost:3000/ (for react local)


//setup github (optional)
//login to github site, create new repo, name repo (skip other options)
//notice we have 5k changes! We dont want all those..
//go into .gitignore, remove the /before node_modules
//you should see these when you created a repo:
//git init
//git commit -m "first commit"
//git branch -M main
//git remote add origin https://github.com/BenjaDotMin/tailwind-sanity.git  -(will change)
//git push -u origin main
//git status (check whats staged)
//git add . (add all)