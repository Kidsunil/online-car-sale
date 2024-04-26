// Mock data for car details
let cars = [
    {
        id: 1,
        name: "Toyota Camry",
        image: "../images/car1.webp",
        make: "Toyota",
        model: "Camry",
        year: 2022,
        mileage: 10000,
        location: "New York",
        price: "$25,000",
        description: "The Toyota Camry is a reliable and comfortable sedan with excellent fuel efficiency."
    },
    {
        id: 2,
        name: "Honda Civic",
        image: "../images/car2.webp",
        make: "Honda",
        model: "Civic",
        year: 2021,
        mileage: 15000,
        location: "Los Angeles",
        price: "$22,000",
        description: "The Honda Civic is a compact car known for its sporty handling and modern features."
    },
    {
        id: 3,
        name: "Ford Mustang",
        image: "../images/car3.webp",
        make: "Ford",
        model: "Mustang",
        year: 2023,
        mileage: 5000,
        location: "Chicago",
        price: "$35,000",
        description: "The Ford Mustang is an iconic American muscle car with powerful performance and sleek design."
    }
];

// Get the car ID from the URL query parameter
let urlParams = new URLSearchParams(window.location.search);
let carId = urlParams.get("id");

// Find the car details based on the ID
let car = cars.find(function (car) {
    return car.id === parseInt(carId);
});

// Update the car details on the page
if (car) {
    document.getElementById("car-name").textContent = car.name;
    document.getElementById("car-image").src = car.image;
    document.getElementById("car-make").textContent = car.make;
    document.getElementById("car-model").textContent = car.model;
    document.getElementById("car-year").textContent = car.year;
    document.getElementById("car-mileage").textContent = car.mileage;
    document.getElementById("car-location").textContent = car.location;
    document.getElementById("car-price").textContent = car.price;
    document.getElementById("car-description").textContent = car.description;
}