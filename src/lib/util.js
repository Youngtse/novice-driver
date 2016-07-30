/**
 * Created by Yang on 16/7/24.
 */
import 'bluebird';

export default {
    //读本地text
    readTextFile(filePath) {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", filePath, false);
        return new Promise(function (resolve, reject) {
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4) {
                    if (rawFile.status === 200 || rawFile.status == 0) {
                        resolve(rawFile.responseText);
                    }
                }
                reject();
            }
        });
    }
}