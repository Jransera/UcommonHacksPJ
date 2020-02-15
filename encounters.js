var encounters = {
    encounter1: {
        openingText: 
            `As you walk into the center of [city] the air is damp and the smell of animals lingers on your nose. 
        the noise that you heard as you walked in has now been silenced. People stare at you as you walk by them, The children that
        were once running around playing are now hiding behind the adults. A young man stands up off of the bench he was sitting on 
        and walks to you. "Ahoy there" he calls out.`,         
        
        choice1: {
            choice: `say Hello there friend`,
            next: "e1Event1"
        },

        choice2: {
            choice: `say Not a fan of visitors are you?`
        },

        choice3: {
            choice: `Nod at him`
        }
    },

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
        },

        choice3: {
            choice: `say Im looking for some company`,
            next: "e1e1Event3"
        }

    },

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
        },

        choice3: {
            choice: `walk up to the woman.`,
            next: "e1e1e1e2Event3"
        }

    },
    









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
    e1e1Event3: {
        openingText: `he lets out a harty laugh, "haha you're looking in the wrong spot then my friend, maybe try a different town.`,
        
        choice1: {
            choice:`say is there any entertainment in this town?`,
            next: "e1e1e3Event1"
        },

        choice2: {
            choice: `say Anywhere you recommend?`,
            next: "e1e1e3Event2" 
        },

    },















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

        choice3: {
            choice: `Im looking for some company`,
            next: "e1e2Event3"
        }

    },

    e1Event3: {
        openingText: `"A quiet one are we, well I guess thats the best I can expect from a visitor "he responds. "The names Holt I'm the local
        mason here in town. What brings you to town?`,
        
        choice1: {
            choice:`Ive heard of some strange things in town.`,
            next: "e1e3Event1"
        },

        choice2: {
            choice: `Im here looking for a job`,
            next: "e1e3Event2" 
        },

        choice3: {
            choice: `Im looking for some company`,
            next: "e1e3Event3"
        }

    }
};
