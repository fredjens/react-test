
export function like(index) {
    return {
        type: 'LIKE_ARTICLE',
        index,
    };
}

export function addArticle(item) {
    return {
        type: 'ADD_ARTICLE',
        id: item.id,
        title: item.title,
        text: item.text,
    };
}

export function removeArticle(index) {
    return {
        type: 'REMOVE_ARTICLE',
        index,
    };
}
