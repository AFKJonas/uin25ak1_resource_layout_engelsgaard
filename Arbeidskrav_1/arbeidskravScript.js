//loggfører til konsollen for å sjekke at arrayet er korrekt:
console.log(resources);

//laget en variabel som skal holde på HTML-koden som skal vises på nettsiden:
let resourcesHTML = "";

//lager en .map() for å hente ut data fra arrayet og legge det inn i HTML-koden:
resources.map((resource, index) => resourcesHTML += `<article>
        <h2>${resource.category}</h2>
        <p>${resource.text}</p>
        <nav>
            <ul>
                ${resource.sources.map((source, index) => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
            </ul>
        </nav>
    </article>`);
    
    function showInfoKort(category) {
        const infoSide = document.getElementById("infoSide");
        const filteredResources = resources.filter(resource => resource.category === category);
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
    
        infoSide.innerHTML = filteredHTML;  
    }
    //Legger bakgrunnsfarge på knappene for å vise hvilken kategori som er valgt:
    
    
    //addEventListener med "click" for å kalle funksjonen showInfoKort() og dens innhold: 
    document.getElementById("htmlKnapp").addEventListener("click", () => showInfoKort('HTML'));
    document.getElementById("cssKnapp").addEventListener("click", () => showInfoKort('CSS'));
    document.getElementById("jsKnapp").addEventListener("click", () => showInfoKort('JavaScript'));
    document.getElementById("reactKnapp").addEventListener("click", () => showInfoKort('React'));
    document.getElementById("sanityKnapp").addEventListener("click", () => showInfoKort('Sanity and headless CMS'));
    //kaller funksjonen for å vise HTML-informasjonen når siden lastes:
    showInfoKort('HTML');
    
    

    
    