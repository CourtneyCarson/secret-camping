# Secret Camp Sites Capstone 
This is a members only application for people who crave seclusion. Members can post their favorite secret camping sites,leave ratings, and save sites to their account where they can leave themselves notes. 


## 1. Working Prototype 
You can access a working prototype of the React app here: https://secret-camping.vercel.app/ and Node app here: https://secret-camping.herokuapp.com/


## 2. User Stories 
This app is for two types of users: a visitor and a logged-in user


#### Landing Page
*Landing Page (Importance - High) (Est: 1h)
* as a visitor
* I want to understand what I can do with this app so I can decide if I want to use it

####  Log In Page
*Login Page (Importance - High) (Est: 4h)
* as a returning registered user
* I want to enter my username and password
* so I can have access to my account, and use this app

####  Sign Up Page
*Sign Up Page (Importance - High) (Est: 4h)
* as a visitor
* I want to register to use this app  
* so I can create an account

####  List Of Sites Page
* List of Site Page (Importance - High) (Est: 4h)
* as a visitor
* I want to learn about all the available sites to visit per state
* so I can decide if I want to visit

#### Star Ratings
* Star Ratings (Importance - Medium) (Est: 1h)
* as a visiting user
* I want to rate places I've visited
* so I can help others decide on places to visit

#### Account Page
* Account Page (Importance - High) (Est: 4h)
* as a logged in user
* I want to see places I've saved to my account
* I want to add comments to places I've saved to my account
* so I can easily find the places I'm interested in

#### Upload New Site
* Upload New Site (Importance - High) (Est: 4h)
* as a logged in user
* I want to add places I've been 
* I want to add images, content, and a location
* so I can share locations I've been with other users

#### Search Sites
* Search Sites (Importance - High) (Est: 2h)
* as a logged in user
* I want to search places by location
* so I can find locations I'm interested in going to



## 3. Functionality 
The app's functionality includes:
* Every User has the ability to create an account
* A registered user has the ability to log in to their account
* A registered user has the ability to save camping sites to their  account
* A registered user has the ability to add ratings to camping sites
* A registered user has the ability to add new camping sites
* A registered user has the ability to add images and content when adding new camping sites

## 4. Technology 
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver


## 5. Screenshots
Landing Page
![Landing Page](/github-images/screenshots/landing-page.png)

Sign Up Page
![Sign Up Page](/github-images/screenshots/signup-page.png)

Log In Page
![Log InPage](/github-images/screenshots/login-page.png)

Site List Page
![Home Page](/github-images/screenshots/site-list.png)

Account Page
![Account Page](/github-images/screenshots/account-page.png)


### 6. Wireframes 
Landing Page
![Landing Page](/github-images/wireframes/account.png)

Sign Up Page
![Sign Up Page](/github-images/wireframes/sign-up.png)

Log In Page
![Log InPage](/github-images/wireframes/log-in.png)

Site List Page
![Home Page](/github-images/wireframes/site-list.png)

Account Page
![About Page](/github-images/wireframes/account.png)


## 7. Front-end Structure - React Components Map 
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __Landing.js__ (stateless) 
        * __Login.js__ (stateful) - user table 
        * __SignUp.js__ (stateful) - user table 
        * __SiteList.js__ (stateful) - locations table, user_locations table, ratings table
        * __Account.js__ (stateful) - user_locations table, comments table
        * __Search.js__ (stateful) - locations table
        * __Navbar.js__ (stateful) - user table
        * __Noteform.js__ (stateful) - comments table 
        * __StarRating.js__ (stateful) - ratings table 


## 8. Back-end Structure - Business Objects 
*  Users (database table)
    * id (auto-generated)
    * email (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)

*  Locations (database table)
    * id (auto-generated)
    * user_id (foreign key - users table(id))
    * image (image)
    * title (note title)
    * content (note text)
    * keyword (keyword for maps)
    * is_public (boolean default 0) 

*  Ratings (database table)
    * id (auto-generated)
    * user_id (foreign key to match users table (id))
    * location_id (foreign key to match locations table (id))
    * stars (integer between 1 & 5)

*  User_Locations (database table)
    * id (auto-generated)
    * user_id (foreign key to match users table (id))
    * location_id (foreign key to match locations table (id))

*  Comments (database table)
    * id (auto-generated)
    * user_location_id (foreign key to match locations table (id))
    * title (note title)
    * content (note text)
    *author_id ((foreign key to match users table (id)))


## 8. API Documentation 
├── /auth    
│   └── POST
│       ├── /login
├── /users
│   └── GET /
│       ├── /
│       ├── /:user_id
│   └── POST /
│       ├── /
├── /comments
│   └── GET
│       ├── /
│       ├── /:location_id
│   └── POST
│       ├── /:location_id
│   └── DELETE
│       ├── /:location_id
├── /location
│   └── GET
│       ├── /
│       ├── /keyword/:searchTerm
│   └── POST
│       ├── /     
├── /ratings
│   └── GET
│       ├── /
│       ├── /:location_id
│   └── POST
│       ├── /
├── /user_locations
│   └── GET
│       ├── /
│       ├── /user
│       ├── /:loc_id
│   └── POST
│       ├── /



## Development Roadmap  
This is v1.0 of the app, but future enhancements are expected to include:
* Ability to edit sites user has posted
* Ablity to delete sites user has posted
* Ability to edit saved comments
* Ability to delete sites user has saved to account

## How to run it 
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test