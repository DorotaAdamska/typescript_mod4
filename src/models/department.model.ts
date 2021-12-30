import mongoose, { Document, Schema, Model } from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class DepartmentClass {
  @prop({ required: true })
  public name: string;
  public minlength: number;
  public maxlength: number
}

const Department = getModelForClass(DepartmentClass)

export default Department;