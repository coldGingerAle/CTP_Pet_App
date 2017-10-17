const express = require('express');
const expressSession = require('express-session');
const passport = require('./middlewares/authentication');
const bodyParser = require('body-parser');
const models = require('./models');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());
// Load Views
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({
  layoutsDir: './views/layouts',
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

// Load Controller
const controllers = require('./controllers');
app.use(controllers);

models.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
  });
});
