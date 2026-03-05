Séance du 26.02.2026
# 1. Problématique reformulée

## Contexte

Dans de nombreux services fonctionnant sur rendez-vous (médecins, physiothérapeutes, coiffeurs, instituts de beauté, garages, salles de sport, services administratifs), les annulations tardives, les absences et les retards entraînent :

- Des créneaux perdus
- Une perte financière
- Une surcharge administrative
- Une frustration côté client
- Un sentiment d’iniquité dans la gestion des places libérées


Les solutions actuelles reposent souvent sur :
- Des appels manuels
- Des listes d’attente informelles
- Des rappels non systématiques
- Des décisions arbitraires

Ce sont des hypothèses à confirmer!


## Problématique

Comment concevoir un système de gestion des rendez-vous capable de réattribuer automatiquement les créneaux annulés ou libérés, en respectant les contraintes métier (durée, disponibilité, priorité), tout en garantissant un traitement équitable des demandes ?

trop accès ingenieurerie, 1 problème  solution

Comment fluidifier les rendez-vous médicaux sans surcharger le personnel assistant.

problèmatique sociale

# Besoin

Côté patient:
- Avoir des rdv plus facilement
- diminuer les frais en cas d'annulation tardive

Côté entreprise:
- Fluidifier les rdv, réduire les "trous",  sans surcharger le personnel administratif
- Meilleur gestion des rendez-vous, facile
- pouvoir voir plus de patient en une journée


# Public cible

On cible :
**Professionnels indépendants ou petites structures (1–10 employés)**

Exemples de domaines concernés :
- Santé (médecins, physiothérapeutes)
- Beauté (coiffeurs, manucures)
- Automobile (garagistes)
- Services personnalisés (coach sportif, thérapeute, etc.)

Caractéristiques :

- Agenda basé sur créneaux horaires fixes
- Forte dépendance à la présence du client
- Impact financier direct en cas d’absence
- Peu de temps pour gérer l’administratif


On cible aussi :
**Structures éducatives et de formation (cours individuels ou en petits groupes)**

