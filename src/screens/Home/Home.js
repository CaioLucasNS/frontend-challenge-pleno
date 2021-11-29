import React, { useState, useEffect } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { ClientsField } from './ClientsField';

import api from '../../services/api';

import './styles.scss';

export function Home() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        api.get('clients')
            .then((response) => setClients(response.data))
            .catch(err => console.error('[error] ' + err))
    }, []);

    console.log('clientes = ', clients)
    console.log('clientes length = ', clients.length)
    
    return (
        <div id="container">
            <Banner />
            {
                clients.length > 0 &&
                <ClientsField clients={clients} />
            }

            
            <div className="div3"></div>
        </div>
    );
}