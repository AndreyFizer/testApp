/**
 * Created by ANDREY on 17.03.2015.
 */
var express = require('express');

module.exports = function(app){

    app.get('/', function(req,res,next)) {
        res.status(200).send({success: " ----- First Express App ----- "})
    });

    app.get('/test',function(req,res,next) {
        res.status(200).send({success: " ----- TEST ----- "})
    });

    app.post('/test',function(req,res,next) {
        res.status(200).send({success: " ----- POST TEST ----- "})
    });

};