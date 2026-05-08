import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f4f4",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        maxWidth: "1200px",
        margin: "auto",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          fontSize: "32px",
          marginBottom: "10px",
          color: "#222"
        }}>
          UTC Internal Sales Quotation System
        </h1>

        <p style={{
          color: "#666",
          marginBottom: "30px"
        }}>
          Poultry House Equipment Calculator
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px"
        }}>

          <div style={{
            background: "#fafafa",
            padding: "20px",
            borderRadius: "15px"
          }}>
            <h2>House Measurements</h2>

            <input placeholder="Length" style={inputStyle} />
            <input placeholder="Width" style={inputStyle} />
            <input placeholder="Side Height" style={inputStyle} />
            <input placeholder="Ridge Height" style={inputStyle} />
          </div>

          <div style={{
            background: "#fafafa",
            padding: "20px",
            borderRadius: "15px"
          }}>
            <h2>Quotation</h2>

            <input placeholder="Client Name" style={inputStyle} />
            <input placeholder="Quote Number" style={inputStyle} />

            <button style={buttonStyle}>
              Generate Quote
            </button>

            <button style={{
              ...buttonStyle,
              background: "#444"
            }}>
              Export PDF
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  marginTop: "15px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "12px",
  background: "#d97706",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
};
