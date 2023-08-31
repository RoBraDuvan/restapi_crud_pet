const { Router } = require("express");
const { listPets, getPet, createPet, updatePet, deletePet } = require("../controllers/pet.controller");

const routePets = Router();

routePets.get("/", async (req, res) => {
  try {
    res.status(200).json(await listPets())
  } catch (error) {
    res.status(500).send({msg: "error"});
    console.log(error);
  }
});

routePets.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await getPet(id))
  } catch (error) {
    res.status(500).send({msg: `ID ${id} no encontrado`});
    console.log(error);
  }
});

routePets.post("/", async (req, res) => {
  const body = req.body;
  try {
    res.status(200).json(await createPet(body));
  } catch (error) {
    res.status(500).send({msg: "error"});
    console.log(error);
  }
});

routePets.put("/:id", async (req, res) => {
  const { id } = req.params
  const body = req.body;
  try {
    res.status(200).json(await updatePet(id, body));
  } catch (error) {
    res.status(500).send({msg: "error"});
    console.log(error);
  }
});

routePets.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    res.status(200).json(await deletePet(id))
  } catch (error) {
    res.status(500).send({msg: "Por favor, verifica los datos"});
    console.log(error);
  }
});

module.exports = routePets;