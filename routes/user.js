const { Router } = require("express");

const userRouter = Router();

    userRouter.post("/user/signup", async function (req,res){
        res.json({
            message: "signup endpoint"
        })
    })

    userRouter.post("/user/signin", async function (req,res){
        res.json({
            message: "signup endpoint"
        })
    })

    userRouter.get("/user/purchases", async function (req,res){
        res.json({
            message: "signup endpoint"
        })
    })


module.exports = {
    userRouter: userRouter
}