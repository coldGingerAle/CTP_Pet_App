const express = require('express');
const expressSession = require('express-session');
const passport = require('./middlewares/authentication');
const bodyParser = require('body-parser');
const models = require('./models');
const PORT = process.env.PORT || 8000;
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath)); 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession(({ secret: 'somepassword', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());

// Load Controller
const controllers = require('./controllers');
app.use(controllers);

app.get('*',(req,res) =>{
  res.sendFile(path.join(publicPath,'index.html'));
})

models.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
  });
});
