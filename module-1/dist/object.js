"use strict";
const user = {
    name: "John",
    email: "john@gmail.com",
    age: 30,
    hobbies: ["reading", "travelling"],
    role: [2, "author"],
};
user.name = "Jane Doe"; // OK
// user.email = "john.doe@gmail.com"; // Error: Cannot assign to 'email' because it is a read-only property.
console.log("user", user);
