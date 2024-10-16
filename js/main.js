import Products from './products.js'

window.addEventListener('load', async () => {
  const products = await Products.getAllProducts()
  const productListElement = document.querySelector('.product-list')

  products.forEach((product) => {
    const productElement = document.createElement('div')
    productElement.classList.add('product')

    const productTitleElement = document.createElement('h2')
    productTitleElement.textContent = product.title

    const productPriceElement = document.createElement('p')
    productPriceElement.textContent = `Price: $${product.price}`

    const productImageElement = document.createElement('img')
    productImageElement.src = product.thumbnail

    const addToCartButton = document.createElement('button')
    addToCartButton.textContent = 'Add to Cart'
    addToCartButton.addEventListener('click', () => {
      Products.addToCart(product)
    })

    productElement.appendChild(productTitleElement)
    productElement.appendChild(productPriceElement)
    productElement.appendChild(productImageElement)
    productElement.appendChild(addToCartButton)

    productListElement.appendChild(productElement)
  })
})
