function replacer(a){
    a = a.replace(/ plus /g," + ");
	a = a.replace(/ minus /g," - ");
	a = a.replace(/ times /g," * ");
	a = a.replace(/ divided by /g," / ");
	a = a.replace(/as long as /g,"while ");
	a = a.replace(/\nset /g,"");
	a =a.replace(/\nlet /g, "");
	a =a.replace(/\nchange /g, "");
	a =a.replace(/\nas long as /g, "\nwhile ");
	a = a.replace(/\tset /g,"");
	a =a.replace(/\tlet /g, "");
	a =a.replace(/\tchange /g, "");
	a =a.replace(/\tas long as /g, "\twhile ")
	a = a.replace(/ set /g,"");
	a =a.replace(/ let /g, "");
	a =a.replace(/ change /g, "");
	a =a.replace(/ as long as /g, " while ");
	a = a.replace(/^set /g,"");
	a =a.replace(/^let /g, "");
	a =a.replace(/^change /g, "");
	a =a.replace(/^as long as /g, " while ");
	a =a.replace(/ equal to /g, "=");
    	a =a.replace(/ equals /g, "=");
	a =a.replace(/ to /g, "=");
	a =a.replace(/ is in /g, " in ");
	a =a.replace(/ is equal to /g, "==");
	a =a.replace(/ is greater than or equal to/g, ">=");
	a =a.replace(/ is greater than /g, ">");
	a =a.replace(/ is less than or equa to /g, "<=");
	a =a.replace(/ is less than /g, "<");
	a =a.replace(/ is true/g, " == true");
	a =a.replace(/ is false/g, "== false");
    
	a = a.split("\n");
	//aloks stuff here(a is now a list)
	var tempa = "";
	for(var i in a){
		if(a[i].indexOf("loop")>-1){
			var stmt=a[i].match(/loop(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var stmt=a[i].match(/loop(.*)\S/)[0];
				var args=stmt.replace("loop","").replace(":","");
				a[i]=a[i].replace(stmt,"for iiii in range("+args+"):");
			}
		}
		if(a[i].indexOf("for")>-1){
			var stmt=a[i].match(/for(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var args=stmt.replace("for","").replace(":","");
				a[i]=a[i].replace(stmt,"for "+args+":");
			}
		}
		if(a[i].indexOf("until")>-1){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i].replace("=","==");
			}
			var stmt=a[i].match(/until(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var args=stmt.replace("until","").replace(":","");
				a[i]=a[i].replace(stmt,"while not ("+args+"):");
			}
		}
		if(a[i].indexOf("while")>-1){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i].replace("=","==");
			}
			var stmt=a[i].match(/while(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var args=stmt.replace("while","").replace(":","");
				a[i]=a[i].replace(stmt,"while ("+args+"):");
			}
		}
		if(a[i].indexOf("if")>-1){
                        if(a[i].match(/[^=]=[^=]/)){
				a[i].replace("=","==");
			}
			var stmt=a[i].match(/if(.*)\S/);
			if(stmt){
				stmt=stmt[0];
				var args=stmt.replace("if","").replace(":","");
				a[i]=a[i].replace(stmt,"if ("+args+"):");
			}
		}
		tempa+=a[i]+"\n";
	}
	
	a = tempa;
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
