import React, { useState } from "react";

import "./styles.scss";

export function ClientsField({ clients = [] }) {
    const [isSelected, setIsSelected] = useState('');

    const RenderClients = () => (
        <div className="clients-content">
        {clients.map((client) => (
          <a key={client.id} className="clients-list" onClick={() => setIsSelected(client.title)}>
            <img src={client.image} alt="logo" />
            <h3 style={{ color: isSelected == client.title ? '#000' : '#848484' }}>
                {client.title}
            </h3>
          </a>
        ))}
      </div>
    )

  return (
    <div className="client-container">
      <RenderClients />
    </div>
  );
}
