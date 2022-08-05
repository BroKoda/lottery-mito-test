var $ = require('jquery');
import LotteryWidget from './LotteryWidget.js';

const lotteryPageOnload = () => {
    $(document).ready(function () {
        const lottery = new LotteryWidget();
        lottery.initialize();
    });
};

export default lotteryPageOnload;