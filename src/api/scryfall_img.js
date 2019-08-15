import $ from 'jquery';

var imgRequestParams = cardLink => {
    return {
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://img.scryfall.com/cards' + cardLink,
        encoding: null
    };
}

export default cardLink => $.ajax(imgRequestParams(cardLink));
