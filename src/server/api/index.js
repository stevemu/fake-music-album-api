'use strict';

var express = require('express');
var router = express.Router();

router.get('/music_albums', function(req, res) {
  const albums = [
    {
      title: 'Abbey Road',
      artist: 'The Beatles',
      url: 'https://www.amazon.com/Abbey-Road-Beatles/dp/B01929HGH4/ref=sr_1_2?ie=UTF8&qid=1486479679&sr=8-2&keywords=beatles',
      image: "https://images-na.ssl-images-amazon.com/images/I/61i4ik3IBjL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/61i4ik3IBjL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg'
    },
    {
      title: '1',
      artist: 'The Beatles',
      url: 'https://www.amazon.com/1-Beatles/dp/B01929HAK2/ref=sr_1_4?ie=UTF8&qid=1486479679&sr=8-4&keywords=beatles',
      image: "https://images-na.ssl-images-amazon.com/images/I/31i5mjTO0FL._SS500.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/31i5mjTO0FL._SS500.jpg'
    },
   {
      title: 'Rubber Soul',
      artist: 'The Beatles',
      url: 'https://www.amazon.com/Rubber-Soul-Beatles/dp/B01929HXIG/ref=sr_1_8?ie=UTF8&qid=1486479679&sr=8-8&keywords=beatles',
      image: "https://images-na.ssl-images-amazon.com/images/I/61spT89nxEL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg",
      thumbnail_image: 'https://images-na.ssl-images-amazon.com/images/I/61spT89nxEL._SS500_PJStripe-Robin-Large,TopLeft,0,0.jpg'
    },
  ];
  res.json(albums);
});

module.exports = router;
