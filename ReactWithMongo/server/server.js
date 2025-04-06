require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:",
        err));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to Product API with MongoDB!");
});



const Product = require("./models/product.js"); 
 
app.get("/products", async (req, res) => { 
  try { 
    const products = await Product.find(); 
    res.json(products); 
  } catch (error) { 
    res.status(500).json({ message: error.message }); 
  } 
  
}); 



app.listen(port, () => {
    console.log(`Server is running at 
http://localhost:${port}`);
});