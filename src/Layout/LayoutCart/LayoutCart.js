import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState, useEffect, useRef } from 'react';

import styles from './LayoutCart.module.scss';

const cx = classNames.bind(styles);
function LayoutCart({ data }) {
    return (
        <aside className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('icon-cart')} icon={faBagShopping} />
            <span className={cx('quantity-cart')}>
                <p>3</p>
            </span>
        </aside>
    );
}

export default LayoutCart;
