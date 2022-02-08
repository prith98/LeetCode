/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newArr = nums1.concat(nums2);
    newArr.sort(function(a,b) {
        return a - b;
    })
    
    if (newArr.length === 0) {
        return 0;
    }
    
    if (newArr.length === 1) {
        return newArr[0];
    }
    
    if (newArr.length % 2 === 0) {
        return (newArr[(newArr.length / 2) - 1] + newArr[newArr.length / 2]) / 2;
    }
    
    if (newArr.length % 2 !== 0) {
        return newArr[((newArr.length - 1) / 2)];
    }
    
};