const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod(type = null) {
        if (type === 1) {
            setTimeout(() => {
                this.emit('bellRing', {
                    period: 'first',
                    text: 'period ended',
                });
            }, 2000);
        } else {
            console.log('No result found');
        }
    }
}

module.exports = School;
