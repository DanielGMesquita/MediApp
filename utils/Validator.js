export const validatePhone = function (v) {
    return /\d{2} 9\d{4}-\d{4}/.test(v);
};

export const phoneValidationMessage = props => 
    `${props.value} This is not a valid phone number. Please, use the following format 99 91234-5678.`;

export const validateId = function (v, mongoose, entity) {
    const id = new mongoose.Types.ObjectId(v);
    return entity.exists({_id: id});
};

export const idValidationMessage = props => 
    `${props.name} ${props.value} not found.`;