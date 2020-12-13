const db = require('../../config/db.js');
const { hashSync, genSaltSync, compareSync} = require('bcrypt'); 
const { sign } = require('jsonwebtoken');

const getUsers = (req, res) =>{
    db.query('Select id, email, userName from users;',
    (err, results, fields) => {
        if(err){
            res.send(err.message);
        } else {
            res.send(results);
        }
    })
};

const getMyProfile = (req, res) =>{
        if(req.decoded){
            res.send(req.decoded.result);
        } else {
            res.send('not authorised');
        }
};


const createUser = (req, res) =>{
    const body = req.body;
    body.password = hashSync(body.password, genSaltSync(10));
    db.query('INSERT into users(email, password, userName) values (?,?,?)',
    [body.email, body.password, body.userName],
    (err, results, fields) => {
        if(err){
            res.send(err);
        } else {
            res.send(results)
        }
    }
    );
};


const login = (req, res) =>{
    const body = req.body;
    db.query('SELECT * from users where email = ?',[body.email],
    (err, results, fields)=>{
        let currentUser = results[0];
        if(err){
            res.send('user not found');
        } else if(currentUser){
            const isPasswordCorrect = compareSync(body.password, currentUser.password);
            if(isPasswordCorrect){
                currentUser.password = undefined;
                const jsonToken = sign({result: currentUser},process.env.JWT_CODE, {
                   expiresIn: '1h', 
                });
                res.send(jsonToken);
            } else{
                res.send('password not match');
            }
        } else{
            res.send('user not found');
        }
    }
    )
};

module.exports = {
    getUsers,
    createUser,
    getMyProfile,
    login
};
