<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">LANDING EVENT</h3>

  <p align="center">
    Landing page for any event
    <br />
    <a href="https://agitated-mahavira-3e6dcf.netlify.app/"><strong>View DEMO »</strong></a>
    <br />
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li><a href="#installation">Installation</a></li>
        <li><a href="#run-with-docker">Run with Docker</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About the Project

![]()
[![Landing Event Screen Shot](https://i.ibb.co/tPX3ss2/SOFTWARE-XXI-1.png)](https://agitated-mahavira-3e6dcf.netlify.app)

Landing event is a landing page which can be used for any conference, event, webinar, seminar or webinar.

Sections:
* Hero
* About
* Extra Info
* Schedule
* Memory
* Speakers (with profile)
* Tickets
* Location (with Google map)
* Newsletter
* Sponsors
* Hurry
* Footer

### Built With

* [ReactJS](https://es.reactjs.org/)
* [TypeScript](https://github.com/microsoft/TypeScript)
* [Styled Components](https://github.com/styled-components/styled-components)


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. You will need a [Maps JavaScript API KEY from Google](https://developers.google.com/maps/documentation/javascript/overview), here is a [tutorial](https://www.youtube.com/watch?v=eq7FV9GRpzI) that maybe help you out. Spoiler alert! you will need a credit card but is still "free".
2. Clone the repo
   ```sh
   git clone https://github.com/matias-rivera/landing-event.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API and the coordinates in `.env.example`, after that change the name to `.env`
   ```sh
   REACT_APP_MAP_LAT= 'LATITUDE'
   REACT_APP_MAP_LNG= 'LONGITUDE'
   REACT_APP_MAP_API= 'API KEY'
   ```
5. RUN 
   ```sh
   npm start
   ```
   
### Run with Docker

1. Install [Docker](https://www.docker.com/). More information [here](https://docs.docker.com/desktop/windows/install/).
2. Clone the repo
    ```sh
    git clone https://github.com/matias-rivera/landing-event.git
    ```
3. Run Docker compose
    ```sh
    docker-compose up --build
    ```
4. It should start at "localhost:3000".

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Matías Rivera - jnmatiasrivera@gmail.com

Project Link: [https://github.com/matias-rivera/landing-event](https://github.com/matias-rivera/landing-event)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [google-map-react](https://github.com/google-map-react/google-map-react)
* [react-icons](https://react-icons.github.io/react-icons/)
* [react-scroll](https://github.com/fisshy/react-scroll)
* [font awesome](https://fontawesome.com)
* [create-react-app](https://github.com/facebook/create-react-app)
