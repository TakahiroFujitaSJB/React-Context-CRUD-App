import {Form, Button} from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import { EmployeeContext } from '../../contexts/EmployeeContext';


const EditForm = () => {

    const {updateEmployee} = useContext(EmployeeContext);
    
    return (
        <Form onSubmit ={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>

    )
}

export default EditForm;