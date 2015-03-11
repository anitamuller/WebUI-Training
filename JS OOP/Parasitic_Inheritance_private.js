function Wheel(radius){
    var radius = radius || 0;

    function getRadius () {
        return radius;
    };

    function setRadius (aValue) {
        radius = ra;
    };

    function getAcceleration(){
        return parseInt(2 * Math.PI * getRadius());
    }

    return {
        getRadius: getRadius,
        setRadius: setRadius,
        getAcceleration: getAcceleration,

        toString: function(){
            return "Wheel";
        }
    }
    
}

var AfterburnerSwitch = Object.freeze({
    "ACTIVATED": 1,
    "DESACTIVATED": 2
});
//Esto último podría haber sido implementado directamente como un flag, lo hice así para 
//que quede más intuitivo cuando se encuentra en un estado o en otro y no exista la necesidad
//de especificar 1 implica activado, mientras que 2 desactivado.

function PropellingNozzle(power, afterburnerSwitch){

    var power = power || 0;
    var afterburnerSwitch = afterburnerSwitch || AfterburnerSwitch.ACTIVATED ;

    function getAcceleration(){
        if (this.getAfterburnerSwitch() === AfterburnerSwitch.ACTIVATED) {
                return 2 * this.getPower();
            } else {
                return this.getPower();
            } 
    };

    return {
        getAcceleration: getAcceleration,
        getAfterburnerSwitch: function(){
            return afterburnerSwitch;
        },
        setAfterburnerSwitch: function(newAfterburnerSwitch){
            afterburnerSwitch=newAfterburnerSwitch;
        },
        getPower: function(){
            return power
        },
        toString: function(){
            return "PropellingNozzle";
        }
    }
}

var SpinDirection = Object.freeze({
    "CLOCKWISE": 1,
    "COUNTERCLOCKWISE": 2
});

function Propeller(fins, spinDirection){

    var fins = fins || 0;
    var spinDirection = spinDirection || SpinDirection.CLOCKWISE;
    function getAcceleration(){
            if (spinDirection === SpinDirection.CLOCKWISE) {
                return fins;
            } else {
                return fins*(-1);
            }
        };

    return {
        getFins: function(){
            return fins;
        },
        getSpinDirection: function(){
            return spinDirection;
        },
        setSpinDirection: function(newSpinDirection){
            spinDirection = newSpinDirection;
        },
        getAcceleration: getAcceleration,
        toString: function(){
            return "Propeller";
        }
    }
}


