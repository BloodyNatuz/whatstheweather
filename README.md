# What's the Weather 🌦️

Une petite application web construite avec **Hono** et **TypeScript**, permettant de rechercher la météo actuelle d'une ville grâce à l'API [OpenWeatherMap](https://openweathermap.org/api).

## ✨ Fonctionnalités

- Recherche météo par nom de ville
- Affichage de la température, description, humidité, vent
- Affichage du lever et coucher du soleil
- Affichage de la pression atmosphérique (niveau standard, mer, sol)
- Rendu côté serveur avec JSX (Hono JSX)

## 🛠️ Stack technique

- [Hono](https://hono.dev/) — framework web léger
- TypeScript
- [tsx](https://github.com/privatenumber/tsx) — exécution TypeScript en mode watch
- [OpenWeatherMap API](https://openweathermap.org/api) — données météo

## 📦 Installation

Clone le dépôt puis installe les dépendances :

```bash
git clone <url-du-repo>
cd <nom-du-dossier>
pnpm install
```

## 🔑 Configuration

Ce projet nécessite une clé API gratuite d'OpenWeatherMap pour fonctionner.

1. Crée un compte sur [openweathermap.org](https://openweathermap.org/api) et récupère ta clé API dans la section **API keys**.
   > ⚠️ Une clé nouvellement créée peut mettre jusqu'à 2h avant d'être activée.

2. À la racine du projet, crée un fichier nommé `.env` (au même niveau que `package.json`).

3. Ajoute-y ta clé sous **exactement** ce nom :

```env
OPENWEATHER_API_KEY=ta_cle_api_ici
```

> ⚠️ Pas de guillemets, pas d'espace autour du `=`. Ce fichier ne doit **jamais** être commit (il est ignoré via `.gitignore`).

## 🚀 Lancer le projet

Une fois les dépendances installées et le `.env` configuré, lance le serveur en mode développement :

```bash
pnpm run dev
```

Le serveur démarre par défaut sur :

```
http://localhost:3000
```

Le terminal affiche un message de confirmation une fois le serveur prêt, et se relance automatiquement à chaque modification de fichier grâce à `tsx watch`.

## 📁 Structure du projet

```
.
├── package.json
├── .env                  # à créer (non versionné)
├── public/            # assets statiques (CSS, icônes)
└── src/
    ├── index.ts           # point d'entrée du serveur
    ├── routes/            # définition des routes Hono
    ├── pages/             # composants JSX de pages
    ├── components/        # composants JSX réutilisables (Layout, etc.)
    └── services/           # appels à l'API météo
```

## 📝 Licence

Projet réalisé à but pédagogique.