import mongoose from "mongoose";
import fs from "fs";

// import Cabin from "./models/cabin.js";
// import Guest from "./models/guest.js";
import Booking from "./models/booking.js";
// import Settings from "./models/setting.js";

const DB =
  "mongodb+srv://ahmedayman:ahmedayman212999@cluster0.hggkhyz.mongodb.net/wild-oasis";

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// READ JSON FILE
const bookings = JSON.parse(fs.readFileSync("./data/bookings.json", "utf-8"));
// const cabins = JSON.parse(fs.readFileSync("./data/cabins.json", "utf-8"));
// const guests = JSON.parse(fs.readFileSync("./data/guests.json", "utf-8"));
// const settings = JSON.parse(fs.readFileSync("./data/settings.json", "utf-8"));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    // await Settings.create(settings);
    // await Cabin.create(cabins);
    await Booking.create(bookings, { validateBeforeSave: false });
    // await Guest.create(guests);

    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await Cabin.deleteMany();
    await Booking.deleteMany();
    // await Guest.deleteMany();

    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}

if (process.argv[2] === "--delete") {
  deleteData();
}
