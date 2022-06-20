const colors = {
    1: 'Autumn',
    2: 'Treasure',
    3: 'Moss',
    4: 'Orchid',
    5: 'Petal',
    6: 'Salty',
    7: 'Arid',
    8: 'Scorched'
}

const antennas = {
    1: 'Tense',
    2: 'Drooped',
    3: 'Feather',
    4: 'Stout',
    5: 'Arched',
    6: 'Lash',
    7: 'Ribbon'
}

const eyes = {
    1: 'Alert',
    2: 'Focused',
    3: 'Considerate',
    4: 'Patient',
    5: 'Enlightened'
}

const legDecorations = {
    0: 'None',
    1: 'Slice',
    2: 'Leaf',
    3: 'Fold',
    4: 'Wing'
}

const headDecorations ={
    0: 'None',
    1: 'Leaf',
    2: 'Dragon',
    3: 'Oblio',
    4: 'Praying',
    5: 'Petal'
}

const shields = {
    1: 'Piercer',
    2: 'Defender',
    3: 'Embalmer',
    4: 'Seducer',
    5: 'Stomper'
}



function nameGenerator(color, legDecoration, headDecoration, shield){
    let legs = '';
    let head = '';
    if(legDecorations[legDecoration] === 'None'){
        legs = ''
    }
    else legs = legDecorations[legDecoration]

    if(headDecorations[headDecoration] === 'None'){
        head = ''
    }
    else head = headDecorations[headDecoration]

    return `${colors[color] + legs.toLowerCase()} ${head.toLowerCase() + shields[shield].toLowerCase()}`
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function logMetadata(){

    const eye = JSON.stringify(getRandomInt(1,5));
    const antenna = JSON.stringify(getRandomInt(1,7));
    const headDecoration = JSON.stringify(getRandomInt(0,5));
    const legDecoration = JSON.stringify(getRandomInt(0,4));
    const shield = JSON.stringify(getRandomInt(1,5));
    const color = JSON.stringify(getRandomInt(1,8));

    const species = eye+antenna+headDecoration+legDecoration+shield+color;
    const name = nameGenerator(color, legDecoration, headDecoration, shield);

    return `{
        "721": {
            "d3a9bc224420545a94db518165fd651694de0ebab4e873ed142a1484": {
              "GTWMantis${species}": {
                "files": [
                  {
                    "mediaType": "text/html",
                    "src": [
                        "ipfs://QmXVmugcCS176nuDyorukUM3ew",
                        "NnSG6M4LgeGfDZ4PMU6F/?species=${species}"
                    ]
                  }
                ],
                "image": [
                    "ipfs://bafybeig74a6tmo5mbh7mllg5tnto",
                    "74biducudjolxvgglu7j44s55druai"
                ],
                "name": "Getaways Mantis",
                "project": "Getaways",
                "series": "Wildlife",
                "species": "${name}",
                "type": "Mantis",
                "antenna": "${antennas[antenna]}",
                "eyes": "${eyes[eye]}",
                "head decoration": "${headDecorations[headDecoration]}",
                "leg decoration": "${legDecorations[legDecoration]}",
                "shield": "${shields[shield]}",
                "color": "${colors[color]}",
                "website": "https://projectgetaways.com"
              }
            }
          }
    }`
}

console.log(logMetadata())


