//面试题一
/* var a=10;
function test(){
	console.log(a);//undefined
	a=100;
	console.log(a);//100
	console.log(this.a)//因为在node.js环境中没有window，所以运行的结果是undefined。而在浏览器环境下有window，结果是10
	var a;
	console.log(a)//100
}
test(); */


//leetcode--生成有几对括号的所有序列
/*
	@param {number} n
	@return {string[]}
*/

var generateParenthesis = function(n){
	let res = []
	function fn(str,l,r){
		if(l==n&&r==n){
			res.push(str);
			return;
		}
		if(l<n){
			fn(str+'(',l+1,r);
		}
		if(l>r){
			fn(str+')',l,r+1);
		}
	}
	fn("",0,0);
	return res;
}
generateParenthesis(3)