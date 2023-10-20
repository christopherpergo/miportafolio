const express = require("express");
const cors = require("cors");
const UserModel3 = require("./models/contactochat");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://christopherper1990:idvLvNUj0y9jNQtO@cluster0.uzc66s6.mongodb.net/portafolio?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "No se ha podido conectar con MongoDB:"));

db.once("open", function () {
  console.log("Conexión correcta a la base de datos PORTAFOLIO de MongoDB");
});

app.post("/createContacto", (req, res) => {
  UserModel3.create(req.body)
    .then((contactochat) => res.json(contactochat))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Conectado correctamente");
});
