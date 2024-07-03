import { ShoppingCartOutlined } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../contents/Global'
import Cart from './Cart';

export default function Header() {
    const { cartLength } = useContext(GlobalContext);
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();

    const showDrawer = () => {
        if(open === true) {
            setOpen(false);
        }else{
            setOpen(true);
        }
    };
    const onClose = () => {
        setOpen(false);
    };
  return (
      <>
        <header className="sticky top-0 z-20 bg-orange-400 w-full px-10 py-4 flex items-center justify-between text-white">
        <ul className="flex  gap-4 cursor-pointer">
        <li>Trang chủ</li>
        <li>Danh sách sản phẩm</li>
        </ul>
        <ul>
            <li className="cursor-pointer">
                <ShoppingCartOutlined className='relative text-2xl' onClick={showDrawer}/>
            <span className="text-sm absolute right-5 top-2 bg-red-600 px-2 rounded-xl">
                {cartLength > 9 ? "9+" : cartLength}
            </span>
            </li>
              </ul>
              <Cart onClick={()=>onClose()} open={open} onClose={onClose}/>
            
        </header>
      </>
  )
}
