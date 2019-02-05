//Table constructor
var Table = function (route, name, phone, email, unique) {
    this.route = route;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.unique = unique;
    }

module.exports = Table;