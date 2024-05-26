# web-advanced-portfolio
![alt text](web_advanced!.png)

## Landen Zoeker
Dit is een website waar je landen kunt zoeken via een API. Je kunt hierbij kiezen welke informatie je wilt ontvangen, zoals populatie, afkorting, valuta en de vlag van het land. Wanneer je een land opzoekt, wordt dit ook opgeslagen in de geschiedenis, die je op een aparte pagina kunt bekijken. Bovendien heb je de optie om landen als favorieten te markeren.

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
>![alt text](image-3.png)

elementen manipuleren:
>Eerst maakt dit een element footer aan en dan manipuleer ik er mijn tekst in.
>![alt text](image-2.png)

Event aan een element koppelen:
>Er wordt aan de favorieten knop de functie om deze in de localstorage toegevoegd.
>![alt text](image-4.png)

Formulier valideren:
>Deze code valideert het formulier door te kijken of er een land is terug gegeven.
>![alt text](image-6.png)

Gebruiken van een constante:
>Deze code declareert een constante clearButton en wijst het DOM-element met het id clear eraan toe.
>![alt text](image-5.png)

Gebruiken van template literals:
>Deze code gebruikt template literals om dynamisch HTML te creëren voor een tabelrij (tr) met gegevens van een favoriet object.
>![alt text](image-7.png)

Destructuring:
>Deze code maakt gebruik van destructuring om meerdere eigenschappen van het object dat door getData wordt geretourneerd, in afzonderlijke variabelen te halen.
>![alt text](image-8.png)

Spread & Rest operator:
>Deze code gaat eerst de vorige favorieten uit de local storage halen en dan de info van het land dat werdt opgezocht er bij zetten en tonen in de console.
>![alt text](image-10.png)

Iteration over een array:
>Deze code iterereert over de array favorieten en voegt voor elk favoriet object een nieuwe rij toe aan het tabelBody-element.
>![alt text](image-11.png)

Arrow function:
>Deze code gebruikt een arrow function om een klasse active toe te voegen zodaning dat een popup zichtbaar wordt.
>![alt text](image-12.png)

 Callback function:
 >De functie addfavorieten accepteert een callback-functie favorietenToegevoegd, die wordt aangeroepen nadat de favorieten zijn toegevoegd.
 >![alt text](image-13.png)

Promise:
 >Deze code definieert een functie getData die een Promise retourneert. De Promise probeert gegevens op te halen en roept resolve aan als het land wordt gevonden, anders reject.
 >![alt text](image-14.png)

Consumer methods:
>Deze code gebruikt de then en catch methoden om de Promise te consumeren, wat helpt bij het verwerken van de geretourneerde gegevens of het afhandelen van fouten.
>![alt text](image-15.png)

Async & Await:
>Deze code gebruikt async en await om de asynchrone functie getData aan te roepen en te wachten totdat de Promise is voltooid.
>![alt text](image-16.png)

Self executing function:
>Deze zelf-uitvoerende functie creëert en voegt een footer toe aan de body van het document zodra het script wordt geladen.
>![alt text](image-17.png)

Fetch om data op te halen:
>Deze code gebruikt fetch om gegevens van een API op te halen en deze in de console te loggen.
>![alt text](image-18.png)

JSON manipuleren en weergeven:
>Deze code converteert een array favorieten naar een JSON-string om deze op te slaan in localStorage en haalt de opgeslagen string later weer op en converteert deze terug naar een array.
>![alt text](image-19.png)

Basis CSS Animatie:
>Deze code gaat in de nav als je er op hovered een balk er onder tonen dat te voorschijn komt van links naar rechts.
>![alt text](image-20.png)


Gebruiken van een flexbox of CSS grid:
>Deze code zorgt er voor dat er 5 gelijke vakjes zijn en in de laatste de clear knop zet.
>![alt text](image-21.png)

Gebruik van LocalStorage:
>Deze code slaat de array favorieten op in localStorage en haalt deze later weer te tonen in een tabel.
>![alt text](image-22.png)