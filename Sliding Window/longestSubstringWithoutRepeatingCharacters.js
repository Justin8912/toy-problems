// Really liked this solution: https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  if (s.length < 2) return s.length;

  for (let i = 0 ;i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[i]);
    // set.size would also work here in place of i - left + 1
    maxSize = Math.max(maxSize, i - left + 1);
  }
  return maxSize;


}