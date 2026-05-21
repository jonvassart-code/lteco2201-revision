import { useState } from "react";

const COLORS = {
  bg: "#FAFAF7",
  card: "#FFFFFF",
  accent: "#C0392B",
  accentLight: "#FADBD8",
  blue: "#2471A3",
  blueLight: "#D6EAF8",
  green: "#1E8449",
  greenLight: "#D5F5E3",
  orange: "#D35400",
  orangeLight: "#FDEBD0",
  purple: "#7D3C98",
  purpleLight: "#EBDEF0",
  teal: "#148F77",
  tealLight: "#D1F2EB",
  gold: "#B7950B",
  goldLight: "#FEF9E7",
  text: "#2C3E50",
  textLight: "#5D6D7E",
  border: "#E8E8E4",
};

const sessions = [
  {
    num: 1, date: "2 fév.", title: "Présentation de Jésus au Temple (Lc 2,22-40)",
    color: COLORS.accent, colorLight: COLORS.accentLight,
    points: [
      { label: "Chandeleur = fête patronale UCLouvain", detail: "2 février, Présentation au Temple, bénédiction des cierges, Sedes Sapientiae (1425)" },
      { label: "Gn 1,1-2 → début de la Bible", detail: "Ambiguïté syntaxique (principale ou subordonnée), ténèbre au singulier (ḥoshekh), ruaḥ elohim = souffle/vent/esprit de Dieu" },
      { label: "Ap 22,20-21 → fin de la Bible", detail: "Arc narratif : création en désordre → attente active (« Viens ! »). ταχύ = urgence eschatologique" },
      { label: "Lc 2,22-40 : deux lois", detail: "Lv 12 : purification 40 jours après naissance garçon. Ex 13 : consécration premiers-nés. Offrande des pauvres = 2 tourterelles" },
      { label: "Syméon + Nunc Dimittis", detail: "Guidé 3× par l'Esprit. Cantique = mosaïque d'Is 40 et 52. Récité aux Complies. « Maintenant » = présent eschatologique" },
      { label: "Anne la prophétesse", detail: "84 ans, tribu d'Aser, veuve, jour et nuit au Temple. PROCLAME = verbe actif. Couple prophétique homme/femme" },
      { label: "Prophétie du glaive", detail: "Signe de contradiction (σημεῖον ἀντιλεγόμενον). Glaive = épreuve du discernement. διαλογισμοί = pensées intérieures révélées" },
      { label: "Méthode : comparer versions", detail: "Hébreu (BHS) / Grec (LXX Göttingen, NA28) / Français (TOB). Compétence attendue à l'examen" },
    ]
  },
  {
    num: 2, date: "9 fév.", title: "La Bible : bibliothèque, canon, inspiration, historicité",
    color: COLORS.blue, colorLight: COLORS.blueLight,
    points: [
      { label: "Bible = bibliothèque (βιβλία)", detail: "Catho : 73 livres (46 AT + 27 NT). Protestant : 66 (39 AT + 27 NT). Différence = 7 deutérocanoniques" },
      { label: "Structure AT", detail: "Torah/Pentateuque (5) + Historiques (16) + Poétiques/Sapientiaux (7) + Prophétiques (18)" },
      { label: "Structure NT", detail: "Évangiles (4) + Actes (1) + Lettres (21 : 13 Paul + 8 autres) + Apocalypse (1). Tout en grec koinè" },
      { label: "Canon = κανών (règle)", detail: "Critères : apostolicité, orthodoxie, usage universel. Critère décisif = la FOI. Défini au Concile de Trente (1542-63)" },
      { label: "TaNaK = T+N+K", detail: "Torah + Neviim (Prophètes) + Ketouvim (Écrits). Fin hébraïque : 2 Ch 36 (Cyrus). Fin grecque : Ml 3 (Élie → Jean-Baptiste)" },
      { label: "Évangile de Thomas = exclu", detail: "3 raisons : secret vs révélation (gnose), misogynie (parole 114), panthéisme (parole 77)" },
      { label: "Inspiration : 2 Tm 3,15-17", detail: "θεόπνευστος = soufflé par Dieu. ≠ dictée mécanique. Enseigner, réfuter, redresser, éduquer → action" },
      { label: "Historicité : Cylindre de Cyrus", detail: "Confirme le cadre historique d'Esdras. Mais le texte biblique = interprétation théologique d'un fait historique" },
      { label: "Chapitres (Langton, 13e s.) / Versets (Estienne, 16e s.)", detail: "Découpage tardif et artificiel. Ne pas commenter les numéros comme des unités littéraires" },
      { label: "Mt 5,17-19 : accomplir ≠ remplacer", detail: "Jésus accomplit la Loi = porte à son terme, révèle le plein sens. La Loi reste valide" },
    ]
  },
  {
    num: 3, date: "16 fév.", title: "Ces paraboles qui provoquent",
    color: COLORS.green, colorLight: COLORS.greenLight,
    points: [
      { label: "Paraboles ≠ histoires pour enfants", detail: "Récits pour adultes juifs cultivés et pieux du 1er s. ≈35% de l'enseignement synoptique, ≈55 paraboles" },
      { label: "Mc 4,9-12 : paraboles voilent ET révèlent", detail: "Référence Is 6,9-10. Dedans/dehors = disposition intérieure, pas ethnique. « Qui a des oreilles, qu'il entende ! »" },
      { label: "Méthode en 4 étapes", detail: "1) Lire et relire 2) Contexte d'énonciation 3) Intertextualité AT 4) Ce qui dérange + ce qu'on apprend" },
      { label: "Perle (Mt 13,45-46)", detail: "Marchand = figure suspecte. Perle = huître non-kasher. Il vend TOUT (πάντα). Trame inachevée. Royaume = décalé, radical" },
      { label: "Pharisien et Publicain (Lc 18,9-14)", detail: "Public = « ceux convaincus d'être justes ». Pharisien prie πρὸς ἑαυτόν (vers lui-même). Publicain : 8 mots en grec" },
      { label: "Retournement : publicain justifié", detail: "Scandale : le traître repart justifié. « Plus que » l'autre (pas condamné). « Tout qui s'élève s'abaisse »" },
      { label: "Limites d'interprétation", detail: "Respecter le texte, la Bible dans son ensemble, la Tradition. Ne pas projeter ce qu'on a envie de voir" },
      { label: "Mt 11,16-17 : distance culturelle", detail: "Enfants jouant à la noce/deuil. Traverser la distance culturelle = travail d'interprétation" },
    ]
  },
  {
    num: 4, date: "23 fév.", title: "Interpréter la Loi — Jn 8, analyse narrative, théologies situées",
    color: COLORS.orange, colorLight: COLORS.orangeLight,
    points: [
      { label: "Jn 8,2-12 : femme adultère", detail: "Addition tardive (4e s.), style lucanien, mais CANONIQUE. Crochets [[ ]] dans les éditions critiques" },
      { label: "Piège double", detail: "Si Jésus dit « lapidez » → illégal (Rome, Jn 18,31). Si « ne lapidez pas » → contredit Moïse" },
      { label: "Personnages manquants", detail: "Mari absent, amant absent (Dt 22 : les DEUX meurent), témoins absents (Dt 17,6). Procédure déjà invalide" },
      { label: "Jésus écrit sur le sol (2×)", detail: "Mystère non résolu. Se baisse/se redresse 2×. Face-à-face final avec la femme = dialogue de libération" },
      { label: "« Je Suis » (ἐγώ εἰμι) dans Jn 8", detail: "v.24, 28, 58 = Nom divin (Ex 3,14). v.58 → lapidation de Jésus. Les interlocuteurs comprennent la revendication divine" },
      { label: "Justice restauratrice vs punitive", detail: "Jésus ne nie pas le péché (« ne pèche plus ») mais refuse de réduire l'humain à sa faute. Bouc émissaire (Girard)" },
      { label: "Théologies de la libération", detail: "Années 1960, Am. latine. Ex 3,7-10 : Dieu voit, entend, descend, envoie. Multiples branches : Black, Feminist, Womanist, Dalit..." },
      { label: "Théologies féministes sur Jn 8", detail: "Femme anonyme = objet. Jésus = premier à lui parler. Lecture radicale : double standard (hommes invités, femme commandée)" },
      { label: "Postures morales", detail: "Rigorisme → Tutiorisme → Probabiliorisme (juste milieu, posture de Jésus ?) → Probabilisme → Laxisme" },
    ]
  },
  {
    num: 5, date: "2 mars", title: "L'Aqedah — Genèse 22",
    color: COLORS.purple, colorLight: COLORS.purpleLight,
    points: [
      { label: "Aqedah (עֲקֵדָה) = « ligature »", detail: "Titre juif vs « sacrifice d'Isaac » (chrétien). Le titre dit déjà une interprétation. Isaac est lié, pas tué" },
      { label: "Structure : crescendo → dénouement", detail: "vv.1-2 épreuve → 3-6 départ → 7-8 dialogue → 9-10 sommet → 11-14 intervention → 15-18 bénédiction → 19 retour" },
      { label: "Verset gênant (v.2)", detail: "« Prends ton fils, ton unique, celui que tu aimes » = chaque apposition est un couteau de plus. Dieu demande l'holocauste" },
      { label: "Yir'eh (יִרְאֶה) = il voit/pourvoit", detail: "Jeu de mots fondateur. Lieu nommé « Yahvé-Yireh ». Moriah = Mont du Temple à Jérusalem (2 Ch 3,1)" },
      { label: "Pluralité d'interprétations", detail: "Théologien (épreuve), historien (fin des sacrifices humains), psychologue (drame intérieur), philologue (« faire monter » ≠ sacrifier)" },
      { label: "Typologie chrétienne", detail: "Isaac porte le bois = Jésus porte la croix. Bélier substitué = Agneau de Dieu. He 11,17-19 : résurrection en figure. Rm 8,32" },
      { label: "Dimension interreligieuse", detail: "Islam : Ismaël (pas Isaac). Lieu = Mina (pas Jérusalem). Aïd el-Adha. Même texte, lectures radicalement différentes" },
      { label: "Réception artistique", detail: "Caravage, Rembrandt, Chagall... L'ange arrête physiquement le bras ≠ texte (voix seule). Art = théologie visuelle" },
    ]
  },
  {
    num: 6, date: "9 mars", title: "Les Psaumes — prière, poésie, parallélisme",
    color: COLORS.teal, colorLight: COLORS.tealLight,
    points: [
      { label: "Psaume = prière + chant + poème", detail: "מִזְמוֹר (mizmor). 150 psaumes, 5 livres (// 5 livres Torah). Auteurs : David (73), Asaph, Coré, anonymes" },
      { label: "Parallélisme = procédé central", detail: "Synonymique (Ps 70,2), Antithétique (Ps 1,6), Synthétique/progressif (Ps 1,1), Climactique (Ps 130,6)" },
      { label: "Noms de Dieu", detail: "Elohim/El = « Dieu » (minuscule TOB) = générique. YHWH/Yah = « le SEIGNEUR » (capitales TOB) = nom propre (Ex 3,14). Alléluia = Hallelu-Yah" },
      { label: "Ps 1 : sapientiel, deux chemins", detail: "Ouverture : אַשְׁרֵי (ashrei) = Béatitude. Juste = arbre enraciné. Méchant = bale au vent. Antithèse complète" },
      { label: "Ps 70 : supplication individuelle", detail: "Cri d'urgence : מַהֵר (maher) = vite (2×). Double adresse : Elohim + YHWH. Incipit de toutes les Heures liturgiques" },
      { label: "Ps 96 : hymne d'intronisation", detail: "Triple « Chantez ». Anti-polythéisme (v.5 : elilim = vanités). Joie cosmique. Roi-Juge universel" },
      { label: "Ps 130 : De profundis", detail: "Chant des montées + pénitentiel. Profondeurs (tehomot → Gn 1,2). Attente climactique (garde/matin). Du « je » à « Israël ». Offices des défunts" },
      { label: "Ps 150 : Grand Alléluia final", detail: "OÙ (sanctuaire + firmament), POURQUOI (prouesses), COMMENT (tous instruments, shofar). « Que tout ce qui respire loue YHWH »" },
      { label: "Mt 26,30 : Jésus chante les psaumes", detail: "Hallel (Ps 113-118) à la Dernière Cène. Ps 22,2 sur la croix. Connexion psaumes ↔ eucharistie" },
    ]
  },
  {
    num: 7, date: "26 mars", title: "Évangiles synoptiques — résurrection, Jean-Baptiste, structures de péché",
    color: COLORS.gold, colorLight: COLORS.goldLight,
    points: [
      { label: "Synoptiques = σύνοψις", detail: "Mt, Mc, Lc en colonnes parallèles. 3 niveaux : structure, contenu, expressions. Divergences = intentions théologiques propres" },
      { label: "Tombeau vide : 4 versions", detail: "Femmes différentes, êtres célestes différents (1 ange / jeune homme / 2 hommes / 2 anges), réactions différentes" },
      { label: "Mc 16,8 : fin originale abrupte", detail: "Femmes tremblantes, ne disent rien. vv.9-20 = addition tardive (comme Jn 8). Effet : lecteur renvoyé au début" },
      { label: "Lc 24 : Emmaüs + fraction du pain", detail: "Reconnaissance eucharistique (v.30-31). Lc 24,44 : Jésus cite lui-même le TaNaK. Ascension discrète" },
      { label: "Jn 20 : Marie-Madeleine", detail: "Jardinier → « Marie ! » → reconnaissance par la voix (cf. Jn 10). Noli me tangere. Apostola apostolorum" },
      { label: "Jn 20,28 : Thomas", detail: "« Mon Seigneur et mon Dieu ! » = confession christologique la plus haute du NT" },
      { label: "Décapitation de Jean (Mc 6)", detail: "Récit enchâssé (flashback). Hérode craint Jean mais cède. Hérodiade orchestre. Mc 6,29 // Mc 15,46 (ensevelissement)" },
      { label: "Structure de péché", detail: "Systèmes qui contraignent au péché. Exemples : impôts finançant armes, électricité polluante" },
      { label: "Coopération au mal (6 types)", detail: "Formelle (désirée) / Matérielle (subie) / Directe (aide) / Indirecte (outil) / Proche / Lointaine. Application à Mc 6" },
    ]
  },
];

