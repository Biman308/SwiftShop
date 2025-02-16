const productModel = require("../../models/productModel")

const getCategoryWiseProduct = async (req, res) => {
    try {
        const { category } = req?.body || req?.query
        // used to safely access req.body. If req.body is undefined or null, it will not
        //  throw an error. If req.body exists, it will attempt to access req.body.category.
        // Similarly, this tries to access req.query

        const product = await productModel.find({ category })

        res.json({
            data: product,
            message: "Product",
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

module.exports = getCategoryWiseProduct