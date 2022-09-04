import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportista = new Schema(
    {
        imeIPrezime: {
            type: String
        },
        pol: {
            type: String
        },
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        drzava: {
            type: String
        },
        medalja: {
            type: String
        },
        rezultat: {
            type:String
        },
        rang: {
            type:Number
        },
        rezbroj:{
            type:Number
        }
    }
);

export default mongoose.model('Sportista', Sportista, 'sportisti');