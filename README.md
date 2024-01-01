# MultiSearch
#### Video Demo:  https://www.youtube.com/watch?v=sgpaZU98ZzA
#### Description:

- MultiSearch is an all-in-one search engine.
- It can get troublesome opening many websites to look for the same thing.
- Let MultiSearch do that work for you.
- Just type the name of any of the supported websites and type whatever you want to search.
- You will be presented with the desired results instantly.
- Supported Websites:
    - [Bing](https://www.bing.com/)
    - [Flipkart](https://www.flipkart.com/)
    - [Google](https://www.google.com/)
    - [Google Docs](https://docs.google.com/)
    - [Google Sheets](https://sheets.google.com/)
    - [Google Slides](https://slides.google.com/)
    - [Linkedin](https://www.linkedin.com)
    - [Myntra](https://www.myntra.com/)
    - [Netflix](https://www.netflix.com/)
    - [Reddit](https://www.reddit.com/)
    - [Spotify](https://open.spotify.com/)
    - [Wikipedia](https://en.wikipedia.org/)
    - [Yahoo!](https://www.yahoo.com/)
    - [Youtube](https://www.youtube.com/)

- This Extension uses [TailwindCSS](https://tailwindcss.com/)
- Major files of this extension:
    - [src/index.html](./src/index.html)
    Contains the HTML structure of the website, combined with Tailwind classes for easy styling. The logo of MultiSearch changes as user types the name of a supported website. An input tag takes the search query and the name of the website, which is [Google](https://www.google.com/) by default. Hitting Enter key or clicking Search button sends data over to Javascript using eventListeners.
    - [index.js](./src/index.js)
    This file takes care of the searching. Every time there is a change in input text, the logochange() function compares the first word in the input query to a website name. If the name is supported, the logo changes, and the website logo appears in the magnifying glass. As the search button is activated, the search() function joins the input text to the search url of the website, [Google](https://www.google.com/) by default. The data is stored in three Objects, which map the website name to their logos, their search urls, and the character(s) they use to join their search queries.
    - [media](./media)
    This folder contains all the logos and the extension icon. All logos have been edited by me, [Apoorv/Cheesequake](https://github.com/cheesequake)
    - [input.css](./src/input.css)
    This file imports a Google Font, and also imports Tailwind CSS directives.
    - [/index.html](./index.html)
    This file uses a <meta> tag to redirect to [src/index.html](./src/index.html)
    - [tailwind.config.js](./tailwind.config.js)
    This file is the config file for Tailwind. I have defined the primary colour of the project in this file, and called the Google Font imported in the css file.
    - [manifest.json]
    This file enables the creation of a Chrome Extension.
    - [dist](./dist)
    This folder contains the output.css file, which is a Tailwind component, predefined by TailwindCSS.
