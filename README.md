
<p align="center">
  <img src="Logo.png" alt="Ital Pascal Logo" width="180">
</p>

# WinVideoShowcase

**Vetrina video per i progetti e le librerie Ital Pascal**

**Vetrina video per i progetti e le librerie Ital Pascal**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-brightgreen?style=for-the-badge)](https://list051.github.io/WinVideoShowcase/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://github.com/List051/WinVideoShowcase/blob/main/LICENSE)


**WinVideoShowcase** è una semplice pagina web per presentare e riprodurre una raccolta di video YouTube attraverso un'interfaccia grafica moderna e intuitiva.

Il progetto utilizza **HTML, CSS, JavaScript e Splide.js** e può essere pubblicato direttamente tramite **GitHub Pages**, senza necessità di un server o di un framework.

## 🌐 Demo

Il progetto è disponibile online tramite GitHub Pages:

**https://list051.github.io/WinVideoShowcase/**

---

## 🎬 Caratteristiche

* Visualizzazione del video principale in evidenza.
* Miniature dei video nella parte inferiore.
* Navigazione tramite frecce.
* Scorrimento delle miniature a destra e a sinistra.
* Sincronizzazione tra video principale e miniature.
* Riproduzione del video YouTube con un semplice click.
* Utilizzo delle miniature ufficiali generate da YouTube.
* Layout responsive per diverse dimensioni dello schermo.
* Nessun database.
* Nessun server necessario.
* Pubblicazione tramite GitHub Pages.

---

## 🛠️ Tecnologie utilizzate

Il progetto utilizza:

* **HTML5**
* **CSS3**
* **JavaScript**
* **Splide.js 4.1.4**
* **YouTube Embedded Player**
* **GitHub Pages**
* **GitHub Actions**

Splide viene utilizzato per realizzare il carosello principale e la navigazione tramite miniature.

---

## 📁 Struttura del progetto

```text
WinVideoShowcase/
│
├── .github/
│   └── workflows/
│       └── static.yml
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### `.github/workflows/static.yml`

Contiene il workflow GitHub Actions utilizzato per pubblicare automaticamente il sito su GitHub Pages.

Ogni modifica effettuata sul branch `main` può avviare automaticamente una nuova pubblicazione.

---

## ▶️ Video presenti nella demo

Attualmente il progetto contiene quattro video:

| # | Titolo               | YouTube       |
| - | -------------------- | ------------- |
| 1 | CreaFiltroDvg        | `0zCklG1H4rA` |
| 2 | Win Spinnet          | `UboNebA_Irs` |
| 3 | WinTest SenzaVincoli | `tn6D89N6eV4` |
| 4 | Win ItalPascal       | `3FkO8yAd0Mg` |

---

## ➕ Come aggiungere un nuovo video

Per aggiungere un nuovo video non è necessario modificare JavaScript o CSS.

È sufficiente aggiungere:

1. una nuova slide principale;
2. una nuova miniatura;
3. l'ID del video YouTube.

### 1. Slide principale

Nel file `index.html` aggiungere una nuova slide con questa struttura:

```html
<li class="splide__slide">
    <div class="slide-card">

        <div class="video-preview"
             data-video-id="ID_VIDEO_YOUTUBE">

            <img src="https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/hqdefault.jpg"
                 alt="Titolo del video">

        </div>

        <div class="info">
            <h2 class="title">Titolo del video</h2>
            <p class="desc">
                Descrizione del video.
            </p>
        </div>

    </div>
</li>
```

Sostituire:

```text
ID_VIDEO_YOUTUBE
```

con l'ID reale del video.

Ad esempio, per:

```text
https://www.youtube.com/watch?v=0zCklG1H4rA
```

l'ID è:

```text
0zCklG1H4rA
```

---

### 2. Aggiungere la miniatura

Nella sezione delle miniature aggiungere:

```html
<li class="splide__slide">
    <img src="https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/mqdefault.jpg"
         alt="Titolo del video">
</li>
```

Anche in questo caso bisogna sostituire `ID_VIDEO_YOUTUBE` con l'ID del video.

---

## 🖼️ Immagini YouTube

Le immagini utilizzate nel progetto vengono generate direttamente da YouTube.

Per il video:

```text
ID_VIDEO_YOUTUBE
```

vengono utilizzate principalmente:

```text
https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/hqdefault.jpg
```

per il video principale e:

```text
https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/mqdefault.jpg
```

per la miniatura.

Non è quindi necessario scaricare manualmente le immagini dei video.

---

## 🎨 Personalizzazione

L'aspetto grafico del progetto può essere modificato nel file:

```text
css/style.css
```

È possibile modificare, ad esempio:

* colori;
* dimensioni;
* spaziature;
* dimensioni delle miniature;
* caratteri;
* sfondo;
* comportamento responsive.

La logica del carosello e della riproduzione YouTube è invece gestita da:

```text
js/script.js
```

---

## 💻 Utilizzo in locale

Per provare il progetto sul proprio computer è consigliato utilizzare un piccolo server locale, ad esempio **Live Server** in Visual Studio Code.

È sufficiente aprire la cartella del progetto e avviare `index.html` tramite Live Server.

L'utilizzo di un server locale è preferibile all'apertura diretta del file tramite:

```text
file://
```

soprattutto per i contenuti incorporati da YouTube.

---

## 🚀 Pubblicazione con GitHub Pages

Il progetto è configurato per essere pubblicato tramite GitHub Pages.

Il workflow:

```text
.github/workflows/static.yml
```

utilizza GitHub Actions per pubblicare automaticamente il contenuto del repository.

La pubblicazione avviene dal branch:

```text
main
```

e dalla cartella:

```text
/
```

Il sito pubblicato è disponibile all'indirizzo:

**https://list051.github.io/WinVideoShowcase/**

---

## 📦 Installazione

Non è richiesta alcuna installazione particolare per utilizzare la versione pubblicata online.

Per lavorare sul progetto localmente:

1. clonare il repository;
2. aprire la cartella con Visual Studio Code;
3. avviare `index.html` tramite Live Server.

Repository GitHub:

**https://github.com/List051/WinVideoShowcase**

---

## 👨‍💻 Autore

**List051**  *ItalPascal*

GitHub:

**https://github.com/List051**

---

## 📄 Licenza

Questo progetto è distribuito secondo i termini della licenza indicata nel file:

```text
LICENSE
```

Per le condizioni complete consultare il file `LICENSE` presente nel repository.

---

## ⭐ Contributi

Il progetto nasce come esempio semplice e riutilizzabile per la realizzazione di una vetrina video basata su YouTube.

Suggerimenti, miglioramenti e segnalazioni sono benvenuti.
