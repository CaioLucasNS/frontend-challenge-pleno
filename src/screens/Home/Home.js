import React, { useState, useEffect } from 'react';
import { Banner } from '../../components/Banner/Banner';

import api from '../../services/api';

import './styles.scss';

export function Home() {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        api.get('clients')
            .then(response => setClients(JSON.stringify(response.data)))
            .catch(err => console.error('[error] ' + err))
    }, []);

    console.log('clientes = ', clients)
    return (
        <div id="container">
            <Banner />
            <div className="div2">
                {/* <h1></h1>hideNav */}
            </div>
            <div className="div3"></div>
        </div>
    );
}