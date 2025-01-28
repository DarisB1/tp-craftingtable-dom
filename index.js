const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";
const MATERIAL_DIAMANT_ID = "DIAMOND";
const MATERIAL_NAEL_ID = "NAEL";


const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_DIAMOND_IMG = "./assets/diamond-ingot.webp";
const MATERIAL_NAEL_IMG = "./assets/nael.webp";

const materials = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_DIAMANT_ID,
	MATERIAL_NAEL_ID,
];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
	MATERIAL_DIAMOND_IMG,
	MATERIAL_NAEL_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [2, 1, 3];

// Coder ici

const Inventaire = document.getElementById("divInventaire");
const caseCraft = document.querySelectorAll(".caseCraft");
const caseResult = document.getElementById("result");

let pipette = "";
let selecedImgSrc = "";
let btnOldActive = null;


function createBtnInventory(name, imgSrc) {
	const button = document.createElement("button");
	const img = document.createElement("img");

	button.classList.add("objectInventaire");

	img.src = imgSrc;
	img.alt = name;

	button.appendChild(img);

	return button;
}

function validMaterial(tab1, tab2) {
	for (let i = 0; i <= tab1.length; i++) {
		for (let j = 0; j <= tab2.length; j++) {
			if (tab1[i] !== tab2[j]) {
				
				// const imgPickAxe = caseResult.firstElementChild;
				
				// if (imgPickAxe == null) return;

				// imgPickAxe.src = pickaxeRecipeImageSrc;
				// imgPickAxe.alt = "Pick axe";
				return false
			}
		}
	}
}

for (let i = 0; i < inventoryTable.length; i++) {
	const newItemNumber = inventoryTable[i];
	const materialName = materials[newItemNumber];
	const materialImgSrc = materialsImageSrc[newItemNumber];

	const newButton = createBtnInventory(materialName, materialImgSrc);

	newButton.addEventListener("click", () => {

			if (pipette == materialName && selecedImgSrc == materialImgSrc && newButton.classList.contains("active")) {
				pipette = "";
				selecedImgSrc = "";
				newButton.classList.remove("active");
			}else {
				if (btnOldActive != null) {
					btnOldActive.classList.remove("active");
				}
				pipette = materialName;
				selecedImgSrc = materialImgSrc;
				newButton.classList.add("active");
				btnOldActive = newButton;
				
			}
		console.log(btnOldActive, pipette, selecedImgSrc);
	});
	Inventaire.appendChild(newButton);
}

for (const caseCraftObject of caseCraft) {
	caseCraftObject.addEventListener("click", () => {
		const newImg = caseCraftObject.firstElementChild;

		if (newImg == null) return;

		newImg.src = selecedImgSrc;
		newImg.alt = pipette;
		let result = console.log(validMaterial(pickaxeRecipe, craftingTable));
		console.log(result, craftingTable, pickaxeRecipe);
		
	})
}

// function newElement(tag, attributes = {}) {
// 	const element = document.createElement(tag);
// 	for (const objet in attributes) {
// 		if (objet === "className") element.className = attributes[objet];
// 		else element.setAttribute(objet, attributes[objet]);
// 	}
// 	return element;
// }


		// if (craftingTable[0] == pickaxeRecipe[0] && craftingTable[1] == MATERIAL_IRON_INGOT_IMG && craftingTable[2] == MATERIAL_IRON_INGOT_IMG && craftingTable[4] == MATERIAL_AIR_IMG && craftingTable[5] == MATERIAL_STICK_IMG && craftingTable[6] == MATERIAL_AIR_IMG && craftingTable[7] == MATERIAL_AIR_IMG && craftingTable[8] == MATERIAL_STICK_IMG && craftingTable[9] == MATERIAL_AIR_IMG) {
		// 	caseResult = pickaxeRecipeImageSrc;
		// }
	/*
	const btnInventory = newElement("button", { className: "objectInventaire" });
	if (materials[newItem] == materials[1]) {
		btnInventory.addEventListener("click", () => {
			pipette = MATERIAL_IRON_INGOT_IMG;
			console.log(pipette);
		});
	}
	if (materials[newItem] == materials[2]) {
		btnInventory.addEventListener("click", () => {
			pipette = MATERIAL_STICK_IMG;
			console.log(pipette);
		});
	}
	if (materials[newItem] == materials[3]) {
		btnInventory.addEventListener("click", () => {
			pipette = MATERIAL_DIAMOND_IMG;
			console.log(pipette);
		});
	}
	const img = newElement("img", {
		src: materialsImageSrc[newItem],
		alt: materials[newItem],
	});
	btnInventory.appendChild(img);
	Inventaire.appendChild(btnInventory);
	*/