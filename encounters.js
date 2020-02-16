const combatRoll = () => {
    var roll= Math.floor(Math.random()*20) +1;

    if(roll <=6){
        return "fail";
    }

    if(roll>6 && roll <=14){
        return "average success";
    }

    if(roll>15 && roll <=19){
        return "succeed";
    }

    if(roll == 20){
        return "critical";
    }

}

const alleyCombat =(roll) =>{
    switch(roll){
        case "fail":
        return `You go to swing at the man in front of you. As you step you feel your leg buckle underneath you. Your drunken balance
        is not what it used to be. The man side steps your attack and you feel a thud on the back of your neck. As you awake you find 
        yourself laying in the alley you were cornered in. You find that you're now missing some of the items from your backpack. On 
        the wall infront of you, you see the words "Get out of town". Maybe one of the nearby towns has kinder people?`;
        
    
        case "average success":
        return `You go to swing at the man infront of you. As you cock back your arm you feel your elbow connect with the man behind
        you. The blade sinks into your skin and the cold steel send a shiver into your spine. Your first fires foward from the shock 
        and you connect with the blonde man. The third man freezes in shock for a slight moment. In this moment you are able to slip 
        past him and drunkenly run to the inn. You fall into your bed and awake the next morning covered in filth and blood. you stare
        out the window looking for the three men as one of the housekeepers bandages your wound. Perhaps a couple of days in hiding will 
        let you slip out of town unnoticed...`;
        

        case "succeed":
        return `You go to swing at the man infront of you. While cocking your arm back you throw your elbow in the the nose of the man
        behind you . You step foward as you swing and just barely miss the blade sinking into your back. You throw your fist into the 
        blonde man. There is a lound crunch as your knuckle connects with his jaw. You duck under his wildly swung quarterstaff and throw
        your elbow into the last man standing. He bounces of the wall and you throw a wild headbutt to meet his whiplashing head. He crumbles
        to the ground while grabbing his face. You drunkenly walk back to your inn with nothing more than a minor headache. Hopefully the next
        town will have smarter criminals...`;
        

        case "critical":
        return`You go to swing at the man infront of you. As you step to throw your punch, you feel a deep warmth start to build in 
        your stomach. As you throw the punch, the warmth moves to your hand. Your punch lands with a glorious crack, the warmth in your
        hand changes to a bright hot light. The ground shakes, the wall to your left crumbles slightly, the heavens open and the gods send
        a stream of lighting and thunder to smite the three men. As the light fades the smell of burning flesh fills your nose, you look down
        and see the three men, now ash, blowing in the cold night air. You look up to the now open sky as it starts to close. You continue 
        to wonder if it was the old or new gods that sent you aid. Yet the thought quickly passes out of your mind as the alchohol starts 
        make its way back up. You run to the Inn and after vomiting your nights drinks, you calmly roll into bed. Maybe the next town will
        have a clue to the god given power you have...`;
       
    }
}



