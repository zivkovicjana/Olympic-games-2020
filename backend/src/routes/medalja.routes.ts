import express from 'express';
import { MedaljaController } from '../controllers/medalja.controller';

const medaljaRouter = express.Router();

medaljaRouter.route('/dohvSveMedalje').get(
    (req, res)=>new MedaljaController().dohvSveMedalje(req, res)
);

medaljaRouter.route('/povecajZlatne').post(
    (req, res)=>new MedaljaController().povecajZlatne(req, res)
);

medaljaRouter.route('/povecajSrebrne').post(
    (req, res)=>new MedaljaController().povecajSrebrne(req, res)
);

medaljaRouter.route('/povecajBronzane').post(
    (req, res)=>new MedaljaController().povecajBronzane(req, res)
);

medaljaRouter.route('/dohvSveMedaljeZaDrzavu').post(
    (req, res)=>new MedaljaController().dohvSveMedaljeZaDrzavu(req, res)
);

export default medaljaRouter;