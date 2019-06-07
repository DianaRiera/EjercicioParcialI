const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": "uuid",
    "Clase": "",
    "Sección": "",
    "Cupos": 0,
    "Campus": "",
    "Docente": ""
};

thingsCollection.push(
    Object.assign({},
        thingsStructure,{
            "id":"uuid",
            "Clase": "Seminario De Software",
            "Sección": "ABC",
            "Cupos": 30,
            "Campus": "Sagrado Corazón De Jesús",
            "Docente":"Orlando Betancourth" 
        })
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
});

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});

module.exports = router;