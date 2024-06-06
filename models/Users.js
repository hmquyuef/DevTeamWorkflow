const bcrypt = require('bcryptjs');
const mongoDBTask = require('./../src/appfile/MongoDBTask');
const { ObjectId } = require('mongodb');
const collection = 'Accounts';

//create function register
const Register = async (username, password, role) => {
    //add try catch block
    try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //insert data to database
        const result = await mongoDBTask.insertDocument(collection, {
            username: username,
            password: hashedPassword,
            roles: role === 'basic' ? 'basic' : ('basic,' + role)
        });
        return { statusCode: result.statusCode, message: result.message };
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error' };
    }
};

const Auth = async (username, password) => {
    const result = await mongoDBTask.findOne(collection, username);
    if (!result.item) {
        return { statusCode: 401, message: 'Username or password is incorrect' };
    }
    const validPassword = await bcrypt.compare(password, result.item.password);
    if (!validPassword) {
        return { statusCode: 401, message: 'Username or password is incorrect' };
    }
    return { statusCode: 200, item: result.item };
};

const Logout = async (req) => {
    req.session.destroy();
    return { statusCode: 200, message: 'Logout successfully' };
};

const IsLogin = async (req, role) => {
    if (req.session.user) {
        if (role && req.session.user.roles.includes(role)) return { statusCode: 200, message: 'Authorized', item: req.session.user };
        return { statusCode: 401, message: 'Unauthorized', item: null };
    }
    return { statusCode: 404, message: 'Not found', item: null };
};

const GetListUsers = async () => {
    try {
        const result = await mongoDBTask.findDocuments(collection, {});
        return { statusCode: result.statusCode, message: result.message, items: result.items };
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error', items: null };
    }
};

const GetUserBySesstion = async (req) => {
    if (req.session.user) {
        return { statusCode: 200, message: 'Get user by session successfully', item: req.session.user };
    }
    return { statusCode: 401, message: 'Unauthorized', item: null };
};

const DeleteUserById = async (id) => {
    try {
        const result = await mongoDBTask.deleteDocument(collection, { _id: new ObjectId(id) });
        return { statusCode: result.statusCode, message: result.message , deleted: result.deleted};
    } catch (error) {
        return { statusCode: 500, message: 'Internal Server Error' };
    }
};

module.exports = {
    Register,
    Auth,
    Logout,
    IsLogin,
    GetListUsers,
    GetUserBySesstion,
    DeleteUserById
};