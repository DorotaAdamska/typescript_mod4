import mongoose, { Document, Schema, Model, PromiseProvider } from 'mongoose';
import { prop, getModelForClass } from '@typegoose/typegoose';

class EmploeeClass {
  @prop({ required: true })
  public firsName: string;

  @prop({ required: true })
  public lastName: string;

  @prop({ required: true})
  public department: string;
}
const Employee = getModelForClass(EmploeeClass)

export default Employee;