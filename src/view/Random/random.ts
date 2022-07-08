import { designMovie } from './designMovie'; 

const chooseRandomMovie = (cards: any) => {
    const random: number = Math.floor(Math.random()*20);
    const card = cards[random];

    const section: HTMLElement = <HTMLElement>document.getElementById('random-movie');
    section?.querySelector('div.row')?.remove();

    const style = section.style;
    style.backgroundImage = `url(https://image.tmdb.org/t/p/original${card.backdrop_path})`;
    style.backgroundRepeat = "no-repeat";
    style.backgroundAttachment = "fixed";
    style.backgroundPosition = "center";
    style.backgroundSize = "cover";

    section?.append(designMovie(card.original_title, card.overview));
};

export { chooseRandomMovie };