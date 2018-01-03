const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const sequelize = require('./models/sequelize');
const Cow = require('./models/Cow');
const Milking = require('./models/Milking');
const cowApi = require('./routes/cow');
const milkingApi = require('./routes/milking');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': 'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/cows', express.static(path.join(__dirname, 'dist')));
app.use('/milkings', express.static(path.join(__dirname, 'dist')));

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully');
  Cow.sync({force: true}).then(() => {
    Cow.bulkCreate([
      { name: 'Mucka' },
      { name: 'Latka' },
      { name: 'Ruda' }
    ]).then(() => {
      return Cow.findAll();
    }).then(cows => {
      Milking.sync({force: true}).then(() => {
        cows.forEach((el, ind) => {
          Milking.create({litres: Math.floor(Math.random() * 10)}).then(milking => {
            el.addMilking(milking);
          }).then(() => {
            Milking.create({litres: Math.floor(Math.random() * 10)}).then(milking => {
              el.addMilking(milking);
            }).then(() => {
              el.getMilkings().then(milkings => {
                // console.log(`Cow no.${el.id}: ###############`);
                // console.log(milkings);
              });
            });
          });
        });
      });
    });
  });
}).catch(err => {
  console.error('Unable to connect to the database', err);
});

app.use('/cow', cowApi);
app.use('/milking', milkingApi);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
