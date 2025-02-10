import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";

const app = express();

// CORS configuration to allow only your frontend URL
const corsOptions = {
  origin: "*",  // Allow frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allow specific HTTP methods
  allowedHeaders: ["Content-Type"],  // Allow headers
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is from the Backend.");
});

app.get("/test", (req, res) => {
  res.send("This is a test route for the backend.");
})

// MongoDB connection
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
})


export default app;