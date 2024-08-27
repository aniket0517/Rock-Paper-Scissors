const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

        update();

        function pickcomputermove() {
            const randomnumber = Math.random();
            let computermove = '';

            if (randomnumber >= 0 && randomnumber < 1 / 3) {
                computermove = 'rock';
            }
            else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
                computermove = 'paper';
            }
            else if (randomnumber >= 2 / 3 && randomnumber < 1) {
                computermove = 'scissors'
            }
            return computermove;
        }

        function update() {
            document.querySelector('.js-score')
                .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
        }

        function playgame(playermove) {
            const computermove = pickcomputermove()
            let result = '';
            if (playermove === 'scissors') {
                if (computermove === 'rock') {
                    result = 'You lose';
                } else if (computermove === 'paper') {
                    result = 'You win';
                } else if (computermove === 'scissors') {
                    result = 'Tie';
                }
            } else if (playermove === 'rock') {
                if (computermove === 'rock') {
                    result = 'Tie';
                } else if (computermove === 'paper') {
                    result = 'You lose';
                } else if (computermove === 'scissors') {
                    result = 'You win';
                }
            } else if (playermove === 'paper') {
                if (computermove === 'rock') {
                    result = 'You win';
                } else if (computermove === 'paper') {
                    result = 'Tie';
                } else if (computermove === 'scissors') {
                    result = 'You lose';
                }
            }

            if (result === 'You win') {
                score.wins += 1;
            }
            else if (result === 'You lose') {
                score.losses += 1;
            }
            else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score))

            update();
            document.querySelector('.js-result')
                .innerHTML = result;

            document.querySelector('.js-moves')
                .innerHTML = `you 
        <img src="emoji/${playermove}-emoji.png"
        class="js-img">
        <img src="emoji/${computermove}-emoji.png"
        class="js-img">
        computer`
        }
