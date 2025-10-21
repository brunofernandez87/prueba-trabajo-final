import app from "./app"; // Import sin extensión para TS/Node en CJS
import sequelize from "./config/db";
import { ensureDatabase } from "./utils/initDatabase";
import "./models/associations";

// Usamos una variable de entorno para el puerto o un valor por defecto
const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    // Asegurar que la base de datos exista antes de autenticar
    await ensureDatabase();
    // El método authenticate() es ideal para probar la conexión
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida correctamente.");

    // Sincroniza los modelos. { force: false } evita que se borren los datos existentes
    await sequelize.sync({ force: false });

    // Inicia el servidor de Express
    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error);
  }
};

main();
