const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], required: true },
});


userSchema.virtual("name").get(function () {
    return `${this.firstname} ${this.lastname}`;
});

//userSchema.set("toJSON", { virtuals: true });
//userSchema.set("toObject", { virtuals: true });


userSchema.methods.toPublic = function () {
    const userObject = this.toObject();

    // Supprimer le mot de passe
    delete userObject.password;

    // Ajouter le champ "name"
    userObject.name = this.name;

    return userObject;
};

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
