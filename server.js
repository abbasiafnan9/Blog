const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const allRoutes = require('./routes/api');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.Port || 3306;

const {User, Post, Review} = require('./models');

const sess = {
    // secret: 'Super secret',
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialize: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', allRoutes);

app.get('/',(req,res)=>{
    res.send("hello")
})

sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function(){
        console.log('App listening on PORT' + PORT);
    });
});

