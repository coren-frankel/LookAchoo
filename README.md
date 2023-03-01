# *LookAchoo*
> LookAchoo is a Geolocation Sneeze Context OSS app constructed in MERN stack. Through a chain of public API calls it identifies the users' IP address and by IP Geolocation then augments real-time weather conditions, air quality, and COVID-19 statical data to inform users about local factors and how to respond to their discomfort. 
> Live site [_here_](https://look-achoo.vercel.app/). <!-- Once a live deployment is available, include the link here. -->
## Table of Contents
- [*LookAchoo*](#lookachoo)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
    - [Development \& Runtime:](#development--runtime)
    - [CI/CD Pipeline:](#cicd-pipeline)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Project Status](#project-status)
  - [A Joke](#a-joke)
  - [Room for Improvement](#room-for-improvement)
  - [Acknowledgements](#acknowledgements)
  - [Contact](#contact)
<!-- * [License](#license) -->

<!-- PLACE BETWEEN SCREENSHOTS AND PROJECT STATUS WHEN IMPLEMENTING
* [Setup](#setup)
* [Usage](#usage)
-->

## General Information
<!--
- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- Why did you undertake it?
-->
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->
**MOVE ALONG** This is a draft. Documentation in progress...
LookAchoo is a bad pun. But the name draws on a simple verb and a multi-lingual onomatopoeia; focusing on the interwoven relationships like -->  
Observer/Discover/Understand/Mitigate <--> Sneeze/Involuntary Action/Other Discomfort



## Technologies Used
### Development & Runtime:
+ Javascript ES6 [Node.js](https://nodejs.org/en/) v16.17.0
  + [React.js](https://reactjs.org/) v18.2.0
    + [Material UI](https://mui.com/core/) v5.10.6
  + [Express.js](https://expressjs.com/) v4.18.1
    + [CORS](https://expressjs.com/en/resources/middleware/cors.html) v2.8.5
    + [Mongoose](https://mongoosejs.com/)* v6.6.5
  + [Axios](https://axios-http.com/docs/intro)* v0.27.2
  + [dotenv](https://www.npmjs.com/package/dotenv)* v16.0.3
  + [Moment.js](https://momentjs.com/docs/)*† v2.29.4
+ [MongoDB](https://www.mongodb.com/) v6.0
+ APIs:
  - [ipify](https://www.ipify.org/) (IP address identifier)
  - [WeatherAPI.com](https://rapidapi.com/weatherapi/api/weatherapi-com/)** (IP Geolocation)
  - [VACCOVID](https://rapidapi.com/vaccovidlive-vaccovidlive-default/api/vaccovid-coronavirus-vaccine-and-treatment-tracker/)** (Covid Statistics by country)
  - [Tomorrow.io](https://www.tomorrow.io/) (Weather conditions & air quality)
  - [Flagpedia](https://flagpedia.net) (Flag SVG CDN)
  - [Google Fonts](https://fonts.google.com/) (Font family: Nova Round)
  
### CI/CD Pipeline:
- [Vercel](https://vercel.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Google Cloud Platform](https://cloud.google.com/)

>
>\* via [npm](https://www.npmjs.com/) v8.15.0  
>** via [RapidAPI](https://rapidapi.com/hub)  
>† legacy software  


## Features
<!-- List the ready features here: -->
- IP Geolocation upon acknowledgment of innocence in its use
- Conditional and dynamic rendering of images, text, & component styles
- Random assignment of background video sources and **Sniffle-Blurbs** openers
- Random retrieval of up to 10 **Sniffle-Blurbs**™ from the database (Invoked a "time-to-live" ☠️ ([TTL](https://www.mongodb.com/docs/manual/tutorial/expire-data/)) feature to the collection, configurated to purge data entries that have surpassed 24 hours)
- Puns and other inorganic attempts at word-play and wit
- Material Icon "Tooltip" components wrap the carousel of **Sniffle-Blurbs**, revealing hidden plain-text quantified condition levels, which are otherwise highlighted with color by severity (None: Grey, and from Low: Bright Yellow to High: Deep Red)
- Anonymity, no ads, simple yet vibrant User Interface built with the finest MUI components that a beginner can tinker with first...
- Synthesization of materials and links to resources regarding health science educates the user and rationalizes LookAchoo's focus points
- I ain't finished, heck. Reach out if you want to fork the repo and refactor/contribute/collaborate!


## Screenshots
<!-- If you have screenshots, gifs, video demos you'd like to share, include them here. -->
<p>
<img src="./assets/lademo1.gif" alt="Look Achoo demo use gif 1" style="height: 400px;">
<img src="./assets/lademo2.gif" alt="Look Achoo demo use gif 2" style="height: 400px;">
<img src="./assets/lademo3.gif" alt="Look Achoo demo use gif 3" style="height: 400px;">
</p>


<!--
## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?
Proceed to describe how to install / setup one's local environment / get started with the project.
## Usage
How does one go about using it?
Provide various use cases and code examples here.
`write-your-code-here`
-->
## Project Status
Project is: 🏗️ _in progress_

Active Contributors: 
![GitHub Contributors Image](https://contrib.rocks/image?repo=coren-frankel/LookAchoo)[Coren Frankel](https://github.com/coren-frankel)
<!-- _in progress_ / _complete_ / _no longer being worked on_. If you are no longer working on it, provide reasons why. -->

## A Joke
![Jokes Card](https://readme-jokes.vercel.app/api)


## Room for Improvement
<!-- Include areas you believe need improvement / could be improved. Also add TODOs for future development. -->

Room for improvement:
- The experience should not be limited to unreliable IP Geolocation, open up to form search for city, state/region, and perhpas Zipcode. One challenge is to maintain/improve the current consistency of the user experience globally due to the inconsistencies in location data entries between services. That's open source **sucka**!
- The early vision for LookAchoo included mold and dust "ratings" or statistics quantified by weather and climate conditions analysis or clever math. 
- Open LookAchoo up to "sniffle forecasts" by exploiting more additional endpoints with its collection of APIs.
- In it's deployment to vercel the client(frontend) and server(backend) are entangled--as the client is anchored at the root of the project directory and the server anchor is therefore nested in the client deployment. (easy fix 🤞)

To do:
- "Deintegrate" server and client deployments (Only nested in github vercel integration)
- Refactor for accessibility
- Build component(s) that evaluates and qualifies coditions for dust & mold spore displacement
- Potentially open up to forecasts (Some APIs would require upgrade to 💰paid🙄 subscriptions)


## Acknowledgements
- Thanks [ErikvanErp](https://github.com/ErikvanErp) and [czmud](https://github.com/czmud) who each helped me catch early bugs and edge cases that allowed me to learn faster. 
- Thanks [Miguel Caraballo](https://github.com/CaraballoMiguel) for staying up late with me pair programming, validating feature commits, and sharing outer-perspective for the user experience.
- Thanks [dav1dmoore](https://github.com/dav1dmoore) for building me up, buttercup. (Just to let me down, and mess me around)

## Contact 
[Coren Frankel](https://linkedin.com/in/coren-frankel): feel free to [email me](mailto:coren.frankel@gmail.com)!

<!-- Optional -->
<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->

<!-- You don't have to include all sections - just the one's relevant to your project -->
