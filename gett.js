// gett class script v0.033
// creator: DarMar
// last edit: 



// enable or disable debugging
private var debugging : boolean = false;




class gett{
	
	
	
	// funkcija za citanje custom .XML fajlova iz foldera resources
	function read ( traziSta : String, list : String ){
		Dbg ( "reading -- " + traziSta + " --- " + list );
		
		var at : String = list;
		var lgt : float = traziSta.length + 2;
		var ood : float = 0;
		var doo : float = 0;
		var found : float = 0;
		var founds : float = 0;
		var totalFinds : float = 0;
		
		
		for ( var i : int = 0; i < at.Length; i++ ){
			found = at.IndexOf ( "<"+traziSta+">", i );
			if ( found>0 ){ totalFinds++; i = found; ood = i; }
		}
		
		for ( var o : int = 0; o < at.Length; o++ ){
			founds = at.IndexOf ( "</"+traziSta+">", o );
			if ( founds>0 ) { totalFinds++; o = founds; doo = o; }
		}
		
		var razlika : float = doo - ood;
		returnedItem = at.Substring( ood+lgt, razlika-lgt );
		
		return returnedItem;
	}
	
	
	// after reading string from text asset parse it to some value
	function readParse ( traziSta : String, list : String, parser : String ) {
		//debugging = true;
		var res;
		val = read ( traziSta, list );
		var success : boolean = false;
		
		switch ( parser ) {
			case "float":
			Dbg ("converting to float");
			res = parseFloat ( read ( traziSta, list ) );
			success = true;
			break;
			case "int":
			Dbg ("converting to int");
			res = parseInt ( read ( traziSta, list ) );
			success = true;
			break;
			case "string":
			Dbg ("converting to string ( just parsing )");
			res = read ( traziSta, list );
			success = true;
			break;
			case "vector3":
			Dbg ("converting to vector3");
			str = read ( traziSta, list );
			res = GetVect ( str );
			success = true;
			break;
			case "array":
			Dbg ("converting to array");
			str = read ( traziSta, list );
			res = str.Split ( "|" [ 0 ] );
			success = true;
			break;
			case "bool":
			Dbg ("converting to boolean");
			var rs : boolean =  false;
			str = read ( traziSta, list );
			if ( str == "true" ) {
				rs = true;
			}
			res = rs;
			success = true;
			break;
			default:
			Dbg ( "Unknown option, type> gett.readHelp (); to see possible parsers" );
		}
		
		if ( !success ) {
			res = "ERROR";
		}
		
		return res;
	}
	
	// from a,b,c string input convert to vectors, note: ( a, b, c ) format with () is not supported
	function GetVect ( vect : String ) {
		
		vec = vect.Split ( "," [0] );
		v0 = parseFloat ( vec [0] );
		v1 = parseFloat ( vec [1] );
		v2 = parseFloat ( vec [2] );
		
		res = Vector3 ( v0, v1, v2 );
		
		return res;
	}
	
	// send help file options to debug log conole
	function readHelp () {
		debugging = true;
		Dbg ( helpString );
		debugging = false;
	}
	
	// switch debug mode on / off
	function dbg () {
		debugging = !debugging;
		
	}
	
	// debug console function
	function Dbg ( msg : String ){
		if ( debugging ){
			Debug.Log (  "gett says: " + msg );
		}
	}
	
}

// help string that lists options
var helpString : String = " = BASIC READER = v.0.033 by DarMar \n basic usage: \n type: gett.read ( [ what / name ], [ string / text file] ) .. returns what is between <>marks \n for example from <name>igor</name> .. reader returns name igor \n gett.readParse ( [ what / name ], [ string / text file], [ parse type ] ) .. where parse type is type you want to convert \n parse types for now: \n [ float ] \n [ int ] \n [ string ] \n [ vector3 ] \n [ bool ] \n [ array ] \n where type written has not [] signs \n . callable functions \n gett.Dbg ( string)  .. sends string to debug log console \n gett.readHelp ()  .. calls this window ( help ) \n gett.dbg ()  .. switchs debugging log on and off during runtime \n gett.GetVect ( string )  .. from string type <a,b,c> without (), returnd vector3 \n. \n known bugs: \n bool parse causing errors? \n future implementations: \n repair bool parse part, md5 and hexadecimal parser \n . \n .";





