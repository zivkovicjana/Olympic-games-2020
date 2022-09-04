import express from 'express';
import { ZemljaController } from '../controllers/zemlja.controller';

const zemljaRuter=express.Router();

zemljaRuter.route('/dohvSveZemlje').get(
    (req, res)=> new ZemljaController().dohvSveZemlje(req, res)
);

zemljaRuter.route('/povecajSportiste').post(
    (req, res)=> new ZemljaController().povecajSportiste(req, res)
);

zemljaRuter.route('/dohvDrzavu').post(
    (req, res)=> new ZemljaController().dohvDrzavu(req, res)
);

export default zemljaRuter;