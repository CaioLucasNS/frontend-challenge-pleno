import React from 'react';

import { Banner } from '../../components/Banner/Banner';

import './styles.scss';

export function Home() {
    return (
        <div id="container">
            <Banner />
            <div className="div2"></div>
            <div className="div3"></div>
        </div>
    );
}