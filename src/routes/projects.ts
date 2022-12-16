import express from "express";
import {createProject, getProject} from "../controllers/projectsController";

const router = express.Router();

router.route('/project/new').post(createProject);
router.route('/project/:id').get(getProject);

export default router;