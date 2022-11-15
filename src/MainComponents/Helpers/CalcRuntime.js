export default function runtime(val){
    let num = parseFloat(val.replace( /[^\d\.]*/g, ''))
    let hour = Math.floor(num/60);
    let min = Math.floor(num%60);
    return `${hour} hr ${min} min`; 
}


