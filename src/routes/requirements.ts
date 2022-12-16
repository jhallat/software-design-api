import express from 'express';
import {
    getRequirements,
    createRequirement,
    updateRequirement,
    deleteRequirement,
    getRequirement
} from '../controllers/requirementsController';

const router = express.Router();

router.route('/requirements').get(getRequirements);
router.route('/requirement/new').post(createRequirement);
router.route('/requirement/:id').put(updateRequirement).delete(deleteRequirement).get(getRequirement);

export default router;