require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})


// We can also create a sever like this:-
// const http = require("http")
// const app = require("./src/app")

// const server = http.createServer(app)

// server.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })
