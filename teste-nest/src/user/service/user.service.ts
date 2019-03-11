import { Injectable } from '@nestjs/common';
import { UserRequestDTO } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor( @InjectRepository(User) private readonly userRepository: Repository<User> ) {}

    async registerUser(user: UserRequestDTO) {

        const newUser = new User()
        newUser.name = user.name
        newUser.password = user.password

        const savedUser = await this.userRepository.save(newUser)

        return savedUser
    }

}
