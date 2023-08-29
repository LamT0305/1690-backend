import {Router} from "express";

import {
    addSpace,
    findNearestSpace,
    getAllParkingSpace,
    getAvailableSpace,
    updateLine,
    updateSpaceDetails,
    updateStatusSpace,
} from "../controllers/parkingspace.controller";

const router: Router = Router();

router.get("/get-all-parking-space", getAllParkingSpace);
router.get("/get-available-space", getAvailableSpace);
router.put("/update-status-space/:name", updateStatusSpace);
router.post("/add-space", addSpace);
router.put("/update-space-details/:id", updateSpaceDetails);
router.put("/update-line-space/:id", updateLine);
router.get("/find-nearest-space", findNearestSpace);

export default router;
