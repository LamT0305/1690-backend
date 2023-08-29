import index from "../models/index";

const parkingSpaceModel = index.parkingSpaceModel;

export const getAllSpace = async () => {
    const spaces = await parkingSpaceModel.find();
    return {
        status: "success",
        spaces: spaces,
    };
};

export const getAvailableSpaces = async () => {
    const available = await parkingSpaceModel.find({status: "available"});

    if (!available) {
        throw new Error("No available space");
    }
    return {
        status: "success",
        available: available,
    };
};

// export const updateStatus = async (name: String, status: String) => {
//   const space = await parkingSpaceModel.findOne({ space_number: name });

//   if (!space) {
//     throw new Error("No space found");
//   }

//   if (!name || !status) {
//     throw new Error("Invalid field information");
//   }
//   const updateStatus = await parkingSpaceModel.findOneAndUpdate(
//     {
//       space_number: name,
//     },
//     {
//       $set: { status: status },
//     },
//     {
//       new: true,
//     }
//   );

//   return {
//     status: "success",
//     updateStatus: updateStatus,
//   };
// };

export const updateStatus = async (spaceNumber: String, status: String) => {
    if (!spaceNumber || !status) {
        throw new Error("Invalid field information");
    }

    const updatedSpace = await parkingSpaceModel.findOneAndUpdate(
        {
            space_number: spaceNumber.toUpperCase(),
        },
        {
            $set: {status: status},
        },
        {
            new: true,
        }
    );

    if (!updatedSpace) {
        throw new Error("No space found");
    }


    return {
        status: "success",
        updateStatus: updatedSpace,
    };
};
