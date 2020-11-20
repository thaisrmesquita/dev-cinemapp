import bcrypt from 'bcryptjs';
import User from '../models/User';

class SessionController {

  async store(req, res) {
    
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não existe' });
    }

    user = user.toObject();

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (passwordIsValid) {
      return res.json(user);
    }
    
    return res.status(404).json({ error: 'Senha inválida' });
  }
}
export default new SessionController();
