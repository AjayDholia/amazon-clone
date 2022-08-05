const express = require('express');
const Loginrouter = express.Router();

const mysql = require('mysql');
const bcrypt = require('bcrypt');

//  createpool is used for application grade connectivity in mysql
const db = mysql.createPool({
    host:"localhost",
     user:"root",
     password:"",
     database: "amazondb" 
})
   
// makes routes for routers
// making a post to database while taking input from frontend
Loginrouter.post('/user',async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const decryptpass = await bcrypt.hash(password , 8)
  
    db.getConnection(async(err , connection) =>
    {
        if(err) throw (err);

        // whenever this is called , we will search in database
        // here ? is a placeholder

        const sqlsearch = "SELECT*FROM amazon_ab WHERE email=?"
        const search_query = mysql.format(sqlsearch,[email]);
        // whenever this is called we want to inser something to database
        const sqlinsert = "INSERT INTO amazon_ab(email,password) VALUES(?,?)";
        const insert_query = mysql.format(sqlinsert,[email,decryptpass]);


        // now asking the connection for sqldatabse for the given email;

       await connection.query(search_query,async(err,result) =>
       {
        if (err) throw (err);
        console.log("...............> searching for result");
        if(result.length != 0) {
            connection.release();
            // connection. release mean we release the connection
            console.log("email aready exit");
            res.json({
                message: "email already exits"
            })
        }
        else
        {
           await connection.query(insert_query,(err,result) =>
           {
            if (err) throw (err);

            console.log("data inserted");

            res.json({
                message:"data inserted successfully",
                result:result
            })
            connection.release();
           })
        }

       })

    })
}) 

Loginrouter.post("/userPath", (req,res) =>
{
    let email = req.body.email;

    let password = req.body.password;

    db.getConnection(async(err , connection) =>
    {
        if(err) throw (err)

        const sqlsearch = "SELECT*FROM amazon_ab WHERE email=?"
        const search_query = mysql.format(sqlsearch,[email]);    // searching for the given email

        await connection.query(search_query, async(err , result) =>
        {
            if(err) throw (err)

            if(result.length == 0)
            {
                console.log("...........> user not exit");
                res.json({
                    message: "user not exit"
                })
                // redirected to login page

            }
            else
            {
              console.log("this is result", result);

              const hesadpassword = result[0].password;
              console.log(hesadpassword);

              if(await bcrypt.compare(password , hesadpassword) )
              {
                  console.log("sign up successfully");

                  res.json({
                    message:"signup done"
                  })
                //   redirect to frontend homepage
              }
              else 
              {
                console.log("incorrect password");

                res.json({
                    message:"incorrect password"
                })
              }

            }
        })

        
        
    })

})

// export the router and import in main file => index.js

 module.exports = Loginrouter;