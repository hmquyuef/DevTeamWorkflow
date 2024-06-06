import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import * as mongoDBTask from './mongoController.js';

const collection = 'Accounts';

//create function register
export async function Register(req, res){
    //add try catch block
    try {
        const { username, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await mongoDBTask.insertDocument(collection, {
            username: username,
            password: hashedPassword,
            roles: role === 'basic' ? 'basic' : ('basic,' + role)
        });
        return res.status(result.statusCode).send(result.message);
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error' };
    }
};

export async function Auth(req, res) {
    const { username, password } = req.body;
    const result = await mongoDBTask.findOne(collection, username);
    if (!result.item) {
        return res.status(result.statusCode).send(result.message);
    }
    const validPassword = await bcrypt.compare(password, result.item.password);
    if (!validPassword) {
        return res.status(result.statusCode).send(result.message);
    }
    req.session.user = result.item;
    return res.status(result.statusCode).send(result.message);
};

export async function Logout(req, res){
    //clean all cookies and session
    req.session.destroy();
    res.clearCookie('Dev.Sid');
    return res.status(200).send('Logout successfully');
};

export async function GetListUsers(req, res){
    try {
        const result = await mongoDBTask.findDocuments(collection, {});
        return res.status(result.statusCode).json(result.items);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};

export async function GetUserBySesstion(req, res){
    if (req.session.user) {
        return res.status(200).json(req.session.user);
    }
    return res.status(401).send('Unauthorized');
};

export async function DeleteUserById(req, res){
    try {
        const id = req.params.id;
        const result = await mongoDBTask.deleteDocument(collection, { _id: new ObjectId(id) });
        return res.status(result.statusCode).json({ deleted: result.deleted });
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};