import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import Travel from "./models/travelModules.js";

const app = express();
app.use(express.json());
configDotenv();
app.get("/app", (req, res) => {
    res.send("hello world")
    });
app.post("/app/post", async (req, res) => {
    const { title, description, location, price, rating } = req.body;
    const newTravel = new Travel({ title, description, location, price, rating});
    await newTravel.save();
    res.status(201).json(newTravel);
});


mongoose
.connect(
    process.env.MONGO_URL)
.then(() => console.log("connected to the datavbaase"))
.catch((err) => console.error("MongoDB error:", err));

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
