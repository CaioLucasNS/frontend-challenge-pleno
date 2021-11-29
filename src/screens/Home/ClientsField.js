import React, { useState } from "react";

import "./styles.scss";

export function ClientsField({ clients = [], services = [] }) {
    const [isSelected, setIsSelected] = useState('');

    const RenderClients = () => (
        <div className="clients-content">
        {clients.map((client) => (
          <a key={client.id} className="clients-list" onClick={() => setIsSelected(client.title)}>
            <img src={client.image} alt="logo" />
            <h3 style={{ color: isSelected === client.title ? '#000' : '#848484' }}>
                {client.title}
            </h3>
          </a>
        ))}
      </div>
    )

    const RenderServices = () => (
      <div id="services-container"> 
        { services.map((service, idx) => (
          <div key={service.id} className="services-content" style={{ background: idx % 2 == 1 && '#fff', color: idx % 2 == 1 && '#000' }}>
            <img src={service.image} alt="icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))
        }
      </div>
    )

  return (
    <div className="client-container">
      <RenderClients />
      <RenderServices />
    
      <div id="customer-service">
        <h1>Atendimento ao Cliente</h1>
        <p>
          Precisando entrar em contato,
          utilize nossos canais de atendimento ou consulte
          a documentação para mais informações.
        </p>
        <a>Envie um Ticket</a>
        <a>Documentação</a>
      </div>
    </div>
  );
}
