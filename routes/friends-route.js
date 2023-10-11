const router = require('express').Router();
const Friend = require("../models/friends-model.js");

router.get('/friend/:id', (req, res) => {
   Friend.findByPk({
     where: {
       id: req.params.id,
     },
   })
     .then((friend) => {
       res.json(friend);
     })
     .catch((error) => {
       console.log(error);
       return res.status(404).send('Friend not found');
     });

});

// const imageUrl = /images/Friend.image_path;
// const html = <img src="${imageUrl}" alt="Friend Image"/>;
// res.send(html);
// .then((friend) => {
//     res.status(200).json(friend);
//   }).catch((error) => {
//     console.error('Unable to fetch friend:', error);
//     res.status(500).send('Error fetching friend');
//   });

// const imageUrl = "/images/Friend.image_path";
// const html = <img src="${imageUrl}" alt="Friend Image"/>;

// res.send(html);

// then((friend) => {
//   res.status(200).json(friend);
// }).catch((error) => {
//   console.error('Unable to fetch friend:', error);
//   res.status(500).send('Error fetching friend');
// });






router.put('/:id', (req, res) => {
 Friend.update(req.body, {
    where: {
      id: req.params.id,
    },
     }).then((people) => {
    res.status(200).json(people);
  }).catch((error) => {    
    console.log(error);
    res.status(400).json(error);
  })
});

router.delete('/:id', (req, res) => {
   Friend.destroy({
     where: {
       id: req.params.id,
     },
   }).then((people) => {
    res.json(people);
     }).catch((error) => {    
    console.log(error);
    res.status(400).json(error);
  })
 
});


module.exports = router;