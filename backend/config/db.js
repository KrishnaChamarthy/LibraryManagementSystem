import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://chamarthysr:7BWy7RP2I3Tt50tr@cluster0.c9sxecr.mongodb.net/lib-sys").then(() => console.log("DB Connected"));
}

