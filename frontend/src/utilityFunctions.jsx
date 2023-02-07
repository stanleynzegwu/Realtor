function formatPrice(p){
    let position = 3
    return String(p).split('').reverse().map((l,index) => {
        if(index === position){
            position += 3
            return `${l},`
        }else{
            return l
        }
    }).reverse().join('')
}

//GENERATE RANDOM ID
function generateRandomId(){
    const date = new Date(Date.now());
    const time = date.toLocaleTimeString();
    let random = String(Math.random()) + time.split(':')[1]
    let array = random.split('.')[1].split('').slice(0,5)
    // shuffle
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('')
}

export { formatPrice, generateRandomId }