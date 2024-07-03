import React, { createContext, useState } from 'react'
import ProductJson from "../data.json"
import Header from '../layouts/Header';
import ListProduct from '../components/ListProduct';

export const GlobalContext = createContext();

export default function Global() {
    //Lấy dữ liệu trên localStorage
    const [carts, setCarts] = useState(() => {
        const cartLocals = JSON.parse(localStorage.getItem("carts")) || [];
        return cartLocals;
    });

    /**
     * hàm lưu và cập nhật dữ liệu 
     * @param {*} data dữ liệu cần lưu
     * @param {*} key key dữ liệu trên localStorage
     */
    const handleSaveData = (key, data) => {
        // Cập nhật vào state
        localStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * 
     * @param {*} product 
     */
    const handleAddToCart = (product) => {
        // Kiểm tra sản phẩm đã tồn tai trong giỏ hàng chưa
        const findIndexProduct = carts.findIndex(
            (cart) => cart.product.id === product.id
        );
        if (findIndexProduct === -1) {
            const newCart = {
                id: Math.ceil(Math.random() * 10000000),
                product: product,
                quantity: 1,
            };
            // Thêm sản phâm vào trong giỏ hàng
            const updateCart = [...carts, newCart];
            setCarts(updateCart);
            handleSaveData("carts",updateCart)
        } else {
            const newCartUpdate = [...carts];
            // Tăng số lượng
            newCartUpdate[findIndexProduct].quantity =
                newCartUpdate[findIndexProduct].quantity + 1;
            
            // Cập nhật vào state
            setCarts(newCartUpdate);

            // lưu vào local
            handleSaveData("carts",newCartUpdate)        }
    }
    
    /**
     * hàm định dạng tiền tệ việt nam
     * @param {*} money chuỗi tiền tệ cân định dạng 
     * @returns chuỗi tiền tệ đã định dạng
     */
    const handleFormatMoney = (money) => {
        return money.toLocaleString("it-IT", { style: "currency", currency: "VND" });
    }


    const dataGlobal = {
        products: ProductJson.products,
        carts,
        setCarts,
        handleAddToCart,
        cartLength: carts.length,
        handleFormatMoney
    }
  return (
      <>
        <GlobalContext.Provider value={dataGlobal}>
              <Header />
              <ListProduct />
        </GlobalContext.Provider>
      </>
  )
}
