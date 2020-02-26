/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let res = [];
	if(nums.length<3){
		return res
	}
	// 排序
	nums.sort((a,b) => a-b);
	for(let i=0; i<nums.length; i++){
		if(nums[i]>0) break;
		//去重
		if(i>0 && nums[i]== nums[i-1]) continue;
		let l=i+1, r=nums.length-1;
		while(l<r){
			const sum = nums[i]+nums[l]+nums[r];
			if(sum == 0){
				res.push([nums[i],nums[l],nums[r]]);
				// 去重
				while (l<r && nums[l] == nums[l+1]) l++;
				// 去重
				while (l<r && nums[r-1] == nums[r]) r--;
				l++;
				r--;
			}
			else if(sum<0) l++;
			else if(sum>0) r--;
		}
	}
	return res;
};