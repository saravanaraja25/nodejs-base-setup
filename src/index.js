import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { APPLICATION_PROPERTIES } from './constants/common.constants';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use(APPLICATION_PROPERTIES.API_BASE_PATH, router);
app.listen(APPLICATION_PROPERTIES.PORT, () => {
  console.log(`Server is running on port ${APPLICATION_PROPERTIES.PORT}`);
});
