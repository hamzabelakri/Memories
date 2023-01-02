const express=require('express');
const router=express.Router();
const {getPosts, createPost, getOnePost, updatePost, deletePost, likePost}=require('../controllers/postController.js')

router.get('/',  getPosts)
router.post('/', createPost)
router.get('/:id', getOnePost)
router.put('/:id', updatePost)
router.patch('/:id/likePost', likePost)
router.delete('/:id', deletePost)





module.exports =router