const tic_tac_toe = {
    board: ['', '', '', '', '', '', '', '', ''],



    simbols: {
        options: ['x', 'o'],
        turn_index: 0,
        change: function () {
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        

        }


    },




    container_element: null,



    game_over: false,

    winning_sequences: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],

    ],

    init: function (container) {
        this.container_element = container;
    },
    make_play: function (position) {
        if (this.game_over == false) {

            if (this.board[position] === '') {
                
                this.board[position] = this.simbols.options[this.simbols.turn_index];
                
                this.draw();
                let winning_sequence_index = this.check_winning_sequences(this.simbols.options[this.simbols.turn_index]);
                if (winning_sequence_index >= 0) {

                    this.game_is_over();
                    this.change_winner_color(winning_sequence_index);
                } else {
                    this.simbols.change();
                    this.change_player(this.simbols.options[this.simbols.turn_index]);
                }
                return true;
            } else {
                return false;
            }
        }


    },


    change_player: function (jogador) {
        var player = document.getElementById('player');
        player.innerHTML = jogador;
    },


    change_winner_color: function (index) {
        for (i in this.winning_sequences) {
            console.log(this.winning_sequences[index][i]);
            var div = document.getElementById(this.winning_sequences[index][i]);
            div.style.backgroundColor = '#f15555';


        }


    },

    game_is_over: function () {
        this.game_over = true;
        console.log('Game over');


    },




    check_winning_sequences: function (simbol) {
        for (i in this.winning_sequences) {
            if (this.board[this.winning_sequences[i][0]] == simbol &&
                this.board[this.winning_sequences[i][1]] == simbol &&
                this.board[this.winning_sequences[i][2]] == simbol) {
                // console.log(this.winning_sequences[i]);
                return i;

            }
        }
        return -1;
    },


    start: function () {

        this.change_player(this.simbols.options[0]); 
        this.draw();

    },


    restart: function () {

        this.board.fill('');
        this.game_over = false;
        this.draw();



    },


    draw: function () {
        let content = '';

        for (i in this.board) {
            content += '<div id ="' + i + '" onclick ="tic_tac_toe.make_play(' + i + ')" >' + this.board[i] + ' </div> ';


        }

        this.container_element.innerHTML = content;
    


    }


};