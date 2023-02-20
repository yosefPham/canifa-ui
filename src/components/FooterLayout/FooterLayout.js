import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import styles from './FooterLayout.module.scss';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function FooterLayout() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('description')}>
                <h4>
                    Programming Languages
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScipt</li>
                </h4>
                <h4>
                    FrameWork
                    <li>React Js</li>
                </h4>
            </div>
            <div className={cx('description')}>
                <h4>
                    Libraries
                    <li>Icon: FontAwesomeIcon</li>
                    <li>React router Dom</li>
                    <li>Tippy</li>
                    <li>ClassName</li>
                    <li>Bootstrap</li>
                </h4>
            </div>
            <div className={cx('description')}>
                <h4>Follow Us</h4>
                <div className={cx('contact')}>
                    <div className={cx('social-network')}>
                        <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/quochuypiano/">
                            Phạm Quốc Huy
                        </a>
                    </div>
                    <div className={cx('social-network')}>
                        <FontAwesomeIcon icon={faTiktok} className={cx('icon')} />
                        <a rel="noreferrer" target="_blank" href="https://www.tiktok.com/@yosefpham">
                            Yosef
                        </a>
                    </div>
                    <div className={cx('social-network')}>
                        <FontAwesomeIcon icon={faInstagram} className={cx('icon')} />
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/_p.quoc.huy/">
                            _p.quoc.huy
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('description')}>
                <h4>Contact</h4>
                <div className={cx('social-network')}>
                    <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                    <p>YosefPham03@gmail.com</p>
                </div>
                <div className={cx('social-network')}>
                    <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                    <p>0395 474 001</p>
                </div>
            </div>
        </aside>
    );
}

export default FooterLayout;
