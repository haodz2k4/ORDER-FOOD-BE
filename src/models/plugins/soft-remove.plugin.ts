import { Schema } from "mongoose";


export const softRemovePlugin = (schema: Schema) => {

  schema.pre("find", function () {
    this.where({ deletedAt: null });
  });

  schema.pre("findOne", function () {
    this.where({ deletedAt: null });
  });

  schema.pre("findOneAndUpdate", function () {
    this.where({ deletedAt: null });
  });
};
