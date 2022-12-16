import {Schema, model} from 'mongoose';

const requirementSchema = new Schema({
    project : {
        type : String,
        required : [true, "Project name is required"],
        trim : true,
        maxLength : [100, 'Project name cannot exceed 100 characters']
    },
    description : {
        type : String,
        required : [true, "Description is required"],
        trim : true,
        maxLength : [255, 'Description cannot exceed 255 characters']
    }
});

export default model('Requirement', requirementSchema);