import React, { useEffect, useState } from "react";
import School from "../School/School";
import "./Container.css";

const Container = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        fetch("./schools.JSON")
            .then((res) => res.json())
            .then((data) => setSchools(data));
    }, []);

    return (
        <div className="school-container my-2">
            <h2>Hello from container</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {schools.map((school) => (
                    <School school={school} key={school.id} />
                ))}
            </div>
        </div>
    );
};

export default Container;
