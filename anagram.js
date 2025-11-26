function isAnagram(str1, str2) {
    const format = s => s.replace(/\s+/g, '').toLowerCase();

    const a = format(str1);
    const b = format(str2);

    if (a.length !== b.length) return false;

    const count = {};

    for (let char of a) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of b) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));      
console.log(isAnagram("chien", "niche"));        
console.log(isAnagram("Hello", "World"));        
console.log(isAnagram("anagram", "nagaram"));    
console.log(isAnagram("test", "ttew"));          
console.log(isAnagram("Dormitory", "Dirty room"));
console.log(isAnagram("abc", "abcc"));           
