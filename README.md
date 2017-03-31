# mod0 Introduction
This open Source modular framework is built up using NodeJS + Express.
Aim of this project to ease work of developer and achieve more better performance and stability in no time.

# Structure:
1. package: This file is very basic used for all nodejs based projects.
2. modules: This file contains all modules which needs to be executed.
3. app: This file is main heart of application. This file contains all magic that handles moduler structure.
4. public: This folder contains all general used files like JS, CSS etc.
5. module <br>
   |-controller: This directory contains all controllers for this module.<br>
   |---|-Controller.jS<br>
   |-view: This directory contains all views for controller action.<br>
   |---|-view.ejs<br>
   |-router.js: This file contains routes for specific module.<br>

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
