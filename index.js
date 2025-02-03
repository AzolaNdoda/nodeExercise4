import express from 'express'
import cors from 'cors'
import employeesRouter from './routes/employeesRouter.js'

const PORT = process.env.PORT ||3000
const app = express()
app.use(cors())
app.use(express.json())
app.use('/products',employeesRouter)

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})