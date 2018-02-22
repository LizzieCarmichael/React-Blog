import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import configurePassport from '../config/passport';

let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
       console.log("auth.js")
        if (err) {
            console.log("auth.js", err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});

export default router;