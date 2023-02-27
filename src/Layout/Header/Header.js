import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import MenuItem from './MenuItem';
import styles from './Header.module.scss';
import { Search } from '~/Layout';
import LayoutCart from '../LayoutCart';

const cx = classNames.bind(styles);

function Header() {
    return (
        <aside className={cx('wrapper')}>
            <header className={cx('header')}>
                <Nav className={cx('me-auto', 'my-2', 'my-lg-0')} style={{ maxHeight: '100px' }} navbarScroll>
                    <NavLink className={cx('home-page')} to={config.routes.home}>
                        <img className={cx('avatar-page')} src="https://canifa.com/assets/images/logo.svg"></img>
                    </NavLink>
                    <MenuItem title="NỮ" to={config.routes.woman} />
                    <MenuItem title="NAM" to={config.routes.man} />
                </Nav>
                <div className={cx('actions')}>
                    <Search />
                    <MenuItem title={<FontAwesomeIcon icon={faUser} />} to={config.routes.user} />
                    <LayoutCart />
                </div>
            </header>
        </aside>
    );
}

export default Header;
