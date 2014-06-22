#Sassmonster

This is an experimental repository that I'm using to try various front-end tools and techniques. The current repo is based on [Sass](http://sass-lang.com/install) (currently without Compass), [Bower](http://bower.io/), [Grunt](http://gruntjs.com/), and the [Singularity](http://singularity.gs/) grid system.


##Requirements

Sass depends on [Ruby](https://www.ruby-lang.org/en/) - and so you'll need a working Ruby and Rubygems installation. Bower and Grunt need [Node.js](http://nodejs.org/) and so you'll also need a working Node.js and NPM installation.

##Installation

### Step 1: Download the application source

Either clone this git repository...

	git clone git@github.com:58bits/sassmonster.git myproject

Or download the master branch archive zip file.

	https://github.com/58bits/sassmonster/archive/master.zip

### Step 2: Install dependencies

I'll publish updated instructions for Ruby and Node.js - for those just getting started with either. For now, and assuming you have working Ruby and Node.js installations, you'll need to do the following.

Install the Ruby gem (Sass) dependencies...

    bundle install

Install the Node.js dependencies...

    npm install

Install the Bower modules...

    bower install


##Usage

If all the required modules and dependencies are installed, you should be able to start the development environment by running `grunt` from the command line. This should launch a Node.js connect Web server, and your default browser pointing to the local site. If you have the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-) installed, (or are emitting the JavaScript tag required) then you should see changes loaded automatically when you update Sass stylesheets.

To deploy the project run `grunt deploy` (update the server deployment settings in Gruntfile.js first)

##Screenshot

[![Home](http://downloads.58bits.com/sassmonster_s.png "Home page")](http://downloads.58bits.com/sassmonster.png)


## License

GNU AFFERO GENERAL PUBLIC LICENSE

