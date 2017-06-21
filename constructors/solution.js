function NPC(options) {
  this.hp = options.hp;
  this.strength = options.strength;
  this.speed = options.speed;
}

NPC.prototype.destroy = function() {
  console.log(this.name + ' object removed from game.');
};

NPC.prototype.takeDamage = function(damage) {
  this.hp = this.hp - damage;
  console.log(this.name + ' was damaged. HP is now ' + this.hp);
};

// -------------
function Humanoid(options) {
  NPC.call(this, options);
  this.clan = options.clan;
  this.clothingItems = options.clothingItems;
  this.language = options.language;
  this.name = options.name;
}

Humanoid.prototype = Object.create(NPC.prototype);

Humanoid.prototype.jump = function() {
  console.log(this.name + ' jumped!');
};

Humanoid.prototype.attack = function() {
  console.log(this.name + ' attacked!');
};

// -------------

function Elf(options) {
  Humanoid.call(this, options);
  this.hasBow = options.hasBow;
}

Elf.prototype = Object.create(Humanoid.prototype);

Elf.prototype.sayHello = function() {
  console.log(this.name + ' says hello in ' + this.language);
};


// -------------

function Orc(options) {
  Humanoid.call(this, {
    hp: options.hp,
    strength: options.strength,
    speed: options.speed,
    clan: options.clan,
    clothingItems: options.clothingItems,
    language: options.language,
    name: options.name,
  });
  this.canWithstandSun = options.canWithstandSun;
}

Orc.prototype = Object.create(Humanoid.prototype);

// ---------------

const lurtz = new Orc({
  hp: 200,
  strength: 20,
  speed: 5,
  clan: 'Uruk Hai',
  clothingItems: ['loin cloth', 'shield'],
  language: 'Orcish',
  name: 'Lurtz',
  canWithStandSun: true,
});

const legolas = new Elf({
  hp: 150,
  strength: 5,
  speed: 15,
  clan: null,
  clothingItems: ['scarf', 'pants', 'camo shirt thing'],
  language: 'High Elvish',
  name: 'Legolas',
});

legolas.sayHello();
legolas.jump();
legolas.attack();
lurtz.takeDamage(100);
lurtz.attack();
legolas.takeDamage(50);
legolas.attack();
lurtz.takeDamage(100);
lurtz.destroy();

legolas.jump();
console.log('Legolas won!');
legolas.destroy();
