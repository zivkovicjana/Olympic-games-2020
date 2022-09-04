import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Ekipa = new Schema(
    {
        id: {
            type:Number
        },
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        brTakmicara: {
            type: Number
        },
        drzava: {
            type: String
        },
        pol: {
            type: String
        },
        takmicari: {
            type: Array
        }
    }
);

export default mongoose.model('Ekipa', Ekipa, 'ekipe');