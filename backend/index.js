// expression => server, backend router
// libraries = morgan , helmet
// get and post req. = postman
// nodemon = automaticaly file run based on changes
// morgan = it keeps the log of your application
// helmet = it provide security to your application header
// we can get data using req get and post and we can respond to server using that req. also
// we send the data to server using json only
// and we send data accordingly to the body of get req. and we get according to that also


const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const Port = process.env.PORT || 5000

app.use(express.json());
app.use(helmet());
app.use(morgan());
app.use(cors());




// get request
app.get('/',(req,res,next) =>
{
    //res.send("server running")
    console.log(req.body.name);
    

    res.json(
        {
             message:"the server is runniing"
        })
})


//  const Loginrouter = express.Router();




// makes routes for routers
app.get('/login',(req,res) =>{
    res.json({
        message:"Login router is working"
    })
})


// we will import Loginrouter here and use it here

 const Loginrouter = require('./Loginrouter');
// // app.use => on particuler route invoke the router and make use of the router

  app.use("/test",Loginrouter)



// error handling
// 1. router does not exit
// status code => res.status().send()

app.use('*',(req,res) => 
{
    res.send("page not found")
})

app.listen(Port,() =>
{
    console.log("port running on 5000 ")
})