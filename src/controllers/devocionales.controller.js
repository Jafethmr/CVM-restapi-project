import { pool } from "../db.js";

export const getDevocionales = async (req, res) => {
  try {
    console.log("Body " + req.body.id);
    const [rows] =
      req.body.id == undefined
        ? await pool.query("SELECT * FROM devocionales")
        : await pool.query("SELECT * FROM devocionales WHERE id=?", [
            req.body.id,
          ]);

    console.log(rows);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Devocional not found",
      });
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDevocional = async (req, res) => {
  try {
    console.log(req.body.id);
    console.log(req.params.id);
    const { id } = req.params.id;
    const [rows] = await pool.query("SELECT * FROM devocionales WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Devocional not found",
      });
    res.send(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDevocionales = async (req, res) => {
  try {
    console.log(req.body);
    const { title, subtitle, urlmp3, urlimg } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO devocionales (title,subtitle,urlmp3,urlimg) VALUES (?,?,?,?)",
      [title, subtitle, urlmp3, urlimg]
    );

    res.send({ id: rows.insertId, title, subtitle, urlmp3, urlimg });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDevocionales = async (req, res) => {
  try {
    console.log(req.body.id);

    const { id, title, subtitle, urlmp3, urlimg } = req.body;

    if (req.body.id === undefined)
      return res.status(404).json({
        message: "Id Devocional not found",
      });

    const [result] = await pool.query(
      "UPDATE devocionales SET title = IFNULL(?,title) ,subtitle=IFNULL(?,subtitle), urlmp3=IFNULL(?,urlmp3), urlimg=IFNULL(?,urlimg) WHERE id=?",
      [title, subtitle, urlmp3, urlimg, id]
    );

    if (result.affectedRows > 0) {
      return res.status(200).json({
        message: "Updated Devocionales",
        title: title,
        subtitle: subtitle,
        urlmp3: urlmp3,
        urlimg: urlimg,
      });
    } else {
      return res.status(404).json({
        message: "Devocional not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDevocionales = async (req, res) => {
  try {
    console.log(req.body.id);

    if (req.body.id === undefined)
      return res.status(404).json({
        message: "Id Devocional not found",
      });

    const [result] = await pool.query("DELETE FROM devocionales WHERE id=?", [
      req.body.id,
    ]);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      return res.status(404).json({
        message: "Devocional not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDevocional = async (req, res) => {
  try {
    console.log(req.params.id);

    if (req.params.id === undefined)
      return res.status(404).json({
        message: "Id Devocional not found",
      });

    const [result] = await pool.query("DELETE FROM devocionales WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows > 0) {
      res.sendStatus(204);
    } else {
      return res.status(404).json({
        message: "Devocional not found",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
