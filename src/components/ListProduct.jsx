import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { GlobalContext } from '../contents/Global'

export default function ListProduct() {
    const { products } = useContext(GlobalContext)
    return (
      <>
        <main className="px-6">
        <h1 className="text-center py-4 text-2xl font-bold">DANH SÁCH SẢN PHẨM</h1>
        <div className="grid grid-cols-5 px-10 py-5 gap-4">
            {
                products.map((pro) => {
                    return <ProductItem product={pro} key={pro.id} />
             })           
            }
        </div>
        </main>
    </>
  )
}
