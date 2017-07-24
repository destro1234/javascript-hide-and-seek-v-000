function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const rank= document.querySelectorAll('ul.ranked-list li')

  for(let i= 0, l= rank.length; i< l; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n

}
}

function deepestChild(){
  let rank= document.getElementById('grand-node')
  let nextRank= rank.children[0]

  while(nextRank){
    rank= nextRank
    nextRank= rank.children[0]
  }

  return rank

}
