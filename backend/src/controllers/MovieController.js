import Movie from '../models/Movie';
import User from '../models/User';

class MovieController {

  async index(req, res) {
    const user = await Movie.find();

    return res.json(user);
  }

 async showId(req, res) {
    const { id } = req.params;
    const movie = await Movie.findOne({ _id:id });

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.status(200).json(movie);
  }

  async show(req, res) {
    const { title } = req.body;
    const movie = await Movie.findOne({ title });

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.status(200).json(movie);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const {
        title,
        year,
        type,
        poster,
    } = req.body;

    const movie = await Movie.findOne({title});
    if( !movie ) {
      const movie = await Movie.create({
        user: user_id,
        title,
        year,
        type,
        poster,
      });

      return res.json(movie);
    }
    return res.status(400).json("Vocẽ já adicionou esse filme na sua lista");
  }
  async destroy(req, res) {
    const { movie_id } = req.params;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const movie = await Movie.findById(movie_id);

    if (String(user._id) !== String(movie.user)) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    await Movie.findByIdAndDelete({ _id: movie_id });
    return res.json({ message: 'Excluída com sucesso' });
  }
}

export default new MovieController();