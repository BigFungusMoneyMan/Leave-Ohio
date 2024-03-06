function Hell () {
	
}
function Nevada () {
	
}
function Pause_until_ANY () {
    pauseUntil(() => controller.anyButton.isPressed())
}
function Start () {
    adventure.setScoreOverride(adventure.Currency.Coins, 1)
    adventure.addToTextlog("You are in Ohio")
    scene.setBackgroundImage(assets.image`Ohio`)
    Pause_Until_A()
    adventure.addToTextlog("Your goal is to leave Ohio")
    Pause_Until_A()
    adventure.addToTextlog("You have 4 options for where to go:")
    Pause_Until_A()
    adventure.addToTextlog("Pennsylvania (Right arrow) ,Michigan (Up arrow) , Kentucky (Down arrow) ,and Indiana (Left arrow).")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        Indiana()
    } else if (controller.right.isPressed()) {
        Pensilvania()
    } else if (controller.up.isPressed()) {
        Michigan()
    } else if (controller.down.isPressed()) {
        Kentucky()
    }
}
function Michigan () {
    adventure.addToTextlog("A large sign says \"Welcome to Michigan\"")
    scene.setBackgroundImage(img`
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f888888888888888888ffffffffffffff888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff888888fffff888fffffffffffffffff88888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888fff888888ffffff888fffffffffffffffffff888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff88f8888fffffff88ffffffffffffffffffffff8888888888888888
        8888888888888888888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888b8fffffffff8ffffffffffffffffffffffff888888888888888
        8888888888188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff8ffffffffffff8888888fffff888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffff88ffffffffbb88888888888fff888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffff88fffffff88b88888888888fff888888881888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffff8ffffff888b88888888888fff888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffff8888b888888888888ff888888888888888
        88888888888888888888888888ccccccccccccc88888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff8888bb888888888888ff888888888888888
        888888888888888888888cccccccccccccccccccccccccccc8888888888888888888888888888888888888888888888888888888888ffffffff888ffffffff888b8888888888888ff888888888888888
        888888888888888888ccccccccccccccccccccccccccccccccc8888888888888888888888888888ccccccccc88888ccccccccccccc8ffffffff8888fffffffff8b8888888888888ff888888888888888
        8888888888888888cccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccccccccccccccccccfffffff8888888fffffffff8888888888888f8888888888888888
        8888cccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccccccccccccccccccffffff88888888ffffffffff888888888888b8888888888888888
        888ccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888ffffffffffff8888888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888fff8fffffffff888888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccc88888888888888fff8bfffffffff88888888b8888888888888888
        88cccccccccccccccccccccccccccccccccccccccccccccccccc888888888888888888888888888ccccccccccccc8888ccccccccccc88888888888888fff8bbbfffffffff888888b8888888888888888
        88ccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888881888888888888888888888888888ccccccccc888888888888fffff888b.ffffffffff8888b8888888888888888
        88cccccccccccccccccccccccccccccc888888888cccccccc88888888888888888888888888888888888888888888888888888888888888888888888ffffff88b88fffffff88888b8888888888888888
        88cccccccccccccccccccccccc888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff88b8888fffff88888b8888888888888888
        888ccccccccccccccc8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff888bb88888ff888888b8888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff88888bb888888888888b8888888888888888
        88888888888888888888888888888888888888888888888888ccccccccccccc8888888888888888888888888888888888888888888888888888888fffff8888888bb88888888888b8888888888888888
        8888888888888888888888888888888888888888888888cccccccccccccccccccccccc888888888888888888888888888888888888888888888888bffff88888888bb8888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc888888888888888888888888888888888888888888bb88888888888888bb888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc888888888888888888888888888888888888888888b8888888888888888b888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc88888888888888888888888888888888888888fffffff88888888888888b888888888b8888888888888888
        88888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc88888888888888888881888888888888888888ffffffff8888888888888fffff88ffffff88888888888888
        88888881888888888888888888888888188888888888ccccccccccccccccccc8888888888888888888888888888888888888888888888888ffffffffff88888888fffff777ffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff8888888ffff7777ffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffff77777ffffffff88888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff77777fffffffff88888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff777b77fffffff8888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffff77bb6ffffff8888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff77fff66bb666ffff888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff6f66b666ffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccccc8888888888888888888888888888fffff6f66b666ffff88888888888888888888888
        88888888888888888888888888888cccccccccccccc88888888888888888888888888888888888888888cccccccccc88888888888888888888888888fffff666666f6ffff88888888888888888888888
        888888888888888888888888ccccccccccccccccccc888888888888888881888888888888ccccccccccccccccccccccccc8888888888888888888888ffff666666ff6fffff8888888888888888888888
        88888888888888888888888cccccccccccccccccccccc888888888888888888888888888cccccccccccccccccccccccccccccccccc888888888888888fff66666ffff7ffff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc8888888888888888888888888cccccccccccccccccccccccccccccccccccc8888888888888866666666ffff77fff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888666666fffffff777f8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888666666fffffffffff8888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc888888888888866666fffffffffff88888881888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc8888888888888ffffffffffffffff88888888888888888888888
        8888888888888888888888cccccccccccccccccccccccc888888888888888888888888cccccccccccccccccccccccccccccccccccccc88888888888888fffffffffffffff88888888888888888888888
        8888888888888888888888ccccccccccccccccccccccc8888888888888888888888888ccccccccccccccccccccccccccccccccccccc888888888888888fffffffffffffff88888888888888888888888
        88888888888888888888888888888888cccccccccccc88888888888888888888888888ccccccccccccccccccccccccccccccccccc88888888888888888fffffffffffffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888cccccccccccccccccccccccccccccc8888888888888888888fffffff66ffffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888ccccccccccccccccccccccc88888888888888888888888ffffffff66fffff88888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888ccccccccccc88888888888888888888888888888fffffffff66fffff8888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff7ffff8888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666bbbbb77777ffff8888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666bb777ffff8888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888666666666bb7777ff8888888888888888888888
        88888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff7b7777778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff7ff7777778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffff7ffff77778888888888888888888888
        88888888888888888888888888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888888ffffff77fffff7778888888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff77ffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff77fffffffffff888888888888888888888
        8888888888818888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff77ffffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888188888888888888888888888888888888888888888888ffffffffff7fffffff888888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffff88888888888888888888ffffffffff7777ff66688888888888888888888
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffff888888888888888888ffffffffffffff6f66688888888888888888888
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffff88888888888888888ffffffffffffff6666688888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffbbbbbbffffff88888888888888888fffffffffffffff666688888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffbbbbbbbbbbffff88888888888888888fffffffffffffff666688888888888888888888
        8888888888888888888888888888ffff8888888888881888888888888888888888888888888888888888fffffbbbbbbbbbbbbfff88888888888888888ffffffffffffff6666ff8888888888888888888
        88888888888888888fffffffffffffff8888888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbfff88888888888888888ffffffffffffff6666ff8888888888888888888
        88888888888888ffffffffffffffffff888888888888888888888888888888888888888888888888888fffffbbbbbbbbbbbbbfff88888888888888888fffffffffffff6666fff8888888888888888888
        8ffff888888fffffffffffffffffffff888888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbfff88888888888888888fffffffffffff66b6ffff888888888888888888
        8ffffffffffffffffffbbbbbbbbbffff88888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbfff88888888888888888fff6ffffffff66bbfffff888888888881888888
        8ffffffffffffffffbbbbbbbbbbbfff888888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbfff88888888888888888fff6fffffbbbbbb6fffff888888888888888888
        88fffffffffffbbbbbbbbbbbbbbbfff888888888888888888888888888888888888888888888888888fffbbbbbbbbbbbbbbbbfff88888888888888888fff6fff666666666fffff888888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff8888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbbffff88888888818888666ff666666666666fffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff8888888888888888888888888888888888888888888888888ffffbbbbbbbbbbbbbbbbffff88888888888888666666666666666fffffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbffff888888888888ffff888888888888888888888888888888888fffbbbbbbbbbbbbbbbbbbffff88888888888886666666b666ffff77fffffff88888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbfff888888888888fffff8888888888888888ffffffff88888888fffbbbbbbbbbbbbbbbbbbffff888888888888866666666ffffffff77fffffff8888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbffff88888888888fffffffffffffffffffffffffffff88888888fffbbbbbbbbbbbbbbbbbbffff88888888888888fffffffffffffffff77fffff8888888888888888
        88fffbbbbbbbbbbbbbbbbbbbbbbbbffff8888888888ffffffffffffffffffffffffffffff88888888fffbbbbbbbbbbbbbbbbbbbfff88888888888888fffffffffffffffffffffffff888888888888888
        88ffffbbbbbbbbbbbbbbbbbbbbbbbbfff8888888888ffffffffffffffffffffffffeeffff88888888fffbbbbbbbbbbbbbbbbbbbfff88888888888888fffffffffffffffffffffffff888888888888888
        88ffffbbbbbbffffffffbbbbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeeffff88888818fffbbbbbbbbbbbbbbbbbbbfff88888888888888ffffffffff66fffffffffffff888888888888888
        88ffffbbbbbffffffffffffbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fffbbbbbbbbbbbbbbbbbbbfff8888888888888fffffffffff6ffffffffffffff888888888888888
        888fffbbbbbffffffffffffbbbbbbbfff8888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fffbbbbbbfffffffbbbbbbfff888888888888fffff7ffffff66fffffffffffff888888888888888
        888fffbbbbbffff333ffffffbbbbbbffff888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fffbbbbffffffffffbbbbbfff888888888888ffff77fffffff6fffffffffffff888888888888888
        888fffbbbbbfff333333ffffbbbbbbffff888888888fffeeeeeeeeeeeeeeeeeeeeeeefff888888888fffbbbffffffffffffbbbbfff888888888888ffff7ffffffff6ffffffffffffff88888888888888
        888fffbbbbbfff333333ffffbbbbbbbfff888888888fffeeeffffeeeeeeeeeeeeeeeefff888888888fffbbffffff22fffffbbbbfff888888888888fff77ffffffff6fffffffffffffff8888888888888
        888fffbbbbbfff3333333fffbbbbbbbfff888888888fffeeefffffffffffffffffeeefff888888888fffbbffff22222fffffbbbfff888888888888666fffffffff66666fffffffffffff878888888888
        888fffbbbbbfff3333333fffbbbbbbbfff888888888fffeeefffffffffffffffffeeefff888888888fffbbfff2222222ffffbbbfff88888888888f6666fffffff66666666fffffffffff878888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffffffffffffffffeeefff888888888fffbbfff2222222ffffbbbfff8888888888ff666666fff66666666666fffffffffff78888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffbbbbbbbbbbffffeeefff888888888fffbbfff222fff22fffbbbfff888888888fff6666666666b666f6666bbbfffffffff78888888888
        888fffbbbbbfff333fff3fffbbbbbbbffff88888888fffeeefffbbbbbbbbbbffffeeefff888888888fffbbfff222fff22fffbbbfff8888888ffffff66666bbbbb66ffff66666bbfffffff7f888888888
        888fffbbbbbfff3333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbfffeeeefff888888888fffbbfff222fff2ffffbbbfff8888888fffffffff66b7777ffffff666666bbffffff7fff8888888
        888fffbbbbbffff333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbfffeeeefff888888888fffbbfff2222222ffffbbbfff888fffffffffffffffffffffffff7ff66666b66fffff6666888888
        888fffbbbbbffff333333fffbbbbbbbbfff88888888fffeeefffbbbbbbfffbffffeeefff888888888fffbbfff2222222ffffbbbfff888ffff66666fffffffffffffff777fff666666666666666888888
        888fffbbbbbffff33ccccfffccccccccfffcccccc88fffeeefffbbbbbbbbbbffffeeefff888888888fffbcfffcccccccfffcccccccc88ffffffff6ffffffffffffff77fffffff6666666666666ff8888
        888fffbbbbbbfffccccccccccccccccccccccccccccfffccefffbbbbbbbbbbffffeeefff8888888ccfffcccccccccccccccccccccccccfffff.ff6fffffffffffff77ffffffffff66666666666668888
        888fffbbccccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccefff888ccccccccccccccccccccccccccccccccccfffffff666ffffffffffffffffffffffffff6ff...ffb668888
        cccfffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccccf6666ffcccccccffffffcccfffffcfff7ffccff666cccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf6666fcccccccfffffffcccfffffcfff7ffccfffffcccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf66666fcccccccfffffffcccfffffcfff7ffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff6666fccccccccfffffffcccfffffcfff77fffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff66b6fccccccccffffffcccccccccccfff77ffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff66b6fccccccccff7ffccccccccccccfffffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff66b6cccccccccff7ffffcccccccccccffffffccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccff77777cccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccffff77bcccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffff777cccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    Pause_Until_A()
    adventure.addToTextlog("You decide to head to the one city you heard about in Michigan, Detroit.")
    Pause_Until_A()
    adventure.addToTextlog("As you enter the city you notice something very strange...")
    Pause_Until_A()
    adventure.addToTextlog("All of your money has disappeared.  ")
    adventure.setScoreOverride(adventure.Currency.Coins, 0)
    Pause_Until_A()
    adventure.addToTextlog("And as you look around, you notice that no one has anything.")
    Pause_Until_A()
    adventure.addToTextlog("And all the housing seems to be simple communal shelters.")
    Pause_Until_A()
    adventure.addToTextlog("Oh no, Its COMMUNIST DETROIT, hopefully you can make it through okay.")
    Pause_Until_A()
    adventure.addToTextlog("The gates close behind you and won't open again, your going to have to find another way out.")
    Pause_Until_A()
    adventure.addToTextlog("You have some options, you could go to the homeless shelter (Left), into a dark alleyway (Right)")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        adventure.addToTextlog("You walk in and look around. Lots of homeless people are sitting on sleeping bags and things.")
        Pause_Until_A()
        adventure.addToTextlog("You're about to ask one of them directions out of Detroit, but someone sneaks up behind you and stabs you.")
        Pause_Until_A()
        adventure.addToTextlog("You bleed out and die.")
        Pause_Until_A()
        game.setGameOverEffect(false, effects.splatter)
        game.gameOver(false)
    } else if (controller.right.isPressed()) {
        adventure.addToTextlog("You enter the alleyway and see a man hiding in a hole in one of the walls.")
        Pause_Until_A()
        adventure.addToTextlog("\"WHO SENT YOU?")
        adventure.addToTextlog("Press (A) to say \"Communism\" Press (B) to ask \"what?\"")
        Pause_until_ANY()
        if (controller.A.isPressed()) {
            adventure.addToTextlog("The man seems angry. He opens his mouth wide. Wider.")
            Pause_Until_A()
            adventure.addToTextlog("He unhinges his jaw like a python, revealing rows and rows of teeth, all of which seem to be made of money.")
            Pause_Until_A()
            adventure.addToTextlog("He sucks you into his mouth using his pure American lungs, and as you enter his mouth you are converted to pure cash.")
            Pause_Until_A()
            adventure.addToTextlog("The last thing you hear before everything fades to black is \"YOUR RENT HAS JUST INCREASED\"")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.hearts)
            game.gameOver(false)
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("Oh good, you're not one of them.")
            Pause_Until_A()
            adventure.addToTextlog("I'm the monopoly man.")
            Pause_Until_A()
            adventure.addToTextlog("This town used to be a place of bustling markets and sturdy infustructure.")
            Pause_Until_A()
            adventure.addToTextlog("But then the tower rose.")
            Pause_Until_A()
            adventure.addToTextlog("It started turning the people closest to it into communism trolls.")
            Pause_Until_A()
            adventure.addToTextlog("Everyone else got all their money consumed by the vortex.")
            Pause_Until_A()
            adventure.addToTextlog("Now the trolls rule the city, i'm one of the survivors, trying to smuggle people out of the city.")
            Pause_Until_A()
            adventure.addToTextlog("Thank you for listening to my tale. Take 5G as a thanks.")
            adventure.changeScoreOverride(adventure.Currency.Coins, 5)
            Pause_Until_A()
            adventure.addToTextlog("GOODNESS GRACIOUS! LOOK BEHIND YOU! A TROLL!!!!")
            Pause_Until_A()
            adventure.addToTextlog("Do you punch the troll (A) or try to flee (B)")
            Pause_until_ANY()
        }
        if (controller.A.isPressed()) {
            adventure.addToTextlog("The power of freedom and democracy courses through your veins and you punch the troll with such sheer strength that the troll explodes and it rips a hole in space time")
            Pause_Until_A()
            adventure.addToTextlog("Desperate to escape, you beckon back at Monopoly Man but he shakes his head.")
            Pause_Until_A()
            adventure.addToTextlog("\"I can't leave here friend. I have to save any other survivers. Now go, that portal should lead you to a safe place.")
            Pause_Until_A()
            adventure.addToTextlog("The monopoly man uses money magic to make it so the portal takes you to nebraska. Then he pushes you through.")
            Nebraska()
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("You run away out of the alleyway and into the eye of communism's domain.")
            Pause_Until_A()
            adventure.addToTextlog("Yeah it lazers you to death.")
            game.setGameOverEffect(false, effects.melt)
            game.gameOver(false)
        }
    }
}
function Ohiofication () {
    adventure.addImageToTextLog(assets.image`tentacle`)
}
function Iowa () {
	
}
function Pause_Until_A () {
    pauseUntil(() => controller.A.isPressed())
}
function NYC () {
	
}
function Pensilvania () {
    adventure.addToTextlog("A large sign says \"Welcome to Pennsylvania\"")
    Pause_Until_A()
}
function Illinois () {
	
}
function Kentucky () {
    adventure.addToTextlog("A large sign says \"Welcome to Kentucky\"")
    Pause_Until_A()
    adventure.addToTextlog("Upon entering the state, you are almost instantly teleported to a infinite KFC!")
    scene.setBackgroundImage(img`
        1111112222222111111111111122222222211111111111111122222221111111111111112222222111111111222222222111111111112222222211111111111122222221111111111111122222211111
        1111112222222111111111111122222222221111111111111122222221111111111111112222222111111111222222222211111111112222222211111111111122222221111111111111122222221111
        1111112222222111111111111122222222221111111111111122222221111111111111112222222111111111222222222211111111112222222211111111111122222221111111111111122222221111
        1111112222222111111111111122222222221117777711111122222221111111111111112222222111111111222222222211111111112222222211111111111122222222111111111111122222221111
        11111122222221111111111111222222222211177777111111222222211111111111111122222221111111112222222bbbbbbbbbbbbbbbbb222221111111111122222222111111111111122222221111
        1111112222222111111111111122222222221117777711111122222221111111111111112222222111111111222222bbbbbbbbbbbbbbbbbbb22221111111111122222222111111111111122222221111
        11111122222221111111111111222222222211177777177777222222211111111111111122222221111111112222bbbbbbbbbbbbbbbbbbbbbbbb22111111111122222222111111111111122222221111
        11111122222221111111111111222222277777777777177777222222211111111111111122222221111111112222bbbbbbbbbbbbbbbbbbbbbbbbbb111111111122222222111111111111122222221111
        1111112222222111111111111112222227777777777717777722222221111111111111112222222111111111122bbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111122222222111111111111122222221111
        1111112222222111111111111112222227777777777777777722222221111111111111112222222211111111122bbbbffffffbbbbbbbbbfffffffbbb1111111122222222111111111111122222221111
        1111112222222111111111111111222227777777777777777722222221111111111111112222222211111111122bbbbfffffffffbbbbbfffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777727777777777777777722227777777111111111112222222211111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777777777777777777777727777777777111111111112222222211111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        1111122222222111111111117777777777777777777777777777777777777111111111112222222221111111122bbbbfffffffffbbbfffffffffffbb1111111122222222211111111111122222221111
        11111222222221111111111177777777777777777777777777777777777771111111111122fff22221111111122bbbbfffffffffbbbfffffffffffbb1111111112222222211111111111122222221111
        11111222222221111111111177777777777777777777777777777777777771111111111122fff22221111111122bbbbfffffffffbbbfffffffffffbb2111111112222222211111111111122222221111
        11112222222221111111111177777777777777777777777777777777777111111111111122ffffffffff1111122bbbbfffffffffbbbfffffffffffbb2111111112222222211111111111122222221111
        11112222222221111111111111112777777777777777777777777777221111ffffffff1122ffffffffff1111122bbbbffffffffbbbbbbbffffffffbb2111111112222222221111111111122222221111
        111122222222211111111111111122777777777777777777777777222211ffffffffff1112ffffffffff1111122bbbbbbbbbbbbbbbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        111122222222211111111111111122277777777777777777777722222211ffffffffff1112fffffff1111111122bbbbbbbbbbbbbfbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112227777777777777777771222222222fffff111fff1112ffff22211111111222bbbbbbbbbbbbfbbfbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112222222227777777777771222222222ffff1111fff1112ffff222111111112222bbbbbbbbbbbbbbfbbbbbbbbbbbb2111111112222222221111111111122222221111
        11112222222221111111111111112222222221777777777711222222222fffff11ffff1112ffff222111111111222bbbbbbbbbbbbbbbbbbbbbbbbbbb2111111112222222221111111111122222221111
        111122222222211111111111111122222222211777777771112222222221ffffffffff11122fff2221111111112222bbbbbbbbbbbbbbbbbbbbbbbbbb2111111111222222221111111111122222222111
        1111222222222111111111111111222222222117777777111112222222211ffffffff111122fff22211111111122222bbbbbbbbbbbbbbbbbbbbbbb222111111111222222221111111111122222222111
        11112222222221111111111111112222222221117777771111122222222111ffffff111112222222211111111122222bbbbbbbbbbbbbbbbbbbbbbbb22111111111222222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22111111111122222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        1111222222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        1111122222222111111111111111222222222211177777111112222222211111111111111222222221111111112222bbbbbb111bbbbbbb12bbbbbbb22211111111122222221111111111122222222111
        cccccc2222222111111111111111222222222211177777111112222222222111111111111222222221111111112222bbbbbb111bbbbbbb122bbbbb2222111111111222222211111111111222222ccccc
        cccccc22222221111111111111112222222222111777771111122222222221111111111112222222211111111122222bbbbb1111bbbbbb122bbbbb222211111111122222221111111111122222cccccc
        ccccccccccccc1111111111111112222222222111111111111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111111111ccccccccccc
        bbbbcccccccccccccccccccccccc2222222222cccccc111111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111111cccccccccccbbb
        bbbbccccccccccccccccccccccccccccccccccccccccccc111122222222221111111111112222222211111111122222222211111111111122222222222111111111222222211111ccccccccccccbbbbb
        bbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccc2222222211111111111122222222111111111222222222111111111111222222222cccccccccccccccccccccccccccccccbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeee555eeeeebbbbbbbbbbbbbbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeee55e5eeeeeccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeee5ee5eeeeeccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeeee55ee5eeeeeccccccccccccccc
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeeee5eee5eeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccceeeeeeeeeeeee55eee5eeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555f55eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeee5555555eeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeccceeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccceeebbbbbbbbbbbbbbbbbbbeeebbbbbeeeeeeeee
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111bbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111bbbbb
        eeebbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11fff111bbbbb
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555551fff111bbbbb
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeeccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555551fff111b111b
        eeebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeecccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbb5555511111111111b
        eeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccceeeccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbb2221111ccc1111b
        eeebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbeeebbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbb22211111c11111b
        eeebbbbbbbbeeeeeeeeeeeeeeeceeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbb222111111111bbb
        eeebbbbbbbbbbbcccccccccbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111bbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555bb555bbbbbbb
        eeebbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb555bb555bbbbbbb
        eeebbbeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc5c5bc5c5bbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeebbbbbbeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeeeeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeebbbeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbbeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbbeeebbbbbbbbbbbbbbeeeeebbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeebeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeeebbbbbbbbbbbbbeeeeebbbeeeeeeeebbbbbbbbbbbbbbbeeebbbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeeebbbbbbbbbbbbeeeeebbbbeeebeeeeebbbbbbbbbbbbbbeeeebbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbbbbbbeeeeeebbbbbeeebbeeeeeeebbbbbbbbbbbeeeebbbbbbbeeebbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbbbeeeeeeeebbbbbbeeebbeeeeeeeeeeeeeeeeeeeeeebbbbbbbeeebbbbbbbbeeebbbbbbbccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        eeebbbeeebbbbbbeeeeeeeeebbbbbbbeeebbbbeeeeeeeeeeeeeeeeeeeebbbbbcceeecccccccceeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbb
        eeebbbeeebbeeeeeeeeeeebbbbbbbbbeeebbbbbbeeeeeeeeeeeeeeeeccccccccceeecccccccceeeccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
        eeebbbeeebbeeeeeeeebbbbbbbbbbbeeeebbbbbbbbbbbbcccccccccccccccccccccccccccccceeecccccccccbbbbbbbbbbbbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccb
        eebbbbeeebbeeeeeebbbbbbbbbbbbbeeeebbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccb
        eebbbbeeebbbbbbbbbbbbbbbbbbbbbeeeecccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        eebbbbbbbbbbbbbbbbbbbbbbbbbcceeeecccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeeeccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeeecbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbccccccccceeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    Pause_Until_A()
    adventure.addToTextlog("The endless red and white walls invoke a feeling of immense dread.")
    Pause_Until_A()
    adventure.addToTextlog("The only server at a counter says in a monotone voice; \"Sir may I take your order?\".")
    Pause_Until_A()
    adventure.addToTextlog("You look up to see that the menu has only 2 options, death and escape.")
    Pause_Until_A()
    adventure.addToTextlog("Which do you choose, Death (Up), or Escape (Down)")
    Pause_until_ANY()
    if (controller.up.isPressed()) {
        adventure.addToTextlog("Turns out it was opposite day! As you begin to go insane a strange portal opens up in front of you.  ")
        effects.confetti.startScreenEffect()
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        effects.confetti.endScreenEffect()
        adventure.addToTextlog("Do you go through it? Yes (Up) No (Down)")
        Pause_until_ANY()
        if (controller.up.isPressed()) {
            Wisconsin()
        } else if (controller.down.isPressed()) {
            adventure.addToTextlog("The portal senses your decision and closes, eventually you go insane and the shadows consume your soul.  ")
        }
    } else if (controller.down.isPressed()) {
        adventure.addToTextlog("Turns out it was opposite day, you are trapped there forever and your soul is consumed by the shadows. ")
        Pause_until_ANY()
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
}
function Wisconsin () {
    adventure.addToTextlog("As you go through the portal it closes behind you, in front of you is a sign saying \"Welcome to Wisconsin!\" ")
    scene.setBackgroundImage(assets.image`foresss`)
    Pause_Until_A()
    adventure.addToTextlog("You check your surroundings and notice a lack of wildlife in the forest, no birds chirping or rabbits rustling the leaves.  ")
    Pause_Until_A()
    adventure.addToTextlog("Behind you is a strange field of light, on closer inspection it appears to be a solid barrier.")
    Pause_Until_A()
    adventure.addToTextlog("When you turn around a strange man is standing behind you holding a small bag, he has a very unkempt beard and is covered in dirt, it seems as if he is so close you can feel his body heat. ")
    Pause_Until_A()
    adventure.addToTextlog("He says at a volume barely loud enough for you to hear him; \"Hello foreigner, would you like to try some cheese I made?\"")
    Pause_Until_A()
    adventure.addToTextlog("He holds the bag up, clearly indicating that the cheese is in it. What do you do? Accept the cheese (Up) Ask if it is Velveeta cheese (Down) Decline the cheese (Left) ")
    Pause_until_ANY()
    if (controller.up.isPressed()) {
        adventure.addToTextlog("The cheese tastes of pure happiness, putting you into a state of wonderful bliss, you are so happy that you ascend to heaven.")
        Pause_Until_A()
        adventure.addToTextlog("But as you feel happiness for the first time in your miserable life, it fades away the clouds begin to fall as heaven is converted into Ohio.")
        Pause_Until_A()
        adventure.addToTextlog("Being in the sky and unable to leave and unable to leave, you soon succumb to Ohio's overwhelming power.")
        Ohiofication()
        Pause_Until_A()
        game.setGameOverEffect(false, effects.splatter)
        game.gameOver(false)
    } else if (controller.down.isPressed()) {
        adventure.addToTextlog("Upon the very mention of Velveeta the mans skin melts away, revealing a firey and glowing inside. ")
        Pause_Until_A()
        adventure.addToTextlog("Before you have time to react, the man, now turned demon, lunges forward with his hand held outwards.")
        Pause_Until_A()
        adventure.addToTextlog("His hand goes straight through your chest, as it pulls it hand back through you can see your inner organs spilling out of you, all burning with a unnatural flame.")
        Pause_Until_A()
        adventure.addToTextlog("It is absolute agony, with its hands piercing your body in many places, yet somehow without the release of death.")
        Pause_Until_A()
        adventure.addToTextlog("Eventually, after hours of suffering, the demon grabs your neck and swipes its hand upwards, ripping the flesh off your skull and then crushing it.")
        Pause_Until_A()
        adventure.addToTextlog("You instantly die.")
        Pause_Until_A()
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    } else if (controller.left.isPressed()) {
        adventure.addToTextlog("The man insists you try his cheese, you hold your ground.")
        Pause_Until_A()
        adventure.addToTextlog("The man seems to start becoming angry, his face starting to turn red, although he quickly calms down. ")
        Pause_Until_A()
        adventure.addToTextlog("\"Fine\" says the man \"Keep on going, there's a exit just up ahead\"")
        Pause_Until_A()
        adventure.addToTextlog("You have 4 options;Michigan (Left) or Minnisota (Right) ")
        Pause_until_ANY()
        if (controller.left.isPressed()) {
            Michigan()
        } else if (controller.right.isPressed()) {
            Minnisota()
        }
    }
}
function Nebraska () {
    adventure.addToTextlog("There is a sign in front of you that says \"Welcome to Nebraska.")
    scene.setBackgroundImage(assets.image`nebraska`)
    Pause_Until_A()
    adventure.addToTextlog("You see a tower looming in the distance, made of money. You know without a doubt it's the eye of capitalism.")
    Pause_Until_A()
    adventure.addToTextlog("While most capitalists are vicious and greedy, this tower has a welcoming aura about it. It seems as if it can sense your struggles.")
    Pause_Until_A()
    adventure.addToTextlog("\"Hello traveler\" the tower says to you.")
    Pause_Until_A()
    adventure.addToTextlog("I hear you're trying to leave Ohio. Why settle for that when you can destroy it?")
    Pause_Until_A()
    adventure.addToTextlog("")
}
function Wyoming () {
    adventure.addToTextlog("You see ahead of you a large rectangular pit instead of a state.")
    scene.setBackgroundImage(assets.image`wyoming moment`)
    Pause_Until_A()
    adventure.addToTextlog("You don't know why or how this is, but you decide to check it out.")
    Pause_Until_A()
    adventure.addToTextlog("You fell in.")
    Hell()
}
function Indiana () {
    adventure.addToTextlog("A large sign says \"Welcome to Indiana\"")
    Pause_Until_A()
}
function Minnisota () {
    adventure.addToTextlog("In front of you is a sign that says \"Welcome to minnesota\"")
    scene.setBackgroundImage(assets.image`mini soda`)
    Pause_Until_A()
    adventure.addToTextlog("As you look around, it seems to be barren snowy wastes as far as you can see")
    Pause_Until_A()
    adventure.addToTextlog("Other than that forest")
    adventure.addToTextlog("Press left to proceed to the field and right for forest")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        adventure.addToTextlog("You proceed into the field. A polar bear approaches you")
        Pause_Until_A()
        adventure.addToTextlog("He offers you a mini soda, but it seems to be frozen solid. Do you accept? ")
        adventure.addToTextlog("(A) To accept, (B) To decline")
        Pause_until_ANY()
        if (controller.A.isPressed()) {
            adventure.addToTextlog("You gladly accept! You try to drink the soda, but a solid mass of ice comes out. You choke and die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("The bear becomes enraged and claws you to bits. You die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.slash)
            game.gameOver(false)
        }
    } else if (controller.right.isPressed()) {
        adventure.addToTextlog("You wander through the woods for a while and you see a small shed")
        Pause_Until_A()
        adventure.addToTextlog("Do you enter the shed? It is very cold out after all. A to go in, B to turn around.")
        Pause_until_ANY()
        if (controller.A.isPressed()) {
            adventure.addToTextlog("Inside the shed you see a teleportation pad.")
            Pause_Until_A()
            adventure.addToTextlog("You think any place would be better than here, so without thinking you step on it.")
            Pause_Until_A()
            adventure.addToTextlog("A flash of bright light engulfs you. Upon reopening your eyes you see something shocking.")
            Pause_Until_A()
            UnOhio()
        } else if (controller.B.isPressed()) {
            adventure.addToTextlog("Why would you do that? It's so cold out. You freeze and die.")
            Pause_Until_A()
            game.setGameOverEffect(false, effects.clouds)
            game.gameOver(false)
        }
    }
}
function UnOhio () {
    scene.setBackgroundImage(assets.image`unohio`)
    adventure.changeLogColors(2, 3)
    adventure.addToTextlog("Maple trees and pools of ice are scattered everywhere. It seems you're in Canada!")
    Pause_Until_A()
    adventure.addToTextlog("You heard about this place somewhere before. It's UN-OHIO!!! Ohio can never come here!!!!!!")
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "What the heck? You actually did it!")
    game.gameOver(true)
}
adventure.addToTextlog("Hello there! Press (A) to continue once done reading. Have fun! ")
Pause_Until_A()
Start()
