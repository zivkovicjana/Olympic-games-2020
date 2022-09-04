import express from 'express';
import { SportController } from '../controllers/sport.controller';

const sportRouter=express.Router();

sportRouter.route('/dodajSport').post(
    (req, res)=> new SportController().dodajSport(req, res)
);

sportRouter.route('/dohvSveSportove').get(
    (req, res)=> new SportController().dohvSveSportove(req, res)
);

sportRouter.route('/dohvPoSportu').post(
    (req, res)=> new SportController().dohvPoSportu(req, res)
);

export default sportRouter;