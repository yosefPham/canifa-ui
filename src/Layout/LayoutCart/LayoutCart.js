import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState, useContext, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import { NavLink } from 'react-router-dom';

import styles from './LayoutCart.module.scss';
import config from '~/config';
import { AppContext } from '~/Context/AppContext';

const cx = classNames.bind(styles);
function LayoutCart() {
    const { addCart, visible, setVisible } = useContext(AppContext);
    const [quantity, setQuantity] = useState(1);
    const quantity1 = 0;
    const handleDown = (index) => {
        index = index - 1;
        setQuantity(index);
    };
    const handleUp = (index) => {
        index = index + 1;
        setQuantity(index);
    };

    const handleVisible = () => {
        visible === true ? setVisible(false) : setVisible(true);
    };
    return (
        <>
            <Tippy
                interactive
                visible={visible}
                placement="bottom-start"
                offset={(10, 20)}
                render={(attrs) => (
                    <div className={cx('layout-cart')} tabIndex="-1" {...attrs}>
                        <h4>({addCart.length}) sản phẩm trong giỏ hàng</h4>
                        <div className={cx('products-cart')}>
                            {addCart.map((data, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={cx(quantity === 0 ? ['products', 'delete-product'] : 'products')}
                                    >
                                        <div className={cx('products-description')}>
                                            <div className={cx('products-image')}>
                                                <img src={data.image} alt="sản phẩm đã thêm" />
                                            </div>
                                            <div>
                                                <h3>{data.title}</h3>
                                                <p>size: M</p>
                                                <h5>{data.price}</h5>
                                            </div>
                                        </div>
                                        <div className={cx('products-add-more')}>
                                            <span onClick={() => quantity1 - 1}>-</span>
                                            <p>{quantity1}</p>
                                            <span onClick={() => quantity1 + 1}>+</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <NavLink onClick={handleVisible} to={config.routes.cart} className={cx('button')}>
                            XEM GIỎ HÀNG
                        </NavLink>
                        <h4 className={cx('total-price')}>
                            Tổng tạm tính
                            <p>{addCart.reduce((newPrice, currentValue) => newPrice + currentValue.price, 0)} $</p>
                        </h4>
                    </div>
                )}
                onClickOutside={() => setVisible(false)}
            >
                <aside
                    onClick={handleVisible}
                    className={cx(visible === true ? ['wrapper', 'icon-cart-selected'] : 'wrapper')}
                >
                    <FontAwesomeIcon
                        className={cx(visible === true ? ['icon-cart', 'icon-cart-selected'] : 'icon-cart')}
                        icon={faBagShopping}
                    />
                    <span
                        className={cx(addCart.length === 0 ? ['quantity-cart', 'quantity-cart-zero'] : 'quantity-cart')}
                    >
                        <p>{addCart.length}</p>
                    </span>
                </aside>
            </Tippy>
        </>
    );
}

export default LayoutCart;
