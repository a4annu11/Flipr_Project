import React, { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [newClient, setNewClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: null,
  });

  const handleClientSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", newClient.name);
    formData.append("description", newClient.description);
    formData.append("designation", newClient.designation);

    if (newClient.image) {
      formData.append("image", newClient.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/clients/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Client created successfully!");
      setNewClient({
        name: "",
        description: "",
        designation: "",
        image: null,
      });
    } catch (error) {
      console.error("Error creating client:", error);
      alert("Error creating client. Please try again.");
    }
  };

  return (
    <div>
      <h1>Create Client</h1>
      <form onSubmit={handleClientSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newClient.name}
            onChange={(e) =>
              setNewClient({ ...newClient, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={newClient.description}
            onChange={(e) =>
              setNewClient({ ...newClient, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            value={newClient.designation}
            onChange={(e) =>
              setNewClient({ ...newClient, designation: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            onChange={(e) =>
              setNewClient({ ...newClient, image: e.target.files[0] })
            }
          />
        </div>
        <button type="submit">Create Client</button>
      </form>
    </div>
  );
};

export default AdminPage;
