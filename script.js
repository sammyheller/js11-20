function firstLast6(arr){
    if(arr[arr.length - 1]  == 6  || arr[0] == 6){
        return true;
    }
    return false;
}

function has23(arr){
    if(arr[0] == 2 || arr[0] == 3  || arr[1] == 2 || arr[1] == 3){
        return true;
    }
    return false;
}


function fix23(arr){

    for(var i = 0; i< arr.length; i++){
        if(arr[i] == 2 && arr[i + 1] == 3){
            arr[i + 1] = 0;
        }
    }
    return arr;
}


function countYZ(str){
    str = str.toLowerCase();
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i] == " "){
            if(str[i-1] == "y" || str[i-1] == "z"){
                count++;
            }
        }
    }
    if(str[str.length - 1] == "y" || str[str.length - 1] == "z"){
        count ++
    }
    return count;
}




function endOther(strX, strY){
    strX=strX.toLowerCase();
    strY=strY.toLowerCase();
    if(strX.endsWith(strY) || strY.endsWith(strX)){
        return true;
    }
    return false;
}


function starOut(str){
    var answer = "";
    for(var i=0; i<str.length; i++) {
        if (str[i] != "*" && str[i + 1] != "*" && str[i - 1] != "*") {
            answer = answer + str[i]
        }
    }
    return answer;
}


function getSandwich(str){
    var count = 0;
    for(var i=0; i<str.length; i++){
        if (str.substring(i,i+5) == "bread"){
            count++
        }
    }
    if(count = 2){
        return str.substring((str.indexOf("bread")+5) , str.lastIndexOf("bread"));
    }else{
        return "";
    }
}


function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i<arr.length; i++){
        sum1 = sum1 + arr[i];
        for(var j = i + 1; j<arr.length; j++){
            sum2 = sum2 + arr[j];
        }
        if(sum1 == sum2){
            return true;
        }
        sum2 = 0;
    }
    return false;
}


function countClumps(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == arr[i+1]){
            count ++;
            for(var j = i + 1; j<arr.length; j++){
                if(arr[j] != arr[j+1]){
                    i=j;
                    break;
                }
            }
        }
    }
    return count;
}



function evenlySpaced(x,y,z) {
    if( (x-y==y-z) || (y-x==x-z) || (z-y==y-x) || (z-x==x-y) || (x-z==z-y)){
        return true;
    }
    return false;
}

