import { Header } from '~/Layout';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import ProductLayoutRound from '~/components/ProductLayoutRound';

const cx = classNames.bind(styles);
function Home() {
    return (
        <aside className={cx('wrapper')}>
            <Header />
            <div className={cx('background-image')}>
                <a href="">
                    <img
                        src="https://media.canifa.com/Simiconnector/banner_name_tablet1676369349.webp"
                        alt="page Home"
                    ></img>
                </a>
            </div>
            <div className={cx('body')}>{/* <ProductLayoutRound /> */}</div>
        </aside>
    );
}

export default Home;
