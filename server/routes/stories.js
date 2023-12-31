import { Router } from "express";
import { getStories, createStory, updateStory, deleteStory, likeStory } from "../controllers/stories";
const router = Router();
import authentication from "../middlewares/authentication";

// localhost:5001/stories
router.get('/', getStories)
router.post('/', authentication, createStory)
router.patch('/:id', authentication, updateStory)
router.delete('/:id', authentication, deleteStory)
router.patch('/:id/likeStory', authentication, likeStory)
export default router;