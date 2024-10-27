function showCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";  
    cardContainer.style.gap = "10px";  
    for (let i = 0; i < 6; i++) {  
        setTimeout(function () {
            cardContainer.innerHTML += `<div style="display: flex; flex-direction: column; align-items: center; padding: 10px; border: 1px solid #ccc; width: 150px;">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UJWJI6YhK30X9irqRKyT6zbTeS-zyGC-Jw&s" style="width: 100%; height: auto;">
                    <h1 style="font-size: 16px; margin: 10px 0 5px;">Card ${i + 1}</h1>
                    <p style="font-size: 14px; margin: 0;">YSR${i + 1}</p>
                </div>
            `;
        }, 2000 * i);
    }
}