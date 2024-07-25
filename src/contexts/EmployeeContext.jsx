import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
    const initialEmployees = [
        { id: uuidv4(), name: 'Bwipo Busio', email: 'op@gmail.com', address: '120 THenery Ave, Seatle, USA', phone: '(250) 617-2937' },
        { id: uuidv4(), name: 'Theoadore Jensen', email: 'op12@gmail.com', address: '178 Gardene, Wyoming, USA', phone: '(250) 617-2937' },
        { id: uuidv4(), name: 'Applin Bodega', email: 'op1234@gmail.com', address: '891 Galarian Int, Nevada, USA', phone: '(250) 617-2937' },
    ];

    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : initialEmployees;
    });

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, {
            id: uuidv4(),
            name,
            email,
            address,
            phone,
        }]);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(employee => employee.id === id ? updatedEmployee : employee));
    };

    const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

    return (
        <EmployeeContext.Provider value={{ sortedEmployees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeContextProvider;
