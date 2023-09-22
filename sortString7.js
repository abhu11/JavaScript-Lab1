let sortString = ['nèha', 'hardik', 'éaster', 'chaitanya', 'spain'];
sortString.sort(function (str1, str2) {
return str1.localeCompare(str2);
});
console.log('Here is the Employee names in ascending order using ASCII code', sortString)