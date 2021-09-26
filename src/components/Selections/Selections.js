import React from "react";
import Name from "../Name/Name";

const Selections = (props) => {
    const { selected } = props;

    let totalStudent = 0;
    let totalTeachers = 0;
    for (const school of selected) {
        totalStudent += school.students;
        totalTeachers += school.teachers;
    }
    const total = totalStudent + totalTeachers;

    return (
        <div className="pe-3">
            <div className="bg-white mb-2">
                <h3 className="text-center py-1">Selected</h3>
                <table className="table-borderless table">
                    <tbody>
                        <tr>
                            <th>Added-Schools:</th>
                            <td>{selected.length}</td>
                        </tr>
                        <tr>
                            <th>Students: </th>
                            <td>{totalStudent}</td>
                        </tr>
                        <tr>
                            <th>Teachers:</th>
                            <td>{totalTeachers}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total:</th>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="text-center">
                                <button className="btn btn-primary">
                                    <i className="far fa-envelope"></i> Invite
                                    Selected
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {selected.map((school) => (
                <Name name={school.name} key={school.id} />
            ))}
        </div>
    );
};

export default Selections;
