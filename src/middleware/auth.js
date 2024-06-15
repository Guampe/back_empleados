import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const users = [
    // Este es un ejemplo, idealmente estos datos deben estar en una base de datos
    {
        id: 1,
        username: "admin",
        password: "$2b$10$KIXgkE8lI8m0JY9oEP1du.wUpW8I8OwS2xJ1uoypPCxJ1k8N1.YGm", // password: "admin123"
    }
];

export const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, config.secret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).send('Username or password is incorrect');

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user.id }, config.secret);
    res.header('Authorization', token).send(token);
};
