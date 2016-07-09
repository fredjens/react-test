
function articles(state = [], action) {
    switch (action.type) {
    case 'LIKE_ARTICLE' :
        console.log("Incrementing Likes!!");
        return state.map((article, index) => {
            if (index === action.index) {
                return Object.assign({}, article, {
                    likes: article.likes + 1,
                });
            }
            return article;
        });
    case 'ADD_ARTICLE' :
        console.log("Adding articles");
        // console.log(action);
        return [
            ...state, {
                id: action.id,
                likes: 0,
                text: action.text,
                title: action.title,
            },
        ];
    case 'REMOVE_ARTICLE' :
        console.log("Adding articles");
        // console.log(action);
        return [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1),
        ];
    default:
        return state;
    }
}

export default articles;
