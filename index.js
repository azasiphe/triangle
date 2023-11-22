function calculateArea() {
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);
    if (isNaN(base) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }
let area = 0.5 * base * height;
document.getElementById("result").innerHTML = "Area: " + area.toFixed(2);
}
