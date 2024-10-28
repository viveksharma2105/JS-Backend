require('dotenv').config() //for env file (help in hiding senstive  info)
const express = require ('express'); // express import
const app  = express() //app variable


const  port = 4000; // port number

//github API 
const githubdata = {
    
    "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }
 

//request to run (cb function, req&res is fix)
app.get('/',  (req, res)=>{
    res.send('Hello World')
})


app.get('/github',  (req, res)=>{
    res.json(githubdata)
})

app.get('/twitter', (req, res)=>{
    res.send('viveksharmadotcom')
})
app.get('/login', (req, res)=>{
    res.send('<h1>Please login </h1>')
})
app.get('/youtube', (req, res)=>{
    res.send('<a href="https://www.youtube.com" target="_blank">Open YouTube</a>')
})


//THIS IS SIMPLE AND NOT INFO SENSTIVE WAY
// app.listen(port, ()=>{
//     console.log(`Example app listen on port ${port}`);
    
// })

//INFO SENSTIVE WAY
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listen on port ${port}`);
    
})

