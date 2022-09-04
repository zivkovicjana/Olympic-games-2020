import express from 'express';
import { PojedinacController } from '../controllers/pojedinac.controller';

const pojedinacRouter= express.Router();

pojedinacRouter.route('/dodajPojedinca').post(
    (req, res)=>new PojedinacController().dodajPojedinca(req,res)
);

pojedinacRouter.route('/dodajDisciplinuZaTakmicara').post(
    (req, res)=>new PojedinacController().dodajDisciplinuZaTakmicara(req,res)
);

pojedinacRouter.route('/dohvPoImenu').post(
    (req, res)=>new PojedinacController().dohvPoImenu(req,res)
);

pojedinacRouter.route('/dohvSportPol').post(
    (req, res)=>new PojedinacController().dohvSportPol(req,res)
);

pojedinacRouter.route('/dohvatiSve').get(
    (req, res)=>new PojedinacController().dohvatiSve(req,res)
);

pojedinacRouter.route('/dohvImePolSportDisciplina').post(
    (req, res)=>new PojedinacController().dohvImePolSportDisciplina(req,res)
);

export default pojedinacRouter;