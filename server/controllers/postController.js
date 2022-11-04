const PostMessage= require('../models/postMessage')

const getPosts=async(req, res)=>{

    const postMessage= await PostMessage.find();
try {
    res.status(200).json(postMessage);

} catch (error) {
    res.status(400).json({message: error.message});
}
}


const getOnePost= async (req, res) => {
    
    try {
        const id= req.params.id
        const postMessage= await PostMessage.findById(id)
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(400).json({message:"failed to get the post"})
    }
} 

const createPost=async(req, res)=>{
    const post= req.body
    const newPost= new PostMessage(post);
    try {
        await newPost.save();
        res.status(200).json({message:"new post created", newPost});
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    }

const updatePost= async(req, res)=>{
    const id= req.params.id;
    const post= req.body;
 try {
    const updatedpost= await PostMessage.findByIdAndUpdate(id, post, {new:true})
    const postMessage= await PostMessage.find();
    res.status(200).json({message: "updated successfully", updatedpost, postMessage})
 } catch (error) {
    res.status(400).json({message: "failed to update"})
 }
} 


const deletePost= async(req, res)=>{
    const id= req.params.id;
    try {
        const deletedpost= await PostMessage.findByIdAndRemove(id)
        const postMessage= await PostMessage.find();
        res.status(200).json({message: "deleted successfully",deletedpost, postMessage})
    } catch (error) {
        res.status(400).json({message: "failed to delete"})
    }
}

module.exports = {getPosts, createPost, getOnePost, updatePost, deletePost}