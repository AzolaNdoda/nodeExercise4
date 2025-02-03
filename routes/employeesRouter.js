import express from 'express'
import { getEmployeesCon,getSingleEmployeeCon,insertEmployeeCon,removeEmployeeCon,removeEmployeesCon,getSAEmployeesCon} from '../controller/employeesController.js'

// manages paths from different file as you cant use app.get/app.post...cant use const app = express()

const router = express.Router()

// Routes with paths to employees

router.get('/',)

router.get('/:employee_id', getEmployeesCon)

router.post('/', getSingleEmployeeCon)

router.delete('/:employee_id', removeEmployeeCon)

router.delete('/', removeEmployeesCon)

router.get('/:department_id', getSAEmployeesCon)

// allows to be used outside of file
export default router