import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contents/Global'
import CartItem from './CartItem'
import { CloseOutlined } from '@ant-design/icons';

export default function Cart({open,onClose}) {
    const { carts, handleFormatMoney } = useContext(GlobalContext);
    const [totalPrice, setTotalPrice] = useState(0);
    /**
     * hàm tính tổng tiền
     */
    const calculateTotalPrice = () => {
        const total = carts.reduce((acc, pro) => {
            return acc + (pro.product.price * pro.quantity);
        }, 0)
        
        setTotalPrice(total);
    }
    
    //gọi hàm tính tổng tiền khi component được render hoặc khi giỏ hàng thay đổi
    useEffect(() => {
        calculateTotalPrice();
    }, [carts]);
  return (
      <>
        {open && <div className="fixed right-1 top-16 " open={open}>
        <div className="bg-black w-[550px] text-white rounded px-5 py-4">
            <div className='flex'><h3 className=" font-semibold text-2xl mb-2">Cart</h3><button className='ml-[450px]' onClick={onClose}><CloseOutlined /></button></div>
            <hr />
            <ul className="flex flex-col gap-4 mt-3 pr-5 min-h-[300px] max-h-[500px] overflow-auto">
                {carts.map((item) => {
                return <CartItem cart={item} key={item.id}/>
            })}               
            
            </ul>
            <hr className="mt-5" />
            <footer className="flex items-center gap-5 pt-5">
            <span>Tổng tiền:</span>
            <span>{handleFormatMoney(totalPrice)}</span>
            </footer>
        </div>
    </div>}

      </>
  )
}
