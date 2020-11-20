import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  }

  async show(req, res) {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }
    return res.json(user);
  }

  async store(req, res) {
    const { name, email, password } = req.body;
    const created = new Date();
    const updated = new Date();

    let user = await User.findOne({ email });

    if (!user) {
      const passwordHash = await bcrypt.hash(password, 8);
      user = await User.create({
        name,
        email,
        password: passwordHash,
        created,
        updated,
      });
      delete user.password;

      return res.json(user);
    }
    return res.status(401).json({ error: 'Usuário Já existe' });
  }
}

export default new UserController();