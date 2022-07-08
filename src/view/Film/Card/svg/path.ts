import { pathClickEventListener } from '../../../../helpers/helpers';

var svgNS = "http://www.w3.org/2000/svg";

const createPath = (): Element => {
    const pathElement = document.createElementNS(svgNS, "path");
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("d", "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z");
    pathElement.addEventListener('click', pathClickEventListener);

    return pathElement;
};

export { createPath };