import express from 'express';
import { RekordController } from '../controllers/rekord.controller';

const rekordRouter= express.Router();

rekordRouter.route('/dohvSveRekorde').get(
    (req,res)=> new RekordController().dohvSveRekorde(req,res)
);

export default rekordRouter;