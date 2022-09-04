import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Takmicenje = new Schema(
    {
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        format: {
            type: String
        },
        pol: {
            type: String
        },
        vrsta: {
            type: String
        },
        datumP: {
            type: String
        },
        vremeP: {
            type: String
        },
        datumK: {
            type: String
        },
        vremeK: {
            type: String
        },
        lokacija: {
            type: String
        },
        ucesnici: {
            type: Array
        },
        delegati: {
            type: Array
        }
    }
);

export default mongoose.model('Takmicenje', Takmicenje, 'takmicenja');