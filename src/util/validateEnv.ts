import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    PORT: port(),
    JWT_SECRET: str(),
    MAIL_USER: str(),
    MAIL_PASS: str()
})