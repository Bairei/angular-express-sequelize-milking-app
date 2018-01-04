const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');
const Milking = require('../models/Milking');

// POST cow
router.post('/', (req, res, next) => {
  Cow.create(req.body).then(cow => {
    res.json(cow);
  }, err => {
    if (err) next(err);
  });
});

// GET all cows
router.get('/', (req, res, next) => {
  Cow.findAll().then(cows => {
    res.json(cows);
  }, err => {
    if (err) next(err);
  });
});

// find cow by id
router.get('/:id', (req, res, next) => {
  Cow.findById(req.params.id).then(cow => {
    res.json(cow);
  }, err => {
    if (err) next(err);
  });
});

// update cow
router.put('/:id', (req, res, next) => {
  Cow.findById(req.params.id).then(cow => {
    if (req.body.name) {
      cow.update(req.body).then(cow => {
        console.log('updated cow: id = ' + req.params.id);
      }, err => {
        if (err) return next(err);
      });
    }
    res.json(cow);
  }, err => {
    if (err) next(err);
  });
});

// delete cow and every milking associated with it
router.delete('/:id', (req, res, next) => {
  Cow.findById(req.params.id).then(cow => {
    if (cow === null) {
      return res.status(404).send('Unable to find cow with specific id');
    }
    let ret = cow;
    Milking.destroy({where: {cowId: cow.id}}).then(() => {
      cow.destroy({force: true}).then(() => {
        return res.json(ret);
      });
    });
  });
});

module.exports = router;
