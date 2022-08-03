//1. send an ajax request to remoteok.io/api
//2. test request to make it works
// use data to make html

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        let allData = JSON.parse(xhttp.responseText);
        console.log(allData[5]);
        let container = document.querySelector("#container");
        for (let data of allData.slice(1)) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.innerHTML = `
                <img class="logo" src="${data.company_logo}">
                <div class="left-container">
                    <h5 class="company">${data.company}</h5>
                    <h3 class="position">${data.position}</h3>
                    <p class="location">${data.location}</p>
                </div>
                <div class="mid-container">
                    ${data.tags.slice(0,3).map(function(tag) {
                        return `<div class="tag">${tag}</div>`
                    }).join("")}
                </div>
                <div class="right-container">
                    ${new Date(data.date).toLocaleString().slice(0,5)}
                    <a href="${data.apply_url}">
                        <button class="apply">Apply</button>
                     </a>
                </div>
           `
            container.appendChild(row);


       }
    }
};
xhttp.open("GET", "https://remoteok.com/api?tag=css ", true);
xhttp.send();