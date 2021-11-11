import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationServices = ({ rootUrl, t }) => {

    return (
        <div className="service-nav border-bottom d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
            <NavLink exact to={`${rootUrl}/service-1`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._7.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-2`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._2.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-3`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._1.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-4`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._4.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-5`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._5.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-6`} className="service-nav-item border-end border-bottom text-uppercase" activeClassName="nav-active">
                {t('service._3.title')}
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-7`} className="service-nav-item text-uppercase" activeClassName="nav-active">
                {t('service._6.title')}
            </NavLink>
        </div>
    );
};

export default NavigationServices;