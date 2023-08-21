import app from './app';
import config from "./configs/index"

const PORT = process.env.PORT || 3000;

/* ----------------- database configure ----------------- */
config.dbconect();
/* ------------------------------------------------------ */



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
