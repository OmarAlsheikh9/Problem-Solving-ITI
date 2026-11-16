function search(nums, target) {
    let left=0,right=nums.length-1,mid;
    while(left<=right){
        mid=Math.trunc((left+right)/2);
        if(nums[mid]===target) return mid;
        else if(nums[left]<=nums[mid]){// if left array sorted then compare
            if(target>=nums[left]&&target<nums[mid])// then go left because target in its range
                right=mid-1;
            else
                left=mid+1;
        }
        else{
            if(target>nums[mid]&&target<=nums[right])  left=mid+1;
            else right = mid -1 ;
        }
    }
    return -1;
}