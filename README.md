# mod0 Introduction
This open Source modular framework is built up using NodeJS + Express.
Aim of this project to ease work of developer and achieve more better performance and stability in no time.

# Structure:
1. Core: Contains all main code to handle this framework. Don't update anything until you are sure what you are doing.
2. Library: Contains libraries used inside the controllers.
3. modules: This file contains all modules which needs to be executed.
4. public: Contains all general used files like JS, CSS etc.
5. Settings: Project specific configurations are managed from here.
6. Templates: Contains all controllers and templates that can be override form original module. It follows modules directory structure.
7. app.js: The main heart of the application which triggers all code and events.

#Module Structure
```
ModuleName
   |-controller: This directory contains all controllers for this module.
   |---|-Controller.jS
   |-hooks: Hooks can be executed from controller.
   |---|-hookName.js
   |-model: Database Schema of table
   |---|-modelName.js
   |-view: This directory contains all views for controller action.
   |---|-view.ejs
   |-hooks.js: Contains hooks for specific module.
   |-router.js: contains routes for specific module.
```

#Database Operations
1. Specify connection:<br>
   <b>Path:</b> projectRoot > settings > db.js
    ```
    exports.db = {
            host: "localhost",
            port: 27017,
            username: "",
            password: "",
            database: "mod0"
    };
    ```

2. Sample model:
    ```
    var mongoose = require("mongoose");
    var schema = mongoose.Schema;
    var userSchema = new schema({
        name: String,
        location: String,
        created_at: Date,
        updated_at: Date
    });
    var User = mongoose.model("User", userSchema);
    module.exports = User;
    ```

3. How to use?
    ```
    GLOBAL.model.User.find({}, function(err, users){
        //handle error and response
    });

    var newUser = GLOBAL.model.User({
        name: "User Name"
    });

    newUser.save(function(err){
        //handle response
    });
    ```

# Contribution:
This project is started as an experiment. All enthusiastic developers are requested to contribute and share ideas to make it more better.
To contribute on this project, you can fork this repo and create PR.

# Contact:
Mail: koradia.savan@gmail.com<br>
Site: <a href="http://savankoradia.com">Website</a><br>
Skype: skoradia1991<br>
Phone: +91-9428233422<br>
