
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};

/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
function isPalindrome(s, left, right) {
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
