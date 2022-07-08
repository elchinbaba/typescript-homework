const createH1 = (original_title: string): HTMLHeadingElement => {
    const h1Element: HTMLHeadingElement = document.createElement('h1');
    h1Element.id = "random-movie-name";
    h1Element.classList.add('fw-light');
    h1Element.classList.add('text-light');
    h1Element.innerText = original_title;

    return h1Element;
};

export { createH1 };