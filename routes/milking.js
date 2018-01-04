const express = require('express');
const router = express.Router();
const Cow = require('../models/Cow');
const Milking = require('../models/Milking');

// GET all milkings, along with cows assosiated with them
router.get('/', (req, res, next) => {
  Milking.findAll().then(milkings => {
    let updatedMilkings = [];
    milkings.forEach((el, ind) => {
      updatedMilkings.push(Cow.findById(el.cowId).then(cow => {
        // append 'cow' to current Milking object
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

// GET specific milking
router.get('/:id', (req, res, next) => {
  Milking.findById(req.params.id).then(milking => {
    res.json(milking);
  }, err => {
    if (err) next(err);
  });
});

// Create new milking
router.post('/', (req, res, next) => {
  if (!req.body.cowId) {
    return res.status(400).send("bad request, you need to provide cowID to object's body!");
  }
  Cow.findById(req.body.cowId).then(cow => {
    if (cow === null) {
      return res.status(404).send(`No such cow with id = ${req.body.cowId}`);
    }
    Milking.create(req.body).then(milking => {
      cow.addMilking(milking).then(() => {
        res.json(milking);
      });
    });
  });
});

// Update milking
router.put('/:id', (req, res, next) => {
  Milking.findById(req.params.id).then(milking => {
    Cow.findById(req.body.cowId).then(cow => {
      if (cow === null) {
        return res.status(400).send('Wrong cowId!');
      }
      milking.update(req.body).then(updatedMilking => {
        return res.json(updatedMilking);
      });
    });
  }, err => {
    if (err) next(err);
  });
});

router.delete('/:id', (req, res, next) => {
  Milking.findById(req.params.id).then(milking => {
    let deletedMilking = milking;
    milking.destroy().then(() => {
      return res.json(deletedMilking);
    }, err => {
      if (err) return next(err);
    });
  }, err => {
    if (err) return next(err);
  });
});

module.exports = router;
