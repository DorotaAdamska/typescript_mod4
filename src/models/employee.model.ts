import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  department: { type: String, required: true }
})

export default mongoose.model('Employee', employeeSchema)