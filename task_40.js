const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

for (const potion of this.potions) {
      if (potion === oldName) {
        const index = this.potions.indexOf(oldName);
        this.potions.splice(index, 1, newName);
      }
    }

    // Change code above this line
  },
};

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));