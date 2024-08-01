const express = require('express');
const router = express.Router();
const {
    addSingle,
    addMany,
    readDB,
    delMuggles,
    changeHouse,
    dynamicSearch,
    deleteAll
} = require('./controllers.js');

router.route('/one').post(addSingle);
router.route('/many').post(addMany);
router.route('/read').get(readDB);
router.route('/expell/muggles').delete(delMuggles);
router.route('/changehouse/:sid/:house').put(changeHouse);
router.route('/:str').get(dynamicSearch);
router.route('/deleteAll').delete(deleteAll);





module.exports = router;