// This is an EXAMPLE of a checkpoint, your implementation and design may be different

// All whitespace in JS can be ignored, use it to make your code easier to read
let dealership = [
    {
        make:"Honda",
        model:"Civic",
        year:2020,
        features: [
            "XM Radio", "Heated Seats", "GPS Navigation"
        ]
    },
    {
        make:"BMW",
        model:"X5",
        year:2019,
        features: [
            "OnStar Assistance", "Heads Up Display", "GPS Navigation"
        ]
    },
    {
        make:"Ford",
        model:"F150",
        year:2021,
        features: [
            "Towing Hitch", "4 Seats", "20 MPG"
        ]
    },
];

for (let i = 0; i < dealership.length; ++i) {
    // This is a JavaScript formatted string, like f-strings in Python or prinf in C
    console.log(`${dealership[i].year} ${dealership[i].make} ${dealership[i].model}`);
    for (let j = 0; j < dealership[i].features.length; ++j) {
        console.log(`  -> ${dealership[i].features[j]}`)
    }
}