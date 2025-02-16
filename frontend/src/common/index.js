// This object organizes and stores information about different API endpoints

const SummaryApi = {
    signUP: {
        url: 'http://localhost:8080/api/signup',
        method: 'POST',
    },
    signIn: {
        url: 'http://localhost:8080/api/signin',
        method: 'POST',
    },
    current_user: {
        url: 'http://localhost:8080/api/user-details',
        method: "GET"
    },
    logout_user: {
        url: 'http://localhost:8080/api/userLogout',
        method: "GET"
    },
    allUser: {
        url: 'http://localhost:8080/api/all-user',
        method: 'GET'
    },
    updateUser: {
        url: 'http://localhost:8080/api/update-user',
        method: "POST"
    },
    uploadProduct: {
        url: 'http://localhost:8080/api/upload-product',
        method: 'POST'
    },
    allProduct: {
        url: 'http://localhost:8080/api/get-product',
        method: 'GET'
    },
    updateProduct: {
        url: 'http://localhost:8080/api/update-product',
        method: 'POST'
    },
    categoryProduct: {
        url: 'http://localhost:8080/api/get-categoryProduct',
        method: 'GET'
    },
    categoryWiseProduct: {
        url: 'http://localhost:8080/api/category-product',
        method: 'POST'
    },
    productDetails: {
        url: 'http://localhost:8080/api/product-details',
        method: 'POST'
    },
    addToCartProduct: {
        url: 'http://localhost:8080/api/addtocart',
        method: 'POST'
    },
    addToCartProductCount: {
        url: 'http://localhost:8080/api/countAddToCartProduct',
        method: 'GET'
    },
    addToCartProductView: {
        url: 'http://localhost:8080/api/view-cart-product',
        method: 'GET'
    },
    updateCartProduct: {
        url: 'http://localhost:8080/api/update-cart-product',
        method: 'POST'
    },
    deleteCartProduct: {
        url: 'http://localhost:8080/api/delete-cart-product',
        method: 'POST'
    },
    searchProduct: {
        url: 'http://localhost:8080/api/search',
        method: 'GET'
    },
    filterProduct: {
        url: 'http://localhost:8080/api/filter-product',
        method: 'POST'
    }
}


export default SummaryApi;