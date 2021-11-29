import React, { useState, useEffect } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { ClientsField } from './ClientsField';
import { Newsletter } from './Newsletter';

import api from '../../services/api';

import './styles.scss';

export function Home() {
    const [clients, setClients] = useState([]);
    const [services, setServices] = useState([])

    useEffect(() => {
        api.get('clients')
            .then((response) => setClients(response.data))
            .catch(err => console.error('[error] ' + err));
        
            api.get('services')
            .then((response) => setServices(response.data))
            .catch(err => console.error('[error] ' + err));
    }, []);
    
    return (
        <div id="container">
            <Banner />
            {
                clients.length > 0 && services .length > 0 &&
                <ClientsField clients={clients} services={services} />
            }
            <Newsletter />
        </div>
    );
}