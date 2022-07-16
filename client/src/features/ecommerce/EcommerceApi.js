export const fetchProducts = () => {
    const products = {}
fetch('/api/products')
.then(res=>res.json())
.then(data=>products.push(data))
.catch(err=> alert(err.message))

}