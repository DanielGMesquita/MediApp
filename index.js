import { express } from "express";
import { pkg } from "body-parser";
import { router } from "./routes/router.js";

const app = express();
const { json, urlencoded } = pkg;

app.use(json());
app.user(urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Listening to port 300");
});

app.use("/", router);