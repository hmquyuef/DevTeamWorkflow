import http from 'http';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './src/router/users.js';
import settingRouter from './src/router/sitesettings.js';
import uploadRouter from './src/router/upload.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fileUpload from 'express-fileupload';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("express"));
app.use('/uploads', express.static('uploads'));
app.use('/assets', express.static('assets'));
app.use('/dist', express.static('dist'));
app.use('/app.js', express.static('main.js'));
app.use('/file', express.static('src/appfile'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Middleware for session management
app.use(cookieParser());
app.use(session({
    name: 'Dev.Sid',
    secret: 'DevTeam',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60 * 60 * 1000
    }
}));

function IsLogin(req, res, next){
    if (req.session && req.session.user) {
        return next();
    }
    return res.redirect('/login')
};

//#region Home Page
app.get('/', IsLogin, (req, res) => res.sendFile(__dirname + '/src/index.html'));
app.get('/documentation', (req, res) => res.sendFile(__dirname + '/src/documentation.html'));
//#endregion

//#region Site Setting
app.use('/api/sitesettings', settingRouter);
//#endregion

//#region User Page
app.get('/login', (req, res) => res.sendFile(__dirname + '/src/auth.html'));

app.use('/api/users', userRouter);

app.get('/notauthorized', (req, res) => {
    res.sendFile(__dirname + '/src/notauth.html');
});
//#endregion

//#region post code
app.use(fileUpload());
app.use('/api/files', uploadRouter);
//#endregion

// Create server
const server = http.createServer(app);
const port = 3000;
server.listen(port, () => { console.debug('Server listening on port ' + port); });
