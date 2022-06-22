import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, ABOUT_ROUTE, SERVICES_ROUTE, PRICING_ROUTE, BLOG_ROUTE } from "../../utils/constants";
import  logo from "../../assets/logo.svg";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header >
            <div className={styles.container}>
                <NavLink to={HOME_ROUTE} className={styles.logo_link}>
                    <div className={styles.logo_wrapper}>
                        <img src={logo} alt="Agency" className={styles.logo}/> 
                        <p className={styles.company_name}>Agency</p>
                    </div> 
                </NavLink>
            
                <ul className={styles.navigation}>
                    <li className={styles.navigation_item}>
                        <NavLink to={ABOUT_ROUTE} className={styles.navigation_item_link}>
                            About
                        </NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink to={SERVICES_ROUTE} className={styles.navigation_item_link}>
                            Services
                        </NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink to={PRICING_ROUTE} className={styles.navigation_item_link}>
                            Pricing
                        </NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink to={BLOG_ROUTE} className={styles.navigation_item_link}>
                            Blog
                        </NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <button className={styles.contact_btn}>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.header_bottom}>
                <p className={styles.header_bottom_title}>Portfolio</p>
                <p className={styles.header_bottom_text}>Agency provides a full service range including technical skills, design, business understanding.</p>
            </div>
        </header>
    )
}

export default Header;