const express = require('express');
const hbs = require('hbs');
const app = express();
const generalRouter = require('./routers/general');
const postRouter = require('./routers/posts');

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/',generalRouter);
app.use('/p',postRouter);

app.listen(9951,()=>{
    console.log('Free Wifi at http://localhost:9951');
});