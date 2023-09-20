import React, { useState, useEffect } from 'react';
import './Loja.css'

export const Loja = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
    const url = ('https://fakestoreapi.com/products');
    const response = await fetch(url);
    const objetoJson = await response.json();
    setData(objetoJson)
    }
    fetchApi();
  },[])

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
            </div>
          ))
        }
      </div>
    </div>
  )
}
