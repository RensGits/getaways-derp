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

const legDecorations = {
    0: '',
    1: 'slice',
    2: 'leaf',
    3: 'fold',
    4: 'winged'
}

const headDecorations ={
    0: '',
    1: 'leaf',
    2: 'dragon',
    3: 'oblio',
    4: 'praying',
    5: 'petal',
}

const shields = {
    1: 'piercer',
    2: 'defender',
    3: 'embalmer',
    4: 'seducer',
    5: 'stomper'
}

export function nameGenerator(color, legDecoration, headDecoration, shield){
    return `${colors[color] + legDecorations[legDecoration]} ${headDecorations[headDecoration] + shields[shield]}`
}
