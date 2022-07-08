import { createPath } from "./path";

var svgNS = "http://www.w3.org/2000/svg";

const createSvg = (isFavorite: boolean): Element => {
    const color: string = isFavorite ? "red" : "#ff000078";

    const svgElement = document.createElementNS(svgNS, "svg");

    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("stroke", "red");
    svgElement.setAttribute("fill", color);
    svgElement.setAttribute("width", "50");
    svgElement.setAttribute("height", "50");
    svgElement.classList.add('bi');
    svgElement.classList.add('bi-heart-fill');
    svgElement.classList.add('position-absolute');
    svgElement.classList.add('p-2');
    svgElement.setAttribute("viewBox", "0 -2 18 22");
    
    svgElement.append(createPath());

    return svgElement;
}

export { createSvg };