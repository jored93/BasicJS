function HTMLElements(string) {
    let Regex = /\<.*?\>/g;
    let FindStrArray = string.match(Regex);
    let open = new Array();
    let close = new Array();
    let tmp1 = new String("");
    let tmp2 = new String("");
    for(let i=0; i<FindStrArray.length; i++){
        if(FindStrArray[i].startsWith("</")){
            close.push(FindStrArray[i]);
        }
        else{
            open.push(FindStrArray[i]);
        }
    }
    
    for(let i=0; i<open.length; i++){
        tmp1 = new String("");
        for(let j=0; j<open[i].length; j++) {
            if(open[i][j]!=='<' && open[i][j]!=='>') {
                tmp1 += open[i][j];
            }
        }
        for(let m=0; m<close.length; m++) {
            tmp2 = new String("");
            for(let n=0; n<close[m].length; n++) {
                if(close[m][n]!=='<' && close[m][n]!=="/" && close[m][n]!=='>') {
                    tmp2 += close[m][n];
                }
            }
            if(tmp1===tmp2) {
                open.splice(i, 1);
                i--;
                close.splice(m, 1);
                break;
            }
        }
    }
    return (open.length === 0 ) ? true : open[open.length-1].slice(1).slice(0, open[0].length-2);
}
console.log(HTMLElements("<div><div><b></b></div></p>"));