import React, { useEffect, useState } from "react";
import School from "../School/School";
import Selections from "../Selections/Selections";
import "./Container.css";

const Container = () => {
    const [schools, setSchools] = useState([]);
    const [selected, setSelected] = useState([]);

    // fetch data
    useEffect(() => {
        fetch("./schools.JSON")
            .then((res) => res.json())
            .then((data) => setSchools(data));
    }, []);

    // doesn't add the same thing
    const handleClick = (school) => {
        const newSelected = [...selected];
        if (newSelected.indexOf(school) === -1) {
            newSelected.push(school);
        } else {
            alert("School already added");
        }

        // set the state
        setSelected(newSelected);
    };

    return (
        <div className="school-container mb-2 mt-3">
            {/* send the selected schools */}
            <Selections selected={selected} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* show components for each element of array(schools) */}
                {schools.map((school) => (
                    <School
                        school={school}
                        key={school.id}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Container;
