import React, { useEffect, useState } from "react";
import { Table, Spin } from "antd";
import axios from "axios";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contacts from the backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("/api/contact");
        setContacts(response.data); // Assuming the response is an array of contacts
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];

  return (
    <div>
      <h2>Contact List</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table dataSource={contacts} columns={columns} rowKey="_id" />
      )}
    </div>
  );
};

export default Contact;
