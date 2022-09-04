import express from 'express';
import Takmicenje from '../models/takmicenje';

export class TakmicenjeController{
    dodajTakmicenje = (req: express.Request, res: express.Response)=>{
        let takmicenje = new Takmicenje(req.body);

        takmicenje.save().then((reg)=>{
            res.status(200).json({'poruka':'takmicenje je dodato'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'takmicenje nije dodato'})
        })
    }

    dohvSportDisciplinaPol = (req: express.Request, res: express.Response)=>{
        let sport = req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;

        Takmicenje.findOne({'sport':sport,'disciplina':disciplina, 'pol':pol},
            (err, takmicenja)=>{
                if(err) console.log(err);
                else { 
                    res.json(takmicenja);}
            })
    }

    dohvSve = (req: express.Request, res: express.Response)=>{
        Takmicenje.find({}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(takmicenja);}
        })
    }
    
    dohvBrojDelegata = (req: express.Request, res: express.Response)=>{
        let delegat=req.body.delegat;

        Takmicenje.find({'delegati':delegat}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(takmicenja);}
        })
    }

   postaviVremePocetka = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let datumP=req.body.datumP;
        let vremeP=req.body.vremeP;

        Takmicenje.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol},
        {$set:{'datumP':datumP, 'vremeP':vremeP}}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { console.log(datumP); console.log(vremeP);
                res.json({'poruka':'ok'});}
        })
    }

    dohvDatumPVremePLokacija = (req: express.Request, res: express.Response)=>{
        let datumP=req.body.datumP;
        let vremeP=req.body.vremeP;
        let lokacija=req.body.lokacija;

        Takmicenje.findOne({'datumP':datumP, 'vremeP':vremeP, 'lokacija':lokacija}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(takmicenja);}
        })
    }

    dohvSport= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;

        Takmicenje.find({'sport':sport}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(takmicenja);}
        })
    }

    postaviKraj= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let disciplina=req.body.disciplina;
        let pol=req.body.pol;
        let datumK=req.body.datumK;
        let vremeK=req.body.vremeK;

        Takmicenje.collection.updateOne({'sport':sport, 'disciplina':disciplina, 'pol':pol},
        {$set:{'datumK':datumK, 'vremeK':vremeK}}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { //console.log(datumP); console.log(vremeP);
                res.json({'poruka':'ok'});}
        })
    }

}