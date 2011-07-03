// stupMa is a stupid math conversions class
var debug : boolean = false;

class convert {

	// options: [mi] miles, [km] kilometers, [me] meters, [cm] centimeters
	//             [ya] yards, [fe] feets, [au] light years, [in] inch, [le] league, [mm] milimeter
	function cdFloat ( v1 : float, from : String, to : String ) {
			
			var convert_first : boolean = false;
			var convert_second : boolean = false;
			
			var err : boolean = false;
			var res : float = 0.0;
			var dres : String;
			
			
			
			if ( from == to ) { // first check if inputs are same
				Dbg ( "Inputs you entered are same, are you shure you wanted this?" );
				convert_first = false;
				convert_second = false;
				res = v1;
			} else 	if ( from != "me" ){ // if inputs are different and input is not meter, convert to meter first
				Dbg ( "input is not meter, need to convert to meters" );
				convert_first = true;
			}
	
		if ( convert_first ) {
				switch ( from ) {
					case "cm":
						Dbg ("converting from centimeter to meter");
						res = v1 * 0.01;
						convert_second = true;
					break; 
					case "km":
						Dbg ("converting from kilometer to meter");
						res = v1 * 1000;
						convert_second = true;
					break;
					case "mi":
						Dbg ("converting from mile to meter");
						res = v1 * 1609.344;
						convert_second = true;
					break;
					case "ya":
						Dbg ("converting from yard to meter");
						res = v1 * 0.9144;
						convert_second = true;
					break;
					case "fe":
						Dbg ("converting from foot to meter");
						res = v1 * 0.3048;
						convert_second = true;
					break;
					case "in":
						Dbg ("converting from inch to meter");
						res = v1 * 1609.344;
						convert_second = true;
					break;
					case "le":
						Dbg ("converting from league to meter");
						res = v1 * 4828.0417;
						convert_second = true;
					break;
					case "au":
						Dbg ("converting from au to meter");
						//res = v1 * 5.29177249e-11;
					break;
					case "mm":
						Dbg ("converting from milimeter to meter");
						res = v1 * 0.001;
						convert_second = true;
					break;
					default:
						Dbg ("Unknown measure > " + from );
						convert_second = false;
						err = true;
				}
			
			}
			
		if ( convert_second ) {
				switch ( to ) {
					case "cm":
						Dbg ("converting all to centimeters");
						res = v1 * 100;
					break; 
					case "km":
						Dbg ("converting all to kilometers");
						res = v1 * 0.001;
					break;
					case "mi":
						Dbg ("converting all to miles");
						res = v1 * 0.00062137119224;
					break;
					case "ya":
						Dbg ("converting all to yards");
						res = v1 * 1.0936132983;
					break;
					case "fe":
						Dbg ("converting all to feets");
						res = v1 * 3.280839895;
					break;
					case "in":
						Dbg ("converting all to inches");
						res = v1 * 39.37007874;
					break;
					case "le":
						Dbg ("converting all to leagues");
						res = v1 * 0.00020712331461;
						
					break;
					case "au":
						Dbg ("converting all to au's");
						
						//res = v1 * 5.29177249e-11;
					break;
					case "mm":
						Dbg ("converting all to milimeters");
						res = v1 * 1000;
					break;
					case "me":
						Dbg ( "converting all to meters" );
						//res = v1;
					break;
					default:
						Dbg ( "Unknown measure > " + to );
				}
		
		
		}
			
			
			
			if ( err ) {
				Dbg ( "couldnt convert this crap, please check your input measures" );
				res = 0;
			} else {
				Dbg ( "sucesfully converted from: " + from + " to: " + to );
			}
			
			return res;
}
	
// [mi] miles, [km] kilometers, [me] meters, [cm] centimeters, [ya] yards, [fe] feets, [au] light years, [in] inch, [le] league, [mm] milimeter, [ly] lightyear

// from miles
function mikm ( inp : float ) { // miles to kilometers
	return inp * 1.609344;
}

function mimi ( inp : float ) { // miles to kilometers [ DOING NOTHING ]
	return inp;
}

function mime ( inp : float ) { // miles to meters
	return inp * 1609.344;
}

function micm ( inp : float ) { // miles to centimeters
	return inp * 160934.4;
}

function miya ( inp : float ) { // miles to yards
	return inp * 1760;
}

function mife ( inp : float ) { // miles to feet
	return inp * 5280 ;
}

function miau ( inp : float ) { // miles to au
	return inp * 0.000000010757800178347;
}

function miin ( inp : float ) { // miles to inches
	return inp * 63360;
}

function mile ( inp : float ) { // miles to leagues
	return inp * 0.33333266363;
}

function mimm ( inp : float ) { // miles to milimeter
	return inp * 1609344 ;
}

function mily ( inp : float ) { // miles to lightyears
	return inp * 0.00000000000000010570234105362;
}
	
// from kilometers	
function kmmi ( inp : float ) { // kilometers to miles
	return inp * 0.62137119224;
}

function kmme ( inp : float ) { // kilometers to meters
	return inp * 1000;
}

function kmcm ( inp : float ) { // kilometers to centimeters
	return inp * 100000;
}

function kmya ( inp : float ) { // kilometers to yards
	return inp * 1093.6132983;
}

function kmfe ( inp : float ) { // kilometers to feet
	return inp * 3280.839895;
}

function kmau ( inp : float ) { // kilometers to au
	return inp * 0.0000000066845871226706;
}

function kmin ( inp : float ) { // kilometers to inches
	return inp * 39370.07874;
}

function kmle ( inp : float ) { // kilometers to leagues
	return inp * 0.20712331461;
}

function kmmm ( inp : float ) { // kilometers to milimeter
	return inp * 1000000 ;
}

function kmkm ( inp : float ) { // kilometers to kilometers [ DOING NOTHING ]
	return inp;
}
function kmly ( inp : float ) { // kilometers to lightyears
	return inp * 0.00000000000010570234105362;
}

// from meters
function memi ( inp : float ) { // meters to miles
	return inp * 0.00062137119224;
}

function meme ( inp : float ) { // meters to meters [ DOING NOTHING ]
	return inp;
}

function mecm ( inp : float ) { // meters to centimeters
	return inp * 100;
}

function meya ( inp : float ) { // meters to yards
	return inp * 1.0936132983;
}

function mefe ( inp : float ) { // meters to feet
	return inp * 3.280839895;
}

function meau ( inp : float ) { // meters to au
	return inp * 0.0000000000066845871226706;
}

function mein ( inp : float ) { // meters to inches
	return inp * 39.3700784;
}

function mele ( inp : float ) { // meters to leagues
	return inp * 0.00020712331461;
}

function memm ( inp : float ) { // meters to milimeter
	return inp * 1000;
}

function mekm ( inp : float ) { // meters to kilometers
	return inp * 0.001;
}

function mely ( inp : float ) { // meters to lightyears
	return inp * 0.00000000000000010570234105362;
}

// from centimeters
function cmmi ( inp : float ) { // centimeters to miles
	return inp * 0.0000062137119224;
}

function cmme ( inp : float ) { // centimeters to meters
	return inp * 0.01;
}

function cmcm ( inp : float ) { // centimeters to centimeters [ DOING NOTHING ]
	return inp;
}

function cmya ( inp : float ) { // centimeters to yards
	return inp * 0.010936132983 ;
}

function cmfe ( inp : float ) { // centimeters to feet
	return inp * 0.03280839895;
}

function cmau ( inp : float ) { // centimeters to au
	return inp * 0.000000000000066845871226706;
}

function cmin ( inp : float ) { // centimeters to inches
	return inp * 0.3937007874 ;
}

function cmle ( inp : float ) { // centimeters to leagues
	return inp * 0.0000020712331461;
}

function cmmm ( inp : float ) { // centimeters to milimeter
	return inp * 10;
}

function cmkm ( inp : float ) { // centimeters to kilometers
	return inp * 0.00001;
}

function cmly ( inp : float ) { // centimeters to lightyears
	return inp * 0.0000000000000000010570234105362;
}

// from yards
function yami ( inp : float ) { // yards to miles
	return inp * 0.00056818181818;
}

function yame ( inp : float ) { // yards to meters
	return inp * 0.9144;
}

function yacm ( inp : float ) { // yards to centimeters
	return inp * 91.44;
}

function yaya ( inp : float ) { // yards to yards [ DOING NOTHING ]
	return inp;
}

function yafe ( inp : float ) { // yards to feet
	return inp * 3;
}

function yaau ( inp : float ) { // yards to au
	return inp * 0.00000000000611238646497;
}

function yain ( inp : float ) { // yards to inches
	return inp * 36;
}

function yale ( inp : float ) { // yards to leagues
	return inp * 0.00018939355888;
}

function yamm ( inp : float ) { // yards to milimeter
	return inp * 914.4 ;
}

function yakm ( inp : float ) { // yards to kilometers
	return inp * 0.0009144;
}

function yaly ( inp : float ) { // yards to lightyears
	return inp * 0.000000000000000096654220659429;
}

// from feets
function femi ( inp : float ) { // feets to miles
	return inp * 0.00018939393939;
}

function feme ( inp : float ) { // feets to meters
	return inp * 0.3048;
}

function fecm ( inp : float ) { // feets to centimeters
	return inp * 30.48;
}

function feya ( inp : float ) { // feets to yards
	return inp * 0.33333333333 ;
}

function fefe ( inp : float ) { // feets to feet [ DOING NOTHING ]
	return inp;
}

function feau ( inp : float ) { // feets to au
	return inp * 0.00000000000203746215499;
}

function fein ( inp : float ) { // feets to inches
	return inp * 12;
}

function fele ( inp : float ) { // feets to leagues
	return inp * 0.000063131186294;
}

function femm ( inp : float ) { // feets to milimeter
	return inp * 304.8;
}

function fekm ( inp : float ) { // feets to kilometers
	return inp * 0.0003048;
}

function fely ( inp : float ) { // feets to lightyears
	return inp * 0.000000000000000032218073553143;
}


// from au's
function aumi ( inp : float ) { // au's to miles
	return inp * 92955807.267433;
}

function aume ( inp : float ) { // au's to meters
	return inp * 149597870691;
}

function aucm ( inp : float ) { // au's to centimeters
	return inp * 14959787069100;
}

function auya ( inp : float ) { // au's to yards
	return inp * 163602220790.68;
}

function aufe ( inp : float ) { // au's to feet
	return inp * 490806662372.04;
}

function auau ( inp : float ) { // au's to au [ DOING NOTHING ]
	return inp;
}

function auin ( inp : float ) { // au's to inches
	return inp * 5889679948464.6;
}

function aule ( inp : float ) { // au's to leagues
	inp = inp * 149597870.691; // convert first to kilometers
	return inp * 0.20712331461; // than that km to leagues
}

function aumm ( inp : float ) { // au's to milimeter
	return inp *149597870691000;
}

function aukm ( inp : float ) { // au's to kilometers
	return inp * 149597870.691;
}

function auly ( inp : float ) { // au's to lightyears
	return inp * 0.000015812845148675;
}

// from inches
function inmi ( inp : float ) { // inches to miles
	return inp * 0.000015782828282828;
}

function inme ( inp : float ) { // inches to meters
	return inp * 0.0254;
}

function incm ( inp : float ) { // inchesto centimeters
	return inp * 2.54;
}

function inya ( inp : float ) { // inches to yards
	return inp * 0.027777777777778;
}

function infe ( inp : float ) { // inches to feet
	return inp * 0.083333333333333;
}

function inau ( inp : float ) { // inches to au
	return inp * 0.00000000000016978851291583;
}

function inin ( inp : float ) { // inches to inches [ DOING NOTHING ]
	return inp;
}

function inle ( inp : float ) { // inches to leagues
	return inp * 0.0000052609321912;
}

function inmm ( inp : float ) { // inches to milimeter
	return inp * 25.4;
}

function inkm ( inp : float ) { // inches to kilometers
	return inp * 0.0000254;
}

function inly ( inp : float ) { // inches to lightyears
	return inp * 0.0000000000000000026848394627619;
}

// from leagues
function lemi ( inp : float ) { // leagues to miles
	return inp * 3.0000060273;
}

function leme ( inp : float ) { // leagues to meters
	return inp * 4828.0417;
}

function lecm ( inp : float ) { // leagues centimeters
	return inp * 482804.17;
}

function leya ( inp : float ) { // leagues to yards
	return inp * 5280.010608;
}

function lefe ( inp : float ) { // leagues to feet
	return inp * 15840.031824;
}

function leau ( inp : float ) { // leagues to au
	inp = inp * 4.8280417; // convert to kilometers
	return inp * 0.0000000066845871226706; // than kilometers to aus
}

function lein ( inp : float ) { // leagues to inches
	return inp * 190080.38189;
}

function lele ( inp : float ) { // leagues to leagues [ DOING NOTHING ]
	return inp;
}

function lemm ( inp : float ) { // leagues to milimeter
	return inp * 4828041.7;
}

function lekm ( inp : float ) { // leagues to kilometers
	return inp * 4.8280417;
}

function lely ( inp : float ) { // leagues to lightyears
	inp = inp * 4.8280417; // convert to kilometers
	return inp * 0.00000000000010570234105362; // than kilometers to lightyears
}

// from milimeters
function mmmi ( inp : float ) { // milimeters to miles
	return inp * 0.00000062137119223733;
}

function mmme ( inp : float ) { // milimeters to meters
	return inp * 0.001;
}

function mmcm ( inp : float ) { // milimeters centimeters
	return inp * 0.1;
}

function mmya ( inp : float ) { // milimeters to yards
	return inp * 0.0010936132983377;
}

function mmfe ( inp : float ) { // milimeters to feet
	return inp * 0.0032808398950131;
}

function mmau ( inp : float ) { // milimeters to au
	return inp * 0.0000000000000066845871226706;
}

function mmin ( inp : float ) { // milimeters to inches
	return inp * 0.039370078740157;
}

function mmle ( inp : float ) { // milimeters to leagues
	return inp * 2.0712331461;
}

function mmmm ( inp : float ) { // milimeters to milimeter [ DOING NOTHING ]
	return inp;
}

function mmkm ( inp : float ) { // milimeters to kilometers
	return inp * 0.000001;
}

function mmly ( inp : float ) { // milimeters to lightyears
	return inp * 0.00000000000000000010570234105362;
}

// from lightyeaars
/*
function lymi ( inp : float ) { // lightyeaars to miles
	return inp * 5878499814135.1;
}

function lyme ( inp : float ) { // lightyeaars to meters
	return inp * 9460528404879400;
}

function lycm ( inp : float ) { // lightyeaars centimeters
	return inp * 946052840487940000;
}

function lyya ( inp : float ) { // lightyeaars to yards
	return inp * 10346159672878000;
}

function lyfe ( inp : float ) { // lightyeaars to feet
	return inp * 31038479018633000;
}

function lyau ( inp : float ) { // lightyeaars to au
	inp = inp * 9460528404879.4; // convert to kilometers
	return inp * 0.0000000066845871226706; // than kilometers to aus
}

function lyin ( inp : float ) { // lightyeaars to inches
	return inp * 372461748223600000;
}

function lyle ( inp : float ) { // lightyeaars to leagues
	inp = inp * 9460528404879.4; // convert to kilometers
	return inp *  0.20712331461; // than kilometers to leagues
}

function lymm ( inp : float ) { // lightyeaars to milimeter
	return inp * 9460528404879402000
}

function lykm ( inp : float ) { // lightyeaars to kilometers
	return inp * 9460528404879.4;
}

function lyly ( inp : float ) { // lightyeaars to lightyears [ DOING NOTHING ]
	return inp;
}
*/

function toms ( num : float ) {
	return num * 0.01;

}


function numFormat ( num : float ) {

//	var nm : int = num;
	res = num.ToString ();
	lgt = res.length;
	
	if ( lgt == 4 ) { // thousand
		fr = res.Substring (	0, 1 );
		re = res.Substring ( 1, lgt - 1 );
		res = fr + "," + re;
	}
	
	if ( lgt == 5 ) { // ten thousand
		fr = res.Substring (	0, 2 );
		re = res.Substring ( 2, lgt - 2 );
		res = fr + "," + re;
	}
	
	if ( lgt == 6 ) { // hundred thousand
		fr = res.Substring (	0, 3 );
		re = res.Substring ( 3, lgt - 3 );
		res = fr + ", " + re;
	}	
	
	if ( lgt == 7 ) { // million
		fr = res.Substring (	0, 1 );
		se = res.Substring ( 1, lgt - 4 );
		tr = res.Substring ( 4, lgt -4 );
		res = fr + "," + se + "," + tr;
	}	
	
	if ( lgt == 8 ) { // ten million
		fr = res.Substring (	0, 2 );
		se = res.Substring ( 2, lgt - 5 );
		tr = res.Substring ( 5, lgt -5 );
		res = fr + "," + se + "," + tr;
	}		
	
	if ( lgt == 9 ) { // hundred million
		fr = res.Substring (	0, 3 );
		se = res.Substring ( 3, lgt - 6 );
		tr = res.Substring ( 6, lgt -6 );
		res = fr + "," + se + "," + tr;
	}	

	if ( lgt == 10 ) { // billion
		fr = res.Substring (	0, 1 );
		se = res.Substring ( 1, lgt - 6 );
		tr = res.Substring ( 6, lgt -6 );
		res = fr + "," + se + "," + tr;
	}	
	Dbg ( "length is: " + lgt + " and result is: " + res );
	return res;
}

	function Dbg ( what : String ){
		if ( debug ) {
			Debug.Log ( what );
		}
	}
	
	
}
