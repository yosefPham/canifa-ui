import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ProductLayoutRound.module.scss';
import { AddToCart } from '~/Layout';
const cx = classNames.bind(styles);
const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '8px', color: 'red' }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '8px', zIndex: '999' }}
            onClick={onClick}
        />
    );
}
const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                right: '-22%',
                padding: '10px',
            }}
        >
            <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
    ),
};

function ProductLayoutRound({ data, background }) {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
    };
    return (
        <aside className={cx('wrapper')}>
            <div>
                <div className={cx('list-product')}>
                    <div className={cx('product-samples')}>
                        <Slider {...settings2}>
                            {background.map((data, index) => (
                                <div key={index} className={cx('product')}>
                                    <div className={cx('product-samples-image')}>
                                        <img className={cx('d-block', 'w-10')} src={data.image} alt="First slide" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className={cx('product-list')}>
                        <Slider {...settings}>
                            {data.slice(0, 5).map((data) => (
                                <div key={data.id} className={cx('product', 'box-shadow')}>
                                    <div className={cx('product-image')}>
                                        <img className={cx('d-block', 'w-10')} src={data.image} alt="First slide" />
                                        <div className={cx('favourite-icon')}>
                                            <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                        </div>
                                        <div className={cx('add-cart-hover')}>
                                            <AddToCart data={data} />
                                        </div>
                                    </div>

                                    <div className={cx('product-description')}>
                                        <h3 className={cx('product-name')}>{data.title}</h3>
                                        <h3 className={cx('product-price')}>{data.price} $</h3>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default ProductLayoutRound;
