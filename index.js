const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";
const MATERIAL_DIAMANT_ID = "DIAMANT";


const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";
const MATERIAL_DIAMANT_IMG = "./assets/diamant-ingot.webp";


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
	MATERIAL_DIAMANT_IMG,

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

const DiamantPickaxeRecipe = [
	MATERIAL_DIAMANT_ID,
	MATERIAL_DIAMANT_ID,
	MATERIAL_DIAMANT_ID,
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
const DiamantPickaxeRecipeImageSrc = "./assets/diamant-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";


const recipeList = [
	pickaxeRecipe,
	axeRecipe,
	DiamantPickaxeRecipe,

];
const recipeImageSrcList = [
	pickaxeRecipeImageSrc,
	axeRecipeImageSrc,
	DiamantPickaxeRecipeImageSrc,

];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [2, 1, 3, 4, 5];

// Coder ici

const Inventaire = document.getElementById("divInventaire");
const caseCraft = document.querySelectorAll(".caseCraft");
const imgCaseResult = document.getElementById("result-image");

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

for (let i = 0; i < inventoryTable.length; i++) {
	const newItemNumber = inventoryTable[i];
	const materialName = materials[newItemNumber];
	const materialImgSrc = materialsImageSrc[newItemNumber];

	const newButton = createBtnInventory(materialName, materialImgSrc);

	newButton.addEventListener("click", () => {
		if (pipette == materialName && newButton.classList.contains("active")) {
			pipette = "";
			selecedImgSrc = "";
			newButton.classList.remove("active");
		} else {
			if (btnOldActive != null) {
				btnOldActive.classList.remove("active");
			}
			pipette = materialName;
			selecedImgSrc = materialImgSrc;
			newButton.classList.add("active");
			btnOldActive = newButton;
		}
	});
	Inventaire.appendChild(newButton);
}

function validMaterial(tab1, tab2) {
	for (let i = 0; i <= tab1.length; i++) {
		if (tab1[i] !== tab2[i]) {
			return false;
		}
	}
	return true;
}

for (let i = 0; i < caseCraft.length; i++) {
	const caseCraftObject = caseCraft[i];

	caseCraftObject.addEventListener("click", () => {
		const newImg = caseCraftObject.firstElementChild;

		if (newImg == null) return;

		newImg.src = selecedImgSrc;
		newImg.alt = pipette;

		craftingTable[i] = pipette;
		for (let i = 0; i < recipeList.length; i++) {
			const isValid = validMaterial(recipeList[i], craftingTable);

			if (isValid != false) {
				imgCaseResult.src = recipeImageSrcList[i];
				imgCaseResult.alt = "outil";
				break;
			} else {
				imgCaseResult.src = MATERIAL_AIR_IMG;
				imgCaseResult.alt = MATERIAL_AIR_ID;
			}

			const invButton = document.createElement("button");
			invButton.classList.add("objectInventaire");

			imgCaseResult.addEventListener("click", () => {
				invButton.appendChild(imgCaseResult);
				Inventaire.appendChild(invButton);
			});
		}
	});
}

/*
		for (let i = 0; i < caseCraft.length; i++) {
			const imgCaseCraft = caseCraft[i].querySelector("img");
			if (imgCaseCraft && imgCaseCraft.alt.toLowerCase() !== "air") {
				craftingTable[i] = imgCaseCraft.alt;
			}else {
				craftingTable[i] = "";
			}
		}
		console.log(validMaterial(pickaxeRecipe, craftingTable, pickaxeRecipeImageSrc));
		console.log(validMaterial(axeRecipe, craftingTable, axeRecipeImageSrc));
		console.log(craftingTable, pickaxeRecipe)*/

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
			pipette = MATERIAL_DIAMANT_IMG;
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
