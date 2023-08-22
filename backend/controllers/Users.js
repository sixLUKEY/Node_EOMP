import { getUsers, getUserById, insertUser, updateUserById, deleteUserById } from "../models/usersModels.js";
import bcrypt from "bcrypt" 
// Get All Products
export const showUsers = (req, res) => {
    getUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Product 
export const showUserById = (req, res) => {
    getUserById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Create New User
export const  createUser = (req, res) => {
    const data = req.body;
    data.userPass =  bcrypt.hashSync(data.userPass, 10);
    insertUser(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update Product
export const updateUser = (req, res) => {
    const data  = req.body;
    data.userPass =  bcrypt.hashSync(data.userPass, 10);
    const id    = req.params.id;
    updateUserById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Delete Product
export const deleteUser = (req, res) => {
    const id = req.params.id;
    deleteUserById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}