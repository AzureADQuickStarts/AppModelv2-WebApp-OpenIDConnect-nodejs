#Azure Active Directory OIDC Web Sample

This Node.js app will give you with a quick and easy way to set up a Web application in node.js with Express usind OpenID Connect. The sample server included in the download are designed to run on any platform.

We've released all of the source code for this example in GitHub under an MIT license, so feel free to clone (or even better, fork!) and provide feedback on the forums.


## Quick Start

Getting started with the sample is easy. It is configured to run out of the box with minimal setup.

### Step 1: Register an Azure AD Tenant

To use this sample you will need a Windows Azure Active Directory Tenant. If you're not sure what a tenant is or how you would get one, read [What is an Azure AD tenant](http://technet.microsoft.com/library/jj573650.aspx)? or [Sign up for Azure as an organization](http://azure.microsoft.com/en-us/documentation/articles/sign-up-organization/). These docs should get you started on your way to using Windows Azure AD.

### Step 2: Download node.js for your platform
To successfully use this sample, you need a working installation of Node.js.

### Step 3: Download the Sample application and modules

Next, clone the sample repo and install the NPM.

From your shell or command line:

* `$ git clone git@github.com:AzureADQuickStarts/AppModelv2-WebApp-OpenIDConnect-nodejs.git`
* `$ npm install`

### Step 4: Configure your server

* Provide the parameters in `exports.creds` in config.js as instructed.

* Update `exports.destroySessionUrl` in config.js, if you want to use a different `post_logout_redirect_uri`.

* Set `exports.useMongoDBSessionStore` in config.js to false, if you want to use the
default session store for `express-session`. Note that the default session store is
not suitable for production, you must use mongoDB or other [compatible session stores](https://github.com/expressjs/session#compatible-session-stores).

* Update `exports.databaseUri`, if you want to use mongoDB session store and a different database uri.

* Update `exports.mongoDBSessionMaxAge`. Here you can specify how long you want
to keep a session in mongoDB. The unit is second(s).

### Step 5: Run the application

* Start mongoDB service. If you are using mongoDB session store in this app, you have to install mongoDB and start the service first. If you are using the default session store, you can skip this step.

* Run the app. Use the following command in terminal.

```
$ node app.js
```

**Is the server output hard to understand?:** We use `bunyan` for logging in this sample. The console won't make much sense to you unless you also install bunyan and run the server like above but pipe it through the bunyan binary:

```
$ npm install -g bunyan
$ node app.js | bunyan
```

### You're done!

You will have a server successfully running on `http://localhost:3000`.

### Acknowledgements

We would like to acknowledge the folks who own/contribute to the following projects for their support of Azure Active Directory and their libraries that were used to build this sample. In places where we forked these libraries to add additional functionality, we ensured that the chain of forking remains intact so you can navigate back to the original package. Working with such great partners in the open source community clearly illustrates what open collaboration can accomplish. Thank you!


## About The Code

Code hosted on GitHub under MIT license
