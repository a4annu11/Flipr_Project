import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;

const AddProject = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values) => {
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", values.name);
      formData.append("description", values.description);

      if (values.image && values.image[0]) {
        formData.append("image", values.image[0].originFileObj);
      }

      const response = await axios.post("/api/projects/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        message.success("Project created successfully!");
        form.resetFields();
      }
    } catch (error) {
      console.error("Error creating project:", error);
      message.error("Failed to create project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Create a New Project</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        autoComplete="off"
      >
        {/* Project Name */}
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: "Please enter the project name" }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        <Form.Item
          label="Project Description"
          name="description"
          rules={[
            { required: true, message: "Please enter the project description" },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Enter project description"
            maxLength={500}
          />
        </Form.Item>

        <Form.Item
          label="Upload Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: "Please upload an image for the project",
            },
          ]}
        >
          <Upload.Dragger
            name="files"
            beforeUpload={() => false}
            accept="image/*"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly accept image files.
            </p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProject;
