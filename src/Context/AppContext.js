import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [addCart, setAddCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [productDetail, setproductDetail] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'datagram-products-v1.p.rapidapi.com',
            },
        };
        const API = async () => {
            await axios
                .request(options)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        API();
    }, []);
    return (
        <AppContext.Provider
            value={{ addCart, setAddCart, products, setProducts, visible, setVisible, productDetail, setproductDetail }}
        >
            {children}
        </AppContext.Provider>
    );
};
