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
	
	function readParse ( traziSta : String, list : String, parser : String ) {
		debugging = true;
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
						//res = v1 * 3.280839895;
						str = read ( traziSta, list );
						res = str.Split ( "|" [ 0 ] );
						success = true;
					break;
					case "bool":
						Dbg ("converting to boolean");
					//	res = v1 * 3.280839895;
					break;
					default:
						Dbg ( "Unknown option, type> gett.readHelp (); to see possible parsers" );
					}
					
					if ( !success ) {
						res = "ERROR";
					}
					
					return res;
	}
	
	
	function GetVect ( vect : String ) {
		
		vec = vect.Split ( "," [0] );
		v0 = parseFloat ( vec [0] );
		v1 = parseFloat ( vec [1] );
		v2 = parseFloat ( vec [2] );
		
		res = Vector3 ( v0, v1, v2 );
		
		return res;
	}
	
	
	
	function readHelp () {
			debugging = true;
		Dbg ( "" );
			debugging = false;
	}
	
	
	function dbg () {
		debugging = !debugging;
		
	}
	
	
	// debug console funkcija
	function Dbg ( msg : String ){
		if ( debugging ){
			Debug.Log (  "gett says: " + msg );
			}
	}		
	
}










