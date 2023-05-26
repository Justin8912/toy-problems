function threeSum(nums) {
	const results = []
	let target = 0

	if (nums.length < 3) return results

  nums.sort((a, b) => a - b)

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > target) break
		if (i > 0 && nums[i] === nums[i - 1]) continue

		let j = i + 1
		let k = nums.length - 1

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === target) {
				results.push([nums[i], nums[j], nums[k]]);

        // skip over duplicated values of j and k
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

        // Move j and k up and down
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else {
				k--
			}
		}
	}

	return results
};
