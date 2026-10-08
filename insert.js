const mongoose = require("mongoose");
require("dotenv").config();

const serviceSchema = new mongoose.Schema({
    serviceId: String,
    vehicleNumber: String,
    customerName: String,
    serviceType: String,
    serviceDate: String,
    cost: Number
});

const Service = mongoose.model("Service", serviceSchema);

async function insertRecords() {
    await mongoose.connect(process.env.MONGO_URI);

    await Service.insertMany([
        {
            serviceId: "S001",
            vehicleNumber: "TN38AB1234",
            customerName: "Gowtham",
            serviceType: "Oil Change",
            serviceDate: "2026-10-08",
            cost: 1500
        },
        {
            serviceId: "S002",
            vehicleNumber: "TN37CD5678",
            customerName: "Rahul",
            serviceType: "General Service",
            serviceDate: "2026-10-09",
            cost: 2500
        },
        {
            serviceId: "S003",
            vehicleNumber: "TN40EF9012",
            customerName: "Arun",
            serviceType: "Engine Service",
            serviceDate: "2026-10-10",
            cost: 5000
        }
    ]);

    console.log("Records inserted successfully");
    mongoose.connection.close();
}

insertRecords();