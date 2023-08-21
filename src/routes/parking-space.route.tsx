import { Router } from "express";

import { addSpace, getAllParkingSpace, getAvailableSpace, updateStatusSpace } from "../controllers/parkingspace.controller"

const router: Router = Router();

router.get("/get-all-parking-space", getAllParkingSpace)
router.get("/get-available-space", getAvailableSpace)
router.put("/update-status-space/:id", updateStatusSpace)
router.post("/add-space", addSpace)

export default router;