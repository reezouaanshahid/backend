const mongoose = require('mongoose');
const express = require('express');
const app = express();
mongoose.connect('mongodb://localhost:27017/fitproect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');

  // Define your schema and models here
});  
const screamSchema = new mongoose.Schema({
    name: String,
    age: String,
   
  });
  const Scream = mongoose.model('Scream', screamSchema);
  app.get('/',(req,res)=>{
    const newScream = new Scream({
        name: 'ibad',
        age: "12",
       
      });
      console.log(newScream);
      newScream.save().then(res=>{
        console.log(res);
      })
      res.end("done")
  })
  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});