import React, { useState, useEffect } from "react";
import "./dashboardpage.css";


const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, name: "Harshada Mhase", role: "Developer" },
        { id: 2, name: "Aditya Mhase", role: "Designer" },
        { id: 3, name: "Samiksha", role: "Product Manager" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to the Dashboard!</h1>
        <input
          type="text"
          placeholder="Search by name or role..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      
      <div className="grid-container">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item.id} className="card">
                <h2>{item.name}</h2>
                <p>{item.role}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
    </div>
   </>
  );
};

export default DashboardPage;
