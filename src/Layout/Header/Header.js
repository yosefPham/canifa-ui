import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import config from '~/config';
import MenuItem from './MenuItem';
import styles from './Header.module.scss';

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
                <Form className={cx('d-flex')}>
                    <Form.Control type="search" placeholder="Search" className={cx('me-2')} aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </header>
            <div className={cx('header-child')}>
                <div className={cx('child-onlyHome')}>
                    <p>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày</p>
                </div>
                <div className={cx('header-child-navbar')}>
                    <span>Sản phẩm mới</span>
                    <span>Áo quần</span>
                    <span>Phụ kiện</span>
                    <span>Giá tốt</span>
                </div>
            </div>
        </aside>
    );
}

export default Header;
