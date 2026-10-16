// Le Cube
import lecube0 from '../assets/images-projets/images-LeCube/lecube0-BMYTLHQb.webp';
import lecube1 from '../assets/images-projets/images-LeCube/lecube1-BSZBp0s0.webp';
import lecube2 from '../assets/images-projets/images-LeCube/lecube2-BVL9JYwt.webp';
import lecube3 from '../assets/images-projets/images-LeCube/lecube3-DUB-3PTI.webp';
import lecube4 from '../assets/images-projets/images-LeCube/lecube4-D4XrBW5y.webp';
import lecube5 from '../assets/images-projets/images-LeCube/lecube5-CQbLgJ75.webp';
import lecube6 from '../assets/images-projets/images-LeCube/lecube6-B1ZTD1x5.webp';

// Dataviz
import dataviz1 from '../assets/images-projets/images-Dataviz/dataviz1-CYVjQ7SB.webp';
import dataviz2 from '../assets/images-projets/images-Dataviz/dataviz2-DBt65cD_.webp';
import dataviz3 from '../assets/images-projets/images-Dataviz/dataviz3-Bc0FGwBy.webp';
import dataviz4 from '../assets/images-projets/images-Dataviz/dataviz4-Cs8C8EW-.webp';
import dataviz5 from '../assets/images-projets/images-Dataviz/dataviz5-BTF5G4J9.webp';
import dataviz6 from '../assets/images-projets/images-Dataviz/dataviz6-C7lmoBUD.webp';
import dataviz7 from '../assets/images-projets/images-Dataviz/dataviz7-DqlLjO8x.webp';

// Sushn'go
import sushngo1 from '../assets/images-projets/images-Sushngo/sushngo1-F-pyb1g0.webp';
import sushngo2 from '../assets/images-projets/images-Sushngo/sushngo2-t35ACHS9.webp';
import sushngo3 from '../assets/images-projets/images-Sushngo/sushngo3-Dmc-itW3.webp';
import sushngo5 from '../assets/images-projets/images-Sushngo/sushngo5-CiHeCzvY.webp';
import sushngo6 from '../assets/images-projets/images-Sushngo/sushngo6-B8rhCsiM.webp';
import sushngo8 from '../assets/images-projets/images-Sushngo/sushngo8-qPEcMGgQ.webp';
import sushngo9 from '../assets/images-projets/images-Sushngo/sushngo9-5OLe1nIF.webp';

// Aurora
import aurora1 from '../assets/images-projets/images-Aurora/aurora1-accueil.webp';
import aurora2 from '../assets/images-projets/images-Aurora/aurora2-DEAE_t6e.webp';
import aurora3 from '../assets/images-projets/images-Aurora/aurora3-D8gozF7i.webp';
import aurora3p1 from '../assets/images-projets/images-Aurora/aurora3p1-BOyk1m1a.webp';
import aurora4 from '../assets/images-projets/images-Aurora/aurora4-KF8jzkym.webp';
import aurora5 from '../assets/images-projets/images-Aurora/aurora5-DPnXPuIv.webp';

// Palais d'Été
import palaisete1 from '../assets/images-projets/images-Palaisete/palaisete1-_50zyvET.webp';
import palaisete2 from '../assets/images-projets/images-Palaisete/palaisete2-M-b5FbuS.webp';
import palaisete3 from '../assets/images-projets/images-Palaisete/palaisete3-0WdZlCMm.webp';
import palaisete4 from '../assets/images-projets/images-Palaisete/palaisete4-DiEOkgJO.webp';

// ACF2L
import acf2l1 from '../assets/images-projets/images-acf2l/acf2l-1.webp';
import acf2l2 from '../assets/images-projets/images-acf2l/acf2l-2.webp';
import acf2l3 from '../assets/images-projets/images-acf2l/acf2l-3.webp';
import acf2l4 from '../assets/images-projets/images-acf2l/acf2l-4.webp';
import acf2l5 from '../assets/images-projets/images-acf2l/acf2l-5.webp';

