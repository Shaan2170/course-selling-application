const { Router } = require("express");
const { userModel } =require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "sbkbakbd123";

const userRouter = Router();

userRouter.post("/signup", async function(req, res) {
    const {email, password , firstName, lastName } = req.body;
    
    
    await userModel.create({
        email: email,
        password: password,
        firstName,
        lastName

    })
    res.json({
        message: "Signup succeeded"
    })
})

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        jwt.sign ({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    } else {
        res.json({
        message: "Incorrect credentials"
    })
}}
)

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}