import mongoose, { connection } from "mongoose";

const conn = {
  isConnected: false,
};

connection.on("connected", () => {
  console.log("base de datos mongo db conectada");
});

export const DBConnect = async () => {
  if (conn.isConnected) return;
  try {
    const DB = process.env.DATABASE.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );

    mongoose.set("strictQuery", false);
    const db = await mongoose.connect(DB);

    conn.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("Ha ocurrido un error" + error);
  }
};
