import { express } from "express";

const router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("Hi");
        res.status(200).json({ message: "Hi" });
    }
);

export default router;