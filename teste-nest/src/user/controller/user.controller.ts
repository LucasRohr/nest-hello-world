import { Controller, Post, Body } from '@nestjs/common';
import { UserRequestDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post('/')
    async postUser(@Body() user: UserRequestDTO) {
        
        return await this.userService.registerUser(user)

    }

}
