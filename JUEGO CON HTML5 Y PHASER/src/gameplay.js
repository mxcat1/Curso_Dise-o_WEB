GamePlayManager = {
    init: function () {
        console.log('init')
    },
    preload: function () {
        console.log('preload')
    },
    create: function () {
        console.log('create')
    },
    update: function () {
        console.log('update')
    }

};

let game = new Phaser.Game(1130,640,Phaser.AUTO);
game.state.add('gameplay',GamePlayManager);
game.state.start('gameplay');

