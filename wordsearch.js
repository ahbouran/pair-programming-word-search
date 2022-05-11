// We check if its an empty array
const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return [];
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } //Checks the array horizontally

    const arr = [];
    for (let i = 0; i < letters[0].length; i++) {
        const column = [];
        for (let j = 0; j < letters.length; j++) {
            column.push(letters[j][i]);
        } 
        arr.push(column);
    }  
    // turning columns into rows
    const verticalJoin = arr.map(ls => ls.join(''))
    for (let item of verticalJoin) {
        if (item.includes(word)) return true;
    }   //looping through the 'columns' to see if there are any matches
    return false; // if there are no matches either horizontally or vertically, we return false

}
   

module.exports = wordSearch
