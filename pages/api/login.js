// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from "jsonwebtoken";

export default function Login(req, res) {
  if (req.body.username === "admin" && req.body.password === "admin") {
    const token = jwt.sign(
      {
        username: req.body.username,
        password: req.body.password
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({ login: true, data: { token } });
  } else {
    res.status(200).json({ login: false })
  }
}
