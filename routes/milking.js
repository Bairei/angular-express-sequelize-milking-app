const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');
const Milking = require('../models/Milking');

router.get('/', (req, res, next) => {
  Milking.findAll().then(milkings => {
    let updatedMilkings = [];
    milkings.forEach((el, ind) => {
      updatedMilkings.push(Cow.findById(el.cowId).then(cow => {
        el.dataValues['cow'] = cow.dataValues;
        return el;
      }));
    });
    Promise.all(updatedMilkings).then(values => {
      // console.log(values);
      res.json(values);
    });
  }, err => {
    if (err) next(err);
  });
});

router.get('/:id', (req, res, next) => {
  Milking.findById(req.params.id).then(milking => {
    res.json(milking);
  }, err => {
    if (err) next(err);
  });
});

router.post('/', (req, res, next) => {
  if (!req.body.cowId) {
    return res.status(400).send("bad request, you need to provide cowID to object's body!");
  }
  Cow.findById(req.body.cowId).then(cow => {
    if (cow === null) {
      return res.status(404).send(`No such cow with id = ${req.body.cowId}`);
    }
    Milking.create({
      date: req.body.date,
      cowId: req.body.cowId,
      litres: req.body.litres
    }).then(milking => {
      cow.addMilking(milking).then(() => {
        res.json(milking);
      });
    });
  });
});

module.exports = router;
