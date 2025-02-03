import{getEmployees,getSingleEmployee,insertEmployee,removeEmployee,removeEmployees,getSAEmployees} from "../model/employeesDb.js"

const getEmployeesCon = async(req,res)=>{
    res.json({employees: await getEmployees()})
}

const getSingleEmployeeCon = async(req,res)=>{
    res.json({employee: await getSingleEmployee()})
}

const insertEmployeeCon = async(req,res)=>{
    let {first_name, last_name, email, phone_number, department, salary} = req.body
    res.json({
        employee: await insertEmployee(first_name, last_name, email, phone_number, department, salary)
    })
}

const removeEmployeeCon = async(req,res)=>{
    res.json({employee: await removeEmployee(req.params.employee_id)})
}

const removeEmployeesCon = async(req,res)=>{
    res.json({employees: await removeEmployees(req.params.id)})
}

const getSAEmployeesCon = async(req,res)=>{
    res.json({employees: await getSAEmployees(req.params.department_id)})
}

export {getEmployeesCon, getSingleEmployeeCon, insertEmployeeCon, removeEmployeeCon, removeEmployeesCon,getSAEmployeesCon}