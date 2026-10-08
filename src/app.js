const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Error:", err));

const serviceSchema = new mongoose.Schema({
    serviceId: String,
    vehicleNumber: String,
    customerName: String,
    serviceType: String,
    serviceDate: String,
    cost: Number
});

const Service = mongoose.model("Service", serviceSchema);

app.get("/", async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

app.get("/services", async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

app.delete("/services/:serviceId", async (req, res) => {
    await Service.deleteOne({
        serviceId: req.params.serviceId
    });

    res.json({ message: "Service deleted" });
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000");
});