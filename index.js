const express = require("express");
const connection = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "12345",
    database: "school",
  },
});
const app = express();

// Give ability to read JSON body
app.use(express.json());

const port = 3010;
const students = [];
const classroom = [];

// - Get some parameter
//    - Parameters
//    - JSON Body
// - Understand METHOD meaning
//    - GET
//    - POST
//    - DELETE
// app.get('/hello/:id', (req, res) => {
//     return res.json({
//         message: "This is hello world " + req.params.id
//     })
// })

// Map Function
// a.map(x => { return ... });
// Spreading Operation
// {...a, gender: 'Male'}

// Get all student
app.get("/students", async (req, res) => {
  const data = await connection.raw("SELECT * FROM classroom");
  const classRoomList = data[0];
});

//get all class room
app.get("/classrooms", async (req, res) => {
  const data = await connection.raw("SELECT * FROM classroom");
  const classRoomList = data[0];

  return res.json(
    classRoomList.map(function (v) {
      return { id: v.id, name: v.classroom_name, year: v.classroom_year };
    })
  );
});

// Add students
app.post("/student", async (req, res) => {
  await connection.raw(
    "INSERT INTO student(student_name,age) VALUES (?,?)"[
      (req.body.name, req.body.age)
    ]
  );
  return res.json({ success: true });
});
//Add Classroom
app.post("/classroom", async (req, res) => {
  await connection.raw(
    "INSERT INTO classroom(classroom_name, classroom_year) VALUES(?, ?)",
    [req.body.name, req.body.year]
  );

  return res.json({ success: true });
});
//Delete
app.post("/classroom/:id", async (req, res) => {
  // await connection.raw(
  //     "UPDATE classroom SET classroom_name = :name, classroom_year = :year WHERE id = :id",
  //     {
  //         name: req.body.name,
  //         year: req.body.year,
  //         id: req.params.id,
  //     }
  // );

  await connection
    .table("classroom")
    .update({
      classroom_name: req.body.name,
      classroom_year: req.body.year,
    })
    .where({ id: req.params.id });

  return res.json({ success: true });
});
//Delete Student SQL
app.post("/classroom/:id", async (req, res) => {
  await connection.raw(
    "UPDATE classroom SET classroom_name = :name, classroom_year = :year WHERE id = :id",
    {
      name: req.body.name,
      year: req.body.year,
      id: req.params.id,
    }
  );
});
// Delete student
app.delete("/student/:id", async (req, res) => {
  await connection.raw("DELETE FROM student WHERE id = :id", {
    id: req.params.id,
  });
});

app.delete("/classroom/:id", async (req, res) => {
  await connection.raw("DELETE FROM classroom WHERE id = :id", {
    id: req.params.id,
  });
  console.log("Deleted Row sucessfully");

  res.json({ success: true });
});

app.listen(port, () => console.log("listening on port" + port));

// Homework
// - Add/remove classroom
// - Add/remove student

// Next Step
// - Work with database
// - Add student to classroom
