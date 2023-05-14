var Products = [
    { "name": "shirt", "category": "Clothings" },
    { "name": "pant", "category": "Clothings" },
    { "name": "hat", "category": "Accessories" },
    { "name": "sunglasses", "category": "Accessories" }]

    function filterByCategory(products){
       return function findItem(cat){
        return (products.filter((product)=>product?.category == cat))
       }
    }

    var clothingProducts = filterByCategory(Products)("Clothings")
    console.log(clothingProducts)