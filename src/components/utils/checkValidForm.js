export default function checkValidForm(newEmployee) {
    var result = true;
    for (let i = 0; i < Object.entries(newEmployee).length; i++) {
        if (Object.entries(newEmployee)[i][1] === '' || Object.entries(newEmployee)[i][1] === undefined) {
            result = false;
        }
    }
    return result;
}