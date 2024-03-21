const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let data=[{id:1,name:"ibad"},{
  id:2,name:"qureshi"
}];
app.get('/', (req, res) => {
   const bodymy=req.body;
   console.log(bodymy);

    res.send(data)
  })
  app.post('/user', (req, res) => {
    const bodyData = req.body;
    
        console.log(bodyData);
    data.push(bodyData)
    res.send(data)
  })
  app.get('*', (req, res)=>{
  res.send('this path doesnot exist')
  })
  app.delete('/delete',(req,res)=>{
    const bodyData = req.body;
    console.log(bodyData);
    data = data.filter(item => item.id !== bodyData.id);

console.log(data);
    res.send("User deleted!")
  })
  app.post('/serach',(req,res)=>{
    const bodyData = req.body;
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(bodyData.name.toLowerCase())
    );

console.log(filtered);
    res.send(filtered)
  })
  app.listen(3000)