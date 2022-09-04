import express from 'express';
import Pojedinac from '../models/pojedinac';

export class PojedinacController{
    dodajPojedinca = (req: express.Request, res: express.Response)=>{
        let pojedinac= new Pojedinac(req.body);
        //console.log('napravio sam sport');
        pojedinac.save().then((reg)=>{
            res.status(200).json({'poruka':'pojedinac je dodat'})
        }).catch((err)=>{
            res.status(400).json({'poruka':'pojedinac nije dodat'})
        })
    }

    dodajDisciplinuZaTakmicara =(req: express.Request, res: express.Response)=>{
        let disciplina=req.body.disciplina;
        let imeIPrezime=req.body.imeIPrezime;
        let drzava=req.body.drzava;

        Pojedinac.collection.updateOne({'imeIPrezime':imeIPrezime, 'drzava':drzava}, {$push:{'discipline':disciplina}},
         (err, pojedinci)=>{
            if(err) console.log(err);
            else {//console.log('dodao sam ga u ekipu');
                res.json({'poruka':'ok'});}
        }) 
    } 

    dohvPoImenu = (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;

        Pojedinac.findOne({'imeIPrezime':imeIPrezime},
            (err, pojedinac)=>{
                if(err) console.log(err);
                else { 
                    res.json({'poruka':'ok'});}
            })
    }

    dohvSportPol = (req: express.Request, res: express.Response)=>{
        let sport=req.body.sport;
        let pol=req.body.pol;

        Pojedinac.findOne({'sport':sport, 'pol':pol},
            (err, pojedinac)=>{
                if(err) console.log(err);
                else { //console.log('dohvatio');
                    res.json({'poruka':'ok'});}
            })
    }

    dohvatiSve = (req: express.Request, res: express.Response)=>{
        Pojedinac.find({}, (err, pojedinci)=>{
            if(err) console.log(err);
            else { //console.log('dohvatio');
                res.json(pojedinci);}
        })
    }

    dohvImePolSportDisciplina= (req: express.Request, res: express.Response)=>{
        let imeIPrezime=req.body.imeIPrezime;
        let sport=req.body.sport;
        let pol=req.body.pol;
        let disciplina=req.body.disciplina;

        Pojedinac.find({'sport':sport, 'pol':pol, 'imeIPrezime':imeIPrezime, 'disciplina':disciplina},
            (err, pojedinci)=>{
                if(err) console.log(err);
                else { //console.log('dohvatio');
                    res.json({'poruka':'ok'});}
            })
    }
}