function replacer(a){
    a=" "+a;
    a = a.replace(/ plus /g," + ");
    a = a.replace(/ minus /g," - ");
	a = a.replace(/ times /g," * ");
	a = a.replace(/ divided by /g," / ");
	a = a.replace(/as long as /g,"while ");
	a = a.replace(/\sset /g,"");//does not work
	a =a.replace(/\slet /g, "");//does not work
	a =a.replace(/\schange /g, "");//does not work
	a =a.replace(/as long as /g, "\nwhile ");

	a =a.replace(/ is in /g, " in ");
	a =a.replace(/ is greater than or equal to/g, ">=");
	a =a.replace(/ is less than or equal to /g, "<=");
	a =a.replace(/ is equal to /g, "=");
	
	a =a.replace(/ is greater than /g, ">");
	
	a =a.replace(/ is less than /g, "<");
	a =a.replace(/ is true/g, " == true");
	a =a.replace(/ is false/g, "== false");
	a =a.replace(/ equal to /g, "==");
    a =a.replace(/ equals /g, "==");

	a =a.replace(/ to /g, "=");
    
	a = a.split("\n");
	//aloks stuff here(a is now a list)
	var tempa = "";
	for(var i in a){
		a[i]=" "+a[i];
		if(a[i].match(/\sloop\s/)){
			var stmt=a[i].match(/\sloop\s(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\sloop\s(.*)\S/)[0];
				stmt2=stmt.substring(6);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"for iiii in range("+args+"):");
			}
		}
		if(a[i].match(/\srepeat\s/)){
			var stmt=a[i].match(/\srepeat\s(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\sloop\s(.*)\S/)[0];
				stmt2=stmt.substring(6);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"for iiii in range("+args+"):");
			}
		}
		if(a[i].match(/\sfor\s/)){
			var stmt=a[i].match(/\sfor\s(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\sfor\s(.*)\S/)[0];
				stmt2=stmt.substring(5);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"for "+args+":");
			}
		}
		if(a[i].match(/\suntil\s/)){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i].replace("=","==");
			}
			var stmt=a[i].match(/\suntil\s(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\suntil\s(.*)\S/)[0];
				stmt2=stmt.substring(7);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"while not ("+args+"):");
			}
		}
		if(a[i].match(/\swhile\s/)){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i].replace("=","==");
			}
			var stmt=a[i].match(/while(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\swhile\s(.*)\S/)[0];
				stmt2=stmt.substring(7);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"while ("+args+"):");
			}
		}
		if(a[i].match(/\sif\s/)){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i]=a[i].replace("=","==");
			}
			var stmt=a[i].match(/\sif\s(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/\sif\s(.*)\S/)[0];
				stmt2=stmt.substring(4);
				var args=stmt2.replace(":","");
				a[i]=a[i].replace(stmt.substring(1),"if ("+args+"):");
			}
		}
		tempa+=a[i].substring(1)+"\n";
	}
	
	a = tempa.substring(1);
	return(a);
}
function change(a){
	var b = [];

	while (a.indexOf('"') > -1) {
	    b.push(a.match(/\"(.*?)"/));
	    a = a.replace(/\"(.*?)"/,"@");}
	a = replacer(a);
	for(var i in b){
	    a = a.replace("@",b[i][0]);
	}

	return(a);
}