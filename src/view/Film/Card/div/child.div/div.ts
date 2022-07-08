import { createSmall } from "./small";

const createChildDiv = (release_date: string): HTMLDivElement => {
    const childDivElement: HTMLDivElement = document.createElement('div');

    childDivElement.classList.add('d-flex');
    childDivElement.classList.add('justify-content-between');
    childDivElement.classList.add('align-items-center');

    childDivElement.append(createSmall(release_date));
    
    return childDivElement;
}


export { createChildDiv };