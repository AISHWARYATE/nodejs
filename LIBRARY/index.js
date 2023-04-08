const express=require('express')
const app=express()
 app.use(express.static('./public'))
 app.set('views','./src/views')
 app.set('view engine','ejs')
 app.get('/',(req,res)=>{
     res.render("index")
 })
app.get('/index',(req,res)=>{
 res.render("index.ejs")
})
app.get('/login',(req,res)=>{
  res.render("login.ejs")
 })
 app.get('/author',(req,res)=>{
  res.render("author.ejs")
 })
 app.get('/books',(req,res)=>{
  res.render("books.ejs")
 })
 app.get('/addbook',(req,res)=>{
  res.render("addbook.ejs")
 })
 
 app.get('/register',(req,res)=>{
  res.render("register.ejs")
 })

app.listen(3000,()=>
{
 console.log("server starte at port http://localhost:3000");
})







///const http=require('http')
//http.createServer(function(req,res)
//{
//  res.write("hello")
//  res.end()
//}).listen(4000,()=>{
//console.log("server started at http://localhost:4000");
//})