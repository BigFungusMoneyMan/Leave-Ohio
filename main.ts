function California () {
	
}
function Nevada () {
	
}
function Pause_until_ANY () {
    pauseUntil(() => controller.anyButton.isPressed())
}
function Canada () {
	
}
function Start () {
    adventure.setScoreOverride(adventure.Currency.Coins, 1)
    adventure.addToTextlog("You are in Ohio")
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
    Pause_Until_A()
    adventure.addToTextlog("You decide to head to the one city you heard about in Michigan, Detroit.")
    Pause_Until_A()
    adventure.addToTextlog("As you enter the city you notice something very strange...")
    Pause_Until_A()
    adventure.addToTextlog("All of your money has disappeared.  ")
    Pause_Until_A()
    adventure.addToTextlog("And as you look around, you notice that no one has anything.")
    Pause_Until_A()
    adventure.addToTextlog("And all the housing seems to be simple communal shelters.")
    Pause_Until_A()
    adventure.addToTextlog("Oh no, Its COMMUNIST DETROIT, hopefully you can make it through okay.")
    Pause_Until_A()
    adventure.addToTextlog("The gates close behind you and won't open again, your going to have to find another way out.")
    Pause_Until_A()
    adventure.addToTextlog("You have some options, you could go to the homeless shelter (Left), into a dark alleyway ")
    Pause_until_ANY()
    if (controller.left.isPressed()) {
        adventure.addToTextlog("")
    } else if (controller.right.isPressed()) {
    	
    } else if (controller.up.isPressed()) {
    	
    } else if (controller.down.isPressed()) {
    	
    }
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
    Pause_Until_A()
    adventure.addToTextlog("")
}
function Ohiofication () {
	
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
function Death () {
	
}
function Kentucky () {
    adventure.addToTextlog("A large sign says \"Welcome to Kentucky\"")
    Pause_Until_A()
    adventure.addToTextlog("Upon entering the state, you are almost instantly teleported to a infinite KFC!")
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
        adventure.addToTextlog("You have 4 options;Michigan (Right) Iowa (Left) Illinois (Down) Minnesota (Up) ")
        Pause_until_ANY()
        if (controller.left.isPressed()) {
            Iowa()
        } else if (controller.right.isPressed()) {
            Michigan()
        } else if (controller.up.isPressed()) {
            Minnisota()
        } else if (controller.down.isPressed()) {
            Illinois()
        }
    }
    adventure.addToTextlog("")
}
function Wyoming () {
	
}
function Indiana () {
    adventure.addToTextlog("A large sign says \"Welcome to Indiana\"")
    Pause_Until_A()
}
function Minnisota () {
	
}
function UnOhio () {
	
}
adventure.addToTextlog("Hello there! Press (A) to continue once done reading. Have fun! ")
Pause_Until_A()
Start()
