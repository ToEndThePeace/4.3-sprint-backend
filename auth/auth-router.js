const router = require("express").Router();
const Auth = require("./users-model");
const bc = require("bcryptjs");
const { createToken, isValid } = require("../utils");

router.post("/register", async (req, res) => {
  // implement registration
  const { body: newUser } = req;
  if (isValid(newUser)) {
    // hash password
    const { username, password } = newUser;
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bc.hashSync(password, rounds);
    try {
      const [id] = await Auth.insert({ username, password: hash });
      res.status(201).json({ id });
    } catch (e) {
      res.status(500).json({ message: "Could not register" });
    }
  } else {
    res.status(400).json({ message: "Please provide proper credentials" });
  }
});

router.post("/login", async (req, res) => {
  // implement login
  const { body: credentials } = req;
  if (isValid(credentials)) {
    const { username, password } = credentials;
    try {
      const [user] = await Auth.findBy({ username });

      if (user && bc.compareSync(password, user.password)) {
        const token = createToken(user);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (e) {
      res.status(500).json({ message: "An error occurred while logging in" });
    }
  } else {
    res.status(400).json({ message: "Please provide a valid login" });
  }
});

module.exports = router;
