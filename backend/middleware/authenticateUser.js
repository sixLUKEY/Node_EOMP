import { sign } from "jsonwebtoken";
import { config } from "dotenv";
config();

export function createToken(user) {
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
