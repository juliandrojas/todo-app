import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API TO-DO funcionando",
  })  
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost${PORT}`);
})