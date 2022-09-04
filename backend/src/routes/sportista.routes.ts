import express from 'express';
import { SportistaController } from '../controllers/sportista.controller';

const sportistaRouter=express.Router();

sportistaRouter.route('/dodajSportistu').post(
    (req, res)=> new SportistaController().dodajSportistu(req,res)
);

sportistaRouter.route('/oduzmiRezultat').post(
    (req, res)=> new SportistaController().oduzmiRezultat(req,res)
);

sportistaRouter.route('/postaviBroj').post(
    (req, res)=> new SportistaController().postaviBroj(req,res)
);

sportistaRouter.route('/postaviRang').post(
    (req, res)=> new SportistaController().postaviRang(req,res)
);

sportistaRouter.route('/postaviStatusMedalja').post(
    (req, res)=> new SportistaController().postaviStatusMedalja(req,res)
);

sportistaRouter.route('/dohvSveSportiste').get(
    (req, res)=> new SportistaController().dohvSveSportiste(req,res)
);

sportistaRouter.route('/dodajVrednostRezultata').post(
    (req, res)=> new SportistaController().dodajVrednostRezultata(req,res)
);

sportistaRouter.route('/dohvSportisteNaOsnovuSportaIDisc').post(
    (req, res)=> new SportistaController().dohvSportisteNaOsnovuSportaIDisc(req,res)
);

sportistaRouter.route('/dohvSportistePoDrzavi').post(
    (req, res)=> new SportistaController().dohvSportistePoDrzavi(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuIPrezimenu').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuIPrezimenu(req,res)
);

sportistaRouter.route('/dohvSportistePoSportu').post(
    (req, res)=> new SportistaController().dohvSportistePoSportu(req,res)
);

sportistaRouter.route('/dohvSportistePoDisciplini').post(
    (req, res)=> new SportistaController().dohvSportistePoDisciplini(req,res)
);

sportistaRouter.route('/dohvSportistePoPolu').post(
    (req, res)=> new SportistaController().dohvSportistePoPolu(req,res)
);

sportistaRouter.route('/dohvSportisteSaMedaljom').get(
    (req, res)=> new SportistaController().dohvSportisteSaMedaljom(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuIPolu').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuIPolu(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuISportu').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuISportu(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuIDisciplini').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuIDisciplini(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuIDrzavi').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuIDrzavi(req,res)
);

sportistaRouter.route('/dohvSportistePoImenuIMedaljama').post(
    (req, res)=> new SportistaController().dohvSportistePoImenuIMedaljama(req,res)
);

sportistaRouter.route('/dohvSportistePoPoluISportu').post(
    (req, res)=> new SportistaController().dohvSportistePoPoluISportu(req,res)
);

sportistaRouter.route('/dohvSportistePoPoluIDisciplini').post(
    (req, res)=> new SportistaController().dohvSportistePoPoluIDisciplini(req,res)
);

sportistaRouter.route('/dohvSportistePoPoluIDrzavi').post(
    (req, res)=> new SportistaController().dohvSportistePoPoluIDrzavi(req,res)
);

sportistaRouter.route('/dohvSportistePoPoluIMedaljama').post(
    (req, res)=> new SportistaController().dohvSportistePoPoluIMedaljama(req,res)
);

sportistaRouter.route('/dohvSportistePoSportuIDisciplini').post(
    (req, res)=> new SportistaController().dohvSportistePoSportuIDisciplini(req,res)
);

sportistaRouter.route('/dohvSportistePoSportuIDrzavi').post(
    (req, res)=> new SportistaController().dohvSportistePoSportuIDrzavi(req,res)
);

sportistaRouter.route('/dohvSportistePoSportuIMedaljama').post(
    (req, res)=> new SportistaController().dohvSportistePoSportuIMedaljama(req,res)
);

sportistaRouter.route('/dohvSportistePoDiscipliniIDrzavi').post(
    (req, res)=> new SportistaController().dohvSportistePoDiscipliniIDrzavi(req,res)
);

sportistaRouter.route('/dohvSportistePoDiscipliniIMedaljama').post(
    (req, res)=> new SportistaController().dohvSportistePoDiscipliniIMedaljama(req,res)
);

sportistaRouter.route('/dohvPoImePolSport').post(
    (req, res)=> new SportistaController().dohvPoImePolSport(req,res)
);

sportistaRouter.route('/dohvPoImePolDisiciplina').post(
    (req, res)=> new SportistaController().dohvPoImePolDisiciplina(req,res)
);

sportistaRouter.route('/dohvPoImePolDrzava').post(
    (req, res)=> new SportistaController().dohvPoImePolDrzava(req,res)
);

sportistaRouter.route('/dohvPoImePolMedalja').post(
    (req, res)=> new SportistaController().dohvPoImePolMedalja(req,res)
);

sportistaRouter.route('/dohvPolSportDisc').post(
    (req, res)=> new SportistaController().dohvPolSportDisc(req,res)
);

sportistaRouter.route('/dohvPolSportDrzava').post(
    (req, res)=> new SportistaController().dohvPolSportDrzava(req,res)
);

sportistaRouter.route('/dohvPolSportMedalja').post(
    (req, res)=> new SportistaController().dohvPolSportMedalja(req,res)
);

sportistaRouter.route('/dohvSportDiscDrzava').post(
    (req, res)=> new SportistaController().dohvSportDiscDrzava(req,res)
);

sportistaRouter.route('/dohvSportDiscMedalja').post(
    (req, res)=> new SportistaController().dohvSportDiscMedalja(req,res)
);

sportistaRouter.route('/dohvDiscDrzavaMedalja').post(
    (req, res)=> new SportistaController().dohvDiscDrzavaMedalja(req,res)
);

sportistaRouter.route('/dohvImePolSportDisc').post(
    (req, res)=> new SportistaController().dohvImePolSportDisc(req,res)
);

sportistaRouter.route('/dohvImePolSportDrzava').post(
    (req, res)=> new SportistaController().dohvImePolSportDrzava(req,res)
);

sportistaRouter.route('/dohvImePolSportMedalja').post(
    (req, res)=> new SportistaController().dohvImePolSportMedalja(req,res)
);

sportistaRouter.route('/dohvPolSportDiscDrzava').post(
    (req, res)=> new SportistaController().dohvPolSportDiscDrzava(req,res)
);

sportistaRouter.route('/dohvPolSportDiscMedalja').post(
    (req, res)=> new SportistaController().dohvPolSportDiscMedalja(req,res)
);

sportistaRouter.route('/dohvSportDiscDrzavaMedalja').post(
    (req, res)=> new SportistaController().dohvSportDiscDrzavaMedalja(req,res)
);

sportistaRouter.route('/dohvImePolSportDiscDrz').post(
    (req, res)=> new SportistaController().dohvImePolSportDiscDrz(req,res)
);

sportistaRouter.route('/dohvImePolSportDiscMedalja').post(
    (req, res)=> new SportistaController().dohvImePolSportDiscMedalja(req,res)
);

sportistaRouter.route('/dohvPolSportDiscDrzavaMedalja').post(
    (req, res)=> new SportistaController().dohvPolSportDiscDrzavaMedalja(req,res)
);

sportistaRouter.route('/dohvPoSvim').post(
    (req, res)=> new SportistaController().dohvPoSvim(req,res)
);

export default sportistaRouter;