const router = require('express').Router();

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send("Hello world");
} );

router.use('/users', require('./users'));

module.exports = router;