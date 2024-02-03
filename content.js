function modifyText(element) {
    element.innerHTML = element.innerHTML.replace(/ЕКТС (\d+),(\d+)/g, function(match, p1, p2) {
        let number = parseInt(p1, 10) + 6;
        return `ЕКТС ${number},${p2}`;
    });
}
const element = document.getElementById("section");
modifyText(element)