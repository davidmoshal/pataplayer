const Player = require('omxconductor')

const player = new Player('media/bigbuckbunny.mp4', { loop: true })

player
    .open()
    .then((result) => {
        console.log('Clip started playing OK! Some information:', result)
    })
    .catch((err) => {
        console.error('error on open:', err)
    })
