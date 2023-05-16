const userModel = require("../model/person");
const passwordUtil = require("./hash_match_password");

const check = async (emaill, password) => {

    try {
        const user = await userModel.findOne({ email: emaill });
        if (user == null) {
            return null;
        }
        else {
            const isPasswordMatching = await passwordUtil.matchPassword(password, user.password);
            if (isPasswordMatching) {
                return true;
            }
            else {
                console.log(user);
                return false;
            }
        }
    } catch (error) {

    }
}

module.exports = check;