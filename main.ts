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
