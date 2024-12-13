import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const Subscibe = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch subscriptions from the backend
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
  }, []); // Empty array ensures this runs only once when the component mounts

  // Define table columns
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
        rowKey="_id" // Ensure each row has a unique key, assuming `_id` exists
        loading={loading}
      />
    </div>
  );
};

export default Subscibe;
