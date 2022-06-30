var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Employee = require('../models/Employee.js');

//new routes

router.get('/api/employees', function(req, res, next){
    Employee.find(function(err, employees){
        if(err) return next(err);
        res.json(employees);
    });
});

router.get('/api/employee/:id', function(req, res, next){
    Employee.findById(req.params.id, function(err, employee){
        if(err) return next(err);
        res.json(employee);
    });
});

module.exports = router;