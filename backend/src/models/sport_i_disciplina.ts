import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let SportIDisciplina = new Schema(
    {
        sport: {
            type: String
        },
        disciplina: {
            type: String
        },
        pol: {
            type: String
        },
        vrsta: {
            type: String
        },
        minIgraca: {
            type: String
        },
        maxIgraca: {
            type: String
        }
    }
);

export default mongoose.model('SportIDisciplina', SportIDisciplina, 'sportovi_i_discipline');