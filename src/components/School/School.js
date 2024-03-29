import React from "react";
import "./School.css";

const School = (props) => {
    // destructuring
    const { handleClick, school } = props;
    const { name, established, img, location, students, teachers } = school;

    return (
        <div className="col">
            <div className="card h-100 rounded-3">
                <img
                    src={img}
                    className="card-img-top"
                    alt={name}
                    title={name}
                />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="card-text my-1">EST. {established}</p>
                    <p className="card-text my-1">Location: {location}</p>
                    <p className="card-text my-1">Total Student: {students}</p>
                    <p className="card-text my-1">Total Teachers: {teachers}</p>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleClick(school)}
                    >
                        <i className="far fa-envelope"></i> Invite Them
                    </button>
                </div>
            </div>
        </div>
    );
};

export default School;