export const projectsData = [
  {
    id: 1,
    type: "Académique",
    importance: 1,
    title: "Le Cube",
    tag: "Développement Web",
    description: `Un Webdocumentaire complet et immersif sur l'univers du speedcubing et ses compétitions internationales.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/","https://www.linkedin.com/in/maxime-derènes-9b997932a/"],
    technologies: ["HTML", "CSS", "Javascript", "GSAP"],
    date: "Octobre 2025",
    imagemain: lecube0,
    images: [
      lecube0,
      lecube1,
      lecube2,
      lecube3,
      lecube4,
      lecube5,
      lecube6
    ],
    lien: ["https://mloks77.github.io/SAE302-LeCube/"],
    visitable: true,
    lienSite: "https://mloks77.github.io/SAE302-LeCube/",
    objectifs: ["Faire découvrir le speedcubing", "Réaliser un site web immersif", "Optimiser les animations GSAP"]
  },
  {
    id: 2,
    type: "Académique",
    importance: 2,
    title: "Dataviz",
    tag: "Développement Web",
    description: `Tableau de bord interactif et visualisation cartographique de données sur la répartition des logements sociaux en France.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel","Maxime Derènes","Joachim Tocqueville"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/", "https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/joachim-tocqueville-1356b2339/"],
    technologies: ["React.JS", "TailwindCSS" ,"Symfony", "Chart.js", "API REST", "MySQL"],
    date: "Mars 2026",
    imagemain: dataviz1,
    images: [
      dataviz1,
      dataviz2,
      dataviz3,
      dataviz4,
      dataviz5,
      dataviz6,
      dataviz7
    ],
    lien: ["https://github.com/MLoks77/SAE401"],
    visitable: false,
    lienSite: "",
    objectifs: ["Apprendre React", "Créer une API REST performante", "Restituer des données complexes"]
  },
  {
    id: 3,
    type: "Académique",
    importance: 3,
    title: "Sushn'go",
    tag: "Développement Web",
    description: `Application web complète de commande et réservation en ligne pour un restaurant japonais moderne.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes", "Joachim Tocqueville"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/", "https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/joachim-tocqueville-1356b2339/"],
    technologies: ["Angular", "TailwindCSS", "PHP", "MySQL", "API REST"],
    date: "Décembre 2025",
    imagemain: sushngo1,
    images: [
      sushngo1,
      sushngo2,
      sushngo3,
      sushngo5,
      sushngo6,
      sushngo8,
      sushngo9
    ],
    lien: null,
    visitable: false,
    lienSite: "",
    objectifs: ["Apprendre à utiliser les API REST", "Approfondir connaissances en Back-end","Apprendre à utiliser les systèmes de sessions"]
  },
  {
    id: 4,
    type: "Personnel",
    importance: 4,
    title: "Aurora",
    tag: "Développement Web",
    description: `Expérience web interactive sur le thème de l'exploration spatiale et de l'astronomie, conçue à l'occasion d'un hackathon.`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes", "Témi Kergastel"],
    linkcollab: ["https://www.linkedin.com/in/maxime-derènes-9b997932a/", "https://www.linkedin.com/in/témi-kergastel/"],
    technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "Three.js"],
    date: "Juin 2026",
    imagemain: aurora1,
    images: [
      aurora1,
      aurora2,
      aurora3,
      aurora3p1,
      aurora4,
      aurora5
    ],
    lien: ["https://aurora3pc-cca.infinityfree.me/?i=1"],
    visitable: true,
    lienSite: "https://aurora3pc-cca.infinityfree.me/?i=1",
    objectifs: ["Participer et performer lors d'un hackathon de 48h", "Concevoir un univers 3D immersif"]
  },
  {
    id: 5,
    type: "Académique",
    importance: 5,
    title: "Palais d'Été",
    tag: "Développement Web",
    description: `Modélisation 3D et intégration des bâtiments du palais d'été dans un site web dans le cadre de la SAE 402`,
    video: null,
    sourcevideo: null,
    collaborateurs: ["Maxime Derènes"],
    linkcollab: ["https://www.linkedin.com/in/maxime-derènes-9b997932a/"],
    technologies: ["HTML", "JavaScript", "API", "TailwindCSS"],
    date: "Avril 2026",
    imagemain: palaisete1,
    images: [
      palaisete1,
      palaisete2,
      palaisete3,
      palaisete4
    ],
    lien: ["https://mloks77.github.io/SAE402/index.html"],
    visitable: true,
    lienSite: "https://mloks77.github.io/SAE402/index.html",
    objectifs: ["Apprendre à intégrer des modèles 3D", "Modéliser en 3D"]
  },
  {
    id: 6,
    type: "Académique",
    importance: 6,
    title: "ACF2L",
    tag: "Développement Web",
    description: "Refonte d'un site web pour une entreprise en utilisant que Bootstrap comme contrainte",
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel"],
    linkcollab: ["https://www.linkedin.com/in/témi-kergastel/"],
    technologies: ["HTML", "CSS", "Bootstrap"],
    date: "Décembre 2025",
    imagemain: acf2l1,
    images: [
      acf2l1,
      acf2l2,
      acf2l3,
      acf2l4,
      acf2l5
    ],
    lien: ["https://alexouuuu.github.io/ACF2L/"],
    visitable: true,
    lienSite: "https://alexouuuu.github.io/ACF2L/",
    objectifs: ["Apprendre à utiliser Bootstrap"]
  },
  {
    id: 7,
    type: "Académique",
    importance: 7,
    title: "ChronoShift",
    tag: "Jeu Vidéo",
    description: "Création d'un jeu d'infiltration et d'Action pour le projet Tutoré de MMI3 2026",
    video: null,
    sourcevideo: null,
    collaborateurs: ["Témi Kergastel", "Maxime Derènes", "Ethan Bouquet"],
    technologies: ["Godot Engine"],
    date: "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Créer un jeu vidéo complet en autonomie", "Mettre en avant les compétences MMI", "Gagner le festival MMI"]
  },
  {
    id: 8,
    type: "Académique",
    importance: 8,
    title: "SAE 501",
    tag: "Développement Web",
    description: "SAE 501 - Consignes à venir",
    video: null,
    sourcevideo: null,
    collaborateurs: [],
    technologies: [],
    date: "A venir...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: []
  },
  {
    id: 9,
    type: "Personnel",
    importance: 9,
    title: "Popa Detailing",
    tag: "Développement Web",
    description: "Création du site web de Popa Detailing",
    video: null,
    sourcevideo: null,
    collaborateurs: [],
    technologies: ["React", "TailwindCSS"],
    date: "En cours...",
    imagemain: "",
    images: [],
    lien: [],
    visitable: false,
    lienSite: "",
    objectifs: ["Création d'un site Vitrine", "Se faire recommander"],
  }
];
