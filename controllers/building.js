const Building = require('../models/Building')


// //GET USER STATS

// const getUserStats = async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }

const create = async (req,res) => {
    const newBuilding = new Building(req.body)

    try{
        const savedBuilding = await newBuilding.save()
        res.status(200).json(savedBuilding)

    }catch(err){
        res.status(500).json(err)
    }
}

//UPDATE

const updateBuilding = async (req, res) => {

  try {
    const updatedBuilding = await Building.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBuilding);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteBuilding = async (req, res) => {
  try {
    await Building.findByIdAndDelete(req.params.id);
    res.status(200).json("Building has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET Building

const getSingleBuilding = async (req, res) => {
  try {
    const building = await Building.findById(req.params.id);
    res.status(200).json(building);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL BUILDING

const getAllBuilding = async (req, res) => {
  const qNew = req.query.new;
  const qState = req.query.state;
  try {
    let building;

    if (qNew) {
      building = await Building.find().sort({ createdAt: -1 }).limit(3);
    } else if (qState) {
      buildings = await Building.find({
        state: qState,
      });
    } else {
      buildings = await Building.find();
    }

    res.status(200).json(buildings);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateBuilding,
  deleteBuilding,
  getSingleBuilding,
  getAllBuilding
}