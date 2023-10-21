const express = require("express");
const { deletereminder, reminderlist,createReminder, scheduleEmailNotificationsController

} = require("../controllers/reminderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/reminder").post(isAuthenticatedUser, createReminder);

router.route("/deletereminder").post(isAuthenticatedUser, deletereminder);
router.route("/schedule").post(isAuthenticatedUser, scheduleEmailNotificationsController);



router.route("/getAllReminder").get(isAuthenticatedUser, reminderlist);

module.exports = router;