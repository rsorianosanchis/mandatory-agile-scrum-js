# mandatory-agile-scrum-js

# Projektbeskrivning

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet modi ullam maiores, molestias repellendus aperiam, voluptatem quo voluptatum eligendi illum sint dolorum, officiis ducimus in. Sed reiciendis cum beatae praesentium.

# Innehållsförteckning

- [Projektbeskrivning](#mandatory-agile-scrum-js).
- [Starta här](#Starta-här).
- [Information och procedurer för Scrum-teamet](#Information-och-procedurer-för-Scrum-teamet).
  - [Medlemmar](#Medlemmar).
  - [Events](#Events).
  - [Product BackLog](#Product-BackLog).
  - [Sprint 1](#KANBAN-sprint-1)
    - [TODO Sprint BackLog](#TODO)
    - [IN PROGRESS](#IN-PROGRESS)
    - [DONE](#DONE)
  - [Hur man utvecklar en task/feature? Sekvens.](#Utvecklingsförfarande).
    - [Koden Style Guiden](#Koden-Style-Guiden)
    - [Branches av Projekt](#Branches)
    - [Git Procedure](#Git-Procedure)
- [Deployment](#Deployment).
- [Byggt med](#Byggt-med).
- [Tacksamhet](#Tacksamhet).

# Starta här

- Välkommen på detta All-In-One dokumentation. Här kan du få allt som du behöver för att använda app även bridrar till projektet.
- All information om utvecklingen av projektet finns i den här filen README.md. Om du är en ackrediterad medlem i SCRUM-teamet, läs all dokumentation i avsnittet: [Information och procedurer för Scrum-teamet](#Information-och-procedurer-för-Scrum-teamet).

# Information och procedurer för Scrum-teamet

## Medlemmar

- **Product Owner**
  - Niklas S
- **Scrum Master**
  - Ibrahim
  - Ricardo
- **Development Team**
  - Ibrahim
  - Ricardo

[Gå up](#Innehållsförteckning).

## Events

- **Teammöten**
  - _Fredagen 20 Dec 2019_, syfte: Skapa Backlog och Features for Sprint 1 och start Sprint 1. Förslag
  - _Torsdag 02 Gen 2020_. Förslag
  - _Tisdag 07 Gen 2020_.

[Gå up](#Innehållsförteckning).

## Product BackLog

- Här har vi alla möjliga projektuppgifter. **De som väljs för sprinten bör raderas härifrån [Product BackLog Lista](#Product-BackLog-Lista) och överföras till den sprint som bestäms.** . Det betyder när projektet är klart, borde [Product BackLog Lista](#Product-BackLog-Lista) vara tom och [DONE](#DONE) i sprint kanban borde vara full med alla features/tasks.

- Varje identifierare kommer att kopplas till en rubrik med samma id där du kan läsa detaljerna i den berättelsen / uppgiften.**Se exempel nere**.

- Features identification: Vi tilldelar varje uppgift/task/history som **'task'+datum + tid + github-issue-nummer(000)** som identifierare.
  Varje identifierare kommer är kopplat till en _issue_ med samma _nummer_ där du kan läsa detaljerna i den feature/uppgiften.

```plain
**Task identification mönster.**
taskyyyymmddhh***
```

- EXEMPEL [task20191217000](../../issues/*) //task skapad den 17 december 2019 med nummer 000
- ....
- ....
- EXEMPEL [task20191218999](../../issues/999) //task skapad den 18 december 2019 med nummer 999

  ### Product BackLog Lista

  - [task20191220001](../../issues/1) 

[Gå up](#Innehållsförteckning).

## KANBAN sprint 1

- Här ska varje task ha ett namn av developer som utvecklas den.
- Värje utvecklare ska flytta sin task i KANBAN

  ### TODO

  **Sprint BackLog Lista**

  - [task20191217000](../../issues/*) => Tom Cruise
  
[Gå up](#Innehållsförteckning).

### IN PROGRESS

- [task20191217000](../../issues/*) => Mark Noffler


[Gå up](#Innehållsförteckning).

### DONE

- [task20191218999](../../issues/999) => Master of Universe

[Gå up](#Innehållsförteckning).

## Utvecklingsförfarande 

- Här beskrivs allt som man behöver för att utveckla en sprintuppgift.

  ### Koden Style Guiden

  Koden måste följa de stilregler som används av Airbnb. I länken nedan hittar du en handledning om hur du gör inställningarna i din VSCode-Editor.
  [VsCode+EsLint+Airbnb JS Style Guide](https://medium.com/@samailabalap/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-4d9936897f03)

[Gå up](#Innehållsförteckning).

### Branches

Branch strategi genomföras att ha två huvudbranch: master och develop:

- **master:** det kommer att vara branch som kommer att innehålla koden som tas i produktion.
- **develop:** det är den branch som kommer att innehålla koden under utveckling.

```plain
Du som utvecklare ska utvecklas varje feature/task igenom att skapa en ny branch från _develop_ branchen. Och den här feature branchen ska inte merge till develope tills feature har slutförts.
```

[Gå up](#Innehållsförteckning).

### Git Procedure

1. Gå till [TODO Sprint BackLog](#TODO) i README.md och klipp av _feature_ som har ditt namn tilldelats.
2. Gå till [IN PROGRESS](#IN-PROGRESS) i README.md och klistra in den valda uppgiften där.
3. Öppna konsolen och placera dig själv i det klonade projektet.
4. `git checkout develop`
5. `git pull origin develop`
6. Vi skapar en _branch_ och kommer åt den med samma feature referens som vi kommer att utveckla.

   Exempel: `git branch -b feature/task20191218999`

7. Utveckla din feature och gör alla commit som man berhöver.

   Exempel

   ```plain
     - git commit -m "Create main layout"
     - git commit -m "Add translations"
     - git commit -m "Fix styles"
   ```

8. När du är klar med utvecklingen av din feature(task), ladda up den till remote repository.

   `git push origin feature/task20191218999`

9. Gå till GitHub sidan av projektet och clicka på `New pull request`

10. Läggtill som _base:_ **develop** och din brach/feature som _compare_:**task20191218999**

11. Lägga till Niklas som Reviewer och lämna någon kommentar i featurens rutan.

12. Trycka på **Create pull request**

13. När du får ett positiva svar, flytta din task i Kanbas till [DONE](#DONE)

[Gå up](#Innehållsförteckning).

# Deployment

# Byggt med

Ramverk som kan vara nyttiga

- [chess.js](https://github.com/jhlywa/chess.js)
- [jestjs.io](https://jestjs.io/)
- [chessground](https://github.com/ornicar/chessground)
- [airbnb react](https://github.com/airbnb/javascript/tree/master/react)
- [airbnb js](https://github.com/airbnb/javascript)

[Gå up](#Innehållsförteckning).

# Tacksamhet

- Tack @ProGloD 🍺🍺 !! för att du delade länken för att enkelt installera guide för Airbnb-stile guiden.

[Gå up](#Innehållsförteckning).
