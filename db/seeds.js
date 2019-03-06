const mongoose = require("./connection.js");
const Owner = require("../models/owner.js");
// const Pet = require("../models/pet.js");
const Restaurant = require("../models/restaurant.js");
//creates Schema for each model

const lindsey = new Owner({
    name: "Lindsey Smith",
    age: 24,
    city: "Atlanta, GA",
    petName: [],
    handle: "N/A",
    imgLink: ""
});

const betty = new Owner({
    name: "Betty Rozema",
    age: 25,
    city: "Atlanta, GA",
    petName: [],
    handle: "themamabetty",
    imgLink: ""
});

// const kenzie = new Pet({
//     name: "Kenzie",
//     age: 3,
//     city: "Atlanta, GA",
//     breed: "Mutt",
//     ownerName: "Lindsey Smith"
// });

const midway = new Restaurant({
    name: "The Midway",
    address: "552 Flat Shoals Ave SE, Atlanta, GA 30316",
    rating: 4.4,
    patio: true,
});

const dakotaBlue = new Restaurant({
    name: "Dakota Blue",
    address: "454 Cherokee Ave SE, Atlanta, GA 30312",
    rating: 4.2,
    patio: true,
});

Owner.remove({})
    .then(() => Owner.create([lindsey, betty]))
    .then(() => Restaurant.create([midway, dakotaBlue]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));