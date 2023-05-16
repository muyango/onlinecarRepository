const router = require("express").Router();
const userModel = require("../../model/person");
const passwordUtil = require("../../Helpers/hash_match_password");
const Validation = require("../../middlewares/userValidation");
const checkCredentials = require("../../Helpers/checkCredentials");
const generateToken = require("../../Helpers/tokenGenerator");
const checkAuth = require("../../middlewares/checkAuthentication");
const uploadCloudinary = require("../../middlewares/cloudinarySetting");
const carModel = require("../../model/carEntity")

router.post("/signup", async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = await passwordUtil.hashPassword(req.body.password);
    const user = new userModel({ fname, lname, email, password })
    try {
        const data = await user.save();
        res.status(200).json({ "message": "successfully saved user" });
    } catch (error) {
        res.status(400).json({ "message": error });
    }

})


router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isMatching = await checkCredentials(email, password);
    if (isMatching == true) {
        const token = await generateToken(email);
        res.status(200).json({ "message": "logged in successful", "token": token })
    }
    else if (isMatching == null) {
        res.status(204).json({ "message": "cant find user" })
    }
    else {
        res.status(203).json({ "message": "password not matching phone number" })
    }

})



router.post("/addcar", checkAuth, async (req, res) => {
    try {
        const car = new carModel(req.body)
        const data = car.save();
        res.json({ "message": "saved car successfully" });
    } catch (error) {
        res.status(300).json({ "message": error.message })
    }
})

router.post("/addcustomer", checkAuth, async (req, res) => {
    try {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const role="customer"
        const user = new userModel({ fname, lname, email,role })
        const data = user.save();
        res.json({ "message": "saved customer successfully" });
    } catch (error) {
        res.status(200).json({ "message": error.message })
    }
})



module.exports = router;
