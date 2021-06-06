const express = require("express")

const app = express() 

app.get('', (req, res ) => {
res.send("Sup")
})

//get method takes route (partial url) and function describing what you want to do when they visit it 
//send - reply 

app.get("/help", (req, res) => {
     res.send("Help me!!!")
})

app.get("/about", (req, res) => {
     res.send("Check out this about page!")
})

app.get("/weather", (req, res) => {
     res.send("Weatherpage")
})


app.listen(3000, () => {
     console.log("Server up on port 3000")
})