function isAnagram(str1,str2){ //camel case
    str1 = str1.toString().toLowerCase().split('').sort().join('');
    str2 = str2.toString().toLowerCase().split('').sort().join('');
    return str1 === str2;
}
module.exports = isAnagram;