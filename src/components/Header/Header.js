import React from "react";
import "./Header.css";

const Header = () => {
    const capacity = 22000;

    return (
        <div className="text-center header rounded my-2 p-3">
            <h2>Selection for visiting match in stadium</h2>
            <p>
                We are planning to see a match at Jahur Ahmed Stadium in
                Chattagram with the student and teacher of the best schools of
                Chattagram
            </p>
            <h3>Total Capacity: {capacity}</h3>
        </div>
    );
};

export default Header;
