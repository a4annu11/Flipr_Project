import React from "react";
import backgroundImage from "../assets/Rectangle.png";

const LearnMoreSection = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px", // Adjust the height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          //   padding: "20px",
          //   borderRadius: "10px",
          width: "100%",
          height: "100%",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          Learn more about our listing process, as well as our additional
          staging and design work.
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            LEARN MORE
          </button>
        </h2>
      </div>
    </div>
  );
};

export default LearnMoreSection;
