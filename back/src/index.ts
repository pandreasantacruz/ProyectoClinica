import { AppDataSource } from "./config/data-source";
import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";

AppDataSource.initialize()
  .then(() => {
    console.log("DB Conextion");
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Error during Data Source initialization", error);
  });
