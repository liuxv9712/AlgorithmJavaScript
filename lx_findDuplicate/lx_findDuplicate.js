/**给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-duplicate-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
	let res;
	for(let i=0; i<nums.length; i++){
		let l = i+1, r= nums.length-1;
        if(nums[i]== nums[l]){ return nums[i]}
		while(l<r){
			if(nums[i]== nums[l] || nums[i] == nums[r]){
                return nums[i];
			}
            if(nums[l]== nums[r]) {
                res = nums[l]
                return res;
            }
			l++;
			r--;
		}
	}
	return res;
};
