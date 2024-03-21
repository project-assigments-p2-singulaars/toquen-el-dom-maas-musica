function generateFooter() {
    const fatherElement = document.body;
    console.log(fatherElement);

    let footerArea = document.createElement("footer");
    fatherElement.appendChild(footerArea);
    
    let informationElement = document.createElement("p");
    informationElement.textContent = "@ Copyright 2024, Toquen el DOM - Factoria F5";
    
    footerArea.appendChild(informationElement);
}

generateFooter();