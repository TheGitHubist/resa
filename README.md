# Résa

Application de réservation des salles du campus.

## Lancer le projet avec Docker Compose

### Prérequis

- Docker installé et démarré, avec Docker Compose (`docker compose`)

### Étapes

1. Depuis la racine du projet, créez votre fichier de configuration local :

   ```sh
   cp .env.example .env
   ```

2. Ouvrez `.env` et remplacez les valeurs d'exemple. Utilisez des ports numériques, par exemple `PORT=8888`, `APP_PORT=8888` et `DB_PORT=8080`. Définissez également `DB_USER`, `DB_PASSWORD` et `DB_NAME`. Gardez `.env` privé et ne le commitez pas.

3. Démarrez l'application et la base de données :

   ```sh
   docker compose --env-file .env -f docker/docker-compose.yml up --build
   ```

   Au premier démarrage d'une base vierge, le schéma et les données initiales de `db/init.sql` sont chargés automatiquement.

4. Ouvrez [http://localhost:3000](http://localhost:3000). Si vous avez modifié `APP_PORT`, utilisez ce port à la place de `3000`.

5. Pour arrêter les services, appuyez sur `Ctrl+C`. Vous pouvez aussi les arrêter sans supprimer les conteneurs ni leurs données :

   ```sh
   docker compose --env-file .env -f docker/docker-compose.yml stop
   ```

   `docker compose down` supprime les conteneurs et, comme aucune persistance de base de données n'est configurée, les données qu'ils contiennent.

## Equipe

-> Killian(@LOGIN)
