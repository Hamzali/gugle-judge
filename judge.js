const router = require('express').Router();

const calculatePoint = (input) => {
    return input;
}

router.get('/', (req, res) => {
    console.log('got a request!');
    console.log(req.body);
});

router.post('/', (req, res) => {
    console.log(req.body);
    let point =  calculatePoint(req.body);
    res.send(point);
})

module.exports = router;
