export default function TresCommas(num) {//Commas every three digits
    if(num < 1000){
        return num
    }//return original if number doesn't break 1,000
    let result = num.toString().split("")
    //turn number to string and then an array of it's digits
    let len = result.length//LENGTH OF NUMBER STRING
    let i = len % 3//REMAINDER IF DIVIDED BY 3
    while(i < len){
        if(i == 0){//IF LENGTH DIVISIBLE BY THREE
            i+=3//START AT INDEX OF 3 FOR FIRST COMMAS
            continue
        }
        result.splice(i,0,",")
        i += 4
    }//ADD A COMMA THEN JUMP 3 DIGITS PLUS THE NEW COMMA AHEAD FOR NEXT COMMA
    return result.join("")//JOIN THE ARRAY AS A STRING
}