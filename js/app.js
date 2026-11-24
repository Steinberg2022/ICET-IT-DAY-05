console.log("Hello, World!");
let saman = {
    name: "Saman",
    age: 25,
    proffesion: "Software Engineer"

}

console.log(saman);

let contries = [
    {
        name: "America",
        year: 1776,
        places: [
            {
                name: "Liberty statue",
                state: "NYC"
            },
            {
                name: "White house",
                state: "Washington"
            },
            {
                name: "Grand Canyon",
                state: "Arizona"
            },
            {
                name: "Hollywood",
                state: "California"
            },
            {
                name: "Disneyland",
                state: "California"
            },
            {
                name: "Golden Gate Bridge",
                state: "California"
            },
            {
                name: "Times Square",
                state: "NYC"
            },
            {
                name: "Yellowstone National Park",
                state: "Wyoming"
            }
        ]
    },
    {
        name: "Pakistan",
        year: 1947,
        places: [
            {
                name: "Mazar-e-Quaid",
                state: "Karachi"
            },
            {
                naame: "Faisal Mosque",
                state: "Islamabad"
            },
            {
                name: "Lahore Fort",
                state: "Lahore"
            }
        ]
    },
    {
        name: "Bangaladesh",
        year: 1929,
        places: [
            {
                name: "Lalbagh Fort",
                state: "Dhaka"
            },
            {
                name: "Ahsan Manzil",
                state: "Dhaka"
            },
            {
                name: "Jatiyo Sangsad Bhaban",
                state: "Dhaka"
            }
        ]
    }
]

function myFunction() {
    console.log(contries);

    console.log(contries[0].places[0].name);
}

let certainCountry = function (countryCode) {
    console.log(contries[countryCode].name);
}

console.log(certainCountry(0));

let certainPlace =(countryCode, placeCode) => contries[countryCode].places[placeCode].name;


console.log(certainPlace(0, 0));