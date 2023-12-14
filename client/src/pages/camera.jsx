import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/camera.css";

const Camera = () => {
  const [cameraData, setCameraData] = useState([]);
  const [searchCamera, setSearchCamera] = useState("");
  const [filteredCameraData, setFilteredCameraData] = useState([]);
  const [cameraDefectData, setCameraDefectData] = useState([]);
  const [coilCountData, setCoilCountData] = useState([]);

  const [searchCameraDefect, setSearchCameraDefect] = useState("");
  const [filteredCameraDefectData, setFilteredCameraDefectData] = useState([]);
  const [searchCoilCount, setSearchCoilCount] = useState("");
  const [filteredCoilCountData, setFilteredCoilCountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://localhost:3001/api/cameracoils";
      try {
        const response = await axios.get(apiUrl);
        setCameraData(response.data);
      } catch (error) {
        console.error("Error fetching camera data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calculate defect_count for each camera
    const cameraDefectCounts = {};
    cameraData.forEach((item) => {
      const cameraNo = item.camerano;
      if (cameraDefectCounts[cameraNo]) {
        cameraDefectCounts[cameraNo] += Number(item.count);
      } else {
        cameraDefectCounts[cameraNo] = Number(item.count);
      }
    });
    // Convert to array for rendering
    const cameraDefectArray = Object.entries(cameraDefectCounts).map(
      ([cameraNo, defectCount]) => ({
        cameraNo,
        defectCount,
      })
    );
    setCameraDefectData(cameraDefectArray);

    // Calculate total counts for each coilid
    const coilCountMap = {};
    cameraData.forEach((item) => {
      const coilId = item.coilid;
      if (coilCountMap[coilId]) {
        coilCountMap[coilId] += Number(item.count);
      } else {
        coilCountMap[coilId] = Number(item.count);
      }
    });
    // Convert to array for rendering
    const coilCountArray = Object.entries(coilCountMap).map(
      ([coilId, total]) => ({
        coilId,
        total,
      })
    );
    setCoilCountData(coilCountArray);
  }, [cameraData]);

  const handleSearch = () => {
    // Filter cameraData based on the provided camera number
    const filteredData = cameraData.filter(
      (item) => item.camerano === searchCamera
    );
    setFilteredCameraData(filteredData);
  };

  const handleSearchCameraDefect = () => {
    // Filter cameraDefectData based on the provided camera number for defect counts
    const filteredData = cameraDefectData.filter(
      (item) => item.cameraNo === searchCameraDefect
    );
    setFilteredCameraDefectData(filteredData);
  };

  const handleSearchCoilCount = () => {
    // Filter coilCountData based on the provided coil id for total counts
    const filteredData = coilCountData.filter(
      (item) => item.coilId === searchCoilCount
    );
    setFilteredCoilCountData(filteredData);
  };

  return (
    <div>
      <h2>Camera Data</h2>
      

      <div className="table__containers">
 
        
      
        <div>
          {/* Display Filtered Camera Data */}
          <h3>Filtered Camera Data</h3>
          <label htmlFor="searchCamera">Search Camera Number: </label>
        <input
          type="text"
          id="searchCamera"
          value={searchCamera}
          onChange={(e) => setSearchCamera(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
          <table>
            <thead>
              <tr>
                <th>Camera No</th>
                <th>Coil ID</th>
                <th>Defect Count</th>
              </tr>
            </thead>
            <tbody>
              {filteredCameraData.length > 0
                ? filteredCameraData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.camerano}</td>
                      <td>{item.coilid}</td>
                      <td>{item.count}</td>
                    </tr>
                  ))
                : cameraData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.camerano}</td>
                      <td>{item.coilid}</td>
                      <td>{item.count}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>


        <div>
          {/* Display Camera Defect Counts */}
          <h3>Camera Defect Counts</h3>
          <table>
            <thead>
              <tr>
                <th>Camera No</th>
                <th>Defect Count</th>
              </tr>
            </thead>
            <tbody>
              {cameraDefectData.map((item, index) => (
                <tr key={index}>
                  <td>{item.cameraNo}</td>
                  <td>{item.defectCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>

          {/* Display Coil Count Data */}
          <h3>Coil Count Data</h3>
          <table>
            <thead>
              <tr>
                <th>Coil ID</th>
                <th>Total Defect Count</th>
              </tr>
            </thead>
            <tbody>
              {coilCountData.map((item, index) => (
                <tr key={index}>
                  <td>{item.coilId}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Camera;
