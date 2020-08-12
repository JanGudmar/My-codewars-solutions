# https://www.codewars.com/kata/54da5a58ea159efa38000836 - kata description.

def find_it(seq):
    nums = set()
    for num in seq:
        if num in nums:
            nums.remove(num)
        else:
            nums.add(num)
    return nums.pop()