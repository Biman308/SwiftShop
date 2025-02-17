
const baseURL = process.env.REACT_APP_BACKEND_URL;

const SummaryApi = {
  signUP: {
    url: `${baseURL}/api/signup`,
    method: "POST",
  },
  signIn: {
    url: `${baseURL}/api/signin`,
    method: "POST",
  },
  current_user: {
    url: `${baseURL}/api/user-details`,
    method: "GET",
  },
  logout_user: {
    url: `${baseURL}/api/userLogout`,
    method: "GET",
  },
  allUser: {
    url: `${baseURL}/api/all-user`,
    method: "GET",
  },
  updateUser: {
    url: `${baseURL}/api/update-user`,
    method: "POST",
  },
  uploadProduct: {
    url: `${baseURL}/api/upload-product`,
    method: "POST",
  },
  allProduct: {
    url: `${baseURL}/api/get-product`,
    method: "GET",
  },
  updateProduct: {
    url: `${baseURL}/api/update-product`,
    method: "POST",
  },
  categoryProduct: {
    url: `${baseURL}/api/get-categoryProduct`,
    method: "GET",
  },
  categoryWiseProduct: {
    url: `${baseURL}/api/category-product`,
    method: "POST",
  },
  productDetails: {
    url: `${baseURL}/api/product-details`,
    method: "POST",
  },
  addToCartProduct: {
    url: `${baseURL}/api/addtocart`,
    method: "POST",
  },
  addToCartProductCount: {
    url: `${baseURL}/api/countAddToCartProduct`,
    method: "GET",
  },
  addToCartProductView: {
    url: `${baseURL}/api/view-cart-product`,
    method: "GET",
  },
  updateCartProduct: {
    url: `${baseURL}/api/update-cart-product`,
    method: "POST",
  },
  deleteCartProduct: {
    url: `${baseURL}/api/delete-cart-product`,
    method: "POST",
  },
  searchProduct: {
    url: `${baseURL}/api/search`,
    method: "GET",
  },
  filterProduct: {
    url: `${baseURL}/api/filter-product`,
    method: "POST",
  },
};

export default SummaryApi;
