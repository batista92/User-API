import app from './app';
import container from './container';
import UserRepository from './repositories/user.repository';
import UserService from './services/user.service';

const PORT = process.env.PORT || 3000;

container.bind<UserService>(UserService).to(UserService);
container.bind<UserRepository>(UserRepository).to(UserRepository);

app.listen(PORT, () => [
  console.log('Server running on port 3000!')
]);
