const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token
        // extract a cookie named token from the request object in an Express.js application.

        console.log("token", token)
        if (!token) {
            // if token is undefined, null, an empty string, 0, NaN, or false
            return res.status(200).json({
                message: "Please Login!",
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            console.log(err)
            console.log("decoded", decoded)

            if (err) {
                console.log("error auth", err)
            }

            req.userId = decoded?._id

            next()
        });


    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        })
    }
}


module.exports = authToken