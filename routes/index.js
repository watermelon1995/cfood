var express = require('express');
var router = express.Router();

var Challenge = {
    "Challenge":[{
    Name: 'FUCK1',
    Description: 'I am handsome!',
    ImageSrc: './img/Spicy1.jpg'
    },
    {
    Name: 'FUCK2',
    Description: 'I am handsome2!',
    ImageSrc: './img/Spicy1.jpg'
    },
    {
    Name: 'FUCK3',
    Description: 'I am handsome3!',
    ImageSrc: './img/paris.jpg'
    },
    {
    Name: 'FUCK4',
    Description: 'I am handsome4!',
    ImageSrc: './img/Spicy1.jpg'
    },
    {
    Name: 'FUCK5',
    Description: 'I am handsome5!',
    ImageSrc: './img/Spicy1.jpg'
    }] 
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', Challenge);
});

module.exports = router;