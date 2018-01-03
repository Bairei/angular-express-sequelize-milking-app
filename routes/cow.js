const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');

// POST cow
router.post('/', (req, res, next) => {
  Cow.create({
    name: req.body.name
  }).then(cow => {
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

router.put('/:id', (req, res, next) => {
  Cow.findById(req.params.id).then(cow => {
    if (req.body.name) {
      cow.update({'name': req.body.name}).then(cow => {
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

module.exports = router;
