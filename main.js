

// adding classname to the div for menu animation
const menu = document.getElementById("menu");

const mobile_menu = document.getElementById("mobile_menu")

menu.onclick = () => {
    menu.classList.toggle("openmenu")

    // open mobile menu when menu icon is clicked
    mobile_menu.classList.toggle("open_mobile_menu");
}



// FOR SLIDER IN OFFER SECTION

const cards_container = document.querySelector(".cards_container");

const product_cards_container = document.querySelector(".products_cards_container"); 


// const firstCard = document.querySelectorAll(".offer_card")[0];

let isDragStart = false, prevPageX, prevScrollLeft, positionDifference;

let isDragStart2 = false, prevPageX2, prevScrollLeft2, positionDifference2;

// let firstCardWidth = firstCard.clientWidth;

const dragging = (e) => {
    if(!isDragStart) return
    e.preventDefault();

    
    positionDifference = (e.pageX || e.touches[0].pageX) - prevPageX

    cards_container.scrollLeft = prevScrollLeft - positionDifference

}
const dragging2 = (e) => {
    if(!isDragStart2) return
    e.preventDefault();

    
    positionDifference2 = (e.pageX || e.touches[0].pageX) - prevPageX2

    product_cards_container.scrollLeft = prevScrollLeft2 - positionDifference2

}



const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = cards_container.scrollLeft;

    cards_container.style.cursor = "-webkit-grabbing"

}
const dragStart2 = (e) => {
    isDragStart2 = true;
    prevPageX2 = e.pageX || e.touches[0].pageX
    prevScrollLeft2 = product_cards_container.scrollLeft;

    product_cards_container.style.cursor = "-webkit-grabbing"
}

const dragStop = () => {
    cards_container.style.cursor = "-webkit-grab"
    isDragStart = false;
}
const dragStop2 = () => {
    product_cards_container.style.cursor = "-webkit-grab"
    isDragStart2 = false;
}

cards_container.addEventListener("mousemove", dragging)
cards_container.addEventListener("touchmove", dragging)
product_cards_container.addEventListener("mousemove", dragging2)
product_cards_container.addEventListener("touchmove", dragging2)

cards_container.addEventListener("mousedown", dragStart)
cards_container.addEventListener("touchstart", dragStart)
product_cards_container.addEventListener("mousedown", dragStart2)
product_cards_container.addEventListener("touchstart", dragStart2)

cards_container.addEventListener("mouseup", dragStop)
cards_container.addEventListener("mouseleave", dragStop)
cards_container.addEventListener("touchend", dragStop)
cards_container.addEventListener("touchcancel", dragStop)
product_cards_container.addEventListener("mouseup", dragStop2)
product_cards_container.addEventListener("mouseleave", dragStop2)
product_cards_container.addEventListener("touchend", dragStop2)
product_cards_container.addEventListener("touchcancel", dragStop2)



const p_tags = document.querySelectorAll(".limited_words");
p_tags.forEach(p => {
    let words = p.textContent.split(" ").slice(0, 60);
    p.textContent = words.join(" ") + "...";
})