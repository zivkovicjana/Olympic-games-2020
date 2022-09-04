import express from 'express';
import { EkipaController } from '../controllers/ekipa.controller';

const ekipaRouter=express.Router();

ekipaRouter.route('/dodajEkipu').post(
    (req, res)=> new EkipaController().dodajEkipu(req, res)
);

ekipaRouter.route('/dodajTakmicaraUEkipu').post(
    (req, res)=> new EkipaController().dodajTakmicaraUEkipu(req, res)
);

ekipaRouter.route('/azurirajBrojTakmicara').post(
    (req, res)=> new EkipaController().azurirajBrojTakmicara(req, res)
);

ekipaRouter.route('/dohvEkipuPoSportuDrzaviIPolu').post(
    (req, res)=> new EkipaController().dohvEkipuPoSportuDrzaviIPolu(req, res)
);

export default ekipaRouter;