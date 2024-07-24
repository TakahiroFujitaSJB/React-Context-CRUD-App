import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Bwipo Busio', email: 'op@gmail.com', address: '120 THenery Ave, Seatle, USA', phone: '(250) 617-2937' },
        { id: uuidv4(), name: 'Theoadore Jensen', email: 'op12@gmail.com', address: '178 Gardene, Wyoming, USA', phone: '(250) 617-2937' },
    ])


    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, {
            id: uuidv4(),
            name,
            email,
            address,
            phone,
        }])

    }

    const deleteEmployee = id => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updateEmployee) => {
        setEmployees(employees.map(employee => employee.id === id ? updateEmployee : employee))

    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;