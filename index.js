"use strict";
//                        *Day 15 of coding challenge*  //
// Question 1: Making Enums for vehicles: Let's create categories for vehicles like cars,trucks,
// and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["motorcycles"] = 2] = "motorcycles";
    VehicleType[VehicleType["Train"] = 3] = "Train";
    VehicleType[VehicleType["aeroplane"] = 4] = "aeroplane";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType);
let student = {
    name: "Justin",
    age: 21,
    courses: ["English", "Biology", "Banking"]
};
console.log(student);
//                         *Day 17 of coding challenge*  //
// Question 3: The function mixes a text and a number into one text joins the text and number into a singal text
// trying it out with "Age": and 30
function combineNumber1(text, number) {
    return text + number;
}
console.log(combineNumber1("Age: ", 30));
