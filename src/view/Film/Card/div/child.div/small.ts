const createSmall = (release_date: string): HTMLElement => {
    const smallElement: HTMLElement = document.createElement('small');

    smallElement.classList.add('text-mute');
    smallElement.textContent = release_date;

    return smallElement;
}

export { createSmall };