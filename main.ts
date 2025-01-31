player.onChat("run", function () {
    blocks.place(GRASS, pos(0, 0, 0))
    agent.teleportToPlayer()
    doSomething("Goodbye")
})
function doSomething (text: string) {
    player.say(text)
    for (let index = 0; index < 4; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
}
player.say("Hi!")
gameplay.setWeather(CLEAR)
