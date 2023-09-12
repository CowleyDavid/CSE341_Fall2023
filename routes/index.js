const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

//app.get('/', (req, res) => {
//    res.send("SomeNameIKnow");
//  });

app.get('/', lesson1Controller.firstName);
app.get('/secondName', lesson1Controller.secondName);   


app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
  });
   
  app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
  });