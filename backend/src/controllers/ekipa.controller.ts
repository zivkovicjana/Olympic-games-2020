import express from 'express';
import Ekipa from '../models/ekipa';

export class EkipaController{
    dodajEkipu=(req: express.Request, res: express.Response)=>{
        Ekipa.find({}, (err, ekipe)=>{
            if(err) console.log(err);
            else{
                let id=ekipe.length+1;
                let ekipa=new Ekipa(req.body);
                ekipa.id=id;
                ekipa.save().then(ekipa=>
                    {res.json({'message':'ok'})}).catch(err=>{
                        res.json(err);
                    })
            }
        }) 
    }

    dodajTakmicaraUEkipu =(req: express.Request, res: express.Response)=>{
        let id=req.body.id;
        let imeIPrezime=req.body.imeIPrezime;
        //console.log('nasao sam ga');
        Ekipa.collection.updateOne({'id':id}, {$push:{'takmicari':imeIPrezime}},
         (err, ekipe)=>{
            if(err) console.log(err);
            else {//console.log('dodao sam ga u ekipu');
                res.json({'poruka':'ok'});}
        }) 
    }

    azurirajBrojTakmicara= (req: express.Request, res: express.Response)=>{
        let id=req.body.id;
        let brTakmicara=req.body.brTakmicara;

        Ekipa.collection.updateOne({'id':id},
        {$set:{'brTakmicara':brTakmicara}}, (err, ekipe)=>{
            if(err) console.log(err);
            else { 
                res.json({'poruka':'ok'});}
        })
    }

    dohvEkipuPoSportuDrzaviIPolu = (req: express.Request, res: express.Response)=>{
        let pol=req.body.pol;
        let sport=req.body.sport;
        let drzava=req.body.drzava;

        Ekipa.findOne({'pol':pol,'sport':sport, 'drzava':drzava},
            (err, ekipa)=>{
                if(err) console.log(err);
                else { 
                    res.json(ekipa);}
            })
    }
}