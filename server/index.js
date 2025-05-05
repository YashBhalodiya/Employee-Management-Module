import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { getEmployees } from './routes/getEmployees.js'
import { createEmployee } from './routes/createEmployee.js'
import { deleteEmployee } from './routes/deleteEmployee.js'
import { getEmployeeById } from './routes/getEmployeeById.js'
import { searchEmployee } from './routes/searchEmployee.js'
import { updateEmployee } from './routes/updateEmployee.js'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const app = express()
app.use(cors())
app.use(express.json())


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB Connection Failed`, err);
})


// middlewares
app.use('/employee', getEmployees);
app.use('/employee', getEmployeeById);
app.use('/employee', deleteEmployee);
app.use('/employee', updateEmployee);
app.use('/employee', createEmployee);
app.use('/searchemployee', searchEmployee)


app.listen