const questions = [
  { q: "Que signifie le mot « Bible » étymologiquement ?", a: "Du grec βιβλία = « les livres » (pluriel). La Bible est une bibliothèque." },
  { q: "Combien de livres dans la Bible catholique vs protestante ?", a: "Catholique : 73 (46 AT + 27 NT). Protestante : 66 (39 AT + 27 NT). Différence = 7 deutérocanoniques." },
  { q: "Que signifie TaNaK ?", a: "Torah (Loi) + Neviim (Prophètes) + Ketouvim (Écrits) = Bible hébraïque." },
  { q: "Quels sont les 3 critères de canonicité ?", a: "Apostolicité, orthodoxie, usage universel. Critère décisif sous-jacent : la foi." },
  { q: "Pourquoi l'Évangile de Thomas est-il exclu du canon ?", a: "Gnosticisme (paroles secrètes), misogynie (parole 114), panthéisme (parole 77)." },
  { q: "Que signifie θεόπνευστος (theopneustos) ?", a: "« Soufflé par Dieu » = inspiration divine. L'auteur humain reste libre (≠ dictée mécanique). Réf. : 2 Tm 3,16." },
  { q: "Qui a introduit les chapitres et les versets dans la Bible ?", a: "Chapitres : Étienne Langton (13e s.). Versets : Robert Estienne (16e s.). Découpage tardif et artificiel." },
  { q: "Sur quoi se termine l'AT hébraïque vs l'AT grec ?", a: "Hébreu : 2 Ch 36 (décret de Cyrus, ouverture). Grec : Ml 3 (envoi d'Élie → Jean-Baptiste dans le NT)." },
  { q: "Qu'est-ce que la Chandeleur et quel lien avec l'UCLouvain ?", a: "2 février, Présentation de Jésus au Temple. Fête patronale de l'UCLouvain, togati, Sedes Sapientiae." },
  { q: "Que signifie le Nunc Dimittis et quand est-il récité ?", a: "Cantique de Syméon (Lc 2,29-32) : « tu peux laisser ton serviteur s'en aller en paix ». Récité aux Complies." },
  { q: "Pourquoi Marie offre-t-elle deux tourterelles (Lc 2,24) ?", a: "C'est l'offrande des pauvres (Lv 12,8). Luc signale que la Sainte Famille est modeste." },
  { q: "Que signifie ruaḥ elohim (רוּחַ אֱלֹהִים) ?", a: "Souffle / vent / esprit de Dieu. Terme hébreu central, traduit en grec par πνεῦμα θεοῦ." },
  { q: "Qu'est-ce qu'une parabole selon le cours ?", a: "Récit court à intention théologique qui provoque et dérange. ≈55 dans les synoptiques, ≈35% de l'enseignement de Jésus." },
  { q: "Quelle est la méthode en 4 étapes pour lire une parabole ?", a: "1) Lire/relire 2) Contexte d'énonciation 3) Intertextualité AT 4) Ce qui dérange + ce qu'on apprend." },
  { q: "Pourquoi la perle est-elle provocante pour des Juifs pieux ?", a: "La perle vient d'une huître (non-kasher), vendue par un marchand ambulant (figure suspecte). Le marchand vend TOUT." },
  { q: "Que signifie πρὸς ἑαυτόν dans la prière du pharisien ?", a: "« Vers/pour lui-même ». Le pharisien prie Dieu mais reste replié sur lui-même (Lc 18,11)." },
  { q: "Quel est le statut textuel de Jn 8,2-12 ?", a: "Addition tardive (absent des manuscrits anciens, attesté au 4e s.), style lucanien, mais CANONIQUE." },
  { q: "Quels personnages manquent dans Jn 8 et pourquoi est-ce important ?", a: "Le mari, l'amant (Dt 22 : les deux meurent), les témoins (Dt 17,6). La procédure est déjà invalide." },
  { q: "Que signifie ἐγώ εἰμι dans Jean 8 ?", a: "« Moi, JE SUIS » = Nom divin (Ex 3,14). Jn 8,24.28.58. Au v.58, tentative de lapidation = revendication divine comprise." },
  { q: "Quel est le texte fondateur des théologies de la libération ?", a: "Ex 3,7-10 : Dieu voit la misère, entend les cris, descend pour délivrer, envoie Moïse." },
  { q: "Que signifie Aqedah (עֲקֵדָה) ?", a: "« Ligature » (d'Isaac). Terme juif pour Gn 22. Accent sur la ligature, pas sur la mort (Isaac n'est pas tué)." },
  { q: "Quel jeu de mots est fondateur dans Gn 22 ?", a: "Yir'eh (יִרְאֶה) = il voit / il pourvoit. Le lieu est nommé « Yahvé-Yireh ». Moriah = Mont du Temple." },
  { q: "Quels parallèles typologiques entre Gn 22 et la Passion ?", a: "Isaac porte le bois / Jésus porte la croix. Bélier substitué / Agneau de Dieu. Moriah / Jérusalem. He 11, Rm 8,32." },
  { q: "Qui est sacrifié selon la tradition islamique dans Gn 22 ?", a: "Ismaël (pas Isaac). Lieu = Mina (pas Jérusalem). Commémoré à l'Aïd el-Adha." },
  { q: "Quel est le procédé central de la poésie hébraïque ?", a: "Le parallélisme (synonymique, antithétique, synthétique, climactique). Pas de rime ni de mètre syllabique." },
  { q: "Donnez un exemple de parallélisme climactique.", a: "Ps 130,6 : « plus que la garde ne désire le matin / plus que la garde le matin » — répétition avec intensification." },
  { q: "Que signifie Alléluia ?", a: "הַלְלוּ יָהּ = Hallelu Yah = « Louez Yah ». Contient le nom divin Yah (forme courte de YHWH)." },
  { q: "Quelle est la fin originale de l'évangile de Marc ?", a: "Mc 16,8 : les femmes tremblantes ne disent rien. Les vv.9-20 sont une addition tardive." },
  { q: "Quelle est la confession christologique la plus haute du NT ?", a: "Jn 20,28 : Thomas dit « Mon Seigneur et mon Dieu ! » (ὁ κύριός μου καὶ ὁ θεός μου)." },
  { q: "Qu'est-ce qu'une structure de péché ?", a: "Système social/économique/politique qui contraint l'individu à participer au mal sans l'avoir pleinement choisi." },
  { q: "Nommez les 6 types de coopération au mal.", a: "Formelle (désirée) / Matérielle (subie) / Directe (aide) / Indirecte (outil) / Proche / Lointaine." },
  { q: "Pourquoi Marie-Madeleine est-elle appelée apostola apostolorum ?", a: "Elle est la première à voir Jésus ressuscité et à l'annoncer aux disciples (Jn 20,18). Titre patristique." },
  { q: "Que signifie Noli me tangere ?", a: "« Ne me retiens pas » (Jn 20,17). Parole de Jésus ressuscité à Marie-Madeleine. Riche tradition picturale." },
];

