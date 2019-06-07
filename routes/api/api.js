const express = require('express');
const router = express.Router();

const estructuraApi = require('./estructura');

router.get('/', (req, res, next)=>{
    res.status(200).json({"api": "estructura"})
});

router.use('/estructura', estructuraApi);

module.exports = router;