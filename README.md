# Secret Camp Sites Capstone 
This is a members only application for people who crave seclusion. Members can post their favorite secret camping sites, leave reviews on sites they have visited, and save sites to their account where the can leave themselves notes. 


## 1. Working Prototype 
You can access a working prototype of the React app here: https:// and Node app here: https://


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

####  Home Page
* Home Page (Importance - High) (Est: 1h)
* as a visitor
* I want to be able to preview the content of the app
* to research secret camping places to visit

####  List Of Sites Page
* List of Site Page (Importance - High) (Est: 4h)
* as a visitor
* I want to learn about all the available sites to visit per state
* so I can decide if I want to visit

<!-- #### Specific Sites Page
* Specific Sites (Importance - High) (Est: 2h)
* as a visitor
* I want to learn about an abandoned site 
* so I can decide if I want to visit -->

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



## 3. Functionality 
The app's functionality includes:
* Every User has the ability to create an account
* A registered user has the ability to log in to their account
* A registered user has the ability to save camping sites to their account
* A registered user has the ability to add reviews to camping sites

## 4. Technology 
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

### 5. Wireframes (todo later)
Landing Page
![Landing Page]()

Sign Up Page
![Sign Up Page]()

Log In Page
![Log InPage]()

Home Page
![Home Page]()

List Page
![About Page]()

Site Page
![How To Page]()

Account Page
![Account Page]()

## 6. Front-end Structure - React Components Map (todo later)
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __Landing.js__ (stateful) 
        * __Login.js__ (stateful) - user table (user name, full name, password)
        * __SignUp.js__ (stateful) - user table (user name, full name, password)
        * __Home.js__ (stateful) - trigger-point table (user_id, image,   title, content, date-created)
        * __About.js__ (stateless) 
        * __HowTo.js__ (stateless) 
        * __TriggerPoint.js__ (stateful) - trigger-points-user table (user_id, image, title, content, date-created)
        * __PastTreatments.js__ (stateful) - notes table (trigger_point_id, title, content, date-created)
        * __Navbar.js__ (stateful) - user table
        * __Noteform.js__ (stateful) - notes table (trigger_point_id, title, content, date-created)

<!-- all interactions are sta -->

## 7. Back-end Structure - Business Objects (todo later)
*  Users (database table)
    * id (auto-generated)
    * username (email validation)
    <!-- * full name (first & last name) -->
    * password (at least 8 chars, at least one alpha and a special character validation)

*  Locations (database table)
    * id (auto-generated)
    * user_id (foreign key - users table(id))
    * image (image)
    * title (note title)
    * content (note text)
    * keyword (keyword for maps)
    * is_public (boolean default 0) 
    <!-- if public 1 is public if 0 private // use the word 'is' so you know when the bool is representing. Can filter by 'is_public = 1'-->

*  Ratings (database table)
    * id (auto-generated)
    * location_id (foreign key to match locations table (id))
    * stars (integer between 1 & 5)

*  Comments (database table)
    * id (auto-generated)
    * location_id (foreign key to match locations table (id))
    * title (note title)
    * content (note text)

## 8. API Documentation (todo later)
/api
├── /auth    
│   └── POST
│       ├── /login
├── /users
│   └── GET /
│   └── GET /:id
├── /notes
│   └── GET
│       ├── /
│       ├── /:tp_id
│   └── POST
│       ├── /:tp_id
├── /tp
│   └── GET
│       ├── /user/trigger-points
│       ├── /:tp_id 
├── /tpusers
│   └── GET
│       ├── /
│       ├── /:tp_id
│   └── POST
│       ├── /

## Screenshots (todo later)
Landing Page
![Landing Page]()

Sign Up Page
![Sign Up Page]()

Log In Page
![Log InPage]()

Home Page
![Home Page]()

List Page
![About Page]()

Site Page
![How To Page]()

Account Page
![Account Page]()




## Development Roadmap  (todo later)
This is v1.0 of the app, but future enhancements are expected to include:
* Ability to delete saved notes
* Ability to edit saved notes 

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