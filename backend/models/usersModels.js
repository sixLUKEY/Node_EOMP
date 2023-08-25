import db from "../config/database.js";
import { compare } from "bcrypt";
import { createToken } from "../middleware/authenticateUser.js";


// Get All Users
export const getUsers = (result) => {
  db.query(
    "SELECT userID, firstName, lastName , userAge , Gender, userRole, emailAdd, userPass, userProfile FROM usersTable",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Get Single User
export const getUserById = (id, result) => {
  db.query(
    "SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM usersTable WHERE userID = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Insert User to Database
export const insertUser = (data, result) => {
  db.query("INSERT INTO usersTable SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// login fix up

export const userLogin = (req, res) => {
  const { emailAdd, userPass } = req.body;

  const query = `SELECT firstName, lastName, userAge, gender, userRole, emailAdd, userPass FROM usersTable WHERE emailAdd = '${emailAdd}'`;

  db.query(query, async (err, result) => {
    if (err) throw err;

    if (!result?.length) {
      res.json({
        status: res.statusCode,
        message: "Incorrect email address!",
      });
    } else {
      await compare(userPass, result[0].userPass, (cErr, cResult) => {
        if (cErr) throw cErr;

        // create token
        const token = createToken({
          emailAdd,
          userPass,
        });

        // save token
        res.cookie("LegitUser", token, {
          maxAge: 3600000,
          httpOnly: true,
        });

        if (cResult) {
          res.json({
            message: "You have successfully logged in  to Another Time",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.statusCode,
            message: "Unregistered user or incorrect password!",
          });
        }
      });
    }
  });
};

// Update User to Database
export const updateUserById = (data, id, result) => {
  db.query(
    "UPDATE usersTable SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ?  WHERE userID = ?",
    [
      data.firstName,
      data.lastName,
      data.userAge,
      data.Gender,
      data.userRole,
      data.emailAdd,
      data.userPass,
      data.userProfile,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// Delete User to Database
export const deleteUserById = (id, result) => {
  db.query("DELETE FROM usersTable WHERE userID = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
