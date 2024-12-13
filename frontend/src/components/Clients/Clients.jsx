import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Clients.css";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await axios.get("/api/clients");
      setClients(response.data);
    };
    fetchClients();
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <h2 className="clients-heading">Happy Clients</h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client._id} className="client-card">
              <img
                src={client.imageUrl}
                alt={client.name}
                className="client-image"
              />
              <h3 className="client-name">{client.name}</h3>
              <p className="client-designation">{client.designation}</p>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
