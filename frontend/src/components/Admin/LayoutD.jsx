import React, { useState } from "react";
import {
  ContactsOutlined,
  FundViewOutlined,
  HomeOutlined,
  MailOutlined,
  PlusCircleOutlined,
  ProfileOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Contacts", "/admin", <ContactsOutlined />),
  getItem("Subscribed", "/admin/subscribe", <MailOutlined />),

  getItem("Add Client", "/admin/clients/add", <UserAddOutlined />),
  getItem("View Client", "/admin/clients/view", <ProfileOutlined />),

  getItem("Add Project", "/admin/projects/add", <PlusCircleOutlined />),
  getItem("View Project", "/admin/projects/view", <FundViewOutlined />),
];

const LayoutD = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  // Handle menu item click
  const onMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ overflow: "auto" }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={onMenuClick}
          style={{
            flexDirection: "column",
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "16px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutD;
