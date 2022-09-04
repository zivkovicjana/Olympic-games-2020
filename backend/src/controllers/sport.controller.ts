import express from 'express';
import Sport from '../models/sport';

export class SportController{
    dohvSveSportove=(req: express.Request, res: express.Response)=>{
        Sport.find({}, (err, sportovi)=>{
            if(err) console.log(err);
            else res.json(sportovi);
        })
    }

    dodajSport=(req: express.Request, res: express.Response)=>{
        let sport= new Sport(req.body);

        sport.save().then((reg)=>{
            res.status(200).json({'poruka':'sport je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'sport nije dodat'})
        }) 
    }

    dohvPoSportu= (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;

        Sport.findOne({'sport':sport}, (err, sport)=>{
            if(err) console.log(err);
            else res.json(sport);
        })
    }
}