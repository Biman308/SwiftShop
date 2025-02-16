const userModel = require("../../models/userModels")

async function updateUser(req, res) {
    try {
        const sessionUser = req.userId
        // xtracts the userId from the request object

        const { userId, email, name, role } = req.body
        // userId, email, name, and role properties from the req.body object.

        const payload = {
            ...(email && { email: email }),
            // If email is truthy then email field is added to the payload object. as for all below.
            ...(name && { name: name }),
            ...(role && { role: role }),
        }

        const user = await userModel.findById(sessionUser)

        console.log("user.role", user.role)

        const updateUser = await userModel.findByIdAndUpdate(userId, payload)

        res.json({
            data: updateUser,
            message: "User Updated",
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = updateUser