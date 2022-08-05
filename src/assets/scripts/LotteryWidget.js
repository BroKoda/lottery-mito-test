var $ = require('jquery');

export default class LotteryWidget {
    constructor() {
    }

    initialize() {
        let stop = false;
        let loopElements = null;

        // PLAYER NUMBERS VARIABLES
        let playerNumbers = [];
        const playerNumberFields = $('.js-player-number');
        let speed = 1;
        const speedInput = $('.js-speed');

        // GENERATED NUMBERS VARIABLES
        let winningNumbers = [];
        const winningNumberBox = $('.js-winning-number');

        // COUNT MATCHES VARIABLES
        let matchThisRound = 0;
        const twoMatchBox = $('.js-two-matches');
        const threeMatchBox = $('.js-three-matches');
        const fourMatchBox = $('.js-four-matches');
        const fiveMatchBox = $('.js-five-matches');
        let twoMatch = 0;
        let threeMatch = 0;
        let fourMatch = 0;
        let fiveMatch = 0;

        // SUMMARY VARIABLES
        const summaryTickets = $('.js-number-of-tickets');
        const summaryYears = $('.js-years-spent');
        const summaryMoney = $('.js-cost-of-tickets');
        let ticketNumber = 0;
        let yearsSpent = 0;
        let weeksSpent = 0;
        let moneySpent = 0;

        // EVENT HANDLERS
        $('.js-random-numbers').on('click', function () {
            generateNumberForPlayer();
        })

        $('.js-start').on('click', function () {
            stop = false;
            getSpeed();
            getPlayerNumber();

            loopElements = setInterval(function () {
                if (stop !== true) {
                    generateWinningNumbers();
                    showWinningNumbers();
                    countMatches();
                    handleMainCounter();
                    handleSummaryDisplay();
                } else if (stop === true) {
                    clearInterval(loopElements);
                }
            }, speed);
        });

        $('.js-stop').on('click', function () {
            stop = true;
        })


        // USED FUNCTIONS
        const generateNumberForPlayer = function () {
            playerNumbers = [];
            while (playerNumbers.length < 5) {
                let n = getRandomInt(1, 90);

                if (playerNumbers.indexOf(n) === -1) {
                    playerNumbers.push(n);
                }
            }
            playerNumbers.sort();

            $(playerNumberFields).each((index) => {
                $(playerNumberFields[index]).val(playerNumbers[index]);
            });
        }

        const getSpeed = function () {
            speed = speedInput.val();
        }

        const getPlayerNumber = function () {
            playerNumbers = [];
            $(playerNumberFields).each((index, elem) => {
                playerNumbers.push(parseInt($(elem).val()))
            })
            playerNumbers.sort();
        }

        const generateWinningNumbers = function () {
            winningNumbers = [];
            while (winningNumbers.length < 5) {
                let n = getRandomInt(1, 90);

                if (winningNumbers.indexOf(n) === -1) {
                    winningNumbers.push(n);
                }
            }
            winningNumbers.sort();
        }

        const showWinningNumbers = function () {
            $(winningNumberBox).each((index) => {
                $(winningNumberBox[index]).text(winningNumbers[index]);
            });
        }

        const countMatches = function () {
            matchThisRound = 0;
            $(winningNumbers).each((wkey, wvalue) => {
                $(playerNumbers).each((pkey, pvalue) => {
                    if (wvalue === pvalue) {
                        matchThisRound += 1
                    }
                })
            })
        }

        const handleMainCounter = function () {
            if (matchThisRound === 2) {
                twoMatch += 1;
                twoMatchBox.text(twoMatch);
            } else if (matchThisRound === 3) {
                threeMatch += 1;
                threeMatchBox.text(threeMatch);
            } else if (matchThisRound === 4) {
                fourMatch += 1;
                fourMatchBox.text(fourMatch);
            } else if (matchThisRound === 5) {
                fiveMatch += 1;
                fiveMatchBox.text(fiveMatch);
                clearInterval(loopElements);
                summaryYears.css('font-size', '25px');
                summaryYears.css('color', '#020056');
            }
        }

        const handleSummaryDisplay = function () {
            ticketNumber += 1;
            weeksSpent += 1;
            moneySpent += 300;

            if (weeksSpent === 52) {
                yearsSpent += 1;
                weeksSpent = 0;
            }

            summaryTickets.text(numberFormat(ticketNumber))
            summaryYears.text(numberFormat(yearsSpent))
            summaryMoney.text(numberFormat(moneySpent) + ' Ft');
        }

        const numberFormat = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }

        const getRandomInt = function(min, max) {
            let byteArray = new Uint8Array(1);
            window.crypto.getRandomValues(byteArray);

            let range = max - min + 1;
            let max_range = 256;
            if (byteArray[0] >= Math.floor(max_range / range) * range)
                return getRandomInt(min, max);
            return min + (byteArray[0] % range);
        }
    }
}