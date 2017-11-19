var frameModule = require("ui/frame");
var page;
var email;
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();
var dialogsModule = require("ui/dialogs");

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
    user.init();
};

exports.signIn = function() {

    frameModule.topmost().navigate("cars/cars-list-page");

    // user.login()
    //     .catch(function(error) {
    //         console.log(error);
    //         dialogsModule.alert({
    //             message: "Unfortunately we could not find your account.",
    //             okButtonText: "OK"
    //         });
    //         return Promise.reject();
    //     })
    //     .then(function() {
    //         frameModule.topmost().navigate("views/list/list");
    //     });
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("cars/register/register");
};