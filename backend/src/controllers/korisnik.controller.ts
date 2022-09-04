import express from 'express';
import Delegat from '../models/delegat';
import Korisnik from '../models/korisnik';

export class KorisnikController{
    prijava = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let tip = req.body.tip;

        Korisnik.findOne({'username':username, 'password': password, 'tip': tip},
            (err, korisnik)=>{
                if(err) console.log(err);
                else res.json(korisnik);
            })
    }

    promenaLozinke = (req: express.Request, res: express.Response) =>{
        let username=req.body.username;
        let password=req.body.password;
        let newPassword=req.body.newPassword;

        Korisnik.findOne({'username':username, 'password':password}, (err, korisnik)=>{
            if(err) console.log(err);
            else{
                if(korisnik){
                    Korisnik.collection.updateOne({'username':username, 'password':password}, {$set:{'password':newPassword}}, function(err, res){
                        if(err) console.log(err);
                        else{
                            console.log("Lozinka je uspesno promenjena");
                        }
                    });
                    res.json({'poruka':"Loznika je uspesno promenjena"});
                }
                else{
                    res.json({'poruka':"Loznika nije promenjena"});
                }
            }
        })
    }

    dohvSveKorisnike=(req: express.Request, res: express.Response)=>{
        Korisnik.find({}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        })
    }

    registracija=(req: express.Request, res: express.Response)=>{
        let korisnik= new Korisnik(req.body);

        korisnik.save().then((reg)=>{
            res.status(200).json({'poruka':'korisnik je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'korisnik nije dodat'})
        }) 
    }

    dohvKorisnikeKojiNisuOdobreni = (req: express.Request, res: express.Response)=>{
        Korisnik.find({'odobren':'0'}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        })
    }

    dohvKorisnikeKojiSuOdobreni = (req: express.Request, res: express.Response)=>{
        Korisnik.find({'odobren':'1'}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        })
    }

    odobriKorisnika = (req: express.Request, res: express.Response)=>{
        let username=req.body.username;
        let odobren=req.body.odobren;

        Korisnik.collection.updateOne({'username':username},
        {$set:{'odobren':odobren}}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dohvDelegate = (req: express.Request, res: express.Response)=>{
        Korisnik.find({'tip':'delegat'}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json(korisnici);
        })
    }

    dodajDelegata =(req: express.Request, res: express.Response)=>{
        let delegat= new Delegat(req.body);

        delegat.save().then((reg)=>{
            res.status(200).json({'poruka':'delagat je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'delegat nije dodat'})
        }) 
    }

    dohvatiDelegateZaDelegiranje = (req: express.Request, res: express.Response)=>{
        Delegat.find({'brojDelegiranja':{$lt:3}}, (err, delegati)=>{
            if(err) console.log(err);
            else res.json(delegati);
        }) 
    }

    dohvDelUsername = (req: express.Request, res: express.Response)=>{
        let username=req.body.username;

        Delegat.findOne({'username':username}, (err, delegat)=>{
            if(err) console.log(err);
            else res.json(delegat);
        })
    }

    povecajBrojDelegiranja= (req: express.Request, res: express.Response)=>{
        let username=req.body.username;
        let brojDelegiranja=req.body.brojDelegiranja;

        Delegat.collection.updateOne({'username':username},
        {$set:{'brojDelegiranja':brojDelegiranja}}, (err, korisnici)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dohvDelImeIPrezime = (req: express.Request, res: express.Response)=>{
        let ime=req.body.ime;
        let prezime=req.body.prezime

        Delegat.findOne({'ime':ime, 'prezime':prezime}, (err, delegat)=>{
            if(err) console.log(err);
            else res.json(delegat);
        })
    }

    dohvUsernamePasswordTip= (req: express.Request, res: express.Response)=>{
        let username=req.body.username;
        let password=req.body.password;
        let tip=req.body.tip;

        Korisnik.findOne({'username':username, 'password':password, 'tip':tip}, (err, korisnik)=>{
            if(err) console.log(err);
            else res.json(korisnik);
        })
    }
}