import { Task } from '../models/model.js';

async function getAllTasks(req,res)
{
    try{
        const tasks=await Task.find({});
        if(!tasks)
            return res.status(404).json({ msg:"Error" });
        return res.status(200).json(tasks);
    }
    catch(err)
    {
        res.status(400).end(err);
    }
}

async function getTask(req,res)
{
    try{
        const task=await Task.findById(req.params.id);
        if(!task)
            return res.status(404).json({ msg: "Task Not Found"});
    
        return res.status(200).json(task);
    }
    catch(err)
    {
        res.status(400).end(err);
    }
}

async function createTask(req,res)
{
    try{
        const task=await Task.create(req.body);
        if(!task)
            return res.status(404).json({msg:"No task sent"});
        return res.status(201).json({msg:"Task created successfully"});
    }
    catch(err)
    {
        res.status(400).end(err);
    }
}

async function updateTask(req,res)
{
    try{
        const updatedTask=await Task.findByIdAndUpdate(req.params.id,req.body);
        if(!updatedTask)
            return res.status(404).json({ msg:"Task could not be updated" });
        return res.status(200).json(updatedTask);
    }
    catch(err)
    {
        res.status(400).end(err);
    }
}

async function deleteTask(req,res)
{
    try{
        const delTask=await Task.findByIdAndDelete(req.params.id);
        if(!delTask)
            return res.status(404).json({ msg:"Task could not be deleted" });
        return res.status(200).json({ msg:"Task successfully deleted" });
    }
    catch(err)
    {
        res.status(400).end(err);
    }
}

export { getAllTasks,getTask,createTask,updateTask,deleteTask };