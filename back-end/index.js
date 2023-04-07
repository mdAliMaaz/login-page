import express from 'express';
import cors from 'cors'
import mongooes from 'mongoose';


const app = express();
const URL = "mongodb://127.0.0.1:27017/myDb"
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());


// ?connecting database

mongooes.connect(URL)
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

const userSchema = new mongooes.Schema({
    name: String,
    email: String,
    password: String
})
const User = new mongooes.model("user", userSchema)


// ?creating routes

app.post('/login', (req, res) => {
    res.send("i am login")
})

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    User.findOne({ email: email }).then((err, user) => {
        if (user == req.body) {
            res.send({ message: "user already register" })
            console.log("user already exixts")
        }
        else {
            const user = new User({
                name,
                email,
                password
            })
            user.save()
            console.log("user registration successful")
            console.log(req.body.email)
        }
    })

})








// ?crating server
app.listen(PORT, () => console.log(`server listening  on ${PORT}`))