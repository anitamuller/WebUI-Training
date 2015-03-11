function PropulsionUnit(){
    return {
        getAcceleration: function (){},
        toString: function(){}
    };
}
function Wheel(radius){
    var that = PropulsionUnit();
    that.radius = radius;
    that.getAcceleration = function (){ return parseInt(2 * Math.PI * radius); }
    that.toString = function(){ return "Wheel";}
    return that;
}

var AfterburnerSwitch = Object.freeze({
    "ACTIVATED": 1,
    "DESACTIVATED": 2
});
//Esto último podría haber sido implementado directamente como un flag, lo hice así para 
//que quede más intuitivo cuando se encuentra en un estado o en otro y no exista la necesidad
//de especificar 1 implica activado, mientras que 2 desactivado.

function PropellingNozzle(power, afterburnerSwitch){
    var that = PropulsionUnit();
    that.power = power;
    that.afterburnerSwitch = afterburnerSwitch;

    that.getAcceleration = function (){ 
        if (this.afterburnerSwitch === AfterburnerSwitch.ACTIVATED) {
            return 2 * this.power;
        } else {
            return this.power;
        } 
    }
    that.toString= function(){ return "PropellingNozzle";}
    return that;
}

var SpinDirection = Object.freeze({
    "CLOCKWISE": 1,
    "COUNTERCLOCKWISE": 2
});

function Propeller(fins, spinDirection){
    var that = PropulsionUnit();
    that.fins = fins;
    that.spinDirection = spinDirection;

    that.getAcceleration = function(fins, spinDirection){
        if (this.spinDirection === SpinDirection.CLOCKWISE) {
            return this.fins;
        } else {
            return this.fins*(-1);
        }
    }
    that.toString= function(){ return "Propeller";}
    return that;
}


function Vehicle(speed, propulsionUnits) {
    return {
        speed: speed,
        propulsionUnits: propulsionUnits,
        accelerate: function(){
            for (var i = 0; i < this.propulsionUnits.length; i++) {
                this.speed += this.propulsionUnits[i].getAcceleration();
            }
        },
        addPropulsionUnit: function(newPropulsionUnit){
            this.PropulsionUnit.push(newPropulsionUnit);
        },
        toStringPropulsionUnits: function(){
            var units = "This vehicle has " + propulsionUnits.length + " propulsion units. They are of type: ";
            for (var i = 0; i < this.propulsionUnits.length; i++) {
                units += this.propulsionUnits[i].toString() + " ";
            }
            return units;
        }
    }
}

function LandVehicle(speed, radiusWheels){
    var wheels = [Wheel(radiusWheels), Wheel(radiusWheels), Wheel(radiusWheels), Wheel(radiusWheels)];
    var that = Vehicle(speed, wheels);
    return that;
}


function AirVehicle(speed, propellingNozzle){
    var that = Vehicle(speed, propellingNozzle);
    that.switchAfterburners= function (afterburnerSwitch) {
                for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
                       this.propulsionUnits[i].afterburnerSwitch = afterburnerSwitch;
                }
                return this;
    }

   return that;
}


function WaterVehicle(speed, propellers){
    var that = Vehicle(speed, propellers);

    that.changeSpinDirection = function (spinDirection) {
                for (var i = 0; i < this.propulsionUnits.length; i++) {
                        this.propulsionUnits[i].spinDirection = spinDirection;
                }
                return this;
            }
    return that;
    
}


var AmphibiousMode = Object.freeze({
                "LAND": 1,
                "WATER": 2
            });

