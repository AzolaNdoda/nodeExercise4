import mysql from 'mysql2/promise'

import { config } from 'dotenv'

config()

// Creating a connection to the mysql database
const pool = mysql.createPool({
    hostname: process.env.HOSTNAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

// Creating a function/ query that will return all the employee data.

const getEmployees = async()=>{
    let [data] = await pool.query('SELECT * FROM pick_n_steal.employees')
    return data
}
console.log(await(getEmployees()));

/* Creating a function/ query that will return a single employee based on their
employee_id.*/

const getSingleEmployee = async(employee_id)=>{
    let [data] = await pool.query('SELECT * FROM pick_n_steal.employees WHERE employee_id = ?',[employee_id])
    return data
}
console.log(await(getSingleEmployee(3)));

/*Creating a function/ query that adds a new employee and then returns all the
employees so you can see if the data was added.*/
1``
const insertEmployee = async(first_name, last_name, email, phone_number, department, salary)=>{
    await pool.query('INSERT INTO `pick_n_steal`.`employees` (`first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES (?, ?, ?, ?, ?, ?)',[first_name, last_name, email, phone_number, department, salary])
    
    return await getEmployees()
}

//A new employee is automatically added each time the code is updated

console.log(await(insertEmployee("Azola","Ndoda","azola.ndoda@example.com", "555-3725", "Finance",95000.00)));

/**Creating a function/ query that will remove an employee from the table based on their
employee id and then returns all the employees so you can see if the data was
removed */

const removeEmployee = async(employee_id)=>{
    await pool.query('DELETE FROM `pick_n_steal`.`employees` WHERE `employee_id` = ?',[employee_id])

    return await getEmployees()

}
console.log(await(removeEmployee(3)));

/**Creating a function/ query that will be able to update all the values of an employee
based on their employee id and then returns the employees new data that was
edited.
 */

const updateEmployee = async(first_name,last_name, email, phone_number, department, salary,employee_id)=>{
    await pool.query('UPDATE `pick_n_steal`.`employees` SET `first_name` = ?, `last_name` = ?, `email` = ?, `phone_number` = ?, `department` = ?, `salary` = ? WHERE `employee_id` = ?',[ first_name, last_name, email, phone_number, department, salary,employee_id])

    return await getEmployees()
}
console.log(await(updateEmployee("Emily", "Jacobs","emily.jacobs@example.com","555-4352", "Sales", 86000.00, 4)));