Exemples de domaines concernés :
- Auto-écoles (leçons de conduite)
- Écoles de musique (cours d'instrument)
- Cours particuliers et soutien scolaire
- Centres de formation continue (langues, informatique, etc.)

Caractéristiques :

- Créneaux réguliers et récurrents (hebdomadaires)
- Forte rotation des élèves selon les périodes (rentrée, vacances, examens)
- Besoin de remplir rapidement un créneau annulé pour maintenir la rentabilité
- Gestion souvent artisanale (papier, téléphone, WhatsApp)
(possiblement élargi ou changé plus tard)

# Personae

## Persona 1 – Le professionnel indépendant

**Nom :** Laura  
**Âge :** 38 ans  
**Profession :** Gérante d’un salon de coiffure  
**Structure :** 3 employés
### Problèmes
- 2–3 annulations tardives par semaine
- Absences non prévenues
- Difficulté à remplir un créneau à la dernière minute
- Clients mécontents s’ils n’obtiennent pas de place
### Motivations
- Optimiser son chiffre d’affaires
- Éviter les “trous” dans l’agenda
- Réduire le stress organisationnel
- Être perçue comme professionnelle et équitable

## Persona 2 – L’employé administratif

**Nom :** Marco  
**Âge :** 29 ans  
**Rôle :** Réceptionniste dans un cabinet médical
### Problèmes
- Passe du temps à appeler des clients pour remplir les créneaux
- Doit gérer les retards
- Doit arbitrer qui rappeler en priorité
### Motivation
- Gagner du temps
- Avoir des règles claires
- Réduire les conflits

## Persona 3 – Le client

**Nom :** Sarah  
**Âge :** 27 ans  
**Situation :** Travaille à plein temps

### Problèmes

- Difficile d’obtenir un rendez-vous rapidement
- Oublie parfois un rendez-vous comprenant parfois des frais

### Motivation

- Recevoir des rappels automatiques
- Être notifiée des créneaux disponibles
- Avoir un système simple et transparent

## Persona 4 – Le moniteur d'auto-école

**Nom :** Julien  
**Âge :** 44 ans  
**Profession :** Moniteur d'auto-école indépendant  
**Structure :** Travaille seul, 25–30 leçons par semaine

### Problèmes
- 3–4 annulations de dernière minute par semaine, souvent par message le matin même
- Élèves jeunes (18–25 ans) qui oublient ou décalent sans prévenir
- Créneaux perdus impossibles à remplir faute de temps pour rappeler d'autres élèves
- Gère son planning via WhatsApp et un agenda papier, source d'erreurs
- Périodes creuses (vacances scolaires)
### Motivations
- Maximiser le nombre de leçons données par jour (revenu direct)
- Réduire le temps passé à jongler entre messages pour réorganiser sa journée
- Avoir un outil simple pour que les élèves réservent et annulent eux-mêmes
- Remplir automatiquement les trous avec des élèves en liste d'attente

# Hypothèses à valider

## Hypothèses côté professionnel

1. Les absences représentent une perte financière significative.    
2. Les professionnels n’ont pas le temps de gérer manuellement les listes d’attente.
3. Les outils actuels sont trop complexes ou mal adaptés aux petites structures.
4. Les professionnels souhaiteraient automatiser la réattribution des créneaux.
5. Le critère d’équité dans la réattribution est important.

## Hypothèses côté client

6. Les clients seraient intéressés par un système de notification automatique.
7. Les clients oublient leurs rendez-vous.
9. Les clients désirent réduire leur perte financière en cas d'oublie
8. Les clients accepteraient un système de priorisation (ex : premier inscrit, urgence, fidélité).
10. Les clients seraient prêts à activer une option “prévenez-moi si une place se libère”.

# Questions

## Questions d’entretien


### Questions pour les professionnels
#### Comprendre le problème
- Pouvez-vous me parler de la dernière fois qu’un client ne s’est pas présenté ?
- Que s’est-il passé concrètement ?
- À quelle fréquence cela arrive-t-il ?
- Comment cela impacte votre journée ?

#### Gestion actuelle
- Comment gérez-vous les annulations aujourd’hui ?
- Que faites-vous lorsqu’un créneau se libère au dernier moment ?
- Avez-vous une liste d’attente ?
- Comment choisissez-vous la personne à rappeler ?
- Combien de temps cela vous prend-il ?

#### Conséquences
- Est-ce que cela représente une perte financière ?
- Est-ce que cela crée des tensions avec les clients ?
- Vous sentez vous surchargé ?

- Est ce que selon vous j'ai oublié quelque chose?

#### Plus tard
- Seriez vous interessé de pouvoir configurer votre propre modèle de reattribution (définition des critères qui choisit le client le plus adapté)

### Questions pour les clients

#### Expérience passée
- Pouvez-vous me parler de la dernière fois que vous avez eu du mal à obtenir un rendez-vous ?  
- Avez-vous déjà raté un rendez-vous ? Pourquoi si ce n'est pas trop indiscret ?
- Avez vous été facturé?
- Comment vous rappelez-vous de vos rendez-vous ?
#### Gestion des créneaux
- Avez-vous déjà souhaité être informé lorsqu’un créneau se libère ?
- Si vous devez annuler, comment procédez-vous ?
- Est-ce que vous seriez frustré si quelqu’un d’autre obtenait un créneau avant vous ? Pourquoi ?
#### Comportement
- Combien de jours à l’avance prenez-vous vos rendez-vous en général ?
- Est-ce que la flexibilité horaire est importante pour vous ?
- Vous préférez la prise de rendez-vous par téléphone ou en ligne?
- Par téléphone, le temps d'attente avant d'avoir une réponse est dérangeant?
- Qu’est-ce qui vous donnerait envie d’utiliser un système de gestion en ligne ?

- Est ce que selon vous j'ai oublié quelque chose?

## Questions formulaires

### Questions pour les professionnels

1. Combien de rendez-vous avez-vous en moyenne par semaine ?
   - Moins de 10 / 10–20 / 20–40 / 40–60 / Plus de 60

2. Combien d'annulations tardives (moins de 24h à l'avance) subissez-vous par semaine ?
   - 0 / 1–2 / 3–5 / 6–10 / Plus de 10

