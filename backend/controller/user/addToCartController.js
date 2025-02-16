const addToCartModel = require("../../models/cartProduct")

const addToCartController = async (req, res) => {
    try {
        const { productId } = req?.body
        // extract the productId property from the req.body object.
        const currentUser = req.userId

        // Check if the product is already in the cart
        const isProductAvailable = await addToCartModel.findOne({ productId })

        console.log("isProductAvailable   ", isProductAvailable)

        if (isProductAvailable) {
            return res.json({
                message: "Already exists in the cart",
                success: false,
                error: true
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()


        return res.json({
            data: saveProduct,
            message: "Product added in cart",
            success: true,
            error: false
        })


    } catch (err) {
        res.json({
            message: err?.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = addToCartController