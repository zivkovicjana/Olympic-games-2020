import express from 'express';
import Zemlja from '../models/zemlja';

export class ZemljaController{
    dohvSveZemlje = (req: express.Request, res: express.Response)=>{
        Zemlja.find({}, (err, zemlje)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(zemlje);}
        })
    }

    povecajSportiste = (req: express.Request, res: express.Response)=>{
        let ime=req.body.ime;
        let brSportista=req.body.brSportista;

        Zemlja.collection.updateOne({'ime':ime},
        {$set:{'brSportista':brSportista}}, (err, zemlje)=>{
            if(err) console.log(err);
            else res.json({'poruka':'ok'});
        })
    }

    dohvDrzavu= (req: express.Request, res: express.Response)=>{
        let ime=req.body.ime;

        Zemlja.findOne({'ime':ime}, (err, zemlja)=>{
            if(err) console.log(err);
            else res.json(zemlja);
        })
    }
}