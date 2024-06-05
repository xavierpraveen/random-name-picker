import Cors from "cors";
import {initMiddleware} from "./init-middlewares";

const cors = initMiddleware(
  Cors({
    origin: '*',
    methods: ["GET", "POST", "PUT", "UPDATE", "OPTIONS"]
  })
);

export default cors;
