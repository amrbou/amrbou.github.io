var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Amr";
names[3]="Amal";
names[4]="Walid";
names[5]="Khadija";
names[6]="Alonzo";
names[7]="Davida";
names[8]="Lauren";
names[9]="John St";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
