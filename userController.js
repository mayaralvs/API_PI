import { where } from "sequelize";
import User from "../models/userModel.js";
import Item from "../models/userModel.js"

//user

async function getAllUsers(req,res){
    const user = await User.findAll()
    res.json(user)
}


async function createUser(req,res){
    const user = await User.create(req.body)
    res.json(user)
}

async function deleteUser(req,res){
    const user = await User.destroy({where: {id: req.params.id}})
    res.json(user)
}

async function updateUser(req,res){
    const user = await User.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(user)
}

async function getUserById(req,res){
    const user = await User.findByPk(req.params.id)
    res.json(user)
}

//item
async function getAllItem(req,res){
    const user = await Item.findAll()
    res.json(item)
}

async function createItem(req,res){
    const user = await Item.create(req.body)
    res.json(item)
}

async function deleteItem(req,res){
    const user = await Item.destroy({where: {id: req.params.id}})
    res.json(item)
}

async function updateItem(req,res){
    const user = await Item.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(item)
}

async function getItemById(req,res){
    const user = await Item.findByPk(req.params.id)
    res.json(item)
}


export default {getAllUsers, createUser, deleteUser, updateUser, getUserById,getAllItem, createItem, deleteItem, updateItem, getItemById}