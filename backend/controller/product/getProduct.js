const productModel = require("../../models/productModel")

const getProductController = async (req, res) => {
    try {
        const allProduct = await productModel.find().sort({ createdAt: -1 })
        // This means the most recently created products will appear first.

        res.json({
            message: "All Product",
            success: true,
            error: false,
            data: allProduct
        })

    } catch (err) {
        res.status(400).json({
            // Sends a JSON response with an HTTP status code of 400 (Bad Request), 
            // indicating that something went wrong.
            message: err.message || err,   // message is not available.
            error: true, 
            success: false
        })
    }

}

module.exports = getProductController