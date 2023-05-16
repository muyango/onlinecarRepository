require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateToken = async (email) => {
    const token = await jwt.sign({ email },
        process.env.TOKEN_SECRET,
        {
            expiresIn: "1h"
        }

    )
    return token;
}

module.exports = generateToken;