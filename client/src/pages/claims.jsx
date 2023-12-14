import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/claims.css';

const Claims = () => {
  const [selectedView, setSelectedView] = useState('accepted');
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Fetch data based on the selected view
    const fetchData = async () => {
      const apiUrl = selectedView === 'accepted' ? 'http://localhost:3001/api/trueclaims' : 'http://localhost:3001/api/falseclaims';
      try {
        const response = await axios.get(apiUrl);
        setClaims(response.data);
      } catch (error) {
        console.error('Error fetching claims:', error);
      }
    };

    fetchData();
  }, [selectedView]);

  const handleButtonClick = (view) => {
    setSelectedView(view);
  };

  const renderClaims = () => {
    return (
      <div className="claims-container">
        <div className="claim-header">{selectedView === 'accepted' ? 'Accepted Claims' : 'Rejected Claims'}</div>
        <table className="claims-table">
          <thead>
            <tr>
              <th>Customer Number</th>
              <th>General Comment</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim, index) => (
              <tr key={index} className="claim-item">
                <td>{claim.customernumber}</td>
                <td>{claim.generalcomment1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('accepted')}>Accepted Claims</button>
        <button onClick={() => handleButtonClick('rejected')}>Rejected Claims</button>
      </div>
      <div>{renderClaims()}</div>
    </div>
  );
};

export default Claims;