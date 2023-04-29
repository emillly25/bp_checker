import express, { Request, Response } from "express";
import 'dotenv/config';
import { userRouter } from "./src/router/user_router";
import bodyParser from "body-parser";
const PORT = process.env.PORT || 8080;
const app = express();


// Content-Type: application/json 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());



// Content-Type: application/x-www-form-urlencoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.urlencoded({ extended: false }));

//임시view
app.set('view engine', 'ejs');
app.set('views', './src/temp_view');
app.get("/", (req: Request, res: Response) => {
  res.render('index')
});


//body-parser사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//route
app.use('/user', userRouter);


//server on
app.listen(PORT, () => {
  console.log(`SERVER:OPEN => http://localhost:${PORT}`);
});