const mongoose = require("./connection.js");
const Owner = require("../models/owner.js");
const Pet = require("../models/pet.js");
const Restaurant = require("../models/restaurant.js");

const lindsey = new Owner({
    name: "Lindsey Smith",
    age: 24,
    city: "Atlanta, GA",
    petName: "Kenzie"
});

const kenzie = new Pet({
    name: "Kenzie",
    age: 3,
    city: "Atlanta, GA",
    breed: "Mutt",
    ownerName: "Lindsey Smith"
});

const midway = new Restaurant({
    name: "The Midway",
    address: "552 Flat Shoals Ave SE, Atlanta, GA 30316",
    rating: 4.4,
    patio: true,
});