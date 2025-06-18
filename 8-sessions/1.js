import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();    

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('visited',"true",{
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 3600000,
    });
    res.json({ message: 'Cookie has been set!' });
}
)

app.get('/check-cookie', (req, res ) => {
    const visited = req.cookies.visited;
    res.json({ visited: visited ? 'visited before' : 'not visited before' });
})

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('visited');
    res.json({ message: 'Cookie has been deleted!' });});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});