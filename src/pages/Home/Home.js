import { Header } from '~/Layout';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import React, { useState, useEffect, useContext } from 'react';

import styles from './Home.module.scss';
import ProductLayoutRound from '~/components/ProductLayoutRound';
import FooterLayout from '~/components/FooterLayout';
import { AppContext } from '~/Context/AppContext';

const cx = classNames.bind(styles);
function Home() {
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

    const IMAGE_BACKGROUND1 = [
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet1676348221.webp', id: 1 },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_second1676348221.webp', id: 2 },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_third1676348221.webp', id: 3 },
    ];
    const IMAGE_BACKGROUND2 = [
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_third1676348446.webp' },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet1676348446.webp' },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_third1676348446.webp' },
    ];
    const IMAGE_BACKGROUND3 = [
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet1676348061.webp' },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_second1676348061.webp' },
        { image: 'https://media.canifa.com/Simiconnector/list_image_tablet_third1676425350.webp' },
    ];

    const { products } = useContext(AppContext);
    const AOI = products.slice(0, 5);
    const BOT = products.slice(5, 10);
    const COT = products.slice(10, 15);

    return (
        <aside className={cx('wrapper')}>
            <Header />
            <div className={cx('header-child')}>
                <Slider {...settings} className={cx('child-onlyHome')}>
                    <div>
                        <p>ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 30 ngày</p>
                    </div>
                    <div className={cx('child-onlyHome')}>
                        <p>Thêm vào giỏ hàng 499.000đ để được miễn phí vận chuyển</p>
                    </div>
                </Slider>
            </div>
            <div className={cx('background-image')}>
                <a href="">
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1676369349.webp"
                        alt="page Home"
                    ></img>
                </a>
            </div>
            <div className={cx('body')}>
                <div>
                    <h1 className={cx('title-type')}>Quần áo</h1>
                    <ProductLayoutRound data={AOI} background={IMAGE_BACKGROUND1} />
                </div>
                <div>
                    <h1 className={cx('title-type')}>Phụ kiện</h1>
                    <ProductLayoutRound data={BOT} background={IMAGE_BACKGROUND2} />
                </div>
                <div>
                    <h1 className={cx('title-type')}>Sản phẩm mới</h1>
                    <ProductLayoutRound data={COT} background={IMAGE_BACKGROUND3} />
                </div>
            </div>
            <FooterLayout />
        </aside>
    );
}

export default Home;
