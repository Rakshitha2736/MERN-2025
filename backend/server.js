import express from 'express'
import {connectDB} from './config/db.js';
import mongoose from 'mongoose';
import User from './model/User.js';
import Form from './model/Form.js';
import cors from 'cors';
const app= express()
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


//middleware
const methodFind=(req,res,next)=>{
    console.log(`${ req.method} ${req.url}`);
    next();
}

app.use(methodFind);




app.get('/get', async (req, res) => {

    const user= await User.find()
    res.json(user);
});
app.post('/post', async(req, res) => {
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.json(newUser)

    }catch(error){
        res.status(401).json(error)
    }
});
app.put('/put/:id',async (req, res) => {
    try{
    const  update =await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({msg:'data updated'})
    }catch(error){
        res.json(error)
    }
});
app.delete('/delete/:id', async(req, res) => {
    try{
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        res.json({msg:'data deleted'})
    }catch(error){
        res.json(error)
    }
    
});
app.patch('/patch', (req, res) => {
    res.send('from patch')
});

app.get('/form', async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        res.json(error);
    }
});
app.post('/form', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        await newForm.save();
        res.json(newForm);
    } catch (error) {
        res.status(401).json(error);
    }
});

app.put('/form/:id', async (req, res) => {
    try {
        const updateForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateForm);
    } catch (error) {
        res.json(error);
    }
});
app.delete('/form/:id', async (req, res) => {
    try {
        const deleteForm = await Form.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Form deleted' });
    } catch (error) {
        res.json(error);
    }
});
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});