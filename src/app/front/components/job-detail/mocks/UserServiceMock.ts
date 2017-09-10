import { User } from '../../../../shared/models/user';
export class UserServiceMock {
    getUserInfo(id) {
        const user: User = new User();

        user.name = 'name';
        user.userId = id;
        user.password = 'pass';
        user.info = 'info';
        user.role = '';

        return user;
    }
}
