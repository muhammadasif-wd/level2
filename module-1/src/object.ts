const user: {
  name: string;
  readonly email: string; // readonly This is a read-only property and cannot be modified once it is initialized. It is denoted by the readonly keyword before the property name.
  age: number;
  hobbies?: string[]; // optional This is optional property and can be omitted in the object declaration. It is denoted by the question mark (?) after the property name.
  role: [number, string];
} = {
  name: "John",
  email: "john@gmail.com",
  age: 30,
  hobbies: ["reading", "travelling"],
  role: [2, "author"],
};

user.name = "Jane Doe"; // OK
// user.email = "john.doe@gmail.com"; // Error: Cannot assign to 'email' because it is a read-only property.

console.log("user", user);
