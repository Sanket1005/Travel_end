import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/app", (req, res) => {
    res.send("hello world")
    })
mongoose
.connect(
    "mongodb+srv://sanketshrestha1974_db_user:wqhOfp17YZngbskQ@cluster0.5twbtqj.mongodb.net/?appName=Cluster0")
.then(() => console.log("connected to the datavbaase"))
.catch((err) => console.error("MongoDB error:", err));

app.listen(3000, () => {
    console.log("server is running on port 3000");
});

// wqhOfp17YZngbskQ