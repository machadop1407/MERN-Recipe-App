import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, requirrd: true, unique: true },
  password: { type: String, requirrd: true },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);
