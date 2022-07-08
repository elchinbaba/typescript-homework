const pathClickEventListener = (event: Event): void => {
    const value: string = (<any>event).target.parentElement.attributes.fill.nodeValue;
    const id: number = +(<any>event).target.parentElement.parentElement.id;
    if (value === "#ff000078") {
        (<any>event).target.parentElement.attributes.fill.nodeValue = "red";
        if (!localStorage.getItem('favoriteIds'))
            localStorage.setItem('favoriteIds', JSON.stringify([id]));
        else 
            localStorage.setItem('favoriteIds', JSON.stringify([...JSON.parse(<any>localStorage.getItem('favoriteIds')), id]));

    }
    else if (value === "red") {
        (<any>event).target.parentElement.attributes.fill.nodeValue = "#ff000078";

        const favoriteIds: any = JSON.parse(<string>localStorage.getItem('favoriteIds'));
        for (let i = 0; i < favoriteIds.length; i++) {
            if (favoriteIds[i] === id) {
                favoriteIds.splice(i, 1);
                document.getElementById('favorite-movies')?.querySelector(`[id='${id}']`)?.remove();
                break;
            }
        }
        localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));
    }
};

export { pathClickEventListener };