const textAnalyses = [
  {
    ref: "Gn 1,1-2", title: "Commencement de la création", session: 1, color: COLORS.accent,
    points: [
      "Ambiguïté syntaxique : proposition principale OU temporelle subordonnée",
      "Dieu : transcendant (au-dessus) ou immanent (appartient au ciel et à la terre) ?",
      "ḥoshekh (ténèbre) au singulier = signal d'un langage inhabituel, non-ordinaire",
      "ruaḥ elohim = souffle / vent / esprit de Dieu → πνεῦμα θεοῦ (LXX)",
      "Comparer BHS (hébreu) / LXX Göttingen (grec) / TOB (français) = compétence d'examen",
    ]
  },
  {
    ref: "Lc 2,22-40", title: "Présentation au Temple", session: 1, color: COLORS.accent,
    points: [
      "Deux lois : Lv 12 (purification 40 jours) + Ex 13 (consécration premiers-nés)",
      "Offrande des pauvres (2 tourterelles) = famille modeste",
      "Syméon : 3× guidé par l'Esprit. Nunc Dimittis = mosaïque d'Isaïe (40,5 ; 52,10)",
      "Anne : prophétesse, couple prophétique H/F. Verbe actif : PROCLAME",
      "Prophétie du glaive : signe de contradiction, chute ET relèvement, pensées dévoilées",
      "Structure : A (Loi) → B (Syméon) → B' (prophétie) → C (Anne) → A' (retour Nazareth)",
      "Temple = lieu d'inclusion des récits d'enfance (Lc 1-2)",
    ]
  },
  {
    ref: "Mt 13,45-46", title: "Parabole de la Perle", session: 3, color: COLORS.green,
    points: [
      "Contexte : Mt 13 = discours en paraboles. Perle dans la section « pour ceux du dedans » (après v.36)",
      "Perle = huître non-kasher. Marchand = figure suspecte (Si 26,29). Vagabond",
      "Il vend TOUT (πάντα ὅσα εἶχεν). Que fait-il ensuite ? RIEN. Trame inachevée",
      "Royaume = décalé, dérangeant, radical, non réservé aux recommandables",
      "Multiples lectures : marchand = chrétien/Dieu/Christ. Aucune imposée",
    ]
  },
  {
    ref: "Lc 18,9-14", title: "Pharisien et Publicain", session: 3, color: COLORS.green,
    points: [
      "Lc 18,9 : public explicite = ceux convaincus d'être justes + méprisants",
      "Pharisien : prière vraie dans son contenu mais πρὸς ἑαυτόν (vers lui-même). Miroir de soi",
      "Publicain : 8 mots en grec. À distance, ne lève pas les yeux, se bat la poitrine",
      "Retournement : publicain justifié « plus que » l'autre (pas condamné, mais inversé)",
      "Sentence : « Tout qui s'élève s'abaisse ; tout qui s'abaisse s'élève » = principe du Royaume",
    ]
  },
  {
    ref: "Jn 8,2-12", title: "Femme adultère", session: 4, color: COLORS.orange,
    points: [
      "Critique textuelle : addition tardive (4e s.), style lucanien, mais canonique",
      "Piège politique ET religieux : lapider = illégal (Rome) / ne pas lapider = contredire Moïse",
      "Absents : mari, amant (Dt 22 : les deux meurent), témoins (Dt 17,6). Procédure invalide",
      "Jésus se baisse 2× / se redresse 2×. Écrit sur le sol = mystère",
      "« Que celui sans péché jette le premier une pierre » → départ des plus vieux aux plus jeunes",
      "Face-à-face final : « Moi non plus, je ne te condamne pas. Va, ne pèche plus » = justice restauratrice",
      "v.12 : « Je suis la lumière du monde » → christologie. v.58 : « JE SUIS » → Nom divin (Ex 3,14)",
      "Lecture féministe : femme anonyme = objet. Jésus = premier à lui parler. Double standard sexuel",
      "Bouc émissaire (Girard) : Jésus désamorce le mécanisme en retournant la question",
    ]
  },
  {
    ref: "Gn 22,1-19", title: "Aqedah — Ligature d'Isaac", session: 5, color: COLORS.purple,
    points: [
      "v.2 : accumulation rhétorique (fils, unique, bien-aimé) = chaque mot intensifie la douleur",
      "v.5 : « nous reviendrons » = foi prophétique ou mensonge ?",
      "v.7-8 : seul dialogue Isaac/Abraham. « Dieu pourvoira l'agneau » (yir'eh)",
      "v.9-10 : sommet dramatique. Couteau levé. Tension maximale",
      "v.11-14 : ange arrête par la VOIX (pas physiquement ≠ tradition artistique). Bélier substitué",
      "Nom du lieu : Yahvé-Yireh / « Le-Seigneur-voit ». Moriah = Mont du Temple",
      "Typologie : Isaac/bois = Jésus/croix. Bélier = Agneau de Dieu. He 11,17-19, Rm 8,32",
      "Islam : Ismaël, Mina, Aïd el-Adha. Même texte, lectures radicalement différentes",
      "Titre = interprétation : « sacrifice » (chrétien, presque accompli) vs « ligature » (juif, ce qui est fait)",
    ]
  },
  {
    ref: "Ps 1 / 70 / 96 / 130 / 150", title: "Les cinq psaumes étudiés", session: 6, color: COLORS.teal,
    points: [
      "Ps 1 (sapientiel) : Deux chemins. Ashrei = béatitude. Arbre vs bale. Ouverture du Psautier",
      "Ps 70 (supplication) : Urgence (maher 2×). Double adresse Elohim + YHWH. Incipit des Heures",
      "Ps 96 (hymne intronisation) : Triple « Chantez ». Elilim = vanités. Joie cosmique. Roi-Juge",
      "Ps 130 (pénitentiel / montées) : De profundis. Tehomot → Gn 1,2. Garde/matin (climactique). Du je à Israël",
      "Ps 150 (louange finale) : OÙ + POURQUOI + COMMENT. Tous instruments. Shofar. Alléluia inclusio",
      "Types : synonymique (Ps 70,2), antithétique (Ps 1,6), climactique (Ps 130,6)",
      "Noms de Dieu : El/Elohim = « Dieu » minuscule / YHWH/Yah = « SEIGNEUR » capitales (TOB)",
    ]
  },
  {
    ref: "Mt 28 / Mc 16 / Lc 24 / Jn 20", title: "Synopse de la Résurrection", session: 7, color: COLORS.gold,
    points: [
      "Femmes : différentes selon chaque évangile. Êtres célestes : 1 ange / jeune homme / 2 hommes / 2 anges",
      "Mc 16,8 : fin originale = silence des femmes. vv.9-20 = addition tardive",
      "Lc 24 : Emmaüs = reconnaissance eucharistique (fraction du pain). v.44 : TaNaK entier pointe vers Jésus",
      "Jn 20 : Marie ne reconnaît pas Jésus (jardinier) → « Marie ! » → reconnaissance par la voix (Jn 10)",
      "Jn 20,17 : Noli me tangere. Mission donnée à Marie = apostola apostolorum",
      "Jn 20,28 : Thomas « Mon Seigneur et mon Dieu » = confession christologique la plus haute",
      "Mt 28,20 : « Je suis avec vous tous les jours » ↔ Mt 1,23 : Emmanuel (inclusio de tout Matthieu)",
    ]
  },
  {
    ref: "Mc 6,17-29", title: "Décapitation de Jean-Baptiste + Éthique", session: 7, color: COLORS.gold,
    points: [
      "Récit enchâssé (flashback) : Hérode entend parler de Jésus → flashback sur Jean → retour",
      "Hérode = « roi » chez Mc (tétrarque en réalité). Craint Jean, sait qu'il est juste, mais cède",
      "Hérodiade = coopération formelle (désirée). Fille = coopération directe. Garde = directe sous contrainte",
      "Convives = coopération lointaine (présence liant Hérode à sa parole)",
      "Mc 6,29 : disciples de Jean « le déposèrent dans un tombeau » // Mc 15,46 (ensevelissement de Jésus)",
      "Structure de péché : système qui contraint au péché. Question : puis-je faire autrement ?",
      "6 types de coopération : formelle/matérielle, directe/indirecte, proche/lointaine",
    ]
  },
];

