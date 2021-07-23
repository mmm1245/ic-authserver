const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let sessionsSaved = {};

let hahahaDatabase = {"mmm1245":{"pwd":"lolheslo","uuid":"81677200-033d-471d-b77a-663ea35720fd"},"YTblockman":{"pwd":"pog21","uuid":"f720bbdc-dd2a-42dd-8df3-32f8023b2e41"}};

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/auth', (req, res) => {
  let name = req.get("name")
  let token = req.get("token")
  if(sessionsSaved[name] == token){
	  res.status(200);
	  res.send(hahahaDatabase[name].uuid)
	  return;
  }
  res.status(403);
  res.send(`bad`)
})
app.get('/login', (req, res) => {
  let name = req.get("name")
  let pwd = req.get("password")
  if(hahahaDatabase[name].pwd == pwd){
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