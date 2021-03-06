require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport     = require('./helpers/passport')
const session      = require('express-session')
const cors         = require('cors')
const MongoStore   = require('connect-mongo')(session)

mongoose
  .connect('mongodb://santiago:ironhack2018@ds115244.mlab.com:15244/area51', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//sessions
app.use(session({
  store: new MongoStore({
    mongooseConnection:mongoose.connection,
    ttl:24*60*60
  }),
  secret:'santiago',
  resave:true,
  saveUninitialized:true,
  cookie:{httpOnly:true,maxAge:60000}  
}))


app.use(cors({
  credentials: true,
  origin: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
const categories = require('./routes/crud/categories');
const clubs = require('./routes/crud/clubs');
const rekos = require('./routes/crud/rekos');
const auth = require('./routes/auth/auth');
const users = require('./routes/crud/users');
app.use('/auth', auth);
app.use('/', categories);
app.use('/', clubs);
app.use('/', rekos);
app.use('/', index);
app.use('/', users)


module.exports = app;
