class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
        return false
        let asciiArray1 = s.split("").map(char => char.charCodeAt(0));
        let asciiArray2 = t.split("").map(char => char.charCodeAt(0));
         asciiArray1 = [...asciiArray1].sort((a, b) => a - b);
         asciiArray2 = [...asciiArray2].sort((a, b) => a - b);
        for (let i = 0; i<asciiArray1.length;i++)
        {
            if (asciiArray1[i]-asciiArray2[i]!==0)
            return false
        }
        return true

    }
}
