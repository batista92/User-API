import 'reflect-metadata';
import { PrismaClient } from "@prisma/client";
import { Container } from "inversify";
import UserRepository from './repositories/user.repository'
import { TYPES } from "./types";


const container = new Container();

container.bind<PrismaClient>(TYPES.PrismaClient).toConstantValue(new PrismaClient());
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository);

export default container;