module.exports= [
    
    //encounter1
    {Event1: {
        
        //starting of encounter
        openingText: 
        `As you walk into the center of {{cityName}} the air is damp and the smell of animals lingers on your nose. 
        the noise that you heard as you walked in has now been silenced. People stare at you as you walk by them, The children that
        were once running around playing are now hiding behind the adults. A young man stands up off of the bench he was sitting on 
        and walks to you. "Ahoy there" he calls out.`,         
        
        choice1: {
            choice: `say Hello there friend`,
            next: "e1Event1"
        },

        choice2: {
            choice: `say Not a fan of visitors are you?`,
            next: "e1Event2"
        }
    },

    //track 1
    e1Event1: {
        openingText: `"haha glad to finally see a friendly face in town" he says as he points to the crowd of onlookers.
        "the names is Holt, Im the local mason here in town, whats brought you to our lovely town?`,
        
        choice1: {
            choice:`say Ive heard of some strange things in town.`,
            next: "e1e1Event1"
        },

        choice2: {
            choice: `say Im here looking for a job`,
            next: "e1e1Event2" 
        }

    },

    //direct route
     e1e1Event1: {
        openingText: `his brow furrows slightly. "strange things?" he asks, "what kind of strange things?".`,
        
        choice1: {
            choice:`say the ones of the magic variety`,
            next: "e1e1e1Event1"
        },

        choice2: {
            choice: `say im not quite sure but something seems off.`,
            next: "e1e1e1Event2" 
        }

     },

    e1e1e1Event1: {
        openingText: `his gentle face hardens, "there is no magic other than the healer here, unless you brought it my friend.
        his eyes seem to be looking past you towards a young woman who is standing in a doorway of one of the neighboring buildings. `,
        
        choice1: {
            choice:`say "Are you okay my friend?"`,
            next: "e1e1e1e1Event1"
        },

    
        choice2: {
            choice: `walk up to the woman.`,
            next: "e1e1e1e1Event2"
        }

    },
    //ask if okay
    e1e1e1e1Event1: {
        openingText: `"Run" Holt whispers, you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you. `,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e1e1e1e1Event1"
        },

        choice2: {
            choice: `try block the attack?`,
            next: "e1e1e1e1e1Event2" 
        },

        

    },

    e1e1e1e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e1e1e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //walk up to the woman
    e1e1e1e1Event2: {
        openingText: `As you turn to walk towards the woman, Holt yells towards you " RUN MY FRIEND". the woman starts to runn towards
        you at full speed. Each step is soft and quite, however the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you. `,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e1e1e1e2Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e1e1e1e2Event2" 
        },

        

    },
    e1e1e1e1e2Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e1e1e1e2Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },



    //is there anything off 
    e1e1e1Event2: {
        openingText: `he chuckles softly, his eyes seem to dart behind you."nothing is off here my friend. maybe you 
        should check another town?" as you turn to see where his eyes wandered you see a young woman standing in 
        the doorway of a nearby building.`,
        
        choice1: {
            choice:`say "is there something I should know about that woman?"`,
            next: "e1e1e1e2Event1"
        },

        choice2: {
            choice: `call out to the woman`,
            next: "e1e1e1e2Event2" 
        }

    },
    
    // is there something i should know
    e1e1e1e2Event1: {
        openingText: `he looks at her, his brow starts to sweat. " shes not human" he whispers under his breath. As soon as the
        worlds pass through his lips you hear loud boom. you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e1e1e2e1Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e1e1e2e1Event2" 
        },

    },

    e1e1e1e2e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e1e1e2e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //call out to the woman
    e1e1e1e2Event2: {
        openingText: `As you call out, a voice appears in your head it tells you "defend yourself" you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e1e1e2e2Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e1e1e2e2Event2" 
        },

    },

    e1e1e1e2e2Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e1e1e2e2Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },




//im looking for a job
    e1e1Event2: {
        openingText: `ahh a job? well we dont have much here in terms of work, maybe a different town could use your skills.`,
        
        choice1: {
            choice:`say I need the money now`,
            next: "e1e1e2Event1"
        },

        choice2: {
            choice: `say perhaps, is there anywhere you recommend?`,
            next: "e1e1e2Event2" 
        }

    },
    //ask for coin
    e1e1e2Event1: {
        openingText: `he frowns "well I have a couple of coins but there really is not much here." he passes you a small bag of coins.
        "You should probably move to another town if youre looking for work" he says.`,
        
        choice1: {
            choice:`say "is there any reason I shouldnt be here?"`,
            next: "e1e1e2e1Event1"
        },

        choice2: {
            choice: `say perhaps, is there anywhere you recommend?`,
            next: "e1e1e2e1Event2" 
        }

    },   

    //investigate further
    e1e1e2e1Event1: {
        openingText: `No sir, he replies, "everything is fine and dandy here". his eyes dart behind you quickly. as you turn to see what
        he looks at you here him yell out "RUN" you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`Swing your sword`,
            next: "e1e1e2e1e1Event1"
        },

        choice2: {
            choice: `try to block the attack`,
            next: "e1e1e2e1e1Event2" 
        }

    },
     e1e1e2e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

     e1e1e2e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },
    //fin with branch

    
    //ask for recommendation
    e1e1e2e1Event2: {
        openingText: `No but i know there is definitely nothing here.`,
        
        choice1: {
            choice:`say "Youre weirdly adamant about me leaving"`,
            next: "e1e1e2e1e2Event1"
        },

        choice2: {
            choice: `turn around and leave.`,
            next: "e1e1e2e1e2Event2" 
        }
    },
     //investigate
    e1e1e2e1e2Event1: {
        openingText: `he chuckles softly, "no im not, I just dont want you to waste your time here." `,
        
        choice1: {
            choice:`scan the area"`,
            next: "e1e1e2e1e2e1Event1"
        },

        choice2: {
            choice: `turn around leave`,
            next: "e1e1e2e1e2e1Event2" 
        }
    },
    //scan
    e1e1e2e1e2e1Event1: {
        openingText: `As you scan the area, you feel a deep pressure on the inside of your head. You feel a deep voice in your head 
        "protect yourself" your head snaps to a building and you see a woman running full speed towards you.the stonework 
        of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e1e2e1e2e1e1Event1"
        },

        choice2: {
            choice: `block her attack`,
            next: "e1e1e2e1e2e1e1Event2" 
        }
    },   
    
    e1e1e2e1e2e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

     e1e1e2e1e2e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },


    //leave
    e1e1e2e1e2Event2: {
        openingText: `You turn around and walk out of the town, as you start to move further from the center of town, the city starts
        make noise again. A couple of children watch you as you leave the town. One runs up to you and hands you a small map. "here sir 
        my mom said to hand this to you. It seems to be a map towards a neaby town...`,
    },


//ask for reccomendations
    e1e1e2Event2: {
        openingText: `No but i know there is definitely nothing here.`,
        
        choice1: {
            choice:`say "is there a reason I should leave?`,
            next: "e1e1e2e2Event1"
        },

        choice2: {
            choice: `turn around and leave.`,
            next: "e1e1e2e2Event2" 
        }
    },

