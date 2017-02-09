const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('got a request!');
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.body);

    res.send('hey dude');
})

module.exports = router;
