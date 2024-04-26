// Mock data for search results
let cars = [
    {
        id: 1,
        name: "Toyota Camry",
        image: "../images/car1.webp",
        model: "Camry",
        location: "New York"
    },
    {
        id: 2,
        name: "Honda Civic",
        image: "../images/car2.webp",
        model: "Civic",
        location: "Los Angeles"
    },
    {
        id: 3,
        name: "Ford Mustang",
        image: "../images/car3.webp",
        model: "Mustang",
        location: "Chicago"
    }
];

// Function to display search results
function displaySearchResults(results) {
    let searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "";

    if (results.length === 0) {
        searchResultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        let resultList = document.createElement("ul");
        resultList.classList.add("search-result-list");

        results.forEach(function (car) {
            let listItem = document.createElement("li");
            let link = document.createElement("a");
            link.href = "car-details.html?id=" + car.id;

            let image = document.createElement("img");
            image.src = car.image;
            image.alt = car.name;

            let name = document.createElement("h3");
            name.textContent = car.name;

            let model = document.createElement("p");
            model.textContent = "Model: " + car.model;

            let location = document.createElement("p");
            location.textContent = "Location: " + car.location;

            link.appendChild(image);
            link.appendChild(name);
            link.appendChild(model);
            link.appendChild(location);
            listItem.appendChild(link);
            resultList.appendChild(listItem);
        });

        searchResultsContainer.appendChild(resultList);
    }
}

// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault();

    let modelInput = document.getElementById("model");
    let locationInput = document.getElementById("location");

    let model = modelInput.value.trim().toLowerCase();
    let location = locationInput.value.trim().toLowerCase();

    let searchResults = cars.filter(function (car) {
        return (
            car.model.toLowerCase().includes(model) &&
            car.location.toLowerCase().includes(location)
        );
    });

    displaySearchResults(searchResults);
}

// Add event listener to the search form
let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleSearch);