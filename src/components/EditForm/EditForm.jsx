import {Form, Button} from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../../contexts/EmployeeContext';


const EditForm = ( {employee} ) => {

    const id = employee.id

    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);
    

    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {id, name, email, phone};

    const handleSubmit = e => {
        e.preventDefault();
        updateEmployee(id, updatedEmployee)
    }
    
    return (
        <Form onSubmit ={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

    )
}

export default EditForm;