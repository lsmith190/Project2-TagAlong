const mongoose = require("./connection.js");
const Owner = require("../models/owner.js");
const Pet = require("../models/pet.js");
const Restaurant = require("../models/restaurant.js");
//creates Schema for each model

const lindsey = new Owner({
    name: "Lindsey Smith",
    age: 24,
    city: "Atlanta, GA",
    petName: "Kenzie",
    handle: "N/A",
    imgLink: "https://imgur.com/8K8vtaO"
});

const betty = new Owner({
    name: "Betty Rozema",
    age: 25,
    city: "Atlanta, GA",
    petName: "Bando",
    handle: "themamabetty",
    // imgLink: ""
});

const kenzie = new Pet({
    name: "Kenzie",
    age: 3,
    city: "Atlanta, GA",
    breed: "Mutt",
    favHobby: "Staring at walls",
    ownerName: "Lindsey Smith",
    imgLink: "file:///Users/lindsey/Downloads/FullSizeR%20(3).jpg"
});

const bando = new Pet({
    name: "Bando",
    age: 5,
    city: "Atlanta, GA",
    breed: "German Shepherd",
    favHobby: "Howling",
    ownerName: "Betty Rozema",
    // imgLink = ""
});

const midway = new Restaurant({
    name: "The Midway",
    address: "552 Flat Shoals Ave SE, Atlanta, GA 30316",
    rating: 4.4,
    patio: "Yes",
    imgLink: "https://footiemob.club/wp-content/uploads/2018/01/The_Midway_Magnum-640x410.jpg"
});

const dakotaBlue = new Restaurant({
    name: "Dakota Blue",
    address: "454 Cherokee Ave SE, Atlanta, GA 30312",
    rating: 4.2,
    patio: "Yes",
});

Owner.remove({})
    .then(() => Owner.create([lindsey, betty]))
    .then(() => Restaurant.create([midway, dakotaBlue]))
    .then(() => Pet.create([kenzie, bando]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));

// .then(() => mongoose.connection.close());