const Pets = require("../models/pet.model.js");

const listPets = async () => {
  const allPets = await Pets.find();

  return { allPets, msg: "Aquí están"}
};

const getPet = async (_id) => {
  const pet = await Pets.findById(_id);

  return { pet, msg: `Pet ${pet?._id}` }
};

const createPet = async (body) => {
  const newPet = await Pets.create(body);
  return { newPet, msg: `Pet ${newPet?._id} created` }
};

const updatePet = async (_id ,body) => {
  const uptPet = await Pets.findByIdAndUpdate(_id,body);

  return { uptPet, msg: `Pet ${uptPet?._id} updated` }
};

const deletePet = async (_id) => {
  const delPet = await Pets.findByIdAndDelete(_id);

  return { delPet, msg: `Pet ${delPet?._id} deleted` }
};





module.exports = {
  listPets,
  getPet,
  createPet,
  updatePet,
  deletePet
}