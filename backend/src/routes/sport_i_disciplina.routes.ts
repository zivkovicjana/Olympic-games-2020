import express from 'express';
import { SportIDisciplinaController } from '../controllers/sport_i_disciplina.controller';

const sportIdisciplinaRouter=express.Router();

sportIdisciplinaRouter.route('/dodajSport').post(
    (req, res)=> new SportIDisciplinaController().dodajSport(req,res)
);

sportIdisciplinaRouter.route('/dohvSport').post(
    (req, res)=> new SportIDisciplinaController().dohvSport(req,res)
);

sportIdisciplinaRouter.route('/dohvatiSveSportoveIDisc').get(
    (req, res)=> new SportIDisciplinaController().dohvatiSveSportoveIDisc(req,res)
);

sportIdisciplinaRouter.route('/dohvatiSveSportoveIDiscMuski').get(
    (req, res)=> new SportIDisciplinaController().dohvatiSveSportoveIDiscMuski(req,res)
);

sportIdisciplinaRouter.route('/dohvSveDiscZaSport').post(
    (req, res)=> new SportIDisciplinaController().dohvSveDiscZaSport(req,res)
);

sportIdisciplinaRouter.route('/dohvSportIPol').post(
    (req, res)=> new SportIDisciplinaController().dohvSportIPol(req,res)
);

export default sportIdisciplinaRouter;