import express from 'express';
import { getAllTasks,getTask,createTask,updateTask,deleteTask } from '../controllers/controller.js';

const router=express.Router();

router.get('/',(req,res)=>getAllTasks(req,res));

router.route('/:id').get((req,res)=>getTask(req,res))
.patch((req,res)=>updateTask(req,res))
.delete((req,res)=>deleteTask(req,res));
router.post('/create',(req,res)=>createTask(req,res));

export {router};