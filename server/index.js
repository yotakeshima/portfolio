import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
const user = 'yotakeshima';
// const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//     'Content-Type': 'application/json',
//   },
// };

app.get('/', async (req, res) => {
  try {
    const githubResponse = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );

    const repos = githubResponse.data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
    }));
    res.json(repos);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching Github repos' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
