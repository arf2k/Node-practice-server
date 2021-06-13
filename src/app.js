const path = require("path")
const express = require("express")

const publicDir = (path.join(__dirname, "../public"))

const app = express() 

app.use(express.static(publicDir))

app.get("/", (req, res ) => {
res.send("<h1>Hi, thanks for visiting!</h1>")
})

//get method takes route (partial url) and function describing what you want to do when they visit it 
//send - reply 


app.get("/help", (req, res) => {
     res.send("Help me!!!")
})

app.get("/about", (req, res) => {
     // res.send("Check out this about page!")
     res.send({
          name: "Alex",
          age: 31
     })
})

app.get("/weather", (req, res) => {
     res.send("Weatherpage")
})


app.listen(3000, () => {
     console.log("Server up on port 3000")
})