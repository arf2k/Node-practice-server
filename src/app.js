const path = require("path")
const express = require("express")

const publicDir = (path.join(__dirname, "../public"))

const app = express() 

app.set("view engine", "hbs")
app.use(express.static(publicDir))

app.get("", (req, res) => {
     res.render("index", {
          title: "Handlebar page",
          name: "Xander"
     })
})

app.get("/about", (req, res) => {
res.render("about", {
     title: "About Xan page",
     name: "Xanman"
})
})


app.get("/", (req, res ) => {
res.send("<h1>Hi, thanks for visiting!</h1>")
})

//get method takes route (partial url) and function describing what you want to do when they visit it 
//send - reply 


app.get("/help", (req, res) => {
     res.render("help", {
          helptext: "Helpity help help"
     })
})



app.get("/weather", (req, res) => {
     res.send("Weatherpage")
})


app.listen(3000, () => {
     console.log("Server up on port 3000")
})

