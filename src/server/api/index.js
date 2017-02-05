'use strict';

var express = require('express');
var router = express.Router();

router.get('/music_albums', function(req, res) {
  const albums = [
    {
      title: 'taylor swift',
      artist: 'taylor swift',
      url: 'https://www.amazon.com/Fearless-Taylor-Swift/dp/B006WWU8IO/ref=sr_1_5?ie=UTF8&qid=1486253336&sr=8-5&keywords=taylor+swift',
      image: "https://images-na.ssl-images-amazon.com/images/I/51g0OT%2BvfDL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/51g0OT%2BvfDL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg'
    },
    {
      title: 'Speak Now',
      artist: 'taylor swift',
      url: 'https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B0048IMZMG/ref=ntt_mus_dp_dpt_4',
      image: "https://images-na.ssl-images-amazon.com/images/I/61cWjuYJyvL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/61cWjuYJyvL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg'
    },
   {
      title: 'Bad Blood',
      artist: 'taylor swift',
      url: 'https://www.amazon.com/Bad-Blood-Taylor-Swift/dp/B00XTIFCXU/ref=ntt_mus_dp_dpt_9',
      image: "https://images-na.ssl-images-amazon.com/images/I/51%2BoQX02R%2BL._SS500.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/51%2BoQX02R%2BL._SS500.jpg'
    },
  ];
  res.json(albums);
});

module.exports = router;
