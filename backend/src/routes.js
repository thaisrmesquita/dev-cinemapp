import { Router } from 'express';
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import MovieController from './controllers/MovieController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/sessions', SessionController.store);
routes.post('/movies', MovieController.store);
routes.get('/movies', MovieController.index);
routes.get('/movies/:id', MovieController.showId);
routes.get('/movies/:title', MovieController.show);
routes.delete('/movies/:movie_id', MovieController.destroy);


export default routes;