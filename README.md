# father-thoughts-app
A book landing page website where users can sign up, sign in to a blog type website 

# MERN w/ GraphQL Boilerplate
MERN stack boiler plate with Sign Up / Login / Logout functionality using GraphQL, Apollo Server, and Apollo Client. Can Sign Up / Login and be taken to a Dashboard where user can logout using functionality set up in client/utils/auth.js. No styling, just basic Sign Up / Login / Logout functionality. Also uses React Router.

# Instructions:
Follow along below to install the latest dependencies, or npm install in the root directory for the versions included in the current package.json files.

# Client Folder:
delete the package-lock.json
in the package.json, delete all dependencies
navigate to the client folder
run the following command:

 npm install @apollo/client graphql jwt-decode react react-dom react-router-dom react-scripts web-vitals @testing-library/jest-dom @testing-library/react @testing-library/user-event

while in the client folder, run npm start to make sure there are no errors

# Server Folder:
delete the package-lock.json
in the package.json, delete all dependencies
navigate to the server folder
run the following command:

npm install apollo-server-express bcrypt express graphql jsonwebtoken mongoose dotenv

in the connection.js (server/config/connection.js) make sure to change the name of the database to the name of your corresponding database

navigate to server folder, run npm start to make sure there are no errors

Root Directory:
install concurrently as a dev dependency:

npm i concurrently -D

# Side Notes:

you'll eventually want to change the favicon.ico in the client/public folder (this is the icon shown on the tab of the browser)
you'll want to change the title in the client/public/index.html from "MERN" to the name of your application
you'll also want to change the "name" in the root package.json from "mern-boiler" to the name of your application
if you are having issues access the Apollo Sandbox, inside server/server.js line 25, remove the "*" after the "/" - from app.get('/*') to app.get('/')

# Final Check:

in the root directory, run npm run develop

# Screenshots

![Screenshot 2023-04-25 161754](https://user-images.githubusercontent.com/109435666/234394965-8500bf6f-6058-4a8e-9c62-fb9c53636400.png)

![Screenshot 2023-04-25 161843](https://user-images.githubusercontent.com/109435666/234395042-90be07ab-3f04-481d-bb0c-785367432085.png)

![Screenshot 2023-04-25 161942](https://user-images.githubusercontent.com/109435666/234395065-8eff36a5-6b72-4d7d-8064-440525f3f7db.png)

![Screenshot 2023-04-25 161957](https://user-images.githubusercontent.com/109435666/234395093-0aff5d8b-b3d3-4423-8d5f-2e403dedaf5b.png)




