import mongoose from 'mongoose';
import Takmicenje from '../models/takmicenje';

const Schema = mongoose.Schema;

let RasporedIndividualni = new Schema(
    {
        datumP: {
            type: String
        },
        vremeP: {
            type: String
        },
        takmicenje: {
            type: Takmicenje
        }
    }
);

export default mongoose.model('RasporedIndividualni', RasporedIndividualni, 'rasporedi_individualni');