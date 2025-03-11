import { Schema, Document } from "mongoose";

interface SoftDeletableDocument extends Document {
  deletedAt?: Date | null;
  softRemove: () => Promise<void>;
}

export const softRemovePlugin = (schema: Schema<SoftDeletableDocument>) => {

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
