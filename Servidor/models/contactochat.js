const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  comentario: String,
  
});

const UserModel3 = mongoose.model("contactochat", UserSchema);

module.exports = UserModel3;