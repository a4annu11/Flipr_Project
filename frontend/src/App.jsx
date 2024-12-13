import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";

import LayoutD from "./components/Admin/LayoutD";
import Contact from "./components/Admin/Contact";
import Subscribe from "./components/Admin/Subscribe";
import CreateClient from "./components/Admin/CreateClient";
import ViewClients from "./components/Admin/ViewClients";
import AddProject from "./components/Admin/AddProject";
import ViewProjects from "./components/Admin/ViewProjects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/admin" element={<LayoutD />}>
          <Route index element={<Contact />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="clients/add" element={<CreateClient />} />
          <Route path="clients/view" element={<ViewClients />} />
          <Route path="projects/add" element={<AddProject />} />
          <Route path="projects/view" element={<ViewProjects />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
