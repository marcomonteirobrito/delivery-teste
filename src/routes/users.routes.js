import { Router } from 'express';

import createUserRepository from '../repositories/createUserRepository';

const createUserRouter = Router();

createUserRouter.post('/', async (request, response) => {
    try {
        await createUserRepository(request.body);

        return response
            .status(200)
            .json({ message: 'Usuário criado com sucesso' });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default createUserRouter;
