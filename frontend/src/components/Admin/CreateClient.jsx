import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const CreateClient = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = async (values) => {
    if (!file) {
      message.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("designation", values.designation);
    formData.append("description", values.description);
    formData.append("image", file);

    try {
      setLoading(true);
      const response = await axios.post("/api/clients/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      message.success("Client created successfully!");
      form.resetFields();
      setFile(null);
    } catch (error) {
      console.error("Error creating client:", error);
      message.error("Failed to create client. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle image upload
  const handleUpload = (info) => {
    const selectedFile = info.file;
    setFile(selectedFile);
    message.success(`${selectedFile.name} selected successfully.`);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <h2>Create Client</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: "Please enter the designation" }]}
        >
          <Input placeholder="Enter designation" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter the description" }]}
        >
          <Input.TextArea placeholder="Enter description" rows={4} />
        </Form.Item>

        <Form.Item
          label="Upload Image"
          name="image"
          valuePropName="file"
          rules={[{ required: true, message: "Please upload an image" }]}
        >
          <Upload
            name="image"
            listType="picture"
            maxCount={1}
            beforeUpload={() => false}
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Select Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateClient;
