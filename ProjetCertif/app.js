const txtAnim = document.querySelector('h3');

new Typewriter(txtAnim, {
    deleteSpeed: 5
    

})
.changeDelay(20)
.typeString('Bienvenue dans le')
.pauseFor(300)
.typeString('<strong>, Metaverse</strong> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #d12aff"> Metaverse !')
.start()
