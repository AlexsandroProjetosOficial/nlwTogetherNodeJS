import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        status: 200,
        message: 'Hello Word.'
    });
});

app.post('/test-post', (req, res) => {
    return res.json({
        status: 200,
        message: 'Testando rota de post.'
    });
});

app.listen(3000, () => console.log('Server is running'));