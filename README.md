# beer-locker-ng-papa 
The REST API for this project is based upon a tutorial writen by [Scott Smith][rest-tutorial], tweaked a bit to fit with what I needed.

After completing the REST API, I decided to put an Angular driven front end on top of it.

As a means of trying to keep the Angular side of things tidy I have tried to adhere to [John Papas style guide], using his [modular project] as a basis for the structure. 

You can see a hosted version of the [beer locker here][heroku-app], it is hosted on a single dyno on heroku so you may need to give it slight nudge to wake it up. 

#### Caveat
This project is experimental work and is therefore not fully browser tested. Please view [app][heroku-app] in the current version of Firefox, preferably on OSX.

-##### The following instructions assume you have [node.js], [mongoDB] & [nodemon] installed on your machine.

##### After cloning the repo, open the terminal and: 

1. Start up mongo by typing - ``mongod``
2. Navigate into the beer locker root - ``cd wherever-you-cloned-it-to/beer-locker-ng-papa``
3. Run the server - ``nodemon server.js``
4. Run Gulp to complie the CSS - ``gulp``
5. Hit localhost - ``http://localhost:3333/`` 
6. Add some beers 


[John Papas style guide]:https://github.com/johnpapa/angularjs-styleguide
[modular project]:https://github.com/johnpapa/ng-demos/tree/master/modular
[rest-tutorial]:http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/
[node.js]:http://nodejs.org/
[mongoDB]:https://www.mongodb.org/
[nodemon]:http://nodemon.io/
[heroku-app]: https://beer-locker-ng-papa.herokuapp.com/#/beerlist