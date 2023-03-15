from collections import defaultdict

# Given an array of strings strs, group the anagrams together.
# You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging
# the letters of a different word or phrase, typically using all
# the original letters exactly once.

string = ["eat", "tea", "tan", "ate", "nat", "bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

def groupAnagrams(strs):
    """
    :type strs: List[str]
    :rtype: List[List[str]]
    """
    res = defaultdict(list)
    for s in strs:
        count = [0] * 26  # a .. z
        for l in s:
            count[ord(l) - ord('a')] += 1
        res[tuple(count)].append(s)
    return res.values()


print(groupAnagrams(string))
