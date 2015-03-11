/*
All vehicles should have speed and propulsion units
(things which make them move) and a Accelerate
method, which should update their speed by summing
it with the acceleration of their propulsion units
*/

function Vehicle(speed, propulsionUnits) {
	this.speed = speed;
	this.propulsionUnits = propulsionUnits;

	this.accelerate = function(){
		for (var i = 0; i < this.propulsionUnits.length; i++) {
			this.speed += this.propulsionUnits[i].getAcceleration();
		}
	}
}

/*
Each propulsion unit can produce acceleration
(change in speed). There should be three types of
propulsion units - wheels, propelling nozzles and
propellers

A wheel should have a radius and the acceleration it
produces should be equal to its perimeter

A propelling nozzle should have power and an
afterburner switch. The acceleration the nozzle should
produce as much acceleration as it has power, but
if the afterburner is on it should produce double
acceleration.

A propeller should have a number of fins and a spin
direction. The acceleration a propeller produces
should by default be equal to the number of fins it
has. The spin direction should be clockwise and
counter-clockwise. If the spin direction is counter-
clockwise, the acceleration the propeller produces
should be negative, if the spin direction is clockwise,
the acceleration should be positive.

*/
function PropulsionUnit(){
	this.getAcceleration = function (){};
}

//------------------------------------ Wheel --------------------------------------
function Wheel(radius){
	this.radius = radius;
	this.getAcceleration = function (){ return parseInt(2 * Math.PI * this.radius); }
}
Wheel.prototype = new PropulsionUnit();


//------------------------------------ PropellingNozzle --------------------------------------
var AfterburnerSwitch = Object.freeze({
	"ACTIVATED": 0,
	"DEACTIVATED": 1
});

function PropellingNozzle(power, afterburnerSwitch){
	this.power = power;
	this.afterburnerSwitch = afterburnerSwitch;

	this.getAcceleration = function (){ 
		if (this.afterburnerSwitch === AfterburnerSwitch.ACTIVATED) {
			return 2 * this.power;
		} else {
			return this.power;
		} 
	}
}
PropellingNozzle.prototype = new PropulsionUnit();

//------------------------------------ Propeller --------------------------------------
var SpinDirection = Object.freeze({
	"CLOCKWISE": 0,
	"COUNTERCLOCKWISE": 1
});

function Propeller(fins, spinDirection){
	this.fins = fins;
	this.spinDirection = spinDirection;

	this.getAcceleration = function(fins, spinDirection){
		if (this.spinDirection === SpinDirection.CLOCKWISE) {
			return this.fins;
		} else {
			return this.fins*(-1);
		}
	}
}

Propeller.prototype = new PropulsionUnit();


/*
• There should be land, air and water vehicles. Land
vehicles should have 4 wheels, air vehicles should
have 1 propelling nozzles and water vehicles should
have a customizable number of propellers (passed in
the constructor).

• Air vehicles should have the ability to switch on/off
their afterburners.

• Water vehicles should have the ability to change the
spin direction of their propellers.

• Implement one additional amphibious vehicle. It
should both have a propeller (so it can move on
water) and wheels (so it can move on land). The
amphibious vehicle should be able to switch between
land and water mode and it's speed property and
Accelerate method should respectively depend on
its wheels in the first case and on its propeller in the
second case
*/


//------------------------------------ LandVehicle --------------------------------------
function LandVehicle(speed, wheels){
	Vehicle.call(this, speed, wheels);
}
LandVehicle.prototype = new Vehicle(); 

//------------------------------------ AirVehicle --------------------------------------
function AirVehicle(speed, propellingNozzle){

	this.switchAfterburners= function (afterburnerSwitch) {
	            for (var i = 0, len = this.propulsionUnits.length; i < len; i++) {
	                if (this.propulsionUnits[i] instanceof PropellingNozzle) {
	                    this.propulsionUnits[i].afterburnerSwitch = afterburnerSwitch;
	                }
	            }
	}

	Vehicle.call(this, speed, propellingNozzle);
}
AirVehicle.prototype = new Vehicle();

//------------------------------------ WaterVehicle --------------------------------------
function WaterVehicle(speed, propellers){
	this.propellers = propellers;

	this.changeSpinDirection = function (spinDirection) {
	            for (var i = 0; i < this.propulsionUnits.length; i++) {
	                if (this.propulsionUnits[i] instanceof Propeller) {
	                    this.propulsionUnits[i].spinDirection = spinDirection;
	                }
	            }
	        }
	Vehicle.call(this, speed, propellers);
}
WaterVehicle.prototype = new Vehicle();


