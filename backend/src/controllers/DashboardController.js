import Movie from '../models/Movie';

class DashboardController {
  async show(req, res) {
  
    const { user_id } = req.headers;

    const movies = await Movie.find({ user: user_id });

    return res.json(movies);
  }
}

export default new DashboardController();