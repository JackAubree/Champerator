var consonants = ['c','h','m','p','z','w','x','f','ph','st','sh','th','gh','sw','tr','sl'];
var vowelthings = ['a','e','i','o','u','y','w','au','ie','oo','ai','ee'];

for(var i=0; i<consonants.length; i++) {
    var consonant = consonants[i];
    for(var j=0; j<vowelthings.length; j++){
        var vowelthing = vowelthings[j];
        var combo = consonant+vowelthing;
        if(!hasrepeat(combo,'w') && !hasrepeat(combo,'y')) {
            console.log(consonant+vowelthing+'mp');
        } else {
            console.log('you suck, ' + combo + 'mp');
        }
    }
}

function hasrepeat(wholestring,thingNotToRepeat) {
    var stringAsArray = wholestring.split('');
    for(var i=0; i<stringAsArray.length; i++) {
        var thisLetter = stringAsArray[i];
        var nextLetter = stringAsArray[i+1];
        if(thisLetter === thingNotToRepeat && thisLetter === nextLetter) {
            return true;
        }
    }
    return false;

}