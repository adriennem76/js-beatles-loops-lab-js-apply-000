// add solution here
function theBeatlesPLay (musicians, intruments){
  let array = []
  for (let i = 0; i<musicians.length; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    array.push(string)
  }
  return array
}

function johnLennonFacts (facts){
  let factArray = []
  var i = 0
  while (i<facts.length){
    factArray.push (`${facts[i]}!!!`)
    i++
  }
}