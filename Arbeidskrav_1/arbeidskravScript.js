console.log(resources);

let resourcesHTML ="";

resources.map((resources, index) => resourcesHTML += `<article id="infoSide">
        <h2>${resources.category}</h2>
        <p>${resources.text}</p>
        <nav>
            <ul>
            
                <li><a href="${resources.title}">${resources.sources.title}</a></li>
                <li><a href="#">w3Schools</a></li>
                <li><a href="#">w3Schools</a></li>
            </ul>
        </nav>
    </article>`);
document.getElementById("infoSide").innerHTML = resourcesHTML;
