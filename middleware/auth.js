import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if(!token) {
        return res.status(401).json({error: 'Access denied!'});
    }

    try {
        const decodedToken = jwt.verify(token, 'secret-key');
        req.doctorId = decodedToken.doctorId;
        next();
    } catch (error) {
        res.status(401).json({error: 'Invalid token!'});
    }
};

export default verifyToken;