//ask for reccomendations
    e1e1e2e2Event1: {
        openingText: `he looks at you and chuckles, "no my friend, I just dont want you to lose out on anywork my friend" a deep 
        pressure starts to grow in your head you hear "turn around idiot" your head snaps to a building and you see a woman running 
        full speed towards you.the stonework of the towns streets crack under each step she takes. A bright light starts to appear 
        from her stomach, her body starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your 
        sword to defend yourself. The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly 
        approaches you.`,
    
         choice1: {
            choice:`swing your sword`,
            next: "e1e1e2e2e1Event1"
        },

        choice2: {
            choice: `block the attack`,
            next: "e1e1e2e2e1Event2" 
        }
    },

    e1e1e2e2e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

     e1e1e2e2e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //leave
    e1e1e2e2Event2: {
        openingText: `You turn around and walk out of the town, as you start to move further from the center of town, the city starts
        make noise again. A couple of children watch you as you leave the town. One runs up to you and hands you a small map. "here sir 
        my mom said to hand this to you. It seems to be a map towards a neaby town...`,
    },


//dont like strangers line.
    e1Event2: {
        openingText: `"Don't mind them, they're just a wee bit paranoid" he says as he runs his hand through his long brown hair.
        "the names is Holt, Im the local mason here in town, whats brought you to our lovely town?`,
        
        choice1: {
            choice:`Ive heard of some strange things in town.`,
            next: "e1e2Event1"
        },

        


    choice2: {
            choice: `Im here looking for a job`,
            next: "e1e2Event2" 
        },

    },


     //direct route
     e1e2Event1: {
        openingText: `his brow furrows slightly. "strange things?" he asks, "what kind of strange things?".`,
        
        choice1: {
            choice:`say the ones of the magic variety`,
            next: "e1e2e1Event1"
        },

        choice2: {
            choice: `say im not quite sure but something seems off.`,
            next: "e1e2e1Event2" 
        }

     },

     e1e2e1Event1: {
        openingText: `his gentle face hardens, "there is no magic other than the healer here, unless you brought it my friend.
        his eyes seem to be looking past you towards a young woman who is standing in a doorway of one of the neighboring buildings. `,
        
        choice1: {
            choice:`say "Are you okay my friend?"`,
            next: "e1e2e1e1Event1"
        },

    
        choice2: {
            choice: `walk up to the woman.`,
            next: "e1e2e1e1Event2"
        }

    },
    //ask if okay
    e1e2e1e1Event1: {
        openingText: `"Run" Holt whispers, you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you. `,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e2e1e1e1Event1"
        },

        choice2: {
            choice: `try block the attack?`,
            next: "e1e2e1e1e1Event2" 
        },

        

    },

    e1e2e1e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e1e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //walk up to the woman
    e1e2e1e1Event2: {
        openingText: `As you turn to walk towards the woman, Holt yells towards you " RUN MY FRIEND". the woman starts to runn towards
        you at full speed. Each step is soft and quite, however the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you. `,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e2e1e1e2Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e2e1e1e2Event2" 
        },

        

    },
    e1e2e1e1e2Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e1e1e2Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },



    //is there anything off 
    e1e2e1Event2: {
        openingText: `he chuckles softly, his eyes seem to dart behind you."nothing is off here my friend. maybe you 
        should check another town?" as you turn to see where his eyes wandered you see a young woman standing in 
        the doorway of a nearby building.`,
        
        choice1: {
            choice:`say "is there something I should know about that woman?"`,
            next: "e1e2e1e2Event1"
        },

        choice2: {
            choice: `call out to the woman`,
            next: "e1e2e1e2Event2" 
        }

    },
    
    // is there something i should know
    e1e2e1e2Event1: {
        openingText: `he looks at her, his brow starts to sweat. " shes not human" he whispers under his breath. As soon as the
        worlds pass through his lips you hear loud boom. you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e2e1e2e1Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e2e1e2e1Event2" 
        },

    },

    e1e2e1e2e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e1e2e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //call out to the woman
    e1e2e1e2Event2: {
        openingText: `As you call out, a voice appears in your head it tells you "defend yourself" you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e2e1e2e2Event1"
        },

        choice2: {
            choice: `try and block her attack`,
            next: "e1e2e1e2e2Event2" 
        },

    },

    e1e2e12e2Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e1e2e2Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },



    //im looking for a job
    e1e2Event2: {
        openingText: `ahh a job? well we dont have much here in terms of work, maybe a different town could use your skills.`,
        
        choice1: {
            choice:`say I need the money now`,
            next: "e1e2e2Event1"
        },

        choice2: {
            choice: `say perhaps, is there anywhere you recommend?`,
            next: "e1e2e2Event2" 
        }

    },
    //ask for coin
    e1e2e2Event1: {
        openingText: `he frowns "well I have a couple of coins but there really is not much here." he passes you a small bag of coins.
        "You should probably move to another town if youre looking for work" he says.`,
        
        choice1: {
            choice:`say "is there any reason I shouldnt be here?"`,
            next: "e1e2e2e1Event1"
        },

        choice2: {
            choice: `say perhaps, is there anywhere you recommend?`,
            next: "e1e2e2e1Event2" 
        }

    },   

    //investigate further
    e1e2e2e1Event1: {
        openingText: `No sir, he replies, "everything is fine and dandy here". his eyes dart behind you quickly. as you turn to see what
        he looks at you here him yell out "RUN" you quickly turn your head towards the woman and see her running full speed towards you.
        the stonework of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`Swing your sword`,
            next: "e1e2e2e1e1Event1"
        },

        choice2: {
            choice: `try to block the attack`,
            next: "e1e2e2e1e1Event2" 
        }

    },
    e1e2e2e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e2e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },
    //fin with branch

    
    //ask for recommendation
    e1e2e2e1Event2: {
        openingText: `No but i know there is definitely nothing here.`,
        
        choice1: {
            choice:`say "Youre weirdly adamant about me leaving"`,
            next: "e1e2e2e1e2Event1"
        },

        choice2: {
            choice: `turn around and leave.`,
            next: "e1e2e2e1e2Event2" 
        }
    },
     //investigate
     e1e2e2e1e2Event1: {
        openingText: `he chuckles softly, "no im not, I just dont want you to waste your time here." `,
        
        choice1: {
            choice:`scan the area"`,
            next: "e1e2e2e1e2e1Event1"
        },

        choice2: {
            choice: `turn around leave`,
            next: "e1e2e2e1e2e1Event2" 
        }
    },
    //scan
    e1e2e2e1e2e1Event1: {
        openingText: `As you scan the area, you feel a deep pressure on the inside of your head. You feel a deep voice in your head 
        "protect yourself" your head snaps to a building and you see a woman running full speed towards you.the stonework 
        of the towns streets crack under each step she takes. A bright light starts to appear from her stomach, her body
        starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your sword to defend yourself. 
        The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly approaches you.`,
        
        choice1: {
            choice:`swing your sword`,
            next: "e1e2e2e1e2e1e1Event1"
        },

        choice2: {
            choice: `block her attack`,
            next: "e1e2e2e1e2e1e1Event2" 
        }
    },   
    
    e1e2e2e1e2e1e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e2e1e2e1e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },


    //leave
    e1e2e2e1e2Event2: {
        openingText: `You turn around and walk out of the town, as you start to move further from the center of town, the city starts
        make noise again. A couple of children watch you as you leave the town. One runs up to you and hands you a small map. "here sir 
        my mom said to hand this to you. It seems to be a map towards a neaby town...`,
    },


