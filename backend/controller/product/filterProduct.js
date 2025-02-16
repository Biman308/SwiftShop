const productModel = require("../../models/productModel")

const filterProductController = async (req, res) => {
    try {
        const categoryList = req?.body?.category || []  //accessing req.body.category.  
        // If req.body.category is undefined or null, it defaults to an empty array ([]).

        const product = await productModel.find({
            // await: Pauses the function until the database query completes.
            category: {
                "$in": categoryList
            }
            // Calls the find method on the productModel to search for 
            // the documents in the MongoDB collection.
        })

        res.json({
            // res.json: Sends a JSON response to the client.
            data: product,
            message: "product",
            error: false,
            success: true
        })

    } catch (err) {
        // catch (err): Catches any errors that occurred in the try block.
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = filterProductController