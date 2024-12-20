import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, message, Spin } from "antd";
import axios from "axios";

const { Meta } = Card;

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false); // Manage spinner for API actions
  const [deleting, setDeleting] = useState(null); // Track which project is being deleted

  // Fetch all projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        message.error("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Handle delete project
  const handleDelete = async (id) => {
    setDeleting(id); // Show spinner for the specific project being deleted
    console.log("Deleting project with ID:", id); // Log the project ID
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/projects/${id}`
      );
      if (response.status === 200) {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== id)
        );
        message.success("Project deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      message.error("Failed to delete project. Please try again.");
    } finally {
      setDeleting(null); // Reset spinner state
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {projects.map((project) => (
            <Col key={project._id} xs={24} sm={12} md={8}>
              <Card
                cover={
                  <img
                    alt={project.name}
                    src={project.imageUrl}
                    style={{
                      width: "100%", // Ensures responsiveness within the card
                      height: "200px", // Fixed height
                      objectFit: "cover", // Ensures the image maintains aspect ratio
                    }}
                  />
                }
                actions={[
                  <Button
                    type="danger"
                    loading={deleting === project._id}
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </Button>,
                ]}
              >
                <Meta
                  title={project.name}
                  description={
                    project.description
                      ? project.description.length > 100
                        ? `${project.description.slice(0, 100)}...`
                        : project.description
                      : "No description available."
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ViewProjects;
