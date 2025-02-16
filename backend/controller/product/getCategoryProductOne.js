const productModel = require("../../models/productModel")


const getCategoryProduct = async (req, res) => {
    try {
        const productCategory = await productModel.distinct("category")
        // Retrieves a list of distinct (unique) categories from the productModel collection. 

        console.log("category", productCategory)

        const productByCategory = []

        for (const category of productCategory) {
            // Iterates over each category in the productCategory array.
            const product = await productModel.findOne({ category })
            // Searches for one product that matches the current category.

            if (product) {
                productByCategory.push(product)
                // Adds the found product to the productByCategory array if a product exists.
            }
        }

        res.json({
            message: "category product",
            data: productByCategory,
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

module.exports = getCategoryProduct