var menuState = {

    create: function () {

        //game.add.plugin(Phaser.Plugin.Debug);
        //game.add.plugin(Phaser.Plugin.Inspector);
        //game.add.plugin(PhaserSuperStorage.StoragePlugin);
        //game.add.plugin(PhaserInput.Plugin);
        var gamewidth = 1280;
        var gameheight = 800;

        var backgroundx = game.world.centerX-gamewidth/2;
        var backgroundy = game.world.centerY-gameheight/2;

       

        var background = game.add.image(backgroundx, backgroundy, 'menu-background');
        
        background.width = 1280;
        background.height = 800;
       
        button = game.add.button(backgroundx+580, backgroundy+520, 'button', this.actionOnClick, this, 2, 1, 0);

        button.onInputOver.add(this.over, this);
        button.onInputOut.add(this.out, this);
        button.onInputUp.add(this.up, this);


    }, 

    actionOnClick: function(){
        game.state.start('dungeon');
    },

    up: function(){

    },

    out: function(){

    },

    over: function(){
        
    }

};