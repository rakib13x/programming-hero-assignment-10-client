import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="space-x-8">
      <button onClick={() => navigate("/amdproduct")}>Amd</button>
      <button onClick={() => navigate("/appleproduct")}>Apple</button>
      <button onClick={() => navigate("/googleproduct")}>Google</button>
      <button onClick={() => navigate("/intelproduct")}>Intel</button>
      <button onClick={() => navigate("/samsungproduct")}>Samsung</button>
      <button onClick={() => navigate("/sonyproduct")}>Sony</button>
    </div>
  );
};

export default Home;
