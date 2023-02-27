import { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '~/Context/AppContext';
import config from '~/config';
import { Search } from '~/Layout';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
    const { addCart } = useContext(AppContext);

    return (
        <aside className={cx('wrapper')}>
            <header className={cx('header')}>
                <Nav className={cx('me-auto', 'my-2', 'my-lg-0')} style={{ maxHeight: '100px' }} navbarScroll>
                    <NavLink className={cx('home-page')} to={config.routes.home}>
                        <img className={cx('avatar-page')} src="https://canifa.com/assets/images/logo.svg"></img>
                    </NavLink>
                    <NavLink className={cx('pay-page')}>THANH TOÁN ĐƠN HÀNG</NavLink>
                </Nav>
                <NavLink to={config.routes.home} className={cx('keep-shopping')}>
                    TIẾP TỤC MUA SẮM
                </NavLink>
            </header>
            <div className={cx('body')}>
                <div className={cx('process')}>
                    <div className={cx('process-step', 'step-active')}>
                        <span>{/* <FontAwesomeIcon icon={faCheck} /> */}1</span>
                        <h4>Giỏ hàng</h4>
                    </div>
                    <div className={cx('process-step', 'styles-pseudo')}>
                        <span>2</span>
                        <h4>Đặt hàng</h4>
                    </div>
                    <div className={cx('process-step')}>
                        <span>3</span>
                        <h4>Hoàn tất</h4>
                    </div>
                </div>
                <div className={cx('pay-layout')}>
                    <div className={cx('cart-layout')}>
                        <div className={cx('products-cart')}>
                            <div className={cx('shipment-details')}>
                                <div className={cx('details')}>
                                    <h1>Thông tin giao hàng</h1>
                                </div>
                                <div className={cx('comeback-cart')}>
                                    <FontAwesomeIcon />
                                    <p>QUay lại giỏ hàng</p>
                                </div>
                            </div>

                            <div className={cx('service')}>
                                <div className={cx('icon-service')}>
                                    <FontAwesomeIcon icon={faTruckFast} />
                                </div>
                                <h4>Bạn đủ điều kiện để nhận miễm phí vận chuyển</h4>
                            </div>
                            <h1>({addCart.length}) sản phẩm</h1>
                            <div>
                                <thead className={cx('thead')}>
                                    <tr className={cx('products-thead')}>
                                        <th style={{ width: '40%' }}>SẢN PHẨM</th>
                                        <th style={{ width: '20%' }}>GIÁ TIỀN</th>
                                        <th style={{ width: '20%' }}>SỐ LƯỢNG</th>
                                        <th style={{ width: '20%' }}>TỔNG TIỀN</th>
                                    </tr>
                                </thead>
                                <tbody style={{ display: 'block' }}>
                                    {addCart.map((data, index) => (
                                        <tr key={data.id} className={cx('products-title')}>
                                            <td className={cx('products-image')}>
                                                <div className={cx('image')}>
                                                    <img src={data.image} alt="Áo len" />
                                                </div>
                                                <div className={cx('products-description')}>
                                                    <h4>{data.title}</h4>
                                                    <h3>M</h3>
                                                </div>
                                            </td>

                                            <td className={cx('products-price')}>
                                                <h4>{data.price} $</h4>
                                                <h5>499.9 $</h5>
                                            </td>
                                            <td className={cx('products-quatity')}>
                                                <span>-</span>
                                                <p>2</p>
                                                <span>+</span>
                                            </td>
                                            <td className={cx('products-total-money')}>{data.price * 2} $</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </div>
                        </div>
                        <div className={cx('products-pay')}>
                            <div className={cx('products-pay-price')}>
                                <h1>Đơn hàng</h1>
                                <div className={cx('products-pay-price-cost')}>
                                    <p>Giá gốc</p>
                                    <h4>1.343.000đ</h4>
                                </div>
                                <div>
                                    <p>Tổng tiền thanh toán</p>
                                    <h4>1.343.000đ</h4>
                                </div>
                            </div>
                            <div>
                                <div className={cx('endow-layout')}>
                                    <h3>Mã giảm giá/ Thẻ quà tặng</h3>
                                    <form>
                                        <input type="text" placeholder="Nhập mã" />
                                        <button>ÁP DỤNG</button>
                                    </form>
                                </div>
                                <div className={cx('endow-layout')}>
                                    <h3>
                                        <h4>Sử dụng C-point</h4>
                                        <h5>(1 C-point = 1.000đ)</h5>
                                    </h3>
                                    <form>
                                        <input type="text" placeholder="Nhập mã" />
                                        <button>ÁP DỤNG</button>
                                    </form>
                                    <p>Bạn đang có 0 point khả dụng</p>
                                </div>
                                <div className={cx('button-pay')}>
                                    <button>THANH TOÁN</button>
                                    <p>Tích luỹ 0 C-point cho đơn hàng</p>
                                </div>
                            </div>
                            {/* <div className={cx('button-order')}>
                                <button>ĐẶT HÀNG</button>
                                <p>Áp dụng mã giảm giá, C-point tại bước tiếp theo</p>
                            </div>
                            <div className={cx('payments')}>
                                <p>Chúng tôi chấp nhận thanh toán</p>
                                <img src="https://canifa.com/assets/images/payment-note.svg" alt="được" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
export default Cart;
