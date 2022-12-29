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

export { formatPrice }