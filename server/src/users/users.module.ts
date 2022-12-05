import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';


export type UserDocument = User & Document

@Schema()
export class User{
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    @IsNotEmpty()
    email: string;

    @Prop()
    age: number;

    @Prop({default:Date.now})
    date_added: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)