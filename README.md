Présentation
Cette application représente la partie frontend du projet Todo List. Elle permet de créer, modifier, afficher et supprimer des tâches, en se connectant à une API backend développée avec NestJS.
L'interface offre un formulaire complet de gestion des tâches, une mise à jour dynamique du statut, ainsi que la gestion des dates incluant la durée calculée automatiquement.
Fonctionnalités
Création d’une tâche avec les champs suivants
• Titre
• Description
• Responsable
• Date de début (sélection via calendrier, dates passées interdites)
• Date de fin (toujours supérieure ou égale à la date de début)
• Durée totale en jours (calcul automatique)
• Statut parmi : "to do", "in progress", "done"
Modification d’une tâche existante
Suppression d’une tâche
Mise à jour du statut directement dans la liste
Affichage clair et responsive
Interaction complète avec l’API backend
Technologies utilisées
Next.js 16
React 18
TypeScript
Tailwind CSS
Fetch API
Gestion des variables d’environnement
Installation
1. Cloner le projet
git clone https://github.com/massalyjr9/to_do_list_frontend.git
cd todo-frontend
2. Installer les dépendances
npm install
Configuration des variables d’environnement
Créer un fichier env.local à la racine du projet et ajouter :
NEXT_PUBLIC_API_URL=http://localhost:4000
Modifier cette URL si le backend est déployé sur un autre serveur.
Démarrer le projet
npm run dev
Le frontend sera accessible à l’adresse :
http://localhost:3000
Structure du projet
src/
  app/
    page.tsx                 Page principale et UI
  lib/
    api.ts                   Fonctions pour communiquer avec le backend
  types/
    task.ts                  Interfaces et types TypeScript
Connexion au backend
Toutes les requêtes sont envoyées via l’URL définie dans :
NEXT_PUBLIC_API_URL
Les routes appelées sont :
GET    /tasks
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
Améliorations possibles
Ajout d’un système de filtrage ou de recherche
Ajout de statistiques (tâches terminées, en retard, etc.)
Authentification et gestion utilisateur
Pagination ou infinite scroll
Mode sombre
Tests automatisés avec Jest et React Testing Library
Auteur
Idrissa Massaly
Développeur Frontend – Next.js, React, TypeScript
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

