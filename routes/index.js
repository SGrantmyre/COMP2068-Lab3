var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family' });
});

const people = [
  {
    route: 'shyla',
    name: 'Shyla Grantmyre',
    job: 'Shift Lead at Starbucks',
    cityBorn: 'Alliston',
    hobby: 'playing Animal Crossing'
  },
  {
    route: 'dan',
    name: 'Dan Mrasek',
    job: 'Marina Attendent at Friday Harbour',
    cityBorn: 'Toronto',
    hobby: 'fishing and camping'
  },
  {
    route: 'tracy',
    name: 'Tracy Grantmyre',
    job: 'Teller at Scotiabank',
    cityBorn: 'Toronto',
    hobby: 'playing card games with family'
  },
  {
    route: 'doug',
    name: 'Doug Grantmyre',
    job: 'Department Head of Evirmonmental at Honda',
    cityBorn: 'Alliston',
    hobby: 'buying and selling cars'
  },
  {
    route: 'pippin',
    name: 'Pippin the Cat',
    job: 'very cute kitty',
    cityBorn: 'Barrie',
    hobby: 'playing with literally everything'
  }
];

router.get('/:route', (req,res,next)=> {
  const person = people.find(per => per.route === req.params.route);

  if(!person){
    return next(new Error('Cannot find requested family member....'));
  }

  return res.render('person', person);
});

module.exports = router;
