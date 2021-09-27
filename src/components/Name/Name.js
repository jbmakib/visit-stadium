import React from "react";

const Name = (props) => {
    const { school, handleRemoveItem } = props;
    return (
        <div className="bg-white p-2 d-flex align-items-center justify-content-between">
            <span>{school.name} </span>
            <span onClick={() => handleRemoveItem(school)} role="button">
                &times;
            </span>
        </div>
    );
};

export default Name;
