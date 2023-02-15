import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuItem({ to, title }) {
    return (
        <NavLink className={(nav) => cx('navbar-content', { active: nav.isActive })} to={to}>
            <span>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
