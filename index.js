const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const todos = [
    { id: 1, title: 'Read', completed: true },
    { id: 2, title: 'Learn', completed: true },
    { id: 3, title: 'Sleep', completed: false }
];

app.use(express.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
    console.log('test codebuild');
    todos.push(req.body.todo);

    res.status(200).json({
        message: 'created!',
    });
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'ok'
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
