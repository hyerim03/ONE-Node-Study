const express = require("express"),
app = express(),
pool = require("./config/database"),
bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.post("/", (req,res) => {
const param = [req.body.id, req.body.pw, req.body.name]

pool((sql) => {
  sql.query("insert into tbl_user value(?,?,?)", param, (err, doc) => {
      err ? console.log(err) : res.send({result : true})
  })
  sql.release()
})
})

app.get("/", (req,res) => {
pool((sql) => {
  sql.query("select * from tbl_user", (err, row) => {
      err ? console.log(err) : res.send({result : row})
  })
  sql.release()
})
})

const port = 8080
app.listen(port, () => console.log(`SERVER ON PORT : ${port}`))