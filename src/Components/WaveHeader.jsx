import React from "react";

function WaveHeader() {
  const headerStyles = {
    position: "relative",
    textAlign: "center",
    background: "linear-gradient(90deg, rgba(12,88,164,1) 0%, rgba(45,143,206,1) 100%)",
    color: "white",
    height: "65vh",
    width: "100%",
    margin: 0,
    padding: 0
  };

  const waveStyles = {
    position: "relative",
    width: "100%",
    height: "15vh",
    marginBottom: "-7px",
    minHeight: "100px",
    maxHeight: "150px"
  };

  return (
    <header style={headerStyles}>
      <div className="waves" style={waveStyles}>
        {/* wave svg */}
      </div>
      <div className="header-content">
        <h1>Header Content</h1>
      </div>
    </header>
  );
}

export default WaveHeader;
