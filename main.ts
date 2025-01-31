/**
 * This is my workspace comment
 */
player.onChat("run", function () {
    blocks.place(GRASS, pos(0, 0, 0))
    agent.teleportToPlayer()
    doSomething("Goodbye")
    doSomething2(12)
})
function doSomething (text: string) {
    player.say(text)
    for (let index = 0; index < 4; index++) {
        mobs.spawn(CHICKEN, pos(0, 0, 0))
    }
}
// This is a function to spawn bats
function doSomething2 (num: number) {
    for (let index = 0; index < num; index++) {
        mobs.spawn(BAT, pos(0, 10, 0))
    }
}
player.say("Hi!")
gameplay.setWeather(CLEAR)
