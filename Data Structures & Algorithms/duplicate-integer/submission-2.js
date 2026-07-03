class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b); 
        let sol;
        for (let i =0;i<nums.length;i++)
        {
            sol = nums[i]-nums[i+1]
            if (sol===0)
            return true;
        }
        return false;
    }
}