function Vehicle(speed, propulsionUnits) {
    var speed = speed || 0;
    var propulsionUnits = propulsionUnits || [];

    function accelerate(){
        for (var i = 0; i < this.getPropulsionUnits().length; i++) {
                speed += this.getPropulsionUnitsByIndex(i).getAcceleration();
            }
        
    };
    return {
        getSpeed: function(){ return speed;},
        setSpeed: function(newSpeed){ speed= newSpeed;},
        getPropulsionUnits: function(){return propulsionUnits;},
        getPropulsionUnitsByIndex: function(i){return propulsionUnits[i];},
        accelerate: accelerate,
        addPropulsionUnit: function(newPropulsionUnit){
            this.PropulsionUnit.push(newPropulsionUnit);
        },
        toStringPropulsionUnits: function(){
            var units = "This vehicle has " + propulsionUnits.length + " propulsion units. They are of type: ";
            for (var i = 0; i < propulsionUnits.length; i++) {
                units += propulsionUnits[i].toString() + " ";
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

    function switchAfterburners (afterburnerSwitch){
        for (var i = 0; i< that.getPropulsionUnits().length; i++) {
            that.getPropulsionUnitsByIndex(i).setAfterburnerSwitch(afterburnerSwitch);
        }
    }
    that.switchAfterburners= function (afterburnerSwitch) { switchAfterburners(afterburnerSwitch);}

   return that;
}


function WaterVehicle(speed, propellers){
    var that = Vehicle(speed, propellers);


    that.changeSpinDirection = function (spinDirection) {
                for (var i = 0; i < that.getPropulsionUnits().length; i++) {
                        that.getPropulsionUnitsByIndex(i).setSpinDirection(spinDirection);
                }
                
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
           var newSpeed=0;
           if (vehicle.mode == AmphibiousMode.LAND){
                for (var i = 0; i < vehicle.getPropulsionUnits().length; i++) {
                   if (vehicle.getPropulsionUnitsByIndex(i).toString()=="Wheel"){
                        newSpeed += vehicle.getPropulsionUnitsByIndex(i).getAcceleration();
                    }
                    
                }
                oldSpeed = vehicle.getSpeed();
                vehicle.setSpeed(oldSpeed+newSpeed);
            
        } else if (vehicle.mode == AmphibiousMode.WATER){
                for (var i = 0; i < vehicle.getPropulsionUnits().length; i++) {
                    if (vehicle.getPropulsionUnitsByIndex(i).toString()=="Propeller"){
                        newSpeed  += vehicle.getPropulsionUnitsByIndex(i).getAcceleration();
                    }
                   
                    
                }
                oldSpeed = vehicle.getSpeed();
                vehicle.setSpeed(oldSpeed+newSpeed);
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
var landVehicle = new LandVehicle(40, 10);
console.log("LandCar speed initial: " + landVehicle.getSpeed());
landVehicle.accelerate();
console.log("LandCar speed after acceleration: " + landVehicle.getSpeed());

console.log(landVehicle.toStringPropulsionUnits() + "\n\n");

//------------------------------------- Creating an air vehicle -------------------------------------

var propellingNozzle = [new PropellingNozzle(100, AfterburnerSwitch.ACTIVATED)];

var airVehicle = new AirVehicle(700, propellingNozzle);
console.log("AirVehicle speed initially: " + airVehicle.getSpeed());
// I will probe to accelerate the airVehicle with afterburners activated
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners activated: " + airVehicle.getSpeed());
//I will desactivate the afterburners and accelerate the airVehicle
airVehicle.switchAfterburners(AfterburnerSwitch.DESACTIVATED);
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners desactivated: " + airVehicle.getSpeed());

console.log(airVehicle.toStringPropulsionUnits() + "\n\n" );

//------------------------------------- Creating a water vehicle -------------------------------------

var waterVehiclePropellers = [
            new Propeller(8, SpinDirection.CLOCKWISE),
            new Propeller(8, SpinDirection.CLOCKWISE),
            new Propeller(8, SpinDirection.CLOCKWISE),
        ];


var waterVehicle = new WaterVehicle(30, waterVehiclePropellers);
console.log("WaterVehicle speed initially: " + waterVehicle.getSpeed());
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating clockwise: " + waterVehicle.getSpeed());
//I will probe changing the propellers rotation direction and accelerate the waterVehicle
waterVehicle.changeSpinDirection(SpinDirection.COUNTERCLOCKWISE);
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating counterclockwise: " + waterVehicle.getSpeed());

console.log(waterVehicle.toStringPropulsionUnits() + "\n\n");


//------------------------------------- Creating an amphibious vehicle -------------------------------------
var amphibiousVehiclePropellers = [
            new Propeller(5, SpinDirection.CLOCKWISE),
            new Propeller(5, SpinDirection.CLOCKWISE),
        ];

var wheels = [new Wheel(10), new Wheel(10), new Wheel(40), new Wheel(40)];

var amphibiousVehicle = new AmphibiousVehicle(15,  wheels, amphibiousVehiclePropellers, AmphibiousMode.LAND);
console.log("AmphibiousVehicle speed initially: " + amphibiousVehicle.vehicle.getSpeed());
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on land: " + amphibiousVehicle.vehicle.getSpeed());
        
//I will probe changing the amphibious mode land to water
amphibiousVehicle.switchMode(AmphibiousMode.WATER);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on water with propellers rotating clockwise: " + amphibiousVehicle.vehicle.getSpeed());
        
//I will change the propellers of the amphibiousVehicle rotation direction
amphibiousVehicle.water.changeSpinDirection(SpinDirection.COUNTERCLOCKWISE);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on water with propellers rotating counterclockwise: " + amphibiousVehicle.vehicle.getSpeed());






