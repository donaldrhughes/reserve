//Table constructor
var Table = function (name, phone, email, unique) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.unique = unique;
    }

module.exports = Table;