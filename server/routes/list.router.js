const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get("/", (req, res) => {
  console.log("In router!");
  let queryText = 'SELECT * from "shopping_list" ORDER BY "purchased", "name" ASC; ';
  pool
    .query(queryText)
    .then((result) => {
      console.log("results from db", result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("in .post");
  const newListItem = req.body;
  console.log("in newListItem", newListItem);
  const queryText = `INSERT INTO shopping_list (name, quantity, unit, purchased)
  VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [newListItem.name, newListItem.quantity, newListItem.unit, newListItem.purchased])
    .then((result) => {
      console.log("result", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error making insert query", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {
  console.log("hello from delete request");
  const queryText = `DELETE from "shopping_list" WHERE id = ${req.params.id};`;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

router.put("/:id", (req, res) => {
  console.log("hello from put request");
  let queryText = `UPDATE "shopping_list" SET "purchased" = true WHERE id =${req.params.id}; `;
  pool
    .query(queryText)
    .then((result) => {
      console.log(result);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log("error making query", error);
      res.sendStatus(500);
    });
});

module.exports = router;