3. Combien de d'absences sans prévenir avez-vous par mois ?
   - 0 / 1–3 / 4–7 / 8–12 / Plus de 12

4. Estimez-vous la perte financière mensuelle liée aux absences et annulations tardives ?
   - Moins de 100 CHF / 100–300 CHF / 300–600 CHF / 600–1000 CHF / Plus de 1000 CHF

5. Combien de temps par semaine consacrez-vous à la gestion des annulations et à la recherche de remplaçants ?
   - Moins de 30 min / 30 min–1h / 1–2h / 2–4h / Plus de 4h

6. Quel outil utilisez-vous principalement pour gérer vos rendez-vous ?
   - Agenda papier / Tableur (Excel, Google Sheets) / Logiciel métier / Application de prise de rendez-vous en ligne / Autre

7. Disposez-vous actuellement d'une liste d'attente pour vos clients ?
   - Oui, formalisée (outil ou document) / Oui, informelle (de mémoire) / Non

8. Si un créneau se libère à la dernière minute, arrivez-vous à le remplir ?
   - Toujours / Souvent / Parfois / Rarement / Jamais

9. Seriez-vous intéressé(e) par un système qui réattribue automatiquement les créneaux annulés aux clients en attente ?
   - Très intéressé(e) / Intéressé(e) / Neutre / Peu intéressé(e) / Pas du tout intéressé(e)

10. Quel critère de réattribution vous semblerait le plus juste ?
    - Premier inscrit sur la liste d'attente / Urgence du besoin / Fidélité du client / Proximité géographique / Autre

### Questions pour les clients

1. À quelle fréquence prenez-vous des rendez-vous auprès de professionnels (médecin, coiffeur, garage, etc.) ?
   - Moins d'1 fois par mois / 1–2 fois par mois / 3–5 fois par mois / Plus de 5 fois par mois

2. Comment prenez-vous habituellement vos rendez-vous ?
   - Par téléphone / En ligne (site web ou application) / Sur place / Par message (SMS, WhatsApp, e-mail) / Autre

3. Combien de fois au cours des 12 derniers mois avez-vous oublié ou raté un rendez-vous ?
   - 0 / 1–2 / 3–5 / Plus de 5

4. Avez-vous déjà été facturé(e) pour une absence ou une annulation tardive ?
   - Oui, plusieurs fois / Oui, une fois / Non, jamais

5. Combien de temps à l'avance prenez-vous généralement vos rendez-vous ?
   - Le jour même / 1–3 jours / 4–7 jours / 1–2 semaines / Plus de 2 semaines

6. Avez-vous déjà souhaité être prévenu(e) lorsqu'un créneau plus tôt se libérait ?
   - Oui, souvent / Oui, parfois / Non, jamais

7. Si un système vous notifiait automatiquement d'un créneau libéré correspondant à vos disponibilités, l'utiliseriez-vous ?
   - Oui, certainement / Probablement / Je ne suis pas sûr(e) / Probablement pas / Non

8. Quel type de rappel de rendez-vous préférez-vous ?
   - SMS / E-mail / Notification push (application) / Appel téléphonique / Aucun rappel nécessaire

9. Combien de temps avant le rendez-vous souhaitez-vous recevoir un rappel ?
   - 1 heure avant / Le matin même / La veille / 2–3 jours avant / 1 semaine avant

10. Trouveriez-vous juste qu'un système de liste d'attente attribue les créneaux libérés selon l'ordre d'inscription ?
    - Tout à fait d'accord / Plutôt d'accord / Neutre / Plutôt pas d'accord / Pas du tout d'accord


# Ce qu'il faudra faire:

- 2 entretiens professionnels (ex : coiffeur + garagiste)
- 2 entretiens clients (ceux qui prennent les rdv)
- Entretiens semi structurés (20–30 minutes)
- Un formulaire anonyme pour avoir des réponses si pas d'entretiens
- Prise de notes
- Analyse des thèmes récurrents
- Mise à jour des hypothèses
