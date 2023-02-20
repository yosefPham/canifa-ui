import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [showResult, setShowResult] = useState(false);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <aside>
            <Form className={cx('search')}>
                <Tippy
                    interactive
                    visible={showResult}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4>Lịch sử tìm kiếm </h4>
                            <span>Xoá</span>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div>
                        <input onFocus={() => setShowResult(true)} type="search" placeholder="Bạn tìm gì..." />
                        <FontAwesomeIcon icon={faSearch} className={cx('search-icon')} />
                    </div>
                </Tippy>
            </Form>
        </aside>
    );
}

export default Search;
