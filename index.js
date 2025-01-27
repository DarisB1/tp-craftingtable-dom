const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";
const MATERIAL_DIAMANT_ID = "DIAMOND";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_DIAMOND_IMG = "./assets/diamond-ingot.webp";

const materials = [
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_DIAMANT_ID,
];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
	MATERIAL_DIAMOND_IMG,
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

let pipette = "";

function newElement(tag, attributes = {}) {
	const element = document.createElement(tag);
	for (const objet in attributes) {
		if (objet === "className") element.className = attributes[objet];
		else element.setAttribute(objet, attributes[objet]);
	}
	return element;
}

function createBtnInventory(name, imgSrc) {
	const button = document.createElement("button");
	const img = document.createElement("img");

	button.classList.add("objectInventaire");

	img.src = imgSrc;
	img.alt = name;

	button.appendChild(img);

	return button;
}

for (let i = 0; i < inventoryTable.length; i++) {
	const newItemNumber = inventoryTable[i];
	const materialName = materials[newItemNumber];
	const materialImgSrc = materialsImageSrc[newItemNumber];

	const newButton = createBtnInventory(materialName, materialImgSrc);

	newButton.addEventListener("click", () => {
		if (pipette == materialImgSrc) {
			pipette = "";
			newButton.classList.remove("active");
		} else {
			pipette = materialImgSrc;
			newButton.classList.add("active");
		}

		if (newButton.classList.add) {
			
		}

		console.log(pipette);
	});

	Inventaire.appendChild(newButton);

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
}
