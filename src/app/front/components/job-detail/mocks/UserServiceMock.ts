import { User } from '../../../../shared/models/user';
export class UserServiceMock {
    getUserInfo() {
        const user: User = new User();

        user.name = 'name';
        user.userId = '1';
        user.password = 'pass';
        user.info = 'info';
        user.role = '';

        return user;
    }
}
