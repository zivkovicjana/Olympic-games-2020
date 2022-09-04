import express from 'express';
import SportIDisciplina from '../models/sport_i_disciplina';
export class SportIDisciplinaController{
    dodajSport = (req: express.Request, res: express.Response)=>{
        let sport= new SportIDisciplina(req.body);
        console.log('napravio sam sport');
        sport.save().then((reg)=>{
            res.status(200).json({'poruka':'sport je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'sport nije dodat'})
        })
    }

    dohvSport = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;

        SportIDisciplina.findOne({'sport':sport}, 
           (err, sport)=>{
            if(err) console.log(err);
            else res.json(sport);
           })
    }

    dohvatiSveSportoveIDisc = (req: express.Request, res: express.Response) =>{
        SportIDisciplina.find({},(err, sportovi)=>{
            //console.log('dohvatio sportove i discipline');
            if(err) console.log(err);
            else res.json(sportovi);
        }) 
    }

    dohvatiSveSportoveIDiscMuski = (req: express.Request, res: express.Response) =>{

        SportIDisciplina.find({'pol':'m'},(err, sportovi)=>{
            //console.log('dohvatio sportove i discipline');
            if(err) console.log(err);
            else res.json(sportovi);
        }) 
    }

    dohvSveDiscZaSport = (req: express.Request, res: express.Response) =>{
        let sport=req.body.sport;

        SportIDisciplina.find({'sport':sport},(err, sportovi)=>{
            //console.log('dohvatio sportove i discipline');
            if(err) console.log(err);
            else res.json(sportovi);
        }) 
    }

    dohvSportIPol = (req: express.Request, res: express.Response) =>{
        let sport=req.body.sport;

        SportIDisciplina.find({'sport':sport, 'pol':'m'},(err, sportovi)=>{
            //console.log('dohvatio sportove i discipline');
            if(err) console.log(err);
            else res.json(sportovi);
        }) 
    }
}