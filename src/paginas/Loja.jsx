import React, { useState, useEffect } from 'react';
import './Loja.css';
import { BsCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';
import {  getItem , setItem } from '../services/LocalStorageFuncs';

export const Loja = () => {

  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
    const url = ('https://fakestoreapi.com/products');
    const response = await fetch(url);
    const objetoJson = await response.json();
    setData(objetoJson)
    }
    fetchApi();
  },[])

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id)
    if(element) {
      const arrayFilter = cart.filter((e) => e.id !== obj.id)
      setCart(arrayFilter)
      setItem('carrinho',arrayFilter)
    } else {
      setCart([...cart,obj])
      setItem('carrinho',[...cart,obj])
    }
  }

  return (
    <div>
      <h1>Loja</h1>
      <div>
        {
          data?.map((e) => (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img className="imgProduto" src={e.image} alt="" />
              <h4>{e.price}</h4>
              <button
                onClick={() => handleClick(e)}>
                {
                  cart.some((itemCart) => itemCart.id === e.id ) ? (
                    <BsFillCartCheckFill />
                  ) : (
                    <BsCartPlusFill />
                  )
                }
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
