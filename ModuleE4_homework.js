class Electrostuff{
    constructor(name, power, status){
        this.name = name;
        this.power = power;
        this.status = status || false;
    }

    getStatus(){
        if(this.status){
            return `Electrounit ${this.name} is on and consume ${this.power} W of power`
        }else{
            return `Electrounit ${this.name} is off and don't consume ${this.power} W of power`
        }
    }
}

class LightUnit extends Electrostuff {
    constructor(lightColor, name, power, status){
        super(name, power, status);
        this.lightColor = lightColor;
    }

    getInfo(){
        if(this.status){
            return `This ${this.name} is on and its light is ${this.lightColor}. Power is ${this.power} W`
        }else{
            return super.getStatus()
        }
    }
}

class DisplayUnit extends Electrostuff {
    constructor(diag, name, power, status){
        super(name, power, status);
        this.displayDiag = diag;
    }

    getInfo(){
        if(this.status){
            return `This ${this.name} is on and has ${this.displayDiag}" display. Power is ${this.power} W`
        }else{
            return super.getStatus()
        }
    }
}

const lamp = new LightUnit('yellow', 'Lamp', 500, true)

console.log(lamp.getInfo())
console.log(lamp.getStatus())

const comp = new DisplayUnit(27, 'Comp', 1000, false)

console.log(comp.getInfo())
console.log(comp.getStatus())