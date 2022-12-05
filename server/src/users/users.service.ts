import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { throwError } from 'rxjs';
import { User, UserDocument } from './users.module';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ) { }

  //creating user 
  async crateUser(user: User): Promise<User> {
    try {
      const newUser = new this.userModel(user)
      return newUser.save()
    } catch (err) {
      throw err
    }

  }

  //get users
  async readUser() {
    try {
      return this.userModel.find({})
    } catch (error) {
      throw error
    }
  }

  //get user by id
  async readUserById(id) {
    try {
      return this.userModel.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error
    }
  }

  //updating user
  async updateUser(id, data) {
    try {
      return this.userModel.findByIdAndUpdate(id, data, { new: true })
    } catch (error) {
      throw error
    }
  }

  //deleting user
  async deleteUser(id) {
    try {
      return this.userModel.findByIdAndRemove(id)
    } catch (error) {
      throw error
    }
  }
}
