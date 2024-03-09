let games = [
    { id: '1', title: 'Zelda, Tears of the kingdom', platform: ['Switch'] },
    { id: "2", title: 'Super Mario Odyssey', platform: ['Xbox'] },
    { id: "3", title: 'The Legend of Zelda: Breath of the Wild', platform: ['PS5'] },
    { id: "4", title: 'Animal Crossing: New Horizons', platform: ['Xbox'] },
    { id: "5", title: 'Pokémon Sword and Shield', platform: ['PC'] }
];

let authors = [
    { id: '1', name: 'Mario', verified: true },
    { id: '2', name: 'Link', verified: true },
    { id: '3', name: 'Luigi', verified: false },
    { id: '4', name: 'Zelda', verified: true },
    { id: '5', name: 'Pikachu', verified: false }
];

let reviews = [
    { id: '1', rating: 5, content: 'Awesome game!', author_id: '1', game_id: '1' },
    { id: '2', rating: 4, content: 'Enjoyable experience.', author_id: '2', game_id: '2' },
    { id: '3', rating: 3, content: 'Good game but could be better.', author_id: '3', game_id: '3' },
    { id: '4', rating: 2, content: 'Disappointing.', author_id: '4', game_id: '4' },
    { id: '5', rating: 1, content: 'Not worth the hype.', author_id: '5', game_id: '5' }
];


export default{ games,authors,reviews}