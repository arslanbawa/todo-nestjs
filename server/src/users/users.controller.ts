import { Controller, Get, Post, Body, Patch, Param, Delete,HttpException,HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.module';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('user')
  async crateUser(@Body() userDto:User){
    
    try {
      return this.usersService.crateUser(userDto)
    } catch (error) { 
      console.error(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User is not created',
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  }

  @Get('user')
  async readUser(){
    try{
      return this.usersService.readUser()
    } catch(error){
      console.error(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User is not fond',
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  }

  @Get('user/:id')
  async readUserById(@Param('id') id:string){
    try{
      return this.usersService.readUserById(id)
    } catch(error){
      console.error(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User is not fond',
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  }

  @Put('user/:id')
  async updateUser(@Param('id') id:string, @Body() updateData:UserUpdateDto){
    try{
      return this.usersService.updateUser(id,updateData)
    } catch(error){
      console.error(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User is not updated',
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  } 

  @Delete('user/:id')
  async deleteUser(@Param('id') id:string){
    try{
    return this.usersService.deleteUser(id)
    } catch(error){
      console.error(error)
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User is not deleted',
      }, HttpStatus.BAD_REQUEST, {
        cause: error
      });
    }
  }
}
