# Baas Landing Bot

Ce dépôt contient le code source du site Baas Landing Bot, développé avec Gatsby.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé:

- [Node.js](https://nodejs.org/) (version recommandée : 16.x ou plus récente)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

## Installation

Pour installer les dépendances du projet:

```bash
# Avec Yarn (recommandé)
yarn

# Ou avec npm
npm install
```

## Environnement de développement

Le projet utilise des variables d'environnement configurées dans les fichiers:
- `.env.development` (développement local)
- `.env.pre-production` (pré-production)
- `.env.production` (production)

## Comment lancer le projet

### Développement local

Pour démarrer le serveur de développement:

```bash
# Avec Yarn
yarn develop
# ou
yarn start

# Ou avec npm
npm run develop
# ou
npm start
```

Le site sera disponible sur `http://localhost:8000`.

L'interface GraphQL de Gatsby sera accessible sur `http://localhost:8000/___graphql`.

### Production build

Pour créer une version optimisée pour la production:

```bash
# Avec Yarn
yarn build

# Ou avec npm
npm run build
```

Pour visualiser la version de production en local:

```bash
# Avec Yarn
yarn serve

# Ou avec npm
npm run serve
```

Le site sera disponible sur `http://localhost:9000`.

## Autres commandes utiles

```bash
# Nettoyer le cache Gatsby
yarn clean

# Vérifier les types TypeScript
yarn typecheck

# Formater le code avec Prettier
yarn format
```

## Structure du projet

- `/src` : Code source de l'application
- `/public` : Fichiers statiques
- `gatsby-config.ts` : Configuration principale de Gatsby
- `gatsby-node.ts` : API Gatsby pour la génération de pages
- `tailwind.config.js` : Configuration de Tailwind CSS

## Technologies principales

- [Gatsby](https://www.gatsbyjs.com/) - Framework React pour sites statiques
- [React](https://reactjs.org/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire 