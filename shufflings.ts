export function shufflings(text: string): string[] {
    const arText = text.split('');
    let arTextTemp = [...arText];
    const rsText: string[] = [];

    for (let _ in arText) {
        let rsText2: string[] = [];
        for (let j = 0; j < arTextTemp.length; j++) {
            let rsText3: string[] = [];
            for (let k = 0; k < arTextTemp.length; k++) {
                if (j != k) {
                    rsText3.push(arTextTemp[k]);
                }
            }
            rsText2 = [arTextTemp[j], ...rsText3];
            rsText.push(rsText2.join(''));
        }

        let arr = arTextTemp;
        arr.push(arr.shift() as string);
        arTextTemp = arr;
    }
    console.log(rsText,'rsText');
    
    return rsText;
}

