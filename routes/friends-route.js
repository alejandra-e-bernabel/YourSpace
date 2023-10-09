const router = require('express').Router();
const { People } = require('../models');



router.get('/:id', (req, res) => {
   People.findOne({
     where: {
       id: req.params.id,
     },
   })
     .then((people) => {
       res.json(people);
     })
     .catch((error) => {
       console.log(error);
       res.status(400).json(error);
     });

});

router.put('/:id', (req, res) => {
  People.update(req.body, {
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
   People.destroy({
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


module.exports = app;