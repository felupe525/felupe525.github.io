const card = document.querySelector(".carta");
const cardRect = card.getBoundingClientRect();

card.addEventListener("mousemove", e =>{
	const xPosition = (e.clientX - cardRect.left) / cardRect.width
	const yPosition = (e.clientY - cardRect.top) / cardRect.height - 0.6
	const xOffset = -(xPosition - 0.6)
	const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6)
	card.style.transform = `perspective(1000px)
	rotateY(${dxNorm*75}deg)
	rotateX(${yPosition*75}deg)`
})

card.addEventListener("mouseleave", ()=>{
	card.style.transform = "none"
})