//------------------------------------ AmphibiousVehicle --------------------------------------
Function.prototype.extend = function (parent) {
	            for (var i = 1; i < arguments.length; i += 1) {
	                var name = arguments[i];
	                this.prototype[name] = parent.prototype[name];
	            }
	            return this;
	        }

var AmphibiousMode = Object.freeze({
	            "LAND": 0,
	            "WATER": 1
	        });

function AmphibiousVehicle(speed, wheels, propellers,  mode){
	var propulsionUnits = [];

	for (var i = 0; i < propellers.length; i++) {
		propulsionUnits.push(propellers[i]);
	}
	for (var j = 0; j < wheels.length; j++) {
		propulsionUnits.push(wheels[i]);
	}

	Vehicle.call(this, speed, propulsionUnits);
	

	this.mode = mode;
	this.accelerate = function() {
		if (this.mode === AmphibiousMode.LAND) {
			for (var i = 0; i < this.propulsionUnits.length; i++) {
				if (this.propulsionUnits[i] instanceof Wheel) {
					this.speed += this.propulsionUnits[i].getAcceleration();
				}
			}
		} else {
			for (var i = 0; i < this.propulsionUnits.length; i++) {
				if (this.propulsionUnits[i] instanceof Propeller) {
					this.speed += this.propulsionUnits[i].getAcceleration();
				}
			}
		}
	}

	this.switchMode= function(mode){
		this.mode = mode;
	}

}

AmphibiousVehicle.prototype = {vehicle: new Vehicle() , water: new WaterVehicle(), land: new LandVehicle()};





//------------------------------------- Ejecución ---------------------------------------------------
var wheels = [new Wheel(10), new Wheel(15), new Wheel(20), new Wheel(17)];

var propellingNozzle = [new PropellingNozzle(100, AfterburnerSwitch.ACTIVATED)];


var waterVehiclePropellers = [
            new Propeller(8, SpinDirection.CLOCKWISE),
            new Propeller(8, SpinDirection.CLOCKWISE),
            new Propeller(8, SpinDirection.CLOCKWISE),
        ];


var amphibiousVehiclePropellers = [
            new Propeller(5, SpinDirection.CLOCKWISE),
            new Propeller(5, SpinDirection.CLOCKWISE),
        ];

var landVehicle = new LandVehicle(40, wheels);
console.log("LandCar speed initial: " + landVehicle.speed);
landVehicle.accelerate();
console.log("LandCar speed after acceleration: " + landVehicle.speed);

var airVehicle = new AirVehicle(700, propellingNozzle);
console.log("AirVehicle speed initially: " + airVehicle.speed);
// I will probe to accelerate the airVehicle with afterburners activated
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners activated: " + airVehicle.speed);
//I will desactivate the afterburners and accelerate the airVehicle
airVehicle.switchAfterburners(AfterburnerSwitch.DEACTIVATED);
airVehicle.accelerate();
console.log("AirVehicle speed after acceleration with afterburners desactivated: " + airVehicle.speed);

var waterVehicle = new WaterVehicle(30, waterVehiclePropellers);
console.log("WaterVehicle speed initially: " + waterVehicle.speed);
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating clockwise: " + waterVehicle.speed);
//I will probe changing the propellers rotation direction and accelerate the waterVehicle
waterVehicle.changeSpinDirection(SpinDirection.COUNTERCLOCKWISE);
waterVehicle.accelerate();
console.log("WaterVehicle speed after acceleration with propellers rotating counterclockwise: " + waterVehicle.speed);


var amphibiousVehicle = new AmphibiousVehicle(15, amphibiousVehiclePropellers, wheels, AmphibiousMode.LAND);
console.log("AmphibiousVehicle speed initially: " + amphibiousVehicle.speed);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on land: " + amphibiousVehicle.speed);
 
/*
Nota: Al intentar cambiar la rotación de los propellers, intenté hacerlo de la forma amphibiousVehicle.__proto__.water.changeSpinDirection
pero es cierto que nunca inicialicé las propiedades del objeto de tipo WaterVehicle por lo que sus propulsionUnits
están indefinidas. Por lo que no puedo aplicar el método changeSpinDirection sobre el amphibiousVehicle en cuestión.
 
En otras palabras, con PseudoClassical Inheritance no pude modelar que AmphibiousVehicle extienda el método changeSpinDirection
de WaterVehicle. Como se explica en el archivo Argumentacion_resolucion_ejercicio.txt esta es una de las razones
por las cuales terminé resolviendo el ejercicio completo utilizando Parasitic Inheritance. 
 */

//I will probe changing the amphibious mode land to water
amphibiousVehicle.switchMode(AmphibiousMode.WATER);
amphibiousVehicle.accelerate();
console.log("AmphibiousVehicle speed after acceleration on water with propellers rotating clockwise: " + amphibiousVehicle.speed);

