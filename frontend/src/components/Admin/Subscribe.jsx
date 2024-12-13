import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const Subscibe = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subscriptions
  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get("/api/subscriptions");
        setSubscriptions(response.data); // Set the subscriptions data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div>
      <Table
        dataSource={subscriptions}
        columns={columns}
        rowKey="_id"
        loading={loading}
      />
    </div>
  );
};

export default Subscibe;
