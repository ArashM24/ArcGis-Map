// import React, { useEffect, useRef } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Coordinates for popular places in Dubai
// const locations = {
//   burjKhalifa: [25.1972, 55.2744],
//   palmJumeirah: [25.1122, 55.1386],
//   dubaiMall: [25.1988, 55.2778],
// };

// const MapComponent = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // Default map center and zoom level for Dubai
//   const defaultCenter = [25.276987, 55.296249];
//   const defaultZoom = 13;

//   useEffect(() => {
//     // Initialize Leaflet map
//     map.current = L.map(mapContainer.current).setView(
//       defaultCenter,
//       defaultZoom
//     ); // Default view: Dubai

//     // Add a tile layer (OpenStreetMap)
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
//       map.current
//     );

//     // Add navigation controls
//     L.control.scale().addTo(map.current);

//     return () => {
//       map.current.remove(); // Cleanup on unmount
//     };
//   }, []);

//   // Function to go to a specific location with smooth transition
//   const goToLocation = (coords) => {
//     map.current.flyTo(coords, 15, {
//       // flyTo for smooth transition
//       duration: 2, // Duration of the transition (in seconds)
//     });
//   };

//   // Function to return to the default map view
//   const resetMap = () => {
//     map.current.setView(defaultCenter, defaultZoom); // Reset to default center and zoom
//   };

//   return (
//     <div>
//       {/* Map Container */}
//       <div
//         ref={mapContainer}
//         style={{ height: "80vh", width: "100%", marginBottom: "10px" }}
//       ></div>

//       {/* Buttons to Navigate to Popular Places */}
//       <div style={{ textAlign: "center" }}>
//         <button
//           onClick={() => goToLocation(locations.burjKhalifa)}
//           style={{ margin: "5px" }}
//         >
//           Burj Khalifa
//         </button>
//         <button
//           onClick={() => goToLocation(locations.palmJumeirah)}
//           style={{ margin: "5px" }}
//         >
//           Palm Jumeirah
//         </button>
//         <button
//           onClick={() => goToLocation(locations.dubaiMall)}
//           style={{ margin: "5px" }}
//         >
//           Dubai Mall
//         </button>
//         {/* Reset Map Button */}
//         <button onClick={resetMap} style={{ margin: "5px" }}>
//           Reset Map
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Coordinates for popular places in Dubai
const locations = {
  burjKhalifa: [25.1972, 55.2744],
  palmJumeirah: [25.1124, 55.1390],
  atlantisThePalm: [25.1304, 55.1171],
  jumeirahBeach: [25.194, 55.2316],
  dubaiMarina: [25.0785, 55.1407],
};

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Default map center and zoom level for Dubai
  const defaultCenter = [25.2048, 55.2708];
  const defaultZoom = 10.5;

  useEffect(() => {
    // Initialize Leaflet map
    map.current = L.map(mapContainer.current).setView(
      defaultCenter,
      defaultZoom
    ); // Default view: Dubai

    // Add a tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map.current
    );

    // Add navigation controls
    L.control.scale().addTo(map.current);

    return () => {
      map.current.remove(); // Cleanup on unmount
    };
  }, []);

  // Function to go to a specific location with smooth transition
  const goToLocation = (coords) => {
    map.current.flyTo(coords, 15, {
      // flyTo for smooth transition
      duration: 2, // Duration of the transition (in seconds)
    });
  };

  // Function to return to the default map view
  const resetMap = () => {
    map.current.setView(defaultCenter, defaultZoom); // Reset to default center and zoom
  };

  return (
    <div>
      {/* Map Container */}
      <div
        ref={mapContainer}
        style={{ height: "90vh", width: "100%", marginBottom: "10px" }}
      ></div>

      {/* Buttons to Navigate to Popular Places */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => goToLocation(locations.burjKhalifa)}
          style={{ margin: "5px" }}
        >
          Burj Khalifa
        </button>
        <button
          onClick={() => goToLocation(locations.palmJumeirah)}
          style={{ margin: "5px" }}
        >
          Palm Jumeirah
        </button>
        <button
          onClick={() => goToLocation(locations.atlantisThePalm)}
          style={{ margin: "5px" }}
        >
          Atlantis The Palm
        </button>
        <button
          onClick={() => goToLocation(locations.jumeirahBeach)}
          style={{ margin: "5px" }}
        >
          Jumeirah Beach
        </button>
        <button
          onClick={() => goToLocation(locations.dubaiMarina)}
          style={{ margin: "5px" }}
        >
          Dubai Marina
        </button>
        {/* Reset Map Button */}
        <button onClick={resetMap} style={{ margin: "5px" }}>
          Reset Map
        </button>
      </div>
    </div>
  );
};

export default MapComponent;


