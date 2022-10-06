import React, {useEffect, useState} from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import ProductItem from './ProductItem'

function Products(){
    const [list] = useAutoAnimate(/* optional config */)
    let [products, setProducts] = useState([]);
    function getProducts(){
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data) => {
            setProducts(prevProducts => prevProducts = data.products);
        })
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <div>
                <div className="bg-gray-100 ">
                    <div className="mx-auto container py-8">
                        <div ref={list} className="flex flex-wrap items-center lg:justify-between justify-center">
                            { 
                                products.map(product => <ProductItem  key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Products