import { Header } from '~/Layout';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import FooterLayout from '~/components/FooterLayout';
import ProductLayoutRound from '~/components/ProductLayoutRound';
import { AppContext } from '~/Context/AppContext';

const cx = classNames.bind(styles);

function ProductDetail() {
    const { productDetail, addCart, setAddCart, visible, setVisible } = useContext(AppContext);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return <div className={className} style={{ ...style, display: 'none' }} onClick={onClick} />;
    }
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        appendDots: (dots) => (
            <div
                style={{
                    display: 'none',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const PRODUCT_IMAGE = [
        'https://canifa.com/img/1000/1500/resize/8/t/8te19w044-sk010-35.webp',
        'https://canifa.com/img/1000/1500/resize/8/t/8te19w044-sk010-m-3.webp',
        'https://canifa.com/img/1000/1500/resize/8/t/8te19w044-sg079-m.webp',
        'https://canifa.com/img/1000/1500/resize/8/t/8te19w044-sg079_1_.webp',
        'https://canifa.com/img/1000/1500/resize/8/t/8te19w044-sg079_2_.webp',
    ];
    const setting1 = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleAddCart = (data) => {
        setAddCart((prev) => [...prev, data]);
        visible === true ? setVisible(false) : setVisible(true);

        console.log(addCart);
    };
    return (
        <aside>
            <Header />
            <div className={cx('header-child')}>
                <Slider {...settings} className={cx('child-onlyHome')}>
                    <div>
                        <p>?????I H??NG MI???N PH?? - T???i t???t c??? c???a h??ng trong 30 ng??y</p>
                    </div>
                    <div className={cx('child-onlyHome')}>
                        <p>Th??m v??o gi??? h??ng 499.000?? ????? ???????c mi???n ph?? v???n chuy???n</p>
                    </div>
                </Slider>
            </div>
            <body className={cx('body')}>
                <div className={cx('product-image')}>
                    <div>
                        <Slider {...setting1}>
                            <div className={cx('product-images-slider')}>
                                <img src={productDetail.image} alt="Slider Image" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={cx('product-information')}>
                    <div className={cx('title')}>
                        <h1>{productDetail.title}</h1>
                        <p>M?? SP: TE19WW0144</p>
                        <div className={cx('price')}>
                            <h2>{productDetail.price}$</h2>
                            <h3> 499$</h3>
                        </div>
                        <div className={cx('sizes')}>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <div className={cx('service')}>
                        <div>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
                            <p>Mi???n ph?? gio h??ng cho ????n h??ng t??? 499.000??</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
                            <p>?????i tr??? mi???n ph?? trong v??ng 30 ng??y k??? t??? ng??y mua</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => handleAddCart(productDetail)} className={cx('button-add-cart')}>
                            TH??M V??O GI???
                        </button>
                        <button className={cx('button-buy-now')}>MUA NGAY</button>
                    </div>

                    <div className={cx('description')}>
                        M?? t???
                        <p>{productDetail.description}</p>
                    </div>
                </div>
            </body>

            <FooterLayout />
        </aside>
    );
}

export default ProductDetail;
