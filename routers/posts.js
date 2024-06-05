const express = require('express');
const router = express.Router();

const allPost = [
    {id: 2, title: 'ลองดู2', from: 'คนเขียน', createdAtText: '4/6/2024', commentsCount: 2},
    {id: 1, title: 'ลองดู1', from: 'คนเขียน', createdAtText: '1/6/2024', commentsCount: 0}
];

router.get('/new', (request, response)=>{
    response.render('postNew');
});

router.post('/new', (request, response) =>{
    console.log(request.body);
    const { title } = request.body ?? {};
    response.render('postNew');
})

router.get('/:postId', (request, response)=>{
    console.log(request.params);
    const { postId } = request.params;
    const onePost = allPost.find(post => post.id === +postId);
    const customTitle = !!onePost ? `${onePost.title} | ` : 'Content Not Found |';
    response.render('postId', { onePost, customTitle });
});


module.exports = router;