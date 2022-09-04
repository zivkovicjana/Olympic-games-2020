import express from 'express';
import { TakmicenjeController } from '../controllers/takmicenje.controller';

const takmicenjeRouter = express.Router();

takmicenjeRouter.route('/dodajTakmicenje').post(
    (req, res)=> new TakmicenjeController().dodajTakmicenje(req, res)
);

takmicenjeRouter.route('/dohvSportDisciplinaPol').post(
    (req, res)=> new TakmicenjeController().dohvSportDisciplinaPol(req, res)
);

takmicenjeRouter.route('/dohvSve').get(
    (req, res)=> new TakmicenjeController().dohvSve(req, res)
);

takmicenjeRouter.route('/dohvBrojDelegata').post(
    (req, res)=> new TakmicenjeController().dohvBrojDelegata(req, res)
);

takmicenjeRouter.route('/postaviVremePocetka').post(
    (req, res)=> new TakmicenjeController().postaviVremePocetka(req, res)
);

takmicenjeRouter.route('/dohvDatumPVremePLokacija').post(
    (req, res)=> new TakmicenjeController().dohvDatumPVremePLokacija(req, res)
);

takmicenjeRouter.route('/dohvSport').post(
    (req, res)=> new TakmicenjeController().dohvSport(req, res)
);

takmicenjeRouter.route('/postaviKraj').post(
    (req, res)=> new TakmicenjeController().postaviKraj(req, res)
);


export default takmicenjeRouter;