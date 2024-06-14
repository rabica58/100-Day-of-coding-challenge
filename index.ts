//                        *Day 15 of coding challenge*  //

// Question 1: Making Enums for vehicles: Let's create categories for vehicles like cars,trucks,
// and motorcycles using enums, and show one example.

enum VehicleType {
    Car,
    Truck,
    motorcycles,
    Train,
    aeroplane
}
console.log(VehicleType);

//                        *Day 16 of coding challenge*   //

// Question 2: Making a Student Template: Create a blueprint for student information, including their name,
// age, and the classes they're taking, and then fill in this blueprint with an example student.

// Creating a blueprint (interface) for student information.
interface Student {
    name: string,
    age: number,
    courses: string[];
}
let student: Student = {
    name: "Justin",
    age: 21,
    courses: ["English", "Biology", "Banking"]
}
console.log(student);

//                         *Day 17 of coding challenge*  //

// Question 3: The function mixes a text and a number into one text joins the text and number into a singal text
// trying it out with "Age": and 30

function combineNumber1(text: string, number: number): string {
    return text + number;
}
console.log(combineNumber1("Age: ", 30));


