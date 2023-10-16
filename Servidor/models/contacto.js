<<<<<<< HEAD
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  comentario: String,
  
});

const UserModel3 = mongoose.model("contacto", UserSchema);

=======
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  comentario: String,
  
});

const UserModel3 = mongoose.model("contacto", UserSchema);

>>>>>>> f20942aefa2dfc8153ea9464563327053d7f5db3
module.exports = UserModel3;