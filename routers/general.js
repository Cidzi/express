const express = require('express');
const router = express.Router();




const allPost = [
    {id: 2, title: 'ลองดู2', from: 'คนเขียน', createdAtText: '4/6/2024', commentsCount: 2},
    {id: 1, title: 'ลองดู1', from: 'คนเขียน', createdAtText: '1/6/2024', commentsCount: 0}
];

router.get('/',(request, response) => {
    response.render('home', {allPost});

});

module.exports = router;