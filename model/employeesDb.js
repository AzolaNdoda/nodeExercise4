import { pool } from "../config/config.js"

const getEmployees = async()=>{
    let [data] = await pool.query('SELECT * FROM pick_n_steal.employees')
    return data
}

const getSingleEmployee = async(employee_id)=>{
    let [data] = await pool.query('SELECT * FROM pick_n_steal.employees WHERE employee_id = ?',[employee_id])
    return data
}

const insertEmployee = async(first_name, last_name, email, phone_number, department, salary)=>{
    await pool.query('INSERT INTO `pick_n_steal`.`employees` (`first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES (?, ?, ?, ?, ?, ?)',[first_name, last_name, email, phone_number, department, salary])
    
    return await getEmployees()
}

const removeEmployee = async(employee_id)=>{
    await pool.query('DELETE FROM `pick_n_steal`.`employees` WHERE `employee_id` = ?',[employee_id])

    return await getEmployees()
}

const removeEmployees = async()=>{
    await pool.query('DELETE FROM `pick_n_steal`.`employees`')
    return await getEmployees()
}

const getSAEmployees = async(department_id)=>{
    let [data] = await pool.query('SELECT * FROM pick_n_steal.employees WHERE department_id = "South Africa"',[department_id])
    return data
}

export {getEmployees, getSingleEmployee, insertEmployee, removeEmployee, removeEmployees, getSAEmployees}