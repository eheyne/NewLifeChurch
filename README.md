# VHT Dashboard

## Installation

After pulling the project from Github, you will need to setup your local
environment to work with Node, Bower, and Grunt. Depending on your system,
install Node.

Bower and Grunt should be installed as global packages:

    npm install -g grunt-cli
    npm install -g bower

Finally, install dependencies with the following commands:

    npm install
    bower install


## Development

Running `grunt` will build assets and copy them to the dist folder so that they can be distributed.

After running `grunt` you can run `node index.js`, which will serve the files from the `dist` folder with a static web server.

Running `npm run serve` will run the default `grunt` task and serve the files from the `dist` folder with a static web server.


### JSHint

This project is setup to use JSHint to make sure JavaScript files follow the
same convention. It is recommended to install a plugin that will automatically
lint your files as you are developing.

You can lint the project files with `grunt jshint`.


### References

For help with this project, here are some helpful websites:

[Backbone](http://backbonejs.org/)

[Underscore](http://underscorejs.org/)
