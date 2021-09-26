import React from "react";

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
            <div className="bg-white">
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
                            <th scope="row">Total</th>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="text-center">
                                <button className="btn btn-primary">
                                    Invite All
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Selections;
