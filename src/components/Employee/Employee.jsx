import React from 'react'
const Employee = ( {employee} ) => {

    return (
        <React.Fragment>
            
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <a href="#editEmployeeModal" className="edit" data-toggle="modal">
                    <button  data-toggle="tooltip" title="Edit">
                        Edit
                    </button>
                </a>
                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
                    <button  data-toggle="tooltip" title="Delete">
                        Delete
                    </button>
                </a>
            </td>
        </React.Fragment>
        
    )
}

export default Employee;