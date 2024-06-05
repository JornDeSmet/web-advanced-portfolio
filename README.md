# web-advanced-portfolio
![web advnanced banner!](web_advanced!.png)

![VScode](https://img.shields.io/badge/VScode-v1.89-blue?style=for-the-badge&logo=visual-studio-code&logoColor=white&labelColor=000000)
![Git](https://img.shields.io/badge/Git-v2.45.2-gray?style=for-the-badge&logo=git&logoColor=white&labelColor=000000)
![Node.js](https://img.shields.io/badge/Node.js-v10.7.0-green?style=for-the-badge&logo=node.js&logoColor=white&labelColor=000000)

## Intro
Dit is een website waar je landen kunt zoeken via een API. Je kunt hierbij kiezen welke informatie je wilt ontvangen, zoals populatie, afkorting, valuta en de vlag van het land op (index.html). Wanneer je een land opzoekt, wordt dit ook opgeslagen in de geschiedenis, die je op een aparte pagina kunt bekijken (geschiedenis.html). Bovendien heb je de optie om landen als favorieten te markeren en dan ook op een aparte pagine kan zien (favorieten.html) .

## instalatie
clone deze repository naar je pc.
```
git clone https://github.com/JornDeSmet/web-advanced-portfolio.git
```

## requirements
    -Elementen selecteren
    -Elementen manipuleren
    -Event aan een element koppelen
    -Formulier valideren
    -Gebruiken van een constante
    -Gebruiken van template literals
    -Destructuring
    -Spread & Rest operator
    -Iteration over een array
    -Arrow function
    -Callback function
    -Promise
    -Consumer methods
    -Async & Await
    -Self executing function
    -Fetch om data op te halen
    -JSON manipuleren en weergeven
    -Basis CSS Animatie
    -Gebruiken van een flexbox of CSS grid
    -Gebruik van LocalStorage

## requirements
elementen selecteren:
>Heb ik vooral gebruikt in mijn form voor een land op te zoeken.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/ea6ccac9-2907-48df-990b-c1fa5b4c7beb)

elementen manipuleren:
>Eerst maakt dit een element footer aan en dan manipuleer ik er mijn tekst in.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/0bb8bf6c-2941-481a-b16e-11a563883298)


Event aan een element koppelen:
>Aan de favorietenknop is een functie gekoppeld die het geselecteerde land als een object aan de localStorage toevoegt.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/9850aea9-4669-43a7-83a5-c2aec9aa24e0)


Formulier valideren:
>Deze code valideert het formulier door te kijken of er een land is terug gegeven.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/d1dbe6d8-2863-468e-94cb-131febdc859e)


Gebruiken van een constante:
>Deze code declareert een constante clearButton en wijst het DOM-element met het id clear eraan toe.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/351f9f37-5105-4f9c-b78f-be7700c2f8c6)


Gebruiken van template literals:
>Deze code gebruikt template literals om dynamisch HTML te creëren voor een tabelrij (tr) met gegevens van een favoriet object.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/c4a796a6-4244-4d8d-8168-fe6acd5841a9)


Destructuring:
>Deze code maakt gebruik van destructuring om meerdere eigenschappen van het object dat door getData wordt geretourneerd, in afzonderlijke variabelen te halen.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/b2c5aaa7-858c-4fef-8638-4b9bf4be8861)


Spread & Rest operator:
>Deze code gaat eerst de vorige favorieten uit de local storage halen en dan de info van het land dat werdt opgezocht er bij zetten en tonen in de console.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/44e6ae26-ddda-48fe-b9a2-7beb01c71a4f)


Iteration over een array:
>Deze code iterereert over de array favorieten en voegt voor elk favoriet object een nieuwe rij toe aan het tabelBody-element.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/c66290df-9488-472d-be43-bbb984a54f78)


Arrow function:
>Deze code gebruikt een arrow function om een klasse active toe te voegen zodaning dat een popup zichtbaar wordt.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/efeaee9a-20b9-4f41-877c-6062cd914371)

 Callback function:
 >De functie addfavorieten accepteert een callback-functie favorietenToegevoegd, die wordt aangeroepen nadat de favorieten zijn toegevoegd.
 >![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/26ec2ffb-4bf6-43eb-9f95-57e421a6c88c)


Promise:
 >Deze code definieert een functie getData die een Promise retourneert. De Promise probeert gegevens op te halen en roept resolve aan als het land wordt gevonden, anders reject.
 >![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/2078fb86-4a74-4c93-a18f-ba46ec34cc7f)


Consumer methods:
>Deze code gebruikt de then en catch methoden om de Promise te consumeren, wat helpt bij het verwerken van de geretourneerde gegevens of het afhandelen van fouten.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/22135f4c-d5e3-400e-a8c8-5cf9d503b1e4)


Async & Await:
>Deze code gebruikt async en await om de asynchrone functie getData aan te roepen en te wachten totdat de Promise is voltooid.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/df9fb0d7-e4d2-417d-9268-e94f2c1bce22)


Self executing function:
>Deze zelf-uitvoerende functie creëert en voegt een footer toe aan de body van het document zodra het script wordt geladen.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/63edefdb-19f1-4ecd-86b5-165fc02dc5cb)


Fetch om data op te halen:
>Deze code gebruikt fetch om gegevens van een API op te halen en deze opteslagen in een constante.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/3866e9b0-20b4-48a9-9c04-d36f51dcf500)


JSON manipuleren en weergeven:
>Deze code converteert een array favorieten naar een JSON-string om deze op te slaan in localStorage en haalt de opgeslagen string later weer op en converteert deze terug naar een array.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/c2e94d3a-a9d8-4ab3-95c5-d0f3eb316198)


Basis CSS Animatie:
>Deze code gaat in de nav als je er op hovered een balk er onder tonen dat te voorschijn komt van links naar rechts.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/47d655ab-eea7-4cb2-96d1-22e3efbb584c)


Gebruiken van een flexbox of CSS grid:
>Deze code zorgt er voor dat er 5 gelijke vakjes zijn en in de laatste de clear knop zet.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/fe218685-d8fe-4396-b34a-0fd359251282)


Gebruik van LocalStorage:
>Deze code slaat de array favorieten op in localStorage en haalt deze later weer te tonen in een tabel.
>![image](https://github.com/JornDeSmet/web-advanced-portfolio/assets/117446313/88b6a6de-6a86-41ac-8e42-a924dc997f41)

## Used sources
>api url:
```
https://api.sampleapis.com/countries/countries
```

## licence
This website is only for personal use!
