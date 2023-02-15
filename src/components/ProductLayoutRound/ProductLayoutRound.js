import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';

import styles from './ProductLayoutRound.module.scss';

const cx = classNames.bind(styles);
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

function ProductLayoutRound() {
    const [selected, setSelected] = useState(0);

    const handleSelect = (index) => {
        setSelected(index);
    };
    return (
        <aside className={cx('wrapper')}>
            <h1>Áo polo</h1>
            <div>
                <div className={cx('list-product')}>
                    <div className={cx('product-samples')}>
                        <div className={cx('product')}>
                            <div>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className={cx('product')}>
                            <div className={cx(selected === 0 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx(selected === 1 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/1000/1500/resize/2/t/2tp22w019-sr003-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx('product-type')}>
                                <div onClick={() => handleSelect(1)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8zODMsNygtLisBCgoKDg0NDw8PFSsZFRkrLS0rKysrKzcrKzctKys3LTcrNy0tKys3Ny0rKy0tKystNzctNys3Ky0tLTcrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBQf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AOUkaULSOogyGQijDhwgJDiKAw4TgM4cKQGLGsWAMWNYsBnFjWLAZxY3gwGcWNYsBjFjWLAZwY0gZwY1iUZwY0AZxY0LFGLA2LAZGNAE1II0CMUIIooAqQoJHCAw4cQLEVgAnEAxYUAxYUADSBlYcWAzgaWAwmhYDOIqwGQ0KozYGhVGbGWxYCkMDUAkGIJqCFBGKEEUQRxIEsOEBiJxAI4gCKBlY1gBnE0FBgKBkNAGQ0AAKoM0EKM1GhRRoQgSIYgTAYgSogJUQIoxBHEQBxIEjixQI4sAYGggA1gACwoGQalGQ0AZoarIANVlQCw1AIYI1AJgKBhEIEwGATAQJBQMSMUUhSQSKAIoALCgZVNCgBVQZDTNUFDVAMimigARQZoaZWCajLQEgoGERqAmoDAUaZhBqKKKIEwGKFJIFJAkkIgQKmTQoqKaKgBSKugBACs1qs0AKRQDLQWAajMMBoiGIGEQwCYDAJBgEgoEslRpDSCISBQQJIaCoSUAIQTNIUVCoAUU0AAQABrKwULLShMEKBMBQMIMBqIECWYQaQKBQWg0tGrVDq0atBJaEDoQBBCgkhVEKgCrJoBVkhQVJm1QNRmUwGiEg0WSg1CydBosnQaTJ0GtQQNLRq0GkykGtTKAoatAjQlEhqBBDQQtVAIVUAhUlBaFUozGmDKDcLJgNIJBqUslA61rOoGizpAnWdOgdLKBpMkCgAaWsoDqGjQK0DQI0IEEAIWhRCqhRM6bWQWliNQQytMqUVppjSDRZ0oEs6dBpM6dQa1azp0GlrKBrVrK0GtWs6tBrUygOjVo0Cho0DqA1Q0IaBFC1RC0WoEEABCMRpJJFMMKUShRRIoEokgUkCISBKQJJCAJCpJMhUJIgSSqqEiCZqQBJAKAiD//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 1 ? ['selected-type'] : '')} />
                                </div>
                                <div onClick={() => handleSelect(0)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQwNFQ8PGisZFh0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAgICAwEAAAAAAAAAAAERAiExYUFRcaHwA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAM73mXxbvWT1/fTQgBVAEVJAUAAAAAAAAAAAAAAAARQGP8ALneXGWy8bZ3x5Zs9XOmwASqCEUBBQAAEAAAAAAAAAAAAIoCFAAElnc+vIKAAAAAAAAAAACob2oEAAAAQAAAAAAAVFABFBFAEFQAIAAAUAAsAAAAAAAFAABLQUAEkMAAAAIAAAoICgAAAIqAAAAAKgACgkABUgAKgCgAJigAAAAIACggKCABaoAAIqAGKgCiACoAqCgCKAIAogCiKAAAACCgAACFAUSUAiiAoigCAKCAqTfkUEUAAAEFACgAJdzrz7AUASXfBooAigAAAAnKbnr9qJgBQBUVAJMUAQUAAAABIoAlUABN7UEUQFRQAEBQABAFAAAAAAABAAUQBUCAAAYKAAgCiaCgAAAAAAAkUAAARQAAAAAEAUEAAAAAVCAoAJigAIoAigCKABATlNUAAAS+lAAAAAAAAAAAAEAAAAAIAKhx35UEqpqgipVBFEBQAAAAASaoAIfH0oAJgKAAlVJoKBQAAEUBAAATlcluW58TzQUhKQBUUAAGeU3z+VAC3FAAEoKAAkmKAAAAAAAAAAACaoAAAAIAAAAQANABUAFAAAAAAABNJ5AFAAAAAARQAAAAAAH//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 0 ? ['selected-type'] : '')} />
                                </div>
                            </div>
                            <div className={cx('product-description')}>
                                <h3 className={cx('product-name')}>Áo polo bé trai dài tay</h3>
                                <h3 className={cx('product-price')}>229.000 đ</h3>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <div className={cx(selected === 0 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx(selected === 1 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/1000/1500/resize/2/t/2tp22w019-sr003-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx('product-type')}>
                                <div onClick={() => handleSelect(1)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8zODMsNygtLisBCgoKDg0NDw8PFSsZFRkrLS0rKysrKzcrKzctKys3LTcrNy0tKys3Ny0rKy0tKystNzctNys3Ky0tLTcrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBQf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AOUkaULSOogyGQijDhwgJDiKAw4TgM4cKQGLGsWAMWNYsBnFjWLAZxY3gwGcWNYsBjFjWLAZwY0gZwY1iUZwY0AZxY0LFGLA2LAZGNAE1II0CMUIIooAqQoJHCAw4cQLEVgAnEAxYUAxYUADSBlYcWAzgaWAwmhYDOIqwGQ0KozYGhVGbGWxYCkMDUAkGIJqCFBGKEEUQRxIEsOEBiJxAI4gCKBlY1gBnE0FBgKBkNAGQ0AAKoM0EKM1GhRRoQgSIYgTAYgSogJUQIoxBHEQBxIEjixQI4sAYGggA1gACwoGQalGQ0AZoarIANVlQCw1AIYI1AJgKBhEIEwGATAQJBQMSMUUhSQSKAIoALCgZVNCgBVQZDTNUFDVAMimigARQZoaZWCajLQEgoGERqAmoDAUaZhBqKKKIEwGKFJIFJAkkIgQKmTQoqKaKgBSKugBACs1qs0AKRQDLQWAajMMBoiGIGEQwCYDAJBgEgoEslRpDSCISBQQJIaCoSUAIQTNIUVCoAUU0AAQABrKwULLShMEKBMBQMIMBqIECWYQaQKBQWg0tGrVDq0atBJaEDoQBBCgkhVEKgCrJoBVkhQVJm1QNRmUwGiEg0WSg1CydBosnQaTJ0GtQQNLRq0GkykGtTKAoatAjQlEhqBBDQQtVAIVUAhUlBaFUozGmDKDcLJgNIJBqUslA61rOoGizpAnWdOgdLKBpMkCgAaWsoDqGjQK0DQI0IEEAIWhRCqhRM6bWQWliNQQytMqUVppjSDRZ0oEs6dBpM6dQa1azp0GlrKBrVrK0GtWs6tBrUygOjVo0Cho0DqA1Q0IaBFC1RC0WoEEABCMRpJJFMMKUShRRIoEokgUkCISBKQJJCAJCpJMhUJIgSSqqEiCZqQBJAKAiD//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 1 ? ['selected-type'] : '')} />
                                </div>
                                <div onClick={() => handleSelect(0)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQwNFQ8PGisZFh0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAgICAwEAAAAAAAAAAAERAiExYUFRcaHwA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAM73mXxbvWT1/fTQgBVAEVJAUAAAAAAAAAAAAAAAARQGP8ALneXGWy8bZ3x5Zs9XOmwASqCEUBBQAAEAAAAAAAAAAAAIoCFAAElnc+vIKAAAAAAAAAAACob2oEAAAAQAAAAAAAVFABFBFAEFQAIAAAUAAsAAAAAAAFAABLQUAEkMAAAAIAAAoICgAAAIqAAAAAKgACgkABUgAKgCgAJigAAAAIACggKCABaoAAIqAGKgCiACoAqCgCKAIAogCiKAAAACCgAACFAUSUAiiAoigCAKCAqTfkUEUAAAEFACgAJdzrz7AUASXfBooAigAAAAnKbnr9qJgBQBUVAJMUAQUAAAABIoAlUABN7UEUQFRQAEBQABAFAAAAAAABAAUQBUCAAAYKAAgCiaCgAAAAAAAkUAAARQAAAAAEAUEAAAAAVCAoAJigAIoAigCKABATlNUAAAS+lAAAAAAAAAAAAEAAAAAIAKhx35UEqpqgipVBFEBQAAAAASaoAIfH0oAJgKAAlVJoKBQAAEUBAAATlcluW58TzQUhKQBUUAAGeU3z+VAC3FAAEoKAAkmKAAAAAAAAAAACaoAAAAIAAAAQANABUAFAAAAAAABNJ5AFAAAAAARQAAAAAAH//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 0 ? ['selected-type'] : '')} />
                                </div>
                            </div>
                            <div className={cx('product-description')}>
                                <h3 className={cx('product-name')}>Áo polo bé trai dài tay</h3>
                                <h3 className={cx('product-price')}>229.000 đ</h3>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <div className={cx(selected === 0 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx(selected === 1 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/1000/1500/resize/2/t/2tp22w019-sr003-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx('product-type')}>
                                <div onClick={() => handleSelect(1)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8zODMsNygtLisBCgoKDg0NDw8PFSsZFRkrLS0rKysrKzcrKzctKys3LTcrNy0tKys3Ny0rKy0tKystNzctNys3Ky0tLTcrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBQf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AOUkaULSOogyGQijDhwgJDiKAw4TgM4cKQGLGsWAMWNYsBnFjWLAZxY3gwGcWNYsBjFjWLAZwY0gZwY1iUZwY0AZxY0LFGLA2LAZGNAE1II0CMUIIooAqQoJHCAw4cQLEVgAnEAxYUAxYUADSBlYcWAzgaWAwmhYDOIqwGQ0KozYGhVGbGWxYCkMDUAkGIJqCFBGKEEUQRxIEsOEBiJxAI4gCKBlY1gBnE0FBgKBkNAGQ0AAKoM0EKM1GhRRoQgSIYgTAYgSogJUQIoxBHEQBxIEjixQI4sAYGggA1gACwoGQalGQ0AZoarIANVlQCw1AIYI1AJgKBhEIEwGATAQJBQMSMUUhSQSKAIoALCgZVNCgBVQZDTNUFDVAMimigARQZoaZWCajLQEgoGERqAmoDAUaZhBqKKKIEwGKFJIFJAkkIgQKmTQoqKaKgBSKugBACs1qs0AKRQDLQWAajMMBoiGIGEQwCYDAJBgEgoEslRpDSCISBQQJIaCoSUAIQTNIUVCoAUU0AAQABrKwULLShMEKBMBQMIMBqIECWYQaQKBQWg0tGrVDq0atBJaEDoQBBCgkhVEKgCrJoBVkhQVJm1QNRmUwGiEg0WSg1CydBosnQaTJ0GtQQNLRq0GkykGtTKAoatAjQlEhqBBDQQtVAIVUAhUlBaFUozGmDKDcLJgNIJBqUslA61rOoGizpAnWdOgdLKBpMkCgAaWsoDqGjQK0DQI0IEEAIWhRCqhRM6bWQWliNQQytMqUVppjSDRZ0oEs6dBpM6dQa1azp0GlrKBrVrK0GtWs6tBrUygOjVo0Cho0DqA1Q0IaBFC1RC0WoEEABCMRpJJFMMKUShRRIoEokgUkCISBKQJJCAJCpJMhUJIgSSqqEiCZqQBJAKAiD//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 1 ? ['selected-type'] : '')} />
                                </div>
                                <div onClick={() => handleSelect(0)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQwNFQ8PGisZFh0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAgICAwEAAAAAAAAAAAERAiExYUFRcaHwA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAM73mXxbvWT1/fTQgBVAEVJAUAAAAAAAAAAAAAAAARQGP8ALneXGWy8bZ3x5Zs9XOmwASqCEUBBQAAEAAAAAAAAAAAAIoCFAAElnc+vIKAAAAAAAAAAACob2oEAAAAQAAAAAAAVFABFBFAEFQAIAAAUAAsAAAAAAAFAABLQUAEkMAAAAIAAAoICgAAAIqAAAAAKgACgkABUgAKgCgAJigAAAAIACggKCABaoAAIqAGKgCiACoAqCgCKAIAogCiKAAAACCgAACFAUSUAiiAoigCAKCAqTfkUEUAAAEFACgAJdzrz7AUASXfBooAigAAAAnKbnr9qJgBQBUVAJMUAQUAAAABIoAlUABN7UEUQFRQAEBQABAFAAAAAAABAAUQBUCAAAYKAAgCiaCgAAAAAAAkUAAARQAAAAAEAUEAAAAAVCAoAJigAIoAigCKABATlNUAAAS+lAAAAAAAAAAAAEAAAAAIAKhx35UEqpqgipVBFEBQAAAAASaoAIfH0oAJgKAAlVJoKBQAAEUBAAATlcluW58TzQUhKQBUUAAGeU3z+VAC3FAAEoKAAkmKAAAAAAAAAAACaoAAAAIAAAAQANABUAFAAAAAAABNJ5AFAAAAAARQAAAAAAH//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 0 ? ['selected-type'] : '')} />
                                </div>
                            </div>
                            <div className={cx('product-description')}>
                                <h3 className={cx('product-name')}>Áo polo bé trai dài tay</h3>
                                <h3 className={cx('product-price')}>229.000 đ</h3>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <div className={cx(selected === 0 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx(selected === 1 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/1000/1500/resize/2/t/2tp22w019-sr003-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx('product-type')}>
                                <div onClick={() => handleSelect(1)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8zODMsNygtLisBCgoKDg0NDw8PFSsZFRkrLS0rKysrKzcrKzctKys3LTcrNy0tKys3Ny0rKy0tKystNzctNys3Ky0tLTcrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBQf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AOUkaULSOogyGQijDhwgJDiKAw4TgM4cKQGLGsWAMWNYsBnFjWLAZxY3gwGcWNYsBjFjWLAZwY0gZwY1iUZwY0AZxY0LFGLA2LAZGNAE1II0CMUIIooAqQoJHCAw4cQLEVgAnEAxYUAxYUADSBlYcWAzgaWAwmhYDOIqwGQ0KozYGhVGbGWxYCkMDUAkGIJqCFBGKEEUQRxIEsOEBiJxAI4gCKBlY1gBnE0FBgKBkNAGQ0AAKoM0EKM1GhRRoQgSIYgTAYgSogJUQIoxBHEQBxIEjixQI4sAYGggA1gACwoGQalGQ0AZoarIANVlQCw1AIYI1AJgKBhEIEwGATAQJBQMSMUUhSQSKAIoALCgZVNCgBVQZDTNUFDVAMimigARQZoaZWCajLQEgoGERqAmoDAUaZhBqKKKIEwGKFJIFJAkkIgQKmTQoqKaKgBSKugBACs1qs0AKRQDLQWAajMMBoiGIGEQwCYDAJBgEgoEslRpDSCISBQQJIaCoSUAIQTNIUVCoAUU0AAQABrKwULLShMEKBMBQMIMBqIECWYQaQKBQWg0tGrVDq0atBJaEDoQBBCgkhVEKgCrJoBVkhQVJm1QNRmUwGiEg0WSg1CydBosnQaTJ0GtQQNLRq0GkykGtTKAoatAjQlEhqBBDQQtVAIVUAhUlBaFUozGmDKDcLJgNIJBqUslA61rOoGizpAnWdOgdLKBpMkCgAaWsoDqGjQK0DQI0IEEAIWhRCqhRM6bWQWliNQQytMqUVppjSDRZ0oEs6dBpM6dQa1azp0GlrKBrVrK0GtWs6tBrUygOjVo0Cho0DqA1Q0IaBFC1RC0WoEEABCMRpJJFMMKUShRRIoEokgUkCISBKQJJCAJCpJMhUJIgSSqqEiCZqQBJAKAiD//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 1 ? ['selected-type'] : '')} />
                                </div>
                                <div onClick={() => handleSelect(0)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQwNFQ8PGisZFh0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAgICAwEAAAAAAAAAAAERAiExYUFRcaHwA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAM73mXxbvWT1/fTQgBVAEVJAUAAAAAAAAAAAAAAAARQGP8ALneXGWy8bZ3x5Zs9XOmwASqCEUBBQAAEAAAAAAAAAAAAIoCFAAElnc+vIKAAAAAAAAAAACob2oEAAAAQAAAAAAAVFABFBFAEFQAIAAAUAAsAAAAAAAFAABLQUAEkMAAAAIAAAoICgAAAIqAAAAAKgACgkABUgAKgCgAJigAAAAIACggKCABaoAAIqAGKgCiACoAqCgCKAIAogCiKAAAACCgAACFAUSUAiiAoigCAKCAqTfkUEUAAAEFACgAJdzrz7AUASXfBooAigAAAAnKbnr9qJgBQBUVAJMUAQUAAAABIoAlUABN7UEUQFRQAEBQABAFAAAAAAABAAUQBUCAAAYKAAgCiaCgAAAAAAAkUAAARQAAAAAEAUEAAAAAVCAoAJigAIoAigCKABATlNUAAAS+lAAAAAAAAAAAAEAAAAAIAKhx35UEqpqgipVBFEBQAAAAASaoAIfH0oAJgKAAlVJoKBQAAEUBAAATlcluW58TzQUhKQBUUAAGeU3z+VAC3FAAEoKAAkmKAAAAAAAAAAACaoAAAAIAAAAQANABUAFAAAAAAABNJ5AFAAAAAARQAAAAAAH//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 0 ? ['selected-type'] : '')} />
                                </div>
                            </div>
                            <div className={cx('product-description')}>
                                <h3 className={cx('product-name')}>Áo polo bé trai dài tay</h3>
                                <h3 className={cx('product-price')}>229.000 đ</h3>
                            </div>
                        </div>
                        <div className={cx('product')}>
                            <div className={cx(selected === 0 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/486/733/resize/2/t/2tp22w019-sw001-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx(selected === 1 ? ['product-image', 'selected'] : 'product-image')}>
                                <img
                                    className={cx('d-block', 'w-10')}
                                    src="https://canifa.com/img/1000/1500/resize/2/t/2tp22w019-sr003-1.webp"
                                    alt="First slide"
                                />
                                <div className={cx('favourite-icon')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                                </div>
                                <div className={cx('add-cart')}>THÊM VÀO GIỎ HÀNG</div>
                            </div>
                            <div className={cx('product-type')}>
                                <div onClick={() => handleSelect(1)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8zODMsNygtLisBCgoKDg0NDw8PFSsZFRkrLS0rKysrKzcrKzctKys3LTcrNy0tKys3Ny0rKy0tKystNzctNys3Ky0tLTcrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGAEBAQADAAAAAAAAAAAAAAAAAAECBQf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AOUkaULSOogyGQijDhwgJDiKAw4TgM4cKQGLGsWAMWNYsBnFjWLAZxY3gwGcWNYsBjFjWLAZwY0gZwY1iUZwY0AZxY0LFGLA2LAZGNAE1II0CMUIIooAqQoJHCAw4cQLEVgAnEAxYUAxYUADSBlYcWAzgaWAwmhYDOIqwGQ0KozYGhVGbGWxYCkMDUAkGIJqCFBGKEEUQRxIEsOEBiJxAI4gCKBlY1gBnE0FBgKBkNAGQ0AAKoM0EKM1GhRRoQgSIYgTAYgSogJUQIoxBHEQBxIEjixQI4sAYGggA1gACwoGQalGQ0AZoarIANVlQCw1AIYI1AJgKBhEIEwGATAQJBQMSMUUhSQSKAIoALCgZVNCgBVQZDTNUFDVAMimigARQZoaZWCajLQEgoGERqAmoDAUaZhBqKKKIEwGKFJIFJAkkIgQKmTQoqKaKgBSKugBACs1qs0AKRQDLQWAajMMBoiGIGEQwCYDAJBgEgoEslRpDSCISBQQJIaCoSUAIQTNIUVCoAUU0AAQABrKwULLShMEKBMBQMIMBqIECWYQaQKBQWg0tGrVDq0atBJaEDoQBBCgkhVEKgCrJoBVkhQVJm1QNRmUwGiEg0WSg1CydBosnQaTJ0GtQQNLRq0GkykGtTKAoatAjQlEhqBBDQQtVAIVUAhUlBaFUozGmDKDcLJgNIJBqUslA61rOoGizpAnWdOgdLKBpMkCgAaWsoDqGjQK0DQI0IEEAIWhRCqhRM6bWQWliNQQytMqUVppjSDRZ0oEs6dBpM6dQa1azp0GlrKBrVrK0GtWs6tBrUygOjVo0Cho0DqA1Q0IaBFC1RC0WoEEABCMRpJJFMMKUShRRIoEokgUkCISBKQJJCAJCpJMhUJIgSSqqEiCZqQBJAKAiD//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 1 ? ['selected-type'] : '')} />
                                </div>
                                <div onClick={() => handleSelect(0)} className={cx('type-image')}>
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQwNFQ8PGisZFh0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIBABAQEAAgICAwEAAAAAAAAAAAERAiExYUFRcaHwA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAM73mXxbvWT1/fTQgBVAEVJAUAAAAAAAAAAAAAAAARQGP8ALneXGWy8bZ3x5Zs9XOmwASqCEUBBQAAEAAAAAAAAAAAAIoCFAAElnc+vIKAAAAAAAAAAACob2oEAAAAQAAAAAAAVFABFBFAEFQAIAAAUAAsAAAAAAAFAABLQUAEkMAAAAIAAAoICgAAAIqAAAAAKgACgkABUgAKgCgAJigAAAAIACggKCABaoAAIqAGKgCiACoAqCgCKAIAogCiKAAAACCgAACFAUSUAiiAoigCAKCAqTfkUEUAAAEFACgAJdzrz7AUASXfBooAigAAAAnKbnr9qJgBQBUVAJMUAQUAAAABIoAlUABN7UEUQFRQAEBQABAFAAAAAAABAAUQBUCAAAYKAAgCiaCgAAAAAAAkUAAARQAAAAAEAUEAAAAAVCAoAJigAIoAigCKABATlNUAAAS+lAAAAAAAAAAAAEAAAAAIAKhx35UEqpqgipVBFEBQAAAAASaoAIfH0oAJgKAAlVJoKBQAAEUBAAATlcluW58TzQUhKQBUUAAGeU3z+VAC3FAAEoKAAkmKAAAAAAAAAAACaoAAAAIAAAAQANABUAFAAAAAAABNJ5AFAAAAAARQAAAAAAH//2Q=="
                                        alt="type"
                                    />
                                    <span className={cx(selected === 0 ? ['selected-type'] : '')} />
                                </div>
                            </div>
                            <div className={cx('product-description')}>
                                <h3 className={cx('product-name')}>Áo polo bé trai dài tay</h3>
                                <h3 className={cx('product-price')}>229.000 đ</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </aside>
    );
}

export default ProductLayoutRound;
