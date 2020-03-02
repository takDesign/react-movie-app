// this is action
// Text is user's search from input
export const SEND_TEXT = 'SEND_TEXT';
export const SEND_ID = 'SEND_ID';
export const SEND_TITLE = 'SEND_TITLE';

export const inputText = text => ({
    type: SEND_TEXT,
    text
});

export const movieId = movieid => ({
    type: SEND_ID,
    movieid
});

export const movieTitle = title => ({
    type: SEND_TITLE,
    title
});
