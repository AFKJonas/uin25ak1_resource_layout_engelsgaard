    //Er øverst i scriptet for at infokortet med 'HTML' skal lastes/kjøre først, (kaller funksjonen for å vise HTML-informasjonen når siden lastes):
 showInfoKort('HTML');
 changeBackgroundButtons('htmlKnapp');
    //loggfører til konsollen for å sjekke at arrayet er korrekt:
console.log(resources);

    //laget en variabel som skal holde på HTML-koden som skal vises på nettsiden:
let resourcesHTML = "";

    //lager en .map() for å hente ut data fra arrayet(resources) og legge det inn i HTML-koden:
resources.map((resource, index) => resourcesHTML += `<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <nav>
            <ul>
            <!--lager en .map() for å hente ut data fra arrayet "sources" på innsiden av arrayet "resources", og legger dataen(title og url) fra sources inn i HTML-koden:-->
                ${resource.sources.map((source, index) => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
            </ul>
        </nav>
    </article>`);
    
    //funksjon her for filtrere den infoen til den kategorien som er valgt og viser den:   
    function showInfoKort(category) {
    //const her for å hente ut elementet med id "infoSide" fra HTML-filen: 
        const infoSide = document.getElementById("infoSide");
    //bruker .filter() for å filtrere ut data fra arrayet(resources) basert på hvilken kategori som er valgt:
        const filteredResources = resources.filter(resource => resource.category === category);
    //bruker .map() her for å hente ut dataen fra filteredResources og legge den inn i HTML-koden:
        const filteredHTML = filteredResources.map(resource => `
            <article>
                <h2>${resource.category}</h2>
                <p>${resource.text}</p>
                <nav>
                    <ul>
                        ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
                    </ul>
                </nav>
            </article>
        `).join('');
    
    //Plasserer infoen inn i der id="infoSide"/ er lokalisert i HTML-filen:
        infoSide.innerHTML = filteredHTML;  
    }

    //Funksjon som først tilbakestiller de andre knappene til standard bakgrunnsfarge, 
    //og deretter endrer både bakgrunnsfargen og tekst-fargen til den aktive knappen:
function changeBackgroundButtons(activeKnappId) {
    //querySelectorAll prøver finner alle elementene med klassen "knapp", og forEach går gjennom hvert element:
    document.querySelectorAll(".knapp").forEach(knapp => {
    //Tilbakestiller til standard bakgrunnsfarge:
        knapp.style.backgroundColor = ""; 
    //Tilbakestiller til standard tekstfarge:
        knapp.style.color = ""; 
    });
    
    //Når knappen er aktiv, endres bakgrunnsfargen til hvit og teksten til svart:
    document.getElementById(activeKnappId).style.backgroundColor = "#fff";
    document.getElementById(activeKnappId).style.color = "#000";
}

//EventListeners for å lytte etter om knappene blir trykket på, og hvis de blir trykket på, 
//så vil både funksjonene showInfoKort og changeBackgroundButtons kjøre:
document.getElementById("htmlKnapp").addEventListener("click", () => {
    showInfoKort('HTML');
    changeBackgroundButtons('htmlKnapp');
});
document.getElementById("cssKnapp").addEventListener("click", () => {
    showInfoKort('CSS');
    changeBackgroundButtons('cssKnapp');
});
document.getElementById("jsKnapp").addEventListener("click", () => {
    showInfoKort('JavaScript');
    changeBackgroundButtons('jsKnapp');
});
document.getElementById("reactKnapp").addEventListener("click", () => {
    showInfoKort('React');
    changeBackgroundButtons('reactKnapp');
});
document.getElementById("sanityKnapp").addEventListener("click", () => {
    showInfoKort('Sanity and headless CMS');
    changeBackgroundButtons('sanityKnapp');
});