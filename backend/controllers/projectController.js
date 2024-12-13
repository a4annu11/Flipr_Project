import Project from "../models/Project.js";
import { v2 as cloudinary } from "cloudinary";

// Create a new project
export const createProject = async (req, res) => {
  async function uploading(file, folder) {
    const options = {
      folder,
    };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
  }

  const { name, description } = req.body;
  const image = req.files?.image;

  try {
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }

    let imageUrl = "";
    let cloudinary_name = "";

    if (image) {
      const uploadedResponse = await uploading(image, "Projects");
      imageUrl = uploadedResponse.secure_url;
      cloudinary_name = uploadedResponse.public_id;
    }

    const project = new Project({
      name,
      description,
      imageUrl,
      cloudinary_name,
    });

    await project.save();
    res.status(201).json({ message: "Project created successfully", project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting project with ID:", id);

    const project = await Project.findById(id);
    if (!project) {
      console.log("Project not found");
      return res.status(404).json({ message: "Project not found" });
    }

    // Delete image from Cloudinary if it exists
    if (project.cloudinary_name) {
      console.log("Attempting to delete image from Cloudinary...");
      const cloudinaryResponse = await cloudinary.uploader.destroy(
        project.cloudinary_name
      );
      console.log("Cloudinary delete response:", cloudinaryResponse);
    }

    // Delete the project
    await Project.findByIdAndDelete(id);
    console.log("Project deleted successfully");

    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Error during project deletion:", err);
    res
      .status(500)
      .json({ message: "Server error, please try again later", error: err });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};
