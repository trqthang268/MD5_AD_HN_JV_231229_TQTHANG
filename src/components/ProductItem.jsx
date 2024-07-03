import { ShoppingCartOutlined } from '@ant-design/icons'
import React, { useContext } from 'react'
import { GlobalContext } from '../contents/Global'

export default function ProductItem({ product }) {
    const { handleAddToCart,handleFormatMoney } = useContext(GlobalContext);

  return (
      <>
      <div className="border rounded shadow-md ">
            <img
                className="w-full max-h-[300px] min-h-[300px] object-cover"
                src={product.image}
                alt=""
            />
            <div className="p-4 flex flex-col gap-4 flex-1">
                <h3 className="font-semibold text-center">
                    {product.product_name}
                </h3>
                <div className="text-center">{handleFormatMoney(product.price)}</div>
                <div className="text-center ">
                <button onClick={()=>handleAddToCart(product)} className="outline-none bg-blue-500 text-white hover:bg-blue-400 focus:bg-blue-600 border px-4 h-9 rounded cursor-pointer">
                    <ShoppingCartOutlined className='bottom-1'/>
                          {"  "}Thêm vào giỏ hàng
                </button>
                </div>
            </div>
        </div>
      </>  
)
}
