class Products {
  static async getAllProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data.products
  }

  static async addToCart(product) {
    // Add product to cart logic here
  }
}

export default Products
