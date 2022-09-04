import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import sportIdisciplinaRouter from './routes/sport_i_disciplina.routes';
import zemljaRuter from './routes/zemlja.routes';
import medaljaRouter from './routes/medalja.routes';
import { RekordController } from './controllers/rekord.controller';
import rekordRouter from './routes/rekord.routes';
import takmicenjeRouter from './routes/takmicenje.routes';
import sportistaRouter from './routes/sportista.routes';
import ekipaRouter from './routes/ekipa.routes';
import pojedinacRouter from './routes/pojedinac.routes';
import sportRouter from './routes/sport.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Projekat');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongo ok')
});

const router = express.Router();
router.use('/korisnici', korisnikRouter);
router.use('/sportovi_i_discipline', sportIdisciplinaRouter);
router.use('/zemlje', zemljaRuter);
router.use('/medalje', medaljaRouter);
router.use('/rekordi', rekordRouter);
router.use('/takmicenja', takmicenjeRouter);
router.use('/sportisti', sportistaRouter);
router.use('/ekipe', ekipaRouter);
router.use('/pojedinci', pojedinacRouter);
router.use('/sportovi', sportRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));