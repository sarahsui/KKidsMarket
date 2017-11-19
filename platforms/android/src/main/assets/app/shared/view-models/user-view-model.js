var config = require("../../shared/config");
var firebase = require("nativescript-plugin-firebase");
var observableModule = require("data/observable");

function User(info) {
    info = info || {};

    // You can add properties to observables on creation
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || ""
    });

    viewModel.init = function(){
   firebase.init({
      url: config.apiUrl
    }).then(
    function (instance) {
      console.log("firebase.init done");
    },
        function (error) {
            console.log("firebase.init error: " + error);
            }
    );
    };

    viewModel.login = function() {
    return firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions:{
            email: viewModel.get("email"),
            password: viewModel.get("password")
        }
      }).then(
      function (result) {
        JSON.stringify(result);
      },
      function (errorMessage) {
        console.log(errorMessage);
      });
  }

viewModel.register = function() {
    console.log(viewModel.get("email"));

    
    return firebase.createUser({
        email: viewModel.get("email"),
        password: viewModel.get("password")
      }).then(
        function (result) {
          dialogs.alert({
            title: "User created",
            message: "userid: " + result.key,
            okButtonText: "Nice!"
          })
        },
        function (errorMessage) {
          dialogs.alert({
            title: "No user created",
            message: errorMessage,
            okButtonText: "OK, got it"
          })
        }
    );
};
    return viewModel;
}


module.exports = User;