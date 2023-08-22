import db from "../config/database.js";
import { createToken } from "../middleware/authenticateUser.js";

// Get All Products
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

// Get Single Product
export const getUserById = (id, result) => {
    const user = {
      emailAdd: data.userAdd,
      userPass: data.userPass,
    };
  db.query(
    "SELECT firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile FROM usersTable WHERE userID = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);

        res.json(results);
        let token = createToken(user);
        res.json({
          status: res.statusCode,
          token,
          msg: "New user created successfully",
        });
      }next();
    }
  );
};

// Insert Product to Database
export const insertUser = (data, result) => {
  db.query("INSERT INTO usersTable SET ?;", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// Update Product to Database
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

// Delete Product to Database
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
