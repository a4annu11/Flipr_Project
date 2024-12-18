import React, { useEffect, useState } from "react";
import { Table, message, Popconfirm, Spin } from "antd";
import axios from "axios";
import { DeleteOutlined } from "@ant-design/icons";

const ViewClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch clients from the backend
  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/clients"); // Adjust the endpoint as per your backend
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
      message.error("Failed to fetch clients. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a client
  const deleteClient = async (id) => {
    console.log("Attempting to delete client with ID:", id); // Debugging statement
    try {
      await axios.delete(`/api/clients/${id}`); // Ensure this matches your backend route
      message.success("Client deleted successfully!");
      fetchClients(); // Refresh the client list after deletion
    } catch (error) {
      console.error("Error deleting client:", error.response?.data || error);
      message.error("Failed to delete client. Please try again.");
    }
  };

  // Fetch clients on component mount
  useEffect(() => {
    fetchClients();
  }, []);

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => (
        <img
          src={text}
          alt="Client Avatar"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          {" "}
          {/* Center align */}
          <Popconfirm
            title="Are you sure to delete this client?"
            onConfirm={() => deleteClient(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <a
              style={{
                color: "red",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Client List</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          dataSource={clients}
          columns={columns}
          rowKey={(record) => record._id} // Ensure _id is used as the unique row key
        />
      )}
    </div>
  );
};

export default ViewClients;
