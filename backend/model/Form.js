import mongoose from 'mongoose';


export const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  password: String,
  department: String
});


const Form = mongoose.model('forms', formSchema);
export default Form;
