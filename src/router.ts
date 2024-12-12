import { Router } from "express";

const router = Router();
const authRouter = Router();

// Auth
authRouter.post('/validate', );   // validate token jwt
authRouter.post('/login', );      // login
authRouter.post('/register', )    // register

// Users
router.get('/users', );         // getall
router.post('/users', );        // create
router.get('/users/:id', );     // getbyid
router.put('/users/:id', );     // update
router.delete('/users/:id', );  // delete

export default router;
