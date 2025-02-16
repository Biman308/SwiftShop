async function userLogout(req, res) {
    try {
        res.clearCookie("token")
        // This is a method provided by Express.js to remove a cookie that was previously set in the client's browser.
        // "token": This is the name of the cookie that you want to clear.

        res.json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}


module.exports = userLogout;