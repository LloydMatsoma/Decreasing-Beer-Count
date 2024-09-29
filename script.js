function Beer(){

    var i=100;

    while(i>=0){

        if (i >0){
            console.log(i+ "bottles on the wall,"+ i +"bottles of beer"+ "Take one down, pass it around "+( i-1) +"beers on the wall");
        }else{
            console.log(" None bottle on the wall,"+ "None bottle of beer"+ "Take one down, pass it around, none beers on the wall"); 
        }

        i--;
    }
}

Beer();
