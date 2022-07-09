const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

    for (const potion of this.potions) {
      if (potion === potionName) {
        const index = this.potions.indexOf(potion);
        this.potions.splice(index, 1);
      }
    }

    // Change code above this line
  },
};

console.log(atTheOldToad.removePotion("Dragon breath"));

console.log(atTheOldToad.removePotion("Speed potion"));