//ask for reccomendations
    e1e2e2Event2: {
        openingText: `No but i know there is definitely nothing here.`,
        
        choice1: {
            choice:`say "is there a reason I should leave?`,
            next: "e1e2e2e2Event1"
        },

        choice2: {
            choice: `turn around and leave.`,
            next: "e1e2e2e2Event2" 
        }
    },

//ask for reccomendations
    e1e2e2e2Event1: {
        openingText: `he looks at you and chuckles, "no my friend, I just dont want you to lose out on anywork my friend" a deep 
        pressure starts to grow in your head you hear "turn around idiot" your head snaps to a building and you see a woman running 
        full speed towards you.the stonework of the towns streets crack under each step she takes. A bright light starts to appear 
        from her stomach, her body starts to spasm as wings sprout from her back, she lets out a gutteral scream. You reach for your 
        sword to defend yourself. The bright light blinds you as you raise your sword. Your ears start to bleed as she rapidly 
        approaches you.`,
    
         choice1: {
            choice:`swing your sword`,
            next: "e1e2e2e2e1Event1"
        },

        choice2: {
            choice: `block the attack`,
            next: "e1e2e2e2e1Event2" 
        }
    },

    e1e2e2e2e1Event1: {
        openingText: `You slash your sword, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
    
    },

    e1e2e2e2e1Event2: {
        openingText: `You raise your blade to defend yourself, however your sword passes through the creature. the light has fully blinded you and
        you no longer can even hear your own thoughts. You feel a deep pressure on the inside of your skull, the smell of sulfur and 
        charcoal fill your nose. you hear "Sleep young one." as you fall into a deep sleep. As you awake your ears are still ringing and 
        your head pounds. the smell of sulfur lingers and you vomit due to it. You look around and find yourself far outside of town
        with a map to a nearby town pasted to your bag.  `,
        
    },

    //leave
    e1e2e2e2Event2: {
        openingText: `You turn around and walk out of the town, as you start to move further from the center of town, the city starts
        make noise again. A couple of children watch you as you leave the town. One runs up to you and hands you a small map. "here sir 
        my mom said to hand this to you. It seems to be a map towards a neaby town...`,
    }
    },



//ENCOUNTER 2?
    {Event1:{
        openingText:`You step out of the local pub in {{cityName}}. The night sky is filled with stars, you look up with drunken awe.
        you wonder if perhaps the sky was the work of the old gods or perhaps it was the new gods. You wait for a minute pondering before 
        the cold air finally wakes your slumbering mind. The pavement creaks as you move towards the inn. Your nose crinkles as the cool air
        rests on your face. As you turn down a small alley two hooded men step out infront of you. You look behind you and see another has enclosed
        you. A younger man with blonde hair removes his hood and with a smile says "hello there my friend you seem lost, how about we make sure you get 
        home safe... hmmm how about 40 gold to get you home safe.`,

        choice1:{
            choice: `Say "piss off"`,
            next: `e2e1Event1`,
        },
        choice2:{
            choice:`pay him the money`,
            next:`e2e1Event2`,
        }
    },
    e2e1Event1:{
        openingText:`"woah there mate." he responds as you try to push through the two men. He pushes you back slightly. As you stumble 
        backwards, you feel a small point in the center of your back. "where do you think youre going" whispers the man behind you. 
        "my friend gave you a pretty good deal there, I would take it." The blonde man infront of you pulls out a quarterstaff from under
        his cloak. The staff is made of a dark wood making it near impossible to see aside from the leather wrapt that he is holding it from.
        "Listen to my friend, We dont want you to have an accident" you hear the third figure calmly say.`,

        choice1:{
            choice: `Attack them`,
            next: `e2e1e1Event1`,
        },
        choice2:{
            choice:`pay him the money`,
            next:`e2e1e1Event2`,
        }
    },


    //attack them
    e2e1e1Event1:{
        openingText: alleyCombat(combatRoll),

    },


    //pay them
    e2e1e1Event2:{
        openingText:`As you hand over your coin, the man infront of you gives you a wide smile. "haha see my friend, that was easy. now lets
        get you home." The two men infront of you and let you step aside. As you move past the blonde man you feel a sudden thud on the back of your
        head... As you awake you find yourself laying in the alley you were cornered in. You find that you're now missing some of the items from
        your backpack. On the wall infront of you, you see the words "Get out of town". Maybe one of the nearby towns has kinder people? `,
    },

//initially pay them
    e2e1Event2:{
        openingText:`As you hand over your coin, the man infront of you gives you a wide smile. "haha see my friend, that was easy. now lets
        get you home." The two men infront of you and let you step aside. As you move past the blonde man you feel a sudden thud on the back of your
        head... As you awake you find yourself laying in the alley you were cornered in. You find that you're now missing some of the items from
        your backpack. On the wall infront of you, you see the words "Get out of town". Maybe one of the nearby towns has kinder people? `,
    }




    }




];


