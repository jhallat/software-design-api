import Requirement from '../models/requirement'
import {Request, Response} from 'express';

export const getRequirements = async (req: Request, res: Response, next: any) => {

    const requirements = await Requirement.find();

    res.status(200).json({
        success: true,
        results : requirements.length,
        data : requirements
    })
}

export const getRequirement = async (req: Request, res: Response, next: any) => {

    const requirement = await Requirement.findById(req.params.id);

    if (!requirement) {
        return res.status(404).json({
            success : false,
            message : 'Requirement not found'
        });
    }

    res.status(200).json({
        success : true,
        data : requirement
    });
}

export const updateRequirement = async (req: Request, res: Response, next: any) => {
    const requirement = await Requirement.findById(req.params.id);

    if (!requirement) {
        return res.status(404).json({
            success : false,
            message : 'Requirement not found'
        });
    }

    const updatedRequirement = await Requirement.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true
    });

    res.status(200).json({
        success : true,
        message : 'Requirement is updated',
        data : updatedRequirement
    });
}

export const deleteRequirement = async (req: Request, res: Response, next: any) => {
    const requirement = await Requirement.findById(req.params.id);

    if (!requirement) {
        return res.status(404).json({
            success : false,
            message : 'Requirement not found'
        });
    }

    const deletedRequirement = await Requirement.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({
        success : true,
        message : 'Requirement is deleted',
        data : deletedRequirement
    });

}

export const createRequirement = async (req: Request, res: Response, next: any) => {
    const requirement = await Requirement.create(req.body);

    res.status(200).json({
        success : true,
        message : 'Requirement created',
        data : requirement
    });
}
