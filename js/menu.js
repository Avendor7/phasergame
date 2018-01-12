var menuState = {

    create: function () {

        //game.add.plugin(Phaser.Plugin.Debug);
        //game.add.plugin(Phaser.Plugin.Inspector);
        //game.add.plugin(PhaserSuperStorage.StoragePlugin);
        //game.add.plugin(PhaserInput.Plugin);
        var gamewidth = 1280;
        var gameheight = 800;

        var background = game.add.image(game.world.centerX-gamewidth/2, game.world.centerY-gameheight/2, 'menu-background');
        background.width = 1280;
        background.height = 800;
       
        button = game.add.button(620, 600, 'button', actionOnClick, this, 2, 1, 0);

        button.onInputOver.add(over, this);
        button.onInputOut.add(out, this);
        button.onInputUp.add(up, this);


    }

};
function actionOnClick(){
    alert('button pressed');
}
function up(){
    
}

function out(){
    
}

function over(){
    
}