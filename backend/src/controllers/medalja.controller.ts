import express from 'express';
import Medalja from '../models/medalja';

export class MedaljaController{
    dohvSveMedalje = (req: express.Request, res: express.Response)=>{
        Medalja.find({},(err, medalje)=>{
            //console.log('formirao');
            if(err) console.log(err);
            else res.json(medalje);
        })
    }

    povecajZlatne = (req: express.Request, res: express.Response)=>{
        let zemlja=req.body.zemlja;
        let brZlatnih=req.body.brZlatnih;
        let ukupno=req.body.ukupno;

        Medalja.collection.updateOne({'zemlja':zemlja},
        {$set:{'brZlatnih':brZlatnih, 'ukupno':ukupno}}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { 
                res.json({'poruka':'ok'});}
        })
    }

    povecajSrebrne = (req: express.Request, res: express.Response)=>{
        let zemlja=req.body.zemlja;
        let brSrebrnih=req.body.brSrebrnih;
        let ukupno=req.body.ukupno;

        Medalja.collection.updateOne({'zemlja':zemlja},
        {$set:{'brSrebrnih':brSrebrnih, 'ukupno':ukupno}}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { 
                res.json({'poruka':'ok'});}
        })
    }

    povecajBronzane = (req: express.Request, res: express.Response)=>{
        let zemlja=req.body.zemlja;
        let brBronzanih=req.body.brBronzanih;
        let ukupno=req.body.ukupno;

        Medalja.collection.updateOne({'zemlja':zemlja},
        {$set:{'brBronzanih':brBronzanih, 'ukupno':ukupno}}, (err, takmicenja)=>{
            if(err) console.log(err);
            else { 
                res.json({'poruka':'ok'});}
        })
    }

    dohvSveMedaljeZaDrzavu= (req: express.Request, res: express.Response)=>{
        let zemlja=req.body.zemlja;

        Medalja.findOne({'zemlja':zemlja},(err, medalje)=>{
            //console.log('formirao');
            if(err) console.log(err);
            else res.json(medalje);
        })
    }
}