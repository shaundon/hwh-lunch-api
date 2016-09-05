var express = require('express');
var app = express();
var HwhLunch = require('hwh-lunch');

var translateDayToNumber = function(dayString) {
  dayString = dayString.toLowerCase();
  if (!dayString || dayString === 'today') {
    return new Date().getDay();
  }
  if (dayString === 'tomorrow') {
    return new Date().getDay() + 1;
  }
  else {
    switch (dayString) {
      case 'monday':
      case 'mon':
        return 1;
      case 'tuesday':
      case 'tue':
      case 'tues':
        return 2;
      case 'wednesday':
      case 'weds':
      case 'wed':
        return 3;
      case 'thursday':
      case 'thurs':
      case 'thu':
        return 4;
      case 'friday':
      case 'fri':
        return 5;
      default:
        return false;
    }
  }
}

app.get('/', function(req, res) {

  var dayQp = req.query.text || 'today';
  var day = translateDayToNumber(dayQp);
  if (!day) {
    res.send("Invalid day. Say 'today', 'tomorrow', 'monday', 'tuesday', and so on.");
  }
  else {
    HwhLunch(day).then(function(menu) {
      res.send(menu);
    });
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('HWH Lunch API running on ' + port);
});
