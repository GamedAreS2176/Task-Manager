import mongoose from "mongoose";

async function getConnection(url)
{
    return await mongoose.connect(url)
    .then(()=>console.log("MongoDB Connected Successfully"))
    .catch((err)=>console.log(err));
}

export { getConnection };