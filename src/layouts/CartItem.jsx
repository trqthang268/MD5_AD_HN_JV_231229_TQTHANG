import { DeleteOutlined } from '@ant-design/icons'
import React, { useContext } from 'react'
import { GlobalContext } from '../contents/Global';

export default function CartItem({ cart }) {
    const { carts,setCarts } = useContext(GlobalContext);

    const handlePlusQuantity = (id) =>{
        const newCarts = [...carts];
        const index = newCarts.findIndex((item) => item.id === id);
        newCarts[index].quantity += 1;
        setCarts(newCarts);
        localStorage.setItem("carts", JSON.stringify(newCarts));
    };

    const handleMinusQuantity = (id) =>{
        const newCarts = [...carts];
        const index = newCarts.findIndex((item) => item.id === id);
        newCarts[index].quantity -= 1;
        setCarts(newCarts);
        localStorage.setItem("carts", JSON.stringify(newCarts));
        if(newCarts[index].quantity === 0){
            handleDeleteCart(id);
        }
    };

    const handleDeleteCart = (id) =>{
        const newCarts = [...carts];
        const index = newCarts.findIndex((item) => item.id === id);
        newCarts.splice(index,1);
        setCarts(newCarts);
        localStorage.setItem("carts", JSON.stringify(newCarts));
    };
    
  return (
      <>
      <li className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            className="h-14 border p-1 w-14 object-cover rounded-full"
            src={cart.product.image}
            alt=""
          />
        <div className='text-white'>{cart.product.product_name}</div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex gap-3">
            <button onClick={()=>handlePlusQuantity(cart.id)} className="h-6 leading-4 px-2 border rounded">+</button>
            <span>{cart.quantity}</span>
            <button onClick={()=>handleMinusQuantity(cart.id)} className="h-6 leading-4 px-2 border rounded">-</button>
          </div>
          <DeleteOutlined onClick={()=>handleDeleteCart(cart.id)} className="cursor-pointer p-2 hover:bg-slate-50 rounded-full hover:text-black" />
        </div>
      </li>
      </>
  )
}
