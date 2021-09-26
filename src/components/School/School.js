import React from "react";
import "./School.css";

const School = (props) => {
    const { name, established, img, location, students, teachers } =
        props.school;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="card-text my-1">EST. {established}</p>
                    <p className="card-text my-1">Location: {location}</p>
                    <p className="card-text my-1">Total Student: {students}</p>
                    <p className="card-text my-1">Total Teachers: {teachers}</p>
                    <button className="btn btn-outline-secondary">
                        Invite Them
                    </button>
                </div>
            </div>
        </div>
    );
};

export default School;