function AmphibiousVehicle(speed, wheels, propellers,  mode){
    var propulsionUnits = [];

    for (var i = 0; i < propellers.length; i++) {
        propulsionUnits.push(propellers[i]);
    }
    for (var j = 0; j < wheels.length; j++) {
        propulsionUnits.push(wheels[i]);
    }

    var vehicle = Vehicle(speed, propulsionUnits);
    vehicle.mode = mode;
    var water = WaterVehicle(speed, propellers);
    var land = LandVehicle(speed, wheels);

    return {
        accelerate : function(){
           if (vehicle.mode == AmphibiousMode.LAND){
                for (var i = 0; i < vehicle.propulsionUnits.length; i++) {
                    if (vehicle.propulsionUnits[i].toString()=="Wheel"){
                        vehicle.speed += vehicle.propulsionUnits[i].getAcceleration();
                    }
                }
            
        } else if (vehicle.mode == AmphibiousMode.WATER){
                for (var i = 0; i < vehicle.propulsionUnits.length; i++) {
                    if (vehicle.propulsionUnits[i].toString()=="Propeller"){
                        vehicle.speed += vehicle.propulsionUnits[i].getAcceleration();
                    }
                    
                }
            } 
        },

        switchMode : function(mode){
            vehicle.mode = mode;
        },

        vehicle: vehicle,
        water: water,
        land: land

    }


    }


//------------------------------------- Creating a land vehicle -------------------------------------
//Se asume que todas las ruedas de un landVehicle son del mismo radio: radiusWheels
var landVehicle = LandVehicle(40, radiusWheels);
console.log("LandCar speed initial: " + landVehicle.speed);
landVehicle.accelerate();
console.log("LandCar speed after acceleration: " + landVehicle.speed);

console.log(landVehicle.toStringPropulsionUnits() + "\n\n");

//------------------------------------- Creating an air vehicle -------------------------------------
var propellingNozzle = [PropellingNozzle(100, AfterburnerSwitch.ACTIVATED)];

var airVehicle = AirVehicle(700, propellingNozzle);
console.log("AirVehicle speed initially: " + airVehicle.speed);
// I will probe to accelerate the airVehicle with afterburners activated
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners activated: " + airVehicle.speed);
//I will desactivate the afterburners and accelerate the airVehicle
airVehicle.switchAfterburners(AfterburnerSwitch.DESACTIVATED);
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners desactivated: " + airVehicle.speed);

console.log(airVehicle.toStringPropulsionUnits() + "\n\n" );

//------------------------------------- Creating a water vehicle -------------------------------------
var waterVehiclePropellers = [
            Propeller(8, SpinDirection.CLOCKWISE),
            Propeller(8, SpinDirection.CLOCKWISE),
            Propeller(8, SpinDirection.CLOCKWISE),
        ];


var waterVehicle = WaterVehicle(30, waterVehiclePropellers);
console.log("WaterVehicle speed initially: " + waterVehicle.speed);
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating clockwise: " + waterVehicle.speed);
//I will probe changing the propellers rotation direction and accelerate the waterVehicle
waterVehicle.changeSpinDirection(SpinDirection.COUNTERCLOCKWISE);
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating counterclockwise: " + waterVehicle.speed);

console.log(waterVehicle.toStringPropulsionUnits() + "\n\n");


//------------------------------------- Creating an amphibious vehicle -------------------------------------
var amphibiousVehiclePropellers = [
            Propeller(5, SpinDirection.CLOCKWISE),
            Propeller(5, SpinDirection.CLOCKWISE),
        ];


var amphibiousVehicle = AmphibiousVehicle(15,  wheels, amphibiousVehiclePropellers, AmphibiousMode.LAND);
console.log("AmphibiousVehicle speed initially: " + amphibiousVehicle.vehicle.speed);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on land: " + amphibiousVehicle.vehicle.speed);
        
//I will probe changing the amphibious mode land to water
amphibiousVehicle.switchMode(AmphibiousMode.WATER);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on water with propellers rotating clockwise: " + amphibiousVehicle.vehicle.speed);
        
//I will change the propellers of the amphibiousVehicle rotation direction
amphibiousVehicle.water.changeSpinDirection(SpinDirection.COUNTERCLOCKWISE);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on water with propellers rotating counterclockwise: " + amphibiousVehicle.vehicle.speed);




