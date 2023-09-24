import express from 'express';
import { getRepository } from 'typeorm';
import { User } from './Entitiy/User';

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const userRepository = getRepository(User);
  const user = new User();
  user.username = username;
  user.password = password;

  try {
    await userRepository.save(user);
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Unable to register user');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
