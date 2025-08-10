const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { createUserRoutes } = require ("./routes/user") ;
const { createCourseRoutes } = require ("./routes/course") 


app.use("/user", userRouter);
app.use("/course", courseRouter);
createUserRoutes(app);
createCourseRoutes(app);
mongoose.connect()

const app = express();
app.use(express.json());

app.listen(3000);