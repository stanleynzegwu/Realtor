const Property = require('../models/Property')


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
    const newProperty = new Property(req.body)

    try{
        const savedProperty = await newProperty.save()
        res.status(200).json(savedProperty)

    }catch(err){
        res.status(500).json(err)
    }
}

//UPDATE

const updateProperty = async (req, res) => {

  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (err) {
    res.status(500).json(err);
  }
}

//DELETE

const deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET Property

const getSingleProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET ALL PROPERTY

const getAllProperty = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category
  const qState = req.query.state;
  try {
    let properties;

    if (qNew && !qState && !qCategory) {
      properties = await Property.find().sort({ createdAt: -1 }).limit(3);
    }else if(qCategory && !qNew && !qState){
        properties = await Property.find({
         propertyCategory:qCategory,
        });
    }else if (qCategory && qState ) {
      properties = await Property.find({
        propertyCategory:qCategory, state: qState,
      });
    } else {
      properties = await Property.find();
    }

    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  create,
  updateProperty,
  deleteProperty,
  getSingleProperty,
  getAllProperty
}