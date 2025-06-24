import express from 'express'
import {connectDB} from './config/db.js';
import mongoose from 'mongoose';
import User from './model/User.js';
const app= express()
connectDB();



app.get('/get', async (req, res) => {
    const users= await User.find();
    res.json(users);
});
app.post('/post', (req, res) => {
    res.send('from post')
});
app.put('/put', (req, res) => {
    res.send('from put')
});
app.delete('/delete', (req, res) => {
    res.send('from delete')
});
app.patch('/patch', (req, res) => {
    res.send('from patch')
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});