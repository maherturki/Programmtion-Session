const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user"); 

// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//         .then((hash) => {
//             const user = new User({
//                 email: req.body.email,
//                 password: hash,
//             });
//             user.save()
//                 .then((response) => {
//                     const newUser = response.toObject(); // toobject : convert objet mongoose l objet js
//                     delete newUser.password;
//                     res.status(201).json({
//                         user: newUser,
//                         message: "User created!",
//                     });
//                 })
//                 .catch((error) => res.status(400).json({ error: error }));
//         })
//         .catch((error) => res.status(500).json({ error: error.message }));
// };

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                role: req.body.role, 
            });

            user.save()
                .then((response) => {
                    res.status(201).json({
                        user: {
                            _id: response._id,
                            email: response.email,
                            firstname: response.firstname,
                            lastname: response.lastname,
                            role: response.role,
                        },
                        message: "User created!",
                    });
                })
                .catch((error) => res.status(400).json({ error: error }));
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ message: "Login or password incorrect" });
            }

            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ message: "Login or password incorrect" });
                    }

                    const token = jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                        expiresIn: "24h",
                    });

                    res.status(200).json({
                        token: token,
                        expiresIn: "24h",
                    });
                })
                .catch((error) => res.status(500).json({ error: error.message }));
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

//popluate besh yraj3 les données lkol te3 authoer heka : .popluate('author'), w tji 9bal el then