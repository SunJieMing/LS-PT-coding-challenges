/* Design several classes and their relationships for an RPG videogame.
 * Classes:
 * NPC -> Humanoid, Animal, Plant
 * Humanoid -> Human, Elf, Orc
 * Animal -> Bear, Wolf
 * Plant -> FleshEatingDaisy
 *
 * Human -> Soldier, Peasant, Bandit
 *
 * NPC should be a general class for a non-player character in the game.
 * This class will probably include general attributes like hp, strength, speed, etc.
 *
 * Humanoid, Animal, and Plant should all inherit from NPC.  The classes
 * shown to the right of the arrow are classes that will inherit
 * from those classes.
 *
 * Soldier, Peasant, and Bandit should all inherit from Human.
 *
 * Create properties for these different classes that fit with the character.
 *
 * This is how you would structure the game objects in an actual game
 * application in Unity or another similar framework.
 */

 class NPC {
   constructor(options) {
     this.hp = options.hp;
     this.strength = options.strength;
     this.speed = options.speed;
   }
   destroy() {
     console.log(this.name + ' was removed from the game');
   }
 }

 class Humanoid extends NPC {
  constructor(options) {
    super(options);
    this.name = options.name;
  }
 }

 class Elf extends Humanoid {
   constructor(options) {
     super(options);
     this.visibleAtNight = options.visibleAtNight;
   }
   shootBow() {
     console.log(this.name + ' shot the bow');
   }
 }

 const foofie = new Elf({
   visibleAtNight: true,
   name: 'foofie',
   speed: 10,
   strength: 10,
   hp: 150,
 });

 foofie.shootBow();
 foofie.destroy();
 
