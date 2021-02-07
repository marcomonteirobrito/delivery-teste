import createUserRepository from '../repositories/createUserRepository';

const createUserService = async requestBody => {
    const { name, email, password_hash, profile } = requestBody;

    const user = await createUserRepository({
        name,
        email,
        password_hash,
        profile,
    });

    return user;
};

export default createUserService;
