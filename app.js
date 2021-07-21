const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let sessionsSaved = {};

let hahahaDatabase = {"mmm1245":"lolheslo","YTblockman":"pog21"};

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/auth', (req, res) => {
  let name = req.get("name")
  let token = req.get("token")
  if(sessionsSaved[name] == token){
	  res.status(200);
	  res.send("valid")
	  return;
  }
  res.status(403);
  res.send(`bad`)
})
app.get('/login', (req, res) => {
  let name = req.get("name")
  let pwd = req.get("password")
  if(hahahaDatabase[name] == pwd){
	res.status(200);
	let token = Math.random()*1548484
    res.send(`${token}`)
	sessionsSaved[name] = token
	return;
  }
  res.status(403);
  res.send(`bad`)
})


app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})