import pkg from 'jsonwebtoken';
const {sign} = pkg;
import { config } from "dotenv";
config();

export const createToken =(user)=> {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
     process.env.secret_key,
    {
      expiresIn: "1h",
    }
  );
}
