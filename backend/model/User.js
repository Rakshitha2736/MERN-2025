import mongoose from 'mongoose';
export const userschema = new mongoose.Schema({
    name: { type: String, required: true },
    age:Number
});
const User = mongoose.model('users', userschema);
export default User;