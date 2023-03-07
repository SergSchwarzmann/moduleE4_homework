function Electostuff(name, power){
  this.name = name,
  this.power = power,
  this.on = false
}

Electostuff.prototype.poweredOn = function(state){
  if(state === 'on'){
    this.on = true;
    console.log(`The ${this.name} is on and has ${this.power} W of power`)
  }else if(state === 'off'){
    this.on = false;
    console.log(`Electrounit ${this.name} is off and don't consume ${this.power} W of power`)
  }
}

function DisplayUnit(name, diag, power){
  this.name = name,
  this.power = power,
  this.diag = diag
}

DisplayUnit.prototype = new Electostuff()

function LightUnit(name, lightColor, power){
  this.name = name,
  this.power = power,
  this.lightColor = lightColor
}

LightUnit.prototype = new Electostuff()

const lamp = new LightUnit('Lamp', 'yellow', 500)
const comp = new DisplayUnit('Comp', 27, 1000)

lamp.poweredOn('off')
comp.poweredOn('on')