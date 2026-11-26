require("dotenv").config();

const port = process.env.PORT;
const requiredEnvVars = ["PORT", "DATABASE_URL"];
const missingEnvVars = requiredEnvVars.filter(
  (name) => !process.env[name]?.trim(),
);

if (missingEnvVars.length > 0) {
  console.error(
    `Erreur de configuration : variable(s) manquante(s) : ${missingEnvVars.join(", ")}.\n` +
      "Définissez-les dans le fichier .env (voir .env.example) avant de démarrer Résa.",
  );
  process.exit(1);
}

const app = require("./app");

app.listen(port, () => {
  console.log(`Résa démarré sur http://localhost:${port}`);
});
