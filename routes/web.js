const router = require('express').Router();

const homepageController = require('../controllers/HomepageController');
const URLController = require('../controllers/URLController');

router.get('/', homepageController.index);

router.post('/url', URLController.create);

router.get('/:uuid\\+', URLController.info);

router.get('/:uuid(\\w+)', URLController.redirect);

module.exports = router;
