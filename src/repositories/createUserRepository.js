import User from '../models/User';
import { v4 } from 'uuid';

const createUserRepository = async ({
    name,
    email,
    password_hash,
    profile,
}) => {
    try {
        await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            profile,
        });
    } catch (err) {
        throw Error('Erro ao criar usuário');
    }
};

export default createUserRepository;
