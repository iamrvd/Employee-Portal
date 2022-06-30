var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    designation: String,
    quote: String,  
    cast: String,
    image: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);