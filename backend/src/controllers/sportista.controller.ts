import express from 'express';
import Sportista from '../models/sportista';

export class SportistaController{
    dodajSportistu = (req: express.Request, res: express.Response)=>{
        let sportista = new Sportista(req.body);
        //console.log('formiraoSportistu');
        sportista.save().then((reg)=>{
            res.status(200).json({'poruka':'sportista je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'sportista nije dodat'})
        })
    }

    postaviBroj= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imeIPrezime=req.body.imeIPrezime;
        let rezbroj=req.body.rezbroj;

        Sportista.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol, 'imeIPrezime':imeIPrezime},
        {$set:{'rezbroj':rezbroj}}, (err, sportisti)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    oduzmiRezultat  = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imeIPrezime=req.body.imeIPrezime;
        let rezultat=req.body.rezultat;
        let rezbroj=req.body.rezbroj;

        Sportista.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol, 'imeIPrezime':imeIPrezime},
        {$set:{'rezbroj':rezbroj, 'rezultat':rezultat}}, (err, sportisti)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    postaviRang= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imeIPrezime=req.body.imeIPrezime;
        let rang=req.body.rang;

        Sportista.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol, 'imeIPrezime':imeIPrezime},
        {$set:{'rang':rang}}, (err, sportisti)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dohvSveSportiste = (req: express.Request, res: express.Response)=>{
        Sportista.find({},(err, sportisti)=>{
            //console.log('dohvatioSportiste');
            if(err) console.log(err);
            else res.json(sportisti);
        })
    }

    postaviStatusMedalja= (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let medalja=req.body.medalja;

        Sportista.collection.updateOne({'imeIPrezime':imeIPrezime},
        {$set:{'medalja':medalja}}, (err, sportisti)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dodajVrednostRezultata= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let imeIPrezime=req.body.imeIPrezime;
        let rezultat=req.body.rezultat;

        Sportista.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol, 'imeIPrezime':imeIPrezime},
        {$set:{'rezultat':rezultat}}, (err, sportisti)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dohvSportisteNaOsnovuSportaIDisc = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'sport':sport, 'disciplina':disciplina},(err, sportisti)=>{
            //console.log('dohvatioSportiste');
            if(err) console.log(err);
            else res.json(sportisti);
        })
    }

    dohvSportistePoImenuIPrezimenu = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else res.json(sportista);
            })
    }

    dohvSportistePoDrzavi = (req: express.Request, res: express.Response)=>{
        let drzava=req.body.drzava;

        Sportista.find({'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else //{console.log('dohvatio sam sportiste po drzavi');
                    res.json(sportista);
            })
    }

    dohvSportistePoSportu = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;

        Sportista.find({'sport':sport},
            (err, sportista)=>{
                if(err) console.log(err);
                else res.json(sportista);
            })
    }

    dohvSportistePoDisciplini = (req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;

        Sportista.find({'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoPolu = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;

        Sportista.find({'pol':pol},
            (err, sportista)=>{
                if(err) console.log(err);
                else { //console.log('dohvatili po polu');
                    res.json(sportista);}
            })
    }

    dohvSportisteSaMedaljom = (req: express.Request, res: express.Response)=>{
        //let medalja=req.body.medalja;

        Sportista.find({'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else res.json(sportista);
            })
    }

    dohvSportistePoImenuIPolu= (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'pol':pol,'imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoImenuISportu = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'sport':sport,'imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoImenuIDisciplini = (req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'disciplina':disciplina,'imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoImenuIDrzavi = (req: express.Request, res: express.Response)=>{
        let drzava=req.body.drzava;
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'drzava':drzava,'imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoImenuIMedaljama = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;

        Sportista.find({'medalja':'1','imeIPrezime':imeIPrezime},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoPoluISportu = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;

        Sportista.find({'pol':pol,'sport':sport},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoPoluIDisciplini = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let disciplina=req.body.disciplina;

        Sportista.find({'pol':pol,'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoPoluIDrzavi = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let drzava=req.body.drzava;

        Sportista.find({'pol':pol,'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoPoluIMedaljama = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;

        Sportista.find({'medalja':'1','pol':pol},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoSportuIDisciplini = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'sport':sport,'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoSportuIDrzavi = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let drzava=req.body.drzava;

        Sportista.find({'sport':sport,'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoSportuIMedaljama = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;

        Sportista.find({'medalja':'1','sport':sport},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoDiscipliniIDrzavi = (req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'disciplina':disciplina,'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoDiscipliniIMedaljama = (req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;

        Sportista.find({'medalja':'1','disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportistePoDrzaviIMedaljama = (req: express.Request, res: express.Response)=>{
        let drzava=req.body.drzava;

        Sportista.find({'medalja':'1','drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPoImePolSport = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPoImePolDisiciplina = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let disciplina=req.body.disciplina;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPoImePolDrzava = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let drzava=req.body.drzava;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPoImePolMedalja = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportDisc = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'pol':pol,'sport':sport, 'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportDrzava = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let drzava=req.body.drzava;

        Sportista.find({'pol':pol,'sport':sport, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportMedalja = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;

        Sportista.find({'pol':pol,'sport':sport, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportDiscDrzava = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'sport':sport,'disciplina':disciplina, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportDiscMedalja = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'sport':sport,'disciplina':disciplina, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvDiscDrzavaMedalja = (req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'disciplina':disciplina,'drzava':drzava, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvImePolSportDisc = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'disciplina':disciplina},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvImePolSportDrzava = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;
        let drzava=req.body.drzava;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvImePolSportMedalja = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportDiscDrzava = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'pol':pol,'sport':sport, 'disciplina':disciplina, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportDiscMedalja = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'pol':pol,'sport':sport, 'disciplina':disciplina, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvSportDiscDrzavaMedalja = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'sport':sport,'disciplina':disciplina, 'drzava':drzava, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvImePolSportDiscDrz = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'disciplina':disciplina, 'drzava':drzava},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvImePolSportDiscMedalja = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'disciplina':disciplina, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPolSportDiscDrzavaMedalja = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'pol':pol,'sport':sport, 'disciplina':disciplina, 'drzava':drzava, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }

    dohvPoSvim = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let pol=req.body.pol;
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let drzava=req.body.drzava;

        Sportista.find({'imeIPrezime':imeIPrezime,'pol':pol, 'sport':sport, 'disciplina':disciplina, 'drzava':drzava, 'medalja':'1'},
            (err, sportista)=>{
                if(err) console.log(err);
                else { 
                    res.json(sportista);}
            })
    }
}