import classNames from 'classnames/bind';
import React, { useState, useEffect, useRef } from 'react';

import styles from './AddToCart.module.scss';

const cx = classNames.bind(styles);
function AddToCart({ data }) {
    const [showResult, setShowResult] = useState(false);

    const refOne = useRef(null);

    const handleClickOutside = (e) => {
        if (!refOne?.current?.contains(e.target)) {
            setShowResult(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
    }, []);

    function SizeGroup() {
        const [active, setActive] = useState(null);
        return (
            <>
                <div className={cx('sizes')}>
                    {sizes.map((size) => (
                        <p className={cx(active === size ? 'selected' : '')} key={size} onClick={() => setActive(size)}>
                            {size}
                        </p>
                    ))}
                </div>
                <span className={cx(active === null ? 'button' : ['button', 'button-add-cart'])}>THÊM VÀO GIỎ</span>
            </>
        );
    }
    const sizes = [90, 100, 110, 120, 130, 140, 150];
    return (
        <aside>
            <div
                onClick={() => setShowResult(true)}
                className={cx(showResult === true ? ['add-cart', 'clicked'] : 'add-cart')}
            >
                THÊM VÀO GIỎ HÀNG
            </div>
            <div
                ref={refOne}
                className={cx(
                    showResult === true ? ['layout-add-cart', 'layout-add-cart-selected'] : 'layout-add-cart',
                )}
            >
                <h4>Vui lòng chọn size</h4>

                <SizeGroup />
            </div>
        </aside>
    );
}

export default AddToCart;
