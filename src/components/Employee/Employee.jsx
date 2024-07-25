import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { EmployeeContext } from '../../contexts/EmployeeContext';
import EditForm from '../EditForm/EditForm'

const Employee = ({ employee }) => {

    const { deleteEmployee } = useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <React.Fragment>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <button className='btn text-warning btn-act' onClick={() => handleShow()} data-toggle="modal" title="Edit this Employee">
                    Edit
                </button>

                <button className='btn text-danger btn-act' onClick={() => deleteEmployee(employee.id)} data-toggle="modal" title=" WARNING: Delete this Employee " >
                    Delete
                </button>
            </td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm employee={employee}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>

    )
}

export default Employee;