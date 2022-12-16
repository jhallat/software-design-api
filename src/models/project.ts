import {model, Schema} from "mongoose";

const requirementSchema = new Schema({
    id : String,
    description : String
})

const projectSchema = new Schema({
    name : {
        type: String,
        required: [true, "Project name is required"],
        trim: true,
        maxLength : [100, "Project name cannot exceed 100 characters"]
    },
    description : {
        type : String,
        required : [true, "Project description is required"],
        trim : true
    },
    requirements : {
        type : [requirementSchema],
        default : []
    }
})

export default model('Project', projectSchema)