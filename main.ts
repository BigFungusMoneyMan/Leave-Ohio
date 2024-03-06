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
    scene.setBackgroundImage(assets.image`communist detroit`)
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
            adventure.addToTextlog("He sucks you into his mouth using his pure American lungs, and as you enter his mouth you are converted to cash.")
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
    adventure.addToTextlog("There are nukes in Nevada. I can provide you the means to get there if you tell me one thing")
    Pause_Until_A()
    adventure.addToTextlog("Do you like communism? Be honest with me. (A) if yes (B) if no")
    Pause_until_ANY()
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Wonderful. I bestow upon you the money mammoth. He will guide you on your travels.")
        adventure.addImageToTextLog(assets.image`gold tusk`)
        adventure.addToTextlog("(You have obtained the magic tusk. It summons the money mammoth)")
        Pause_Until_A()
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("Hm. Very well then. Take these.")
        adventure.addImageToTextLog(assets.image`commune`)
        adventure.addToTextlog("(You have obtained the gold hammer and sickle)")
        Pause_Until_A()
    }
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
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcccccccffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffccccccccfffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcccccccccccccffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffcccccccfffffffffffffffffccccccccc33ccccffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffccccccccccccfffffffffffffcccccccccc3333ccccfffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffccccccccccccccfffffffffffffcccccc33333333ccccfffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffccccccc333ccccfffffffffffffcccc33333333333cccffffffffffffffcccccccfffffffffffffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffccccc333333cccfffffffffffffcccc33333333333cccffffffffffffffccccccccfffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffccc33333333cccfffffffffffffcccc33333333333cccffffffffffffffccc3ccccccffffffffffffffffccccccccccccccffffccccccccccccfffffffffffcccccccccccccccccccffffffffffff
    fffccc33333333cccffffffffffffffccc33333333333cccffffffffffffffccc33cccccffffffffffffffffcccccccc33ccccffffccccccccccccfffffffffcccccccccccccccccccccffffffffffff
    fffccc33333333cccffffffffffffffccc3333333333ccccffffffffffffffccc333cccccfffffffffffffffcccc3333333ccccfffccccccccccccfffffffffcccccccccccccccccccccffffffffffff
    fffccc33333333cccffffffffffffffcccc3333cccccccccffffffffffffffccc3333cccccffffffffffffffccc33333333cccccffccc33333ccccfffffffffcccc33333333333333cccffffffffffff
    fffccc33333333cccffffffffffffffcccc3333cccccccccffffffffffffffccc33333ccccffffffffffffffcccc3333333cccccccccc33333ccccfffffffffcccc33333333333333cccffffffffffff
    fffccccc333333cccfffffffffffffffccc3333ccccccccfffffffffffffffccc333333ccccfffffffffffffccccc33333333cccccccc33333ccccfffffffffcccc33333333333333cccffffffffffff
    fffccccc333333cccfffffffffffffffcccc333cccffffffffffffffffffffccc333333cccccfffffffffffffcccc33333333cccccccc3333ccccffffffffffccc333333333333333cccffffffffffff
    fffccccc333333cccfffffffffffffffcccc333ccccccccfffffffffffffffccc3333333cccccfffffffffffffcccc333333333ccccc33333ccccffffffffffccc33333333333333ccccffffffffffff
    fffffccc333333cccffffffffffffffffccc333cccccccccffffffffffffffccc33333333ccccccfffffffffffccccc33333333ccccc3333ccccfffffffffffccc3333333333333cccccffffffffffff
    fffffccc333333cccffffffffffffffffccc333cccccccccffffffffffffffccc333333333ccccccfffffffffffccccc3333333333333333ccccfffffffffffccc3333cccccccccccccfffffffffffff
    fffffccc333333ccccccccccccfffffffccc33333333ccccffffffffffffffccc333ccc3333cccccffffffffffffccccc333333333333333cccffffffffffffccc333ccccccccccccccfffffffffffff
    fffffcccc33333ccccccccccccfffffffccc33333333ccccfffffffffffffcccc333ccc333333ccccffffffffffffcccc33333333333333ccccffffffffffffccc333cccccccccccccffffffffffffff
    fffffcccc33333ccccccccccccfffffffcccc33333ccccccfffffffffffffcccc333ccc333333cccccffffffffffffcccc333333333333cccccffffffffffffccc333ccccfffffffffffffffffffffff
    ffffffccc33333cccccc333ccccffffffcccc33333ccccccfffffffffffffccc33333333333333ccccffffffffffffcccc33333333333cccccfffffffffffffccc333cccccccccccffffffffffffffff
    ffffffccc33333333333333ccccfffffffccc33333cccccffffffffffffffccc333333333333333ccccffffffffffffcccc333333333cccccffffffffffffffccc333cccccccccccffffffffffffffff
    ffffffccc333333333333333ccccffffffcccc3333cccffffffffffffffffccc333333333333333ccccffffffffffffcccc33333333cccccfffffffffffffffccc3333ccccccccccffffffffffffffff
    ffffffccc333333333333333cccccfffffcccc3333cccccccccccffffffffccc333333ccccc33333ccccffffffffffffccc3333333cccccffffffffffffffffccc3333333333ccccffffffffffffffff
    ffffffcccc333333333333333ccccffffffccc3333ccccccccccccfffffffccc333333ccccc33333cccccfffffffffffcccc33333cccccfffffffffffffffffccc333333ccccccccffffffffffffffff
    ffffffcccc3333333333333333cccffffffccc3333ccccccccccccfffffffccc33333ccccccc33333ccccfffffffffffcccc3333cccccffffffffffffffffffccc333333ccccffffffffffffffffffff
    fffffffccc3333333333333333cccffffffccc333333333333ccccfffffffccc3333cccccccc333333ccccfffffffffffcccc333ccccfffffffffffffffffffccc333333ccccffffffffffffffffffff
    fffffffccc3333333333333ccccccffffffccc3333333333333cccfffffffccc3333ccccfccc333333cccccffffffffffcccc33ccccffffffffffffffffffffccc333333cccffcccccffffffffffffff
    fffffffccc333333333ccccccccccffffffccc333333333333ccccfffffffcccc33cccccfcccc333333ccccffffffffffcccc33ccccffffffffffffffffffffccc333333cccccccccccfffffffffffff
    fffffffccc33cccccccccccccccccffffffccc33333333333cccccfffffffcccc33ccccffccccc333333cccfffffffffffccccccccfffffffffffffffffffffccc333333ccccc3cccccfffffffffffff
    fffffffccccccccccccccccccffffffffffcccc3333333333cccccfffffffccccc3cccffffcccc33333ccccfffffffffffccccccccfffffffffffffffffffffccc3333333333333ccccfffffffffffff
    fffffffccccccccccccccffffffffffffffcccc3333333ccccccfffffffffcccccccccfffffccccccccccccffffffffffffccccccffffffffffffffffffffffccc3333333333333ccccfffffffffffff
    fffffffcccccccfffffffffffffffffffffccccccc333cccccccfffffffffcccccccccfffffccccccccccccfffffffffffffcccccffffffffffffffffffffffccc33333333333ccccccfffffffffffff
    fffffffcccccffffffffffffffffffffffffcccccccccccccccffffffffffccccccccfffffffcccccccccffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffff
    fffffffccccfffffffffffffffffffffffffcccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccfffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffccccccccccffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffccccccccccccccccfffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccccccfffffccccccccccccccccccccfcccfffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccccfffffffffcccccccccccccccccffcccfffffffffffffffcccfffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccfffffffffffcccccccccccccccffffcccfffffffffffffffcccfffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffcccffffffffcccffffcccffffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffcccfffffffffcccccccccccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffcccfffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffcccffffffffccccffffffcccccccffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffccccffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffcccffffffffccccffffffcccccccffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffcccffffffffcccffffcccfffffffcccfffffffccccffffffffffccccffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffcccffffffffccccccccccfffffffcccfffffffccccfffffffffffcccffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffcccffffffffccccccccccfffffffcccfffffffcccffffffffffffcccffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffcccffffffffccccccccccfffffffcccfffffffcccffffffffffffcccffffffffffffffffffffffffffffffffffffffff
    fffff66666fffffffffffffffffffffccccffffffffffffffffffffffffffffccccffffffffcccffffcccfffffffcccffffffccccfffffffffffccccffffffffffffffffffffffffffffffffffffffff
    fff6666666ffffffffffffffffffffffcccffffffffffffffffffffffffffffccccffffffffcccffffcccfffffffcccffffffccccfffffffffffccccffffffffffffffffffffffffffffffffffffffff
    f666666666ffffffffffffffffffffffccccfffffffffffffffffffffffffffcccfffffffffcccffffcccfffffffcccffffffcccfffffffffffccccfffffffffffffffffffffffffffff22222222ffff
    6666666666ffffffffffffffffffffffccccfffffffffffffffffffffffffffcccfffffffffcccffffccccfffffffffffffffcccffffffffffcccccfffffffffffffffffffffffffffff2222222222ff
    66666666666fffffffffffffffffffffcccccffffffffffffffffffffffffffcccffffffffccccffffccccfffffffffffffffcccfffffffffcccccffffffffffffffffffffffffffffff22222222222f
    66666666666ffffffffffffffffffffffccccffffffffffffffffffffffffffcccffffffffccccffffccccfffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffff222222222222
    66666666666ffffffffffffffffffffffccccfffffffffffffffffffffffffccccffffffffcccffffffffffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffff222222222222
    666666666666ffffffffffffffffffffffccccffffffffffffffffffffffffccccffffffffcccfffffffffffffffffffffffffcccccccccccccfffffffffffffffffffffffffffffffff222222222222
    666666666666ffffffffffffffffffffffcccccfffffffffffffffffffffffcccfffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    6666666666666fffffffffffffffffffffccccccffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    6666666666666fffffffffffffffffffffffcccccffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    66666666666666ffffffffffffffffffffffccccccfffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    66666666666666ffffffffffffffffffffffffcccccfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    66666666666666ffffffffffffffffffffffffccccccccffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222
    6666666666666666666666666666fffffffffffccccccccccffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222
    666666666666666666666666666666ffffffffffccccccccccccfcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222
    666666666666666666666666666666ffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222
    666666666666666666666666666666fffffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222
    666666666666666666666666666666fffffffffffffffffffcccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222
    666666666666666666666666666666fffffffffffffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    6666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222
    6666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffff2222222222222222222
    6666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222ff22222222222222222222
    6666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222
    66666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222
    6666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222
    666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222
    666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ff22222222222222222222222222222222222
    666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222
    6666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    66666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222
    666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222
    `)
adventure.addToTextlog("Hello there! Press (A) to continue once done reading. Have fun! ")
Pause_Until_A()
adventure.addToTextlog("Something to mention, if you are provided a choice and you choose an invalid option, the game freezes.")
Pause_Until_A()
adventure.addToTextlog("Example: If you press an arrow when asked to press A or B")
Start()