function Badge({ children, color, bg }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 12,
      fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
      color: color || COLORS.text, background: bg || COLORS.border,
      marginRight: 6, marginBottom: 4, whiteSpace: "nowrap"
    }}>{children}</span>
  );
}

function SessionCard({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: COLORS.card, borderRadius: 14, marginBottom: 14,
      border: `1.5px solid ${s.colorLight}`, overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: "14px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
        background: open ? s.colorLight : "transparent", transition: "background 0.2s"
      }}>
        <span style={{
          width: 36, height: 36, borderRadius: "50%", background: s.color,
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: 15, flexShrink: 0
        }}>S{s.num}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: s.color, fontWeight: 700, marginBottom: 2 }}>{s.date}</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, lineHeight: 1.3 }}>{s.title}</div>
        </div>
        <span style={{ fontSize: 20, color: s.color, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "6px 18px 16px" }}>
          {s.points.map((p, i) => (
            <div key={i} style={{ marginBottom: 10, paddingLeft: 14, borderLeft: `3px solid ${s.colorLight}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: s.color, marginBottom: 2 }}>{p.label}</div>
              <div style={{ fontSize: 12, color: COLORS.textLight, lineHeight: 1.5 }}>{p.detail}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuestionCard({ q, idx }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{
      background: COLORS.card, borderRadius: 12, marginBottom: 10,
      border: `1px solid ${COLORS.border}`, overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
    }}>
      <div onClick={() => setShow(!show)} style={{
        padding: "12px 16px", cursor: "pointer", display: "flex", gap: 10, alignItems: "flex-start"
      }}>
        <span style={{
          width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
          background: show ? COLORS.green : COLORS.blue, color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800
        }}>{idx + 1}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, lineHeight: 1.4 }}>{q.q}</div>
          {show && (
            <div style={{
              marginTop: 8, padding: "10px 14px", borderRadius: 10,
              background: COLORS.greenLight, fontSize: 12.5, color: COLORS.text, lineHeight: 1.55, fontWeight: 500
            }}>
              {q.a}
            </div>
          )}
        </div>
        <span style={{ fontSize: 12, color: show ? COLORS.green : COLORS.blue, fontWeight: 700, flexShrink: 0, marginTop: 3 }}>
          {show ? "Cacher" : "Voir"}
        </span>
      </div>
    </div>
  );
}

function TextAnalysisCard({ t }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: COLORS.card, borderRadius: 14, marginBottom: 14,
      border: `1.5px solid ${COLORS.border}`, overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
    }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: "14px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 12
      }}>
        <Badge color="#fff" bg={t.color}>S{t.session}</Badge>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: t.color }}>{t.ref}</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>{t.title}</div>
        </div>
        <span style={{ fontSize: 20, color: t.color, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "4px 18px 16px" }}>
          {t.points.map((p, i) => (
            <div key={i} style={{
              display: "flex", gap: 8, marginBottom: 7, alignItems: "flex-start"
            }}>
              <span style={{ color: t.color, fontWeight: 800, fontSize: 14, marginTop: 1, flexShrink: 0 }}>•</span>
              <span style={{ fontSize: 12.5, color: COLORS.text, lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: "fiches", label: "Fiches de révision", icon: "📖" },
  { id: "questions", label: "30 Questions", icon: "❓" },
  { id: "textes", label: "Analyses de textes", icon: "📜" },
];

export default function App() {
  const [tab, setTab] = useState("fiches");
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div style={{
      fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
      background: COLORS.bg, minHeight: "100vh", color: COLORS.text,
      maxWidth: 700, margin: "0 auto", padding: "0 0 40px"
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.accent} 0%, #922B21 100%)`,
        padding: "28px 20px 18px", borderRadius: "0 0 24px 24px",
        marginBottom: 6, position: "sticky", top: 0, zIndex: 10
      }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
          LTECO 2201 · UCLouvain 2025-2026
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginTop: 4, lineHeight: 1.2 }}>
          Sociétés, Cultures, Religions : Lectures Bibliques
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 6 }}>
          Fiches de révision complètes · Séances 1 à 7
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: 1, padding: "10px 6px", border: "none", borderRadius: 10, cursor: "pointer",
              background: tab === t.id ? "#fff" : "rgba(255,255,255,0.15)",
              color: tab === t.id ? COLORS.accent : "#fff",
              fontWeight: 700, fontSize: 12, transition: "all 0.2s",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3
            }}>
              <span style={{ fontSize: 18 }}>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 14px 0" }}>
        {tab === "fiches" && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div style={{ fontSize: 13, color: COLORS.textLight }}>
                Cliquez sur une séance pour voir les points clés
              </div>
            </div>
            {sessions.map(s => <SessionCard key={s.num} s={s} />)}

            {/* Grille méthode */}
            <div style={{
              background: COLORS.card, borderRadius: 14, padding: 18,
              border: `2px solid ${COLORS.accent}`, marginTop: 8
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.accent, marginBottom: 12 }}>
                🎯 Grille d'analyse complète (examen)
              </div>
              {[
                ["Temps", "Quand ? Délai symbolique ? Urgence ?"],
                ["Lieux", "Où ? Valeur du lieu ? Mouvement ?"],
                ["Personnages", "Qui ? Statut social ? Qui manque ?"],
                ["Structure", "Divisions ? Retournement ? Parallélisme ?"],
                ["Intertextualité", "Citations AT ? Allusions ?"],
                ["Ce qui dérange", "Qu'est-ce qui est provoquant ?"],
                ["Sens théologique", "Dieu / l'humain / le Royaume ?"],
                ["Titre / Genre", "Quel titre ? Quel genre littéraire ?"],
                ["Théologies situées", "Qui lit ? Depuis où ?"],
                ["Réception", "Liturgie, art, doctrine ?"],
                ["Poésie / Parallélisme", "Quel type ? Quels effets ?"],
                ["Synopse", "Similitudes ? Divergences ? Pourquoi ?"],
                ["Éthique", "Structure de péché ? Coopération ?"],
              ].map(([label, detail], i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 6, alignItems: "baseline" }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.accent, minWidth: 130, flexShrink: 0 }}>{i + 1}. {label}</span>
                  <span style={{ fontSize: 12, color: COLORS.textLight }}>{detail}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "questions" && (
          <>
            <div style={{ fontSize: 13, color: COLORS.textLight, marginBottom: 14 }}>
              Cliquez pour révéler la réponse · {questions.length} questions
            </div>
            {questions.map((q, i) => <QuestionCard key={i} q={q} idx={i} />)}
          </>
        )}

        {tab === "textes" && (
          <>
            <div style={{ fontSize: 13, color: COLORS.textLight, marginBottom: 14 }}>
              Les analyses de textes les plus importantes · Cliquez pour développer
            </div>
            {textAnalyses.map((t, i) => <TextAnalysisCard key={i} t={t} />)}
          </>
        )}
      </div>
    </div>
  );
}
