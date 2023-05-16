const userModel = require("../model/person");

const checkEmail = async (req, res, next) => {
    const userEmail = req.body.email;
    const user = await userModel.findOne({ email: userEmail });
    if (user == null) {
        next();
    }
    else {
        res.status(400).json({ message: "email already exists" })
    }
}


module.exports = { checkEmail };