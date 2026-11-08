// Import the express module
import express from "express";

// Create an instance of an express application
const app = express();

// Define a port number
const PORT = 3002;

// Variable to store contact data
const contacts = [];

// Set view engine to EJS
app.set("view engine", "ejs");

// Add "middleware" to allow the app to parse form data
// Access form data through req.body
app.use(express.urlencoded({ extended: true }));

// Enable static file serving
app.use(express.static("public"));

// Define a defaule route ("/")
app.get("/", (req, res) => {
  res.render("home");
});

// Define a conformation route
app.post("/confirm", (req, res) => {
  const contact = req.body;
  contact.timestamp = new Date();

  console.log(contact);

  contacts.push(contact);
  console.log(contacts);
  res.render("confirm");
});

// Define an admin route
app.get("/admin", (req, res) => {
  res.render("admin", {contacts});
});
// Start the server on the designated port
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
