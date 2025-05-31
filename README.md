<a id="readme-top"></a>

<h1 align="center">Projet de stage</h1>
<h2 align="center">Site vitrine pour une assistante maternelle</h2>

<h3 align="center">À propos<h3>

<div align="center">

C'est un projet qui a été réalisé pour une assistante maternelle durant mon stage de fin de formation  
"TP - Développeur Web et Web Mobile" à l'AFEC de Bayonne.

</div>

## Table des matières

- [Fonctionnalité](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation, configuration et lancement du projet](#installation-configuration-et-lancement-du-projet)
- [Dépendances](#dépendances)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Test admin](#test-admin)
- [Arborescence](#arborescence)
- [Tests et Visualisation](#tests-et-visualisation)
- [Déploiement](#déploiement)
  - [Backend - Render](#backend---render)
  - [Frontend - Vercel](#frontend---vercel)

## Fonctionnalités

- Gestion des utilisateurs (création, affichage, modification, suppression, connexion)
- Gestion des compétences (création, affichage, modification, suppression)
- Authentification sécurisée (JWT & bcrypt)
- Gestion des rôles (user, admin) et protection de routes
- Logs pour suivre les actions des utilisateurs
- Formulaire de connexion avec Google reCAPTCHA
- Gestion des cookies avec Tarteaucitron.js

## Technologies utilisées

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=vscode,git,github,postman,nodejs,npm,javascript,express,mongodb,vite,react,bootstrap,vercel)](https://skillicons.dev)

</div>

## Prérequis

- npm :

  ```sh
  npm install npm@latest -g
  ```

  </br>

## Installation, configuration et lancement du projet

1.  Cloner le répertoire :

    ```sh
    git clone https://github.com/IRyan00/assistMat.git
    ```

<br/>

2.  Installer les dépendances pour le backend et le frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm i

    cd frontEnd
    npm i
    ```

    <br/>

3.  Créer un fichier `.env` dans le dossier backEnd avec les variables suivantes :

    ```ini
    PORT = le_port_sohaité (e.g 3000)

    # MongoDB
    MONGO_URI = votre_uri_mongodb

    # JsonWebToken
    JWT_SECRET= votre_phrase_secrète

    # Cloudinary
    CLOUD_NAME= votre_cloud_name
    API_KEY= votre_api_key
    API_SECRET= votre_api_secret
    ```

<br/>

4.  Créer un fichier `.env` dans le dossier frontEnd avec les variables suivantes :

    ```ini
    #API
    VITE_API_URL = votre_api_url

    # Emailjs
    VITE_SERVICE_ID= votre_service_id
    VITE_TEMPLATE_ID= votre_template_id
    VITE_PUBLIC_KEY= votre_public_key

    # Google reCaptcha
    VITE_RECAPTCHA_SITE_KEY= votre_recaptcha_site_key
    ```

<br/>

5.  Lancer les serveurs backend et frontend (sur deux terminaux différents):

    ```ini
    cd backEnd
    npm start

    cd frontEnd
    npm run dev
    ```

    <p align="right">(<a href="#readme-top">back to top</a>)</p>

## Dépendances

### Backend

```ini
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cloudinary": "^2.6.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^4.21.2",
    "express-async-handler": "^1.2.0",
    "fs": "^0.0.1-security",
    "helmet": "^8.1.0",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.12.1",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.9"
  }
```

### Frontend

```ini
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "axios": "^1.8.4",
    "bootstrap": "^5.3.3",
    "dotenv": "^16.4.7",
    "lucide-react": "^0.503.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-bootstrap-icons": "^1.11.5",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.4.0"
  },
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arborescence

```bash
evalBackEnd/                             # Dossier racine du projet
├── backEnd/                             # Backend de l'application
│   ├── node_modules/                    # Dépendances installées via npm (auto-généré)
│   │
│   ├── src/                             # Code source principal du backend
│   │   ├── config/                      # Dossier de configuration
│   │   │   └── db.js                    # Fichier de configuration de la base de données MongoDB
│   │   │
│   │   ├── controllers/                 # Contient la logique métier de l'application
│   │   │   ├── authController.js        # Gère l'authentification et la gestion des utilisateurs
│   │   │   ├── profileController.js     # Gère les opérations liées aux profils
│   │   │   └── reviewController.js      # Gère les avis (reviews)
│   │   │
│   │   ├── middlewares/                 # Fonctions intermédiaires pour les requêtes HTTP
│   │   │   ├── authMiddleware.js        # Vérifie si l'utilisateur est authentifié
│   │   │   ├── isAdmin.js               # Vérifie si l'utilisateur a les droits d'admin
│   │   │   └── recaptchaMiddleware.js   # Valide le reCAPTCHA Google
│   │   │
│   │   ├── models/                      # Schémas de données Mongoose (MongoDB)
│   │   │   ├── Profile.js               # Schéma pour les profils utilisateurs
│   │   │   ├── Review.js                # Schéma pour les avis
│   │   │   └── User.js                  # Schéma pour les utilisateurs
│   │   │
│   │   ├── routes/                      # Définition des routes de l'API REST
│   │   │   ├── authRoutes.js            # Routes pour l'authentification
│   │   │   ├── profileRoutes.js         # Routes pour les profils
│   │   │   └── reviewRoutes.js          # Routes pour les avis
│   │   │
│   │   └── validations/                 # Fichiers de validation des données
│   │       └── reviewValidation.js      # Règles de validation pour les avis
│   │
│   ├── .env                             # Variables d'environnement (clés, URL, secrets)
│   ├── .gitignore                       # Fichiers/dossiers ignorés par Git
│   ├── package-lock.json                # Verrouillage des versions des dépendances npm
│   ├── package.json                     # Configuration du projet backend (scripts, dépendances)
│   └── server.js                        # Point d'entrée du serveur Express.js
│
├── frontend/                            # Frontend de l'application (React)
│   ├── src/                             # Code source principal du frontend
│   │   ├── assets/                      # Ressources statiques (images, icônes, etc.)
│   │   │   └── carouselImg              # Images utilisées dans le composant Carousel
│   │   │       ├── img1.jgp             # Première image du carousel
│   │   │       ├── img2.jgp             # Deuxième image du carousel
│   │   │       └── img3.jgp             # Troisième image du carousel
│   │   │
│   │   ├── components/                  # Composants réutilisables de l'interface utilisateur
│   │   │   ├── Carousel/                # Composant du carousel d'images
│   │   │   │   ├── Carousel.css         # Style du carousel
│   │   │   │   └── Carousel.jsx         # Code React du carousel
│   │   │   ├── Contact/                 # Composant formulaire de contact
│   │   │   │   ├── Contact.css
│   │   │   │   └── Contact.jsx
│   │   │   ├── Footer/                  # Pied de page du site
│   │   │   │   ├── Footer.css
│   │   │   │   └── Footer.jsx
│   │   │   ├── Fquestions/              # Composant pour les FAQ
│   │   │   │   ├── Fquestions.css
│   │   │   │   └── Fquestions.jsx
│   │   │   ├── Navbar/                  # Barre de navigation du site
│   │   │   │   ├── Navbar.css
│   │   │   │   └── Navbar.jsx
│   │   │   ├── Profile/                 # Composant pour l'affichage ou édition de profil
│   │   │   │   ├── Profile.css
│   │   │   │   └── Profile.jsx
│   │   │   ├── ReviewModal/             # Composant modal pour laisser un avis
│   │   │   │   ├── ReviewModal.css
│   │   │   │   └── ReviewModal.jsx
│   │   │   ├── Rooms/                   # Composant d'affichage des chambres
│   │   │   │   ├── Rooms.css
│   │   │   │   └── Rooms.jsx
│   │   │   ├── StaticAbout/             # Composant de page "À propos"
│   │   │   │   ├── StaticAbout.css
│   │   │   │   └── StaticAbout.jsx
│   │   │   └── Wcminfos/                # Informations sur les WC (contextuel à ton app)
│   │   │       ├── WcmInfos.css
│   │   │       └── WcmInfos.jsx
│   │   │
│   │   ├── hooks/                       # Hooks personnalisés React
│   │   │   └── reCaptchaV3.jsx          # Hook pour gérer Google reCAPTCHA v3
│   │   │
│   │   ├── pages/                       # Pages principales du site
│   │   │   ├── About/                   # Page "À propos"
│   │   │   │   ├── About.css
│   │   │   │   └── About.jsx
│   │   │   ├── Dashboard/               # Tableau de bord utilisateur
│   │   │   │   ├── Dashboard.css
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Home/                    # Page d'accueil
│   │   │   │   ├── Home.css
│   │   │   │   └── Home.jsx
│   │   │   ├── Login/                   # Page de connexion
│   │   │   │   ├── Login.css
│   │   │   │   └── Login.jsx
│   │   │   └── Reviews/                 # Page de gestion/affichage des avis
│   │   │       ├── Reviews.css
│   │   │       └── Reviews.jsx
│   │   │
│   │   ├── App.css                      # Style global de l'application
│   │   ├── App.jsx                      # Composant racine de l'application React
│   │   ├── index.css                    # CSS global (reset ou thèmes)
│   │   ├── main.jsx                     # Point d'entrée React (montage dans le DOM)
│   │   └── variables.css                # Fichier CSS pour les variables de thème (couleurs, tailles)
│   │
│   ├── utils/                           # Fonctions utilitaires pour le frontend
│   │   └── ProtecteDashboard.jsx        # Composant de protection de route (authentification)
│   │
│   ├── .env                             # Variables d’environnement pour le frontend (développement)
│   ├── .env.production                  # Variables d’environnement pour la production
│   ├── .gitignore                       # Fichiers à ignorer dans Git (frontend)
│   ├── eslint.config.js                 # Configuration ESLint pour le linting du code React
│   ├── index.html                       # Fichier HTML principal de l'application React
│   ├── package-lock.json                # Fichier de verrouillage des versions npm (frontend)
│   └── package.json                     # Dépendances, scripts et métadonnées du frontend
│
└── README.md                            # Documentation du projet (installation, usage, etc.)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests et Visualisation

- **MongoDB Compass** : Visualisation des données
- **Postman** : Tests des routes API - [Collection postman](https://www.postman.com/iryan00/workspace/my-workspace/collection/6356318-338aefc8-68fb-4b6a-b34d-e60d0e015d02?action=share&creator=6356318&active-environment=6356318-30c28511-e732-4628-8260-6ef6538ef3d0)

</br>
<div align="center">

| Method | Path                     | Desc                     |
| :----- | :----------------------- | :----------------------- |
| POST   | /api/auth/login          | Connecter un utilisateur |
| GET    | /api/profile/get         | Afficher le profile      |
| PUT    | /api/profile/updates/:id | Modifier le profile      |

</div>

## Déploiement

### [ Backend - Render ](https://assistmat.onrender.com)

### [ Frontend - Vercel ](https://assist-mat.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
