import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const app = express();
configDotenv();
app.get("/app", (req, res) => {
    res.send("hello world")
    })
mongoose
.connect(
    process.env.MONGO_URL)
.then(() => console.log("connected to the datavbaase"))
.catch((err) => console.error("MongoDB error:", err));

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

// wqhOfp17YZngbskQ