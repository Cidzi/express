const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/',(request, response) => {
    console.log(request.query);
    const {q, sortBy} = request.query;
    response.render('home', {q, sortBy});

});

app.get('/p/new', (request, response)=>{
    response.render('postNew');
});

app.post('/p/new', (request, response) =>{
    console.log(request.body);
    const { title } = request.body ?? {};
    response.render('postNew');
})

app.get('/p/:postId', (request, response)=>{
    console.log(request.params);
    const { postId } = request.params;
    response.render('postId', { postId });
});

app.listen(9951,()=>{
    console.log('Free Wifi at http://localhost:9951');
});