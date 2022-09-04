import express from 'express';
import { KorisnikController } from '../controllers/korisnik.controller';
const korisnikRouter = express.Router();

korisnikRouter.route('/prijava').post(
    (req, res)=>new KorisnikController().prijava(req, res)
);

korisnikRouter.route('/promenaLozinke').post(
    (req, res)=>new KorisnikController().promenaLozinke(req, res)
);

korisnikRouter.route('/dohvSveKorisnike').get(
    (req, res)=>new KorisnikController().dohvSveKorisnike(req, res)
);

korisnikRouter.route('/registracija').post(
    (req, res)=> new KorisnikController().registracija(req,res)
);

korisnikRouter.route('/dohvKorisnikeKojiNisuOdobreni').get(
    (req, res)=>new KorisnikController().dohvKorisnikeKojiNisuOdobreni(req, res)
);

korisnikRouter.route('/dohvKorisnikeKojiSuOdobreni').get(
    (req, res)=>new KorisnikController().dohvKorisnikeKojiSuOdobreni(req, res)
);

korisnikRouter.route('/odobriKorisnika').post(
    (req, res)=>new KorisnikController().odobriKorisnika(req, res)
);

korisnikRouter.route('/dodajDelegata').post(
    (req, res)=>new KorisnikController().dodajDelegata(req, res)
);

korisnikRouter.route('/dohvDelegate').get(
    (req, res)=>new KorisnikController().dohvDelegate(req, res)
);

korisnikRouter.route('/dohvatiDelegateZaDelegiranje').get(
    (req, res)=>new KorisnikController().dohvatiDelegateZaDelegiranje(req, res)
);

korisnikRouter.route('/dohvDelUsername').post(
    (req, res)=>new KorisnikController().dohvDelUsername(req, res)
);

korisnikRouter.route('/povecajBrojDelegiranja').post(
    (req, res)=>new KorisnikController().povecajBrojDelegiranja(req, res)
);

korisnikRouter.route('/dohvDelImeIPrezime').post(
    (req, res)=>new KorisnikController().dohvDelImeIPrezime(req, res)
);

korisnikRouter.route('/dohvUsernamePasswordTip').post(
    (req, res)=>new KorisnikController().dohvUsernamePasswordTip(req, res)
);

export default korisnikRouter;