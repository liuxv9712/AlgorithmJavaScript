/**
 * @param {number[]} height
 * @return {number}
 */

//暴力法：利用两层遍历，计算任意两个柱子所形成的容器的容量，保存最大的容量即可。
//O(n^2)
function maxArea(height){
	var res=0;
	for(var i=0; i<height.length; i++){
		for(var j=i+1; j<height.length;j++){
			res = Math.max(res,(j-i)*Math.min(height[i],height[j]));
		}
	}
	return res;
}
maxArea([1,8,6,2,5,4,8,3,7])
//双指针法：
//O(n)
var maxArea = function(height){
	let res = 0;
	let left = 0, right=height.length-1;
	
	while(left!=right){
		res = Math.max(res,(right-left) * Math.min(height[left],height[right]));
		height[left]<height[right] ? (left++):(right--);
	}
	return res;
}
maxArea([1,8,6,2,5,4,8,3,7])

























