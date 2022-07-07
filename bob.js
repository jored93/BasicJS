function check(s, str){
    let chars = s;
    let st = new Set();
    for(let i = 0; i < str.length; i++){
        st.add(str[i]);
    }
            
    for (let c of chars) {
        if(!st.has(c)) return false;
    }

    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] == chars[i + 1]) {
            return false;
        }
    }
    return true;
}

    function getStrings(str, arr){
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i], str)) {
        console.log((arr[i] + " ").toLowerCase());
        }
    }
}

let str = "ABCD";
let arr = new Array("AABCDA", "ABCDZADC","ABCDBCA", "ABCDABDCA");
getStrings(str, arr);
