
var MyController = function(Data) {
    var vm = this;
    vm.fname = 'Eddie';
    vm.lname = 'Tamakloe';
    //vm.hobby = null;
    vm.hobby = 'JavaScript';
    vm.users = Data;

    vm.newUser = {
        fname: '',
        lname: '',
        job: '',
        age: 0
    };

    vm.addUser = function() {
        var keys = Object.keys(vm.newUser);
        var u = { };
        for(var i = 0; i < keys.length; i++){
            u[keys[i]] = vm.newUser[keys[i]];
        }
        vm.users.push(u);
        vm.newUser.fname = '';
        vm.newUser.lname = '';
        vm.newUser.job = '';
        vm.newUser.age = 0;
    }
};

angular.module('app').controller('MainController', [ 'Data', MyController]);