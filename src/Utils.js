/**
 * Created by azlar on 12/10/2017.
 */


export function guid() {
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
}
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000);
}