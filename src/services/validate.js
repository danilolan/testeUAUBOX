function validate(str, length){
    str = str.replaceAll('_', '').replaceAll('(', '').replaceAll(')', '').replaceAll('.', '').replaceAll('-', '').replaceAll('/', '')
    if(str === '') return false  
    if(length && str.length < length) return false
    else return true
}

export default validate