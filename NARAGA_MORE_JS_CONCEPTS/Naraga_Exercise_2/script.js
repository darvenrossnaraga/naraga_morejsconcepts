const person = {
    name: "Alice",
    age: 25,
    hobbies: ["Reading", "Gaming", "Traveling"]
};

document.getElementById('output').textContent = JSON.stringify(person, null, 2);
