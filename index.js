
//horse



function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
/*
  Define a function nestedTarget() that pulls a .target out of #nested
  (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
  (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
*/
//return document.getElementById('nested').querySelectorAll('div.target')

 var temp = document.getElementById('nested').getElementsByClassName('target')[0]

return temp
}





/*Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
(You might need to make use of parseInt()*/
function increaseRankBy(n){


var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')



for (let i = 0, l = lis.length; i < l; i++) {
var temp = parseInt(lis[i].innerHTML)
temp += n;
lis[i].innerHTML =temp;

  //lis[i].innerHTML = (parsed).toString()
}
//return lis;

}




/*
Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
(Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
This is challenging to implement correctly, but not beyond your ability!)*/
function deepestChild(){

//pull out the mostly DEEPLY NESTED CHILD WHAT THE FUCK.

var deep = document.getElementById('grand-node').querySelectorAll('div')
var l = deep.length-1
return deep[l]


}
