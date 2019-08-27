// Add the backgrounds that are not in the SRD
[
	{
		name : "Charlatan",
		source : [["P", 128], ["ALbackground", 0]],
		skills : ["Deception", "Sleight of Hand"],
		gold : 15,
		equipleft : [
			["Disguise kit", "", 3],
			["Tools for chosen con", "", ""]
		],
		equipright : [
			["Fine clothes", "", 6],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "False Identity",
		trait : [
			"I fall in and out of love easily, and am always pursuing someone.",
			"I have a joke for every occasion, especially occasions where humor is inappropriate.",
			"Flattery is my preferred trick for getting what I want.",
			"I'm a born gambler who can't resist taking a risk for a potential payoff.",
			"I lie about almost everything, even when there's no good reason to.",
			"Sarcasm and insults are my weapons of choice.",
			"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
			"I pocket anything I see that might have some value."
		],
		ideal : [
			["Independence",
				"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
			],
			["Fairness",
				"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
			],
			["Charity",
				"Charity: I distribute the money I acquire to the people who really need it. (Good)"
			],
			["Creativity",
				"Creativity: I never run the same con twice. (Chaotic)"
			],
			["Friendship",
				"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
			],
			["Aspiration",
				"Aspiration: I'm determined to make something of myself. (Any)"
			]
		],
		bond : [
			"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
			"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
			"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
			"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
			"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
			"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
		],
		flaw : [
			"I can't resist a pretty face.",
			"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
			"I'm convinced that no one could ever fool me the way I fool others.",
			"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
			"I can't resist swindling people who are more powerful than me.",
			"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
		],
		extra : [
			"Select a Favorite Scheme",
			"Cheat at games of chance",
			"Shave coins, forge documents",
			"User/manipulator",
			"Change identity",
			"Sleight-of-hand cons",
			"Sell junk as expensive necessities"
		],
		toolProfs : ["Disguise kit", "Forgery kit"],
		lifestyle : "comfortable"
	},
	{
		name : "Criminal",
		source : [["P", 129], ["ALbackground", 0]],
		skills : ["Deception", "Stealth"],
		gold : 15,
		equipright : [
			["Dark, common clothes with hood", "", 3],
			["Crowbar", "", 5],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Criminal Contact",
		trait : [
			"I always have a plan for what to do when things go wrong.",
			"I am always calm, no matter the situation. I never raise my voice or let my emotions control me.",
			"The first thing I do in a new place is note the locations of everything valuable \u2015 or where such things could be hidden.",
			"I would rather make a new friend than a new enemy.",
			"I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
			"I don't pay attention to the risks in a situation. Never tell me the odds.",
			"The best way to get me to do something is to tell me I can't do it.",
			"I blow up at the slightest insult."
		],
		ideal : [
			["Honor",
				"Honor: I don't steal from others in the trade. (Lawful)"
			],
			["Freedom",
				"Freedom: Chains are meant to be broken, as are those who would forge them. (Chaotic)"
			],
			["Charity",
				"Charity: I steal from the wealthy so that I can help people in need. (Good)"
			],
			["Greed",
				"Greed: I will do whatever it takes to become wealthy. (Evil)"
			],
			["People",
				"People: I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)"
			],
			["Redemption",
				"Redemption: There's a spark of good in everyone. (Good)"
			]
		],
		bond : [
			"I'm trying to pay off an old debt I owe to a generous benefactor.",
			"My ill-gotten gains go to support my family.",
			"Something important was taken from me, and I aim to steal it back.",
			"I will become the greatest thief that ever lived.",
			"I'm guilty of a terrible crime. I hope I can redeem myself for it.",
			"Someone I loved died because of a mistake I made. That will never happen again."
		],
		flaw : [
			"When I see something valuable, I can't think about anything but how to steal it.",
			"When faced with a choice between money and my friends, I usually choose the money.",
			"If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
			"I have a \"tell\" that reveals when I'm lying.",
			"I turn tail and run when things look bad.",
			"An innocent person is in prison for a crime that I committed. I'm okay with that."
		],
		extra : [
			"Select a Criminal Specialty",
			"Blackmailer",
			"Burglar",
			"Enforcer",
			"Fence",
			"Highway robber",
			"Hired killer",
			"Pickpocket",
			"Smuggler",
			"Spy"
		],
		toolProfs : [["Gaming set", 1], ["Thieves' tools", "Dex"]],
		lifestyle : "poor"
	},
	{
		name : "Entertainer",
		source : [["P", 130], ["ALbackground", 0]],
		skills : ["Acrobatics", "Performance"],
		gold : 15,
		equipright : [
			["Costume", "", 4],
			["Favor of an admirer", "", ""],
			["Belt pouch (with coins)", "", 1],
			["Musical instrument of my choice", "", ""]
		],
		feature : "By Popular Demand",
		trait : [
			"I know a story relevant to almost every situation.",
			"Whenever I come to a new place, I collect local rumors and spread gossip.",
			"I'm a hopeless romantic, always searching for that 'special someone'.",
			"Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
			"I love a good insult, even one directed at me.",
			"I get bitter if I'm not the center of attention.",
			"I'll settle for nothing less than perfection.",
			"I change my mood or my mind as quickly as I change key in a song."
		],
		ideal : [
			["Beauty",
				"Beauty: When I perform, I make the world better than it was. (Good)"
			],
			["Tradition",
				"Tradition: The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)"
			],
			["Creativity",
				"Creativity: The world is in need of new ideas and bold action. (Chaotic)"
			],
			["Greed",
				"Greed: I'm only in it for the money and fame. [Evil]"
			],
			["People",
				"People: I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)"
			],
			["Honesty",
				"Honesty: Art should reflect the soul; it should come from within and reveal who we really are. (Any)"
			]
		],
		bond : [
			"My instrument is my most treasured possession, and it reminds me of someone I love.",
			"Someone stole my precious instrument, and someday I'll get it back.",
			"I want to be famous, whatever it takes.",
			"I idolize a hero of the old tales and measure my deeds against that person's.",
			"I will do anything to prove myself superior to my hated rival.",
			"I would do anything for the other members of my old troupe."
		],
		flaw : [
			"I'll do anything to win fame and renown.",
			"I'm a sucker for a pretty face.",
			"A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
			"I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
			"I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
			"Despite my best efforts, I am unreliable to my friends."
		],
		extra : [
			"Select an Entertainer Routine",
			"Actor",
			"Dancer",
			"Fire-eater",
			"Jester",
			"Juggler",
			"Instrumentalist",
			"Poet",
			"Singer",
			"Storyteller",
			"Tumbler"
		],
		toolProfs : ["Disguise kit", ["Musical instrument", 1]],
		lifestyle : "modest"
	},
	{
		name : "Folk Hero",
		source : [["P", 131], ["ALbackground", 0]],
		skills : ["Animal Handling", "Survival"],
		gold : 10,
		equipleft : [
			["Set of artisan's tools", "", ""],
			["Shovel", "", 5],
			["Iron pot", "", 10]
		],
		equipright : [
			["Common clothes", "", 3],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Rustic Hospitality",
		trait : [
			"I judge people by their actions, not their words.",
			"If someone is in trouble, I'm always ready to lend help.",
			"When I set my mind to something, I follow through no matter what gets in my way.",
			"I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
			"I'm confident in my own abilities and do what I can to instill confidence in others.",
			"Thinking is for other people. I prefer action.",
			"I misuse long words in an attempt to sound smarter.",
			"I get bored easily. When am I going to get on with my destiny?"
		],
		ideal : [
			["Respect",
				"Respect: People deserve to be treated with dignity and respect. (Good)"
			],
			["Fairness",
				"Fairness: No one should get preferential treatment before the law, and no one is above the law. (Lawful)"
			],
			["Freedom",
				"Freedom: Tyrants must not be allowed to oppress the people. (Chaotic)"
			],
			["Might",
				"Might: If I become strong, I can take what I want\u2015 what I deserve. (Evil)"
			],
			["Sincerity",
				"Sincerity: There's no good in pretending to be something I'm not. (Neutral)"
			],
			["Destiny",
				"Destiny: Nothing and no one can steer me away from my higher calling. (Any)"
			]
		],
		bond : [
			"I have a family, but I have no idea where they are. One day, I hope to see them again.",
			"I worked the land, I love the land, and I will protect the land.",
			"A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
			"My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
			"I protect those who cannot protect themselves.",
			"I wish my childhood sweetheart had come with me to pursue my destiny."
		],
		flaw : [
			"The tyrant who rules my land will stop at nothing to see me killed.",
			"I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
			"The people who knew me when I was young know my shameful secret, so I can never go home again.",
			"I have a weakness for the vices of the city, especially hard drink.",
			"Secretly, I believe that things would be better if I were a tyrant lording over the land.",
			"I have trouble trusting in my allies."
		],
		extra : [
			"Select a Defining Event",
			"I stood up to a tyrant's agents",
			"I saved people during a natural disaster",
			"I stood alone against a terrible monster",
			"I stole from a corrupt merchant for the poor",
			"I led a militia to fight off an invading army",
			"I stole weapons from a tyrant to arm the people",
			"I trained peasantry to fight a tyrant with farm tools",
			"A decree was rescinded after I led a protest against it",
			"A magical creature gave me a blessing or insight",
			"I rose to leadership in a lord's army"
		],
		toolProfs : [["Artisan's tools", 1], "Vehicles (land)"],
		lifestyle : "modest"
	},
	{
		name : "Guild Artisan",
		source : [["P", 132], ["ALbackground", 0]],
		skills : ["Insight", "Persuasion"],
		gold : 15,
		equipleft : [
			["Set of artisan's tools", "", ""],
			["Letter of introduction from guild", "", ""]
		],
		equipright : [
			["Traveler's clothes", "", 4],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Guild Membership",
		trait : [
			"I believe that anything worth doing is worth doing right. I can't help it\u2015 I'm a perfectionist.",
			"I'm a snob who looks down on those who can't appreciate fine art.",
			"I always want to know how things work and what makes people tick.",
			"I'm full of witty aphorisms and have a proverb for every occasion.",
			"I'm rude to people who lack my commitment to hard work and fair play.",
			"I like to talk at length about my profession.",
			"I don't part with my money easily and will haggle tirelessly to get the best deal possible.",
			"I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."
		],
		ideal : [
			["Community",
				"Community: It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)"
			],
			["Generosity",
				"Generosity: My talents were given to me so that I could use them to benefit the world. (Good)"
			],
			["Freedom",
				"Freedom: Everyone should be free to pursue his or her own livelihood. (Chaotic)"
			],
			["Greed",
				"Greed: I'm only in it for the money. (Evil)"
			],
			["People",
				"People: I'm committed to the people I care about, not to ideals. (Neutral)"
			],
			["Aspiration",
				"Aspiration: I work hard to be the best there is at my craft. (Any)"
			]
		],
		bond : [
			"The workshop where I learned my trade is the most important place in the world to me.",
			"I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
			"I owe my guild a great debt for forging me into the person I am today.",
			"I pursue wealth to secure someone's love.",
			"One day I will return to my guild and prove that I am the greatest artisan of them all.",
			"I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."
		],
		flaw : [
			"I'll do anything to get my hands on something rare or priceless.",
			"I'm quick to assume that someone is trying to cheat me.",
			"No one must ever learn that I once stole money from guild coffers.",
			"I'm never satisfied with what I have\u2015 I always want more.",
			"I would kill to acquire a noble title.",
			"I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."
		],
		extra : [
			"Select a Guild Business",
			"Alchemists and apothecaries",
			"Armorers, locksmiths, and finesmiths",
			"Brewers, distillers, and vintners",
			"Calligraphers, scribes, and scriveners",
			"Carpenters, roofers, and plasterers",
			"Cartographers, surveyors, and chart-makers",
			"Cobblers and shoemakers",
			"Cooks and bakers",
			"Glassblowers and glaziers",
			"Jewelers and gemcutters",
			"Leatherworkers, skinners, and tanners",
			"Masons and stonecutters",
			"Painters, limners, and sign-makers",
			"Potters and tile-makers",
			"Shipwrights and sailmakers",
			"Smiths and metal-forgers",
			"Tinkers, pewterers, and casters",
			"Wagon-makers and wheelwrights",
			"Weavers and dyers",
			"Woodcarvers, coopers, and bowyers"
		],
		toolProfs : [["Artisan's tools", 1]],
		languageProfs : [1],
		lifestyle : "comfortable"
	},
	{
		name : "Hermit",
		source : [["P", 134], ["ALbackground", 0]],
		skills : ["Medicine", "Religion"],
		gold : 5,
		equipleft : [
			["Winter blanket", "", 3],
			["Herbalism kit", "", 3]
		],
		equipright : [
			["Common clothes", "", 3],
			["Scroll case with notes", "", 1]
		],
		feature : "Discovery",
		trait : [
			"I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
			"I am utterly serene, even in the face of disaster.",
			"The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
			"I feel tremendous empathy for all who suffer.",
			"I'm oblivious to etiquette and social expectations.",
			"I connect everything that happens to me to a grand, cosmic plan.",
			"I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
			"I am working on a grand philosophical theory and love sharing my ideas."
		],
		ideal : [
			["Greater Good",
				"Greater Good: My gifts are meant to be shared with all, not used for my own benefit. (Good)"
			],
			["Logic",
				"Logic: Emotions must not cloud our sense of what is right and true, or our logical thinking. (Lawful)"
			],
			["Free Thinking",
				"Free Thinking: Inquiry and curiosity are the pillars of progress. (Chaotic)"
			],
			["Power",
				"Power: Solitude and contemplation are paths toward mystical or magical power. (Evil)"
			],
			["Live and Let Live",
				"Live and Let Live: Meddling in the affairs of others only causes trouble. (Neutral)"
			],
			["Self-Knowledge",
				"Self-Knowledge: If you know yourself, there's nothing left to know. (Any)"
			]
		],
		bond : [
			"Nothing is more important than the other members of my hermitage, order, or association.",
			"I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
			"I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
			"I entered seclusion because I loved someone I could not have.",
			"Should my discovery come to light, it could bring ruin to the world.",
			"My isolation gave me great insight into a great evil that only I can destroy."
		],
		flaw : [
			"Now that I've returned to the world, I enjoy its delights a little too much.",
			"I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
			"I am dogmatic in my thoughts and philosophy.",
			"I let my need to win arguments overshadow friendships and harmony.",
			"I'd risk too much to uncover a lost bit of knowledge.",
			"I like keeping secrets and won't share them with anyone."
		],
		extra : [
			"Select a Life of Seclusion",
			"Searching for spiritual enlightenment",
			"Living in accordance with a religious order",
			"Exiled for a crime I didn't commit",
			"Retreated from society after a life-altering event",
			"Worked on my art, literature, music, or manifesto",
			"Commune with nature, far from civilization",
			"Caretaker of an ancient ruin or relic",
			"Pilgrim in search of a thing of spiritual significance"
		],
		toolProfs : ["Herbalism kit"],
		languageProfs : [1],
		lifestyle : "poor"
	},
	{
		name : "Noble",
		source : [["P", 135], ["ALbackground", 0]],
		skills : ["History", "Persuasion"],
		gold : 25,
		equipleft : [
			["Scroll of pedigree", "", ""]
		],
		equipright : [
			["Fine clothes", "", 6],
			["Signet ring", "", ""],
			["Purse (with coins)", "", 1]
		],
		feature : "Position of Privilege",
		trait : [
			"My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
			"The common folk love me for my kindness and generosity.",
			"No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
			"I take great pains to always look my best and follow the latest fashions.",
			"I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
			"Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
			"My favor, once lost, is lost forever.",
			"If you do me an injury, I will crush you, ruin your name, and salt your fields."
		],
		ideal : [
			["Respect",
				"Respect: Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)"
			],
			["Responsibility",
				"Responsibility: It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)"
			],
			["Independence",
				"Independence: I must prove that I can handle myself without the coddling of my family. (Chaotic)"
			],
			["Power",
				"Power: If I can attain more power, no one will tell me what to do. (Evil)"
			],
			["Family",
				"Family: Blood runs thicker than water. (Any)"
			],
			["Noble Obligation",
				"Noble Obligation: It is my duty to protect and care for the people beneath me. (Good)"
			]
		],
		bond : [
			"I will face any challenge to win the approval of my family.",
			"My house's alliance with another noble family must be sustained at all costs.",
			"Nothing is more important than the other members of my family.",
			"I am in love with the heir of a family that my family despises.",
			"My loyalty to my sovereign is unwavering.",
			"The common folk must see me as a hero of the people."
		],
		flaw : [
			"I secretly believe that everyone is beneath me.",
			"I hide a truly scandalous secret that could ruin my family forever.",
			"I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
			"I have an insatiable desire for carnal pleasures.",
			"In fact, the world does revolve around me.",
			"By my words and actions, I often bring shame to my family."
		],
		toolProfs : [["Gaming set", 1]],
		languageProfs : [1],
		lifestyle : "wealthy"
	},
	{
		name : "Outlander",
		source : [["P", 136], ["ALbackground", 0]],
		skills : ["Athletics", "Survival"],
		gold : 10,
		equipright : [
			["Traveler's clothes", "", 4],
			["Staff", "", 4],
			["Hunting trap", "", 25],
			["Trophy from animal", "", ""],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Wanderer",
		trait : [
			"I'm driven by a wanderlust that led me away from home.",
			"I watch over my friends as if they were a litter of newborn pups.",
			"I once ran twenty-five miles without stopping to warn to my clan of an approaching orc horde. I'd do it again if I had to.",
			"I have a lesson for every situation, drawn from observing nature.",
			"I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
			"I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
			"I feel far more comfortable around animals than people.",
			"I was, in fact, raised by wolves."
		],
		ideal : [
			["Change",
				"Change: Life is like the seasons, in constant change, and we must change with it. (Chaotic)"
			],
			["Greater Good",
				"Greater Good: It is each person's responsibility to make the most happiness for the whole tribe. (Good)"
			],
			["Honor",
				"Honor: If I dishonor myself, I dishonor my whole clan. (Lawful)"
			],
			["Might",
				"Might: The strongest are meant to rule. (Evil)"
			],
			["Nature",
				"Nature: The natural world is more important than all the constructs of civilization. (Neutral)"
			],
			["Glory",
				"Glory: I must earn glory in battle, for myself and my clan. (Any)"
			]
		],
		bond : [
			"My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
			"An injury to the unspoiled wilderness of my home is an injury to me.",
			"I will bring terrible wrath down on the evildoers who destroyed my homeland.",
			"I am the last of my tribe, and it is up to me to ensure their names enter legend.",
			"I suffer awful visions of a coming disaster and will do anything to prevent it.",
			"It is my duty to provide children to sustain my tribe."
		],
		flaw : [
			"I am too enamored of ale, wine, and other intoxicants.",
			"There's no room for caution in a life lived to the fullest.",
			"I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
			"I am slow to trust members of other races, tribes, and societies.",
			"Violence is my answer to almost any challenge.",
			"Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish."
		],
		extra : ["Select an Origin",
			"Forester",
			"Trapper",
			"Homesteader",
			"Guide",
			"Exile or outcast",
			"Bounty hunter",
			"Pilgrim",
			"Tribal nomad",
			"Hunter-gatherer",
			"Tribal marauder"
		],
		toolProfs : [["Musical instrument", 1]],
		languageProfs : [1],
		lifestyle : "poor"
	},
	{
		name : "Sage",
		source : [["P", 137], ["ALbackground", 0]],
		skills : ["Arcana", "History"],
		gold : 10,
		equipleft : [
			["Ink, 1 ounce bottle of", 1, ""],
			["Ink pen (quill)", "", ""],
			["Small knife", "", 0.5],
			["Letter from dead colleague", "", ""]
		],
		equipright : [
			["Common clothes", "", 3],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Researcher",
		trait : [
			"I use polysyllabic words that convey the impression of great erudition.",
			"I've read every book in the world's greatest libraries\u2015 or I like to boast that I have.",
			"I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
			"There's nothing I like more than a good mystery.",
			"I'm willing to listen to every side of an argument before I make my own judgment.",
			"I . . . speak . . . slowly . . . when talking . . . to idiots, . . . which . . . almost. . . everyone . . . is . . . compared . . . to me.",
			"I am horribly, horribly awkward in social situations.",
			"I'm convinced that people are always trying to steal my secrets."
		],
		ideal : [
			["Knowledge",
				"Knowledge: The path to power and self-improvement is through knowledge. (Neutral)"
			],
			["Beauty",
				"Beauty: What is beautiful points us beyond itself toward what is true. (Good)"
			],
			["Logic",
				"Logic: Emotions must not cloud our logical thinking. (Lawful)"
			],
			["No Limits",
				"No Limits: Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)"
			],
			["Power",
				"Power: Knowledge is the path to power and domination. (Evil)"
			],
			["Self-Improvement",
				"Self-Improvement: The goal of a life of study is the betterment of oneself. (Any)"
			]
		],
		bond : [
			"It is my duty to protect my students.",
			"I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
			"I work to preserve a library, university, scriptorium, or monastery.",
			"My life's work is a series of tomes related to a specific field of lore.",
			"I've been searching my whole life for the answer to a certain question.",
			"I sold my soul for knowledge. I hope to do great deeds and win it back."
		],
		flaw : [
			"I am easily distracted by the promise of information.",
			"Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
			"Unlocking an ancient mystery is worth the price of a civilization.",
			"I overlook obvious solutions in favor of complicated ones.",
			"I speak without really thinking through my words, invariably insulting others.",
			"I can't keep a secret to save my life, or anyone else's."
		],
		extra : ["Select a Specialty",
			"Alchemist",
			"Astronomer",
			"Discredited academic",
			"Librarian",
			"Professor",
			"Researcher",
			"Wizard's apprentice",
			"Scribe"
		],
		languageProfs : [2],
		lifestyle : "modest"
	},
	{
		name : "Sailor",
		source : [["P", 139], ["ALbackground", 0]],
		skills : ["Athletics", "Perception"],
		gold : 10,
		equipleft : [
			["Silk rope, feet of", 50, 0.1]
		],
		equipright : [
			["Common clothes", "", 3],
			["Belaying pin (club)", "", 2],
			["Lucky charm", "", ""],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Ship's Passage",
		trait : [
			"My friends know they can rely on me, no matter what.",
			"I work hard so that I can play hard when the work is done.",
			"I enjoy sailing into new ports and making new friends over a flagon of ale.",
			"I stretch the truth for the sake of a good story.",
			"To me, a tavern brawl is a nice way to get to know a new city.",
			"I never pass up a friendly wager.",
			"My language is as foul as an otyugh nest.",
			"I like a job well done, especially if I can convince someone else to do it."
		],
		ideal : [
			["Respect",
				"Respect: The thing that keeps a ship together is mutual respect between captain and crew. (Good)"
			],
			["Fairness",
				"Fairness: We all do the work, so we all share in the rewards. (Lawful)"
			],
			["Freedom",
				"Freedom: The sea is freedom\u2015 the freedom to go anywhere and do anything. (Chaotic)"
			],
			["Mastery",
				"Mastery: I'm a predator, and the other ships on the sea are my prey. (Evil)"
			],
			["People",
				"People: I'm committed to my crewmates, not to ideals. (Neutral)"
			],
			["Aspiration",
				"Aspiration: Someday I'll own my own ship and chart my own destiny. (Any)"
			]
		],
		bond : [
			"I'm loyal to my captain first, everything else second.",
			"The ship is most important\u2015 crewmates and captains come and go.",
			"I'll always remember my first ship.",
			"In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
			"I was cheated out of my fair share of the profits, and I want to get my due.",
			"Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."
		],
		flaw : [
			"I follow orders, even if I think they're wrong.",
			"I'll say anything to avoid having to do extra work.",
			"Once someone questions my courage, I never back down no matter how dangerous the situation.",
			"Once I start drinking, it's hard for me to stop.",
			"I can't help but pocket loose coins and other trinkets I come across.",
			"My pride will probably lead to my destruction."
		],
		toolProfs : ["Navigator's tools", "Vehicles (water)"],
		lifestyle : "modest",
	},
	{
		name : "Soldier",
		source : [["P", 140], ["ALbackground", 0]],
		skills : ["Athletics", "Intimidation"],
		gold : 10,
		equipright : [
			["Common clothes", "", 3],
			["Insignia of rank", "", ""],
			["Trophy from fallen enemy", "", ""],
			["Bone dice or playing cards", "", ""],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "Military Rank",
		trait : [
			"I'm always respectful and polite.",
			"I'm haunted by memories of war. I can't get the violent images out of my mind.",
			"I'm slow to make new friends, because I've lost too many old ones.",
			"I'm full of inspiring and cautionary tales from my military experience with some relevance to almost every type of combat situation.",
			"I can stare down a owlbear without flinching.",
			"I enjoy my strength and like to break things.",
			"I have a rough sense of humor.",
			"I approach problems head-on. A simple, direct course is the best path to a solution."
		],
		ideal : [
			["Greater Good",
				"Greater Good: Our fate is to give our lives in the defense of others. (Good)"
			],
			["Responsibility",
				"Responsibility: I do what I have to and follow just authority. (Lawful)"
			],
			["Independence",
				"Independence: When people obey orders blindly, they affirm a kind of tyranny. (Chaotic)"
			],
			["Might",
				"Might: In life as in war, the mightier force prevails. (Evil)"
			],
			["Live and Let Live",
				"Live and Let Live: Ideals aren't worth killing over or going to war for. (Neutral)"
			],
			["Nation",
				"Nation: My city, state, or people are the only things that matter. (Any)"
			]
		],
		bond : [
			"I would still give my life for the people I have served with.",
			"Someone saved my life on the battlefield. Even now, I would never leave a friend behind.",
			"My honor is my life.",
			"I'll never forget the crushing defeat my company endured or the foes who inflicted it.",
			"Those who fight with me are those worth laying down my life for.",
			"I fight for those who cannot fight for themselves."
		],
		flaw : [
			"The atrocious enemy we faced in battle still leaves me trembling with fear.",
			"I have little respect for those who are not a tested warrior.",
			"A disastrous mistake I made in battle cost many lives\u2015 I will do anything to keep that mistake a secret.",
			"My hatred of my foes is blind and unreasoning. ",
			"I uphold the law, even if the law causes suffering.",
			"I'd rather eat my weapon than admit when I'm wrong."
		],
		extra : ["Select a Specialty",
			"Officer",
			"Scout",
			"Infantry",
			"Cavalry",
			"Healer",
			"Quartermaster",
			"Standard-bearer",
			"Support staff"
		],
		toolProfs : [["Gaming set", 1], "Vehicles (land)"],
		lifestyle : "modest"
	},
	{
		name : "Urchin",
		source : [["P", 141], ["ALbackground", 0]],
		skills : ["Sleight of Hand", "Stealth"],
		gold : 10,
		equipleft : [
			["Map of the city", "", ""],
			["Small knife", "", 0.5]
		],
		equipright : [
			["Common clothes", "", 3],
			["Token from my parents", "", ""],
			["Pet mouse", "", 0.1],
			["Belt pouch (with coins)", "", 1]
		],
		feature : "City Secrets",
		trait : [
			"I keep scraps of food and trinkets hidden away in my pockets.",
			"I ask questions all the time.",
			"I like to squeeze into compact places where nobody can harm me.",
			"I sleep with my back to solid surface, with all that I own embraced tightly in my arms.",
			"I have bad manners and eat like a pig.",
			"I expect that anybody who's nice to me is hiding malicious intent.",
			"I eschew bathing.",
			"I say, without reserve, what other people are implying or masking."
		],
		ideal : [
			["Respect",
				"Respect: Everybody, no matter their riches, deserves respect. (Good)"
			],
			["Community",
				"Community: We have to take look out for each other, because nobody else will do it for us. (Lawful)"
			],
			["Change",
				"Change: The low rise up, and the high and mighty come down. Change is natural. (Chaotic)"
			],
			["Retribution",
				"Retribution: The rich need to be shown how it is to live and die in the poor quarters. (Evil)"
			],
			["People",
				"People: I help those who help me\u2015 that is what lets us stay alive. (Neutral)"
			],
			["Aspiration",
				"Aspiration: I'm going to prove that I'm worthy of a better life. (Any)"
			]
		],
		bond : [
			"My town or city is my home, and I'll battle those that threaten it.",
			"I'm the benefactor of an orphanage so others may be kept from enduring what I was forced to endure.",
			"I owe my life to another urchin who taught me the ways of living in the gutters.",
			"I owe a debt I can never repay to the person who showed me sympathy.",
			"I got away from my life of poverty by robbing an influential person, and I'm wanted for it.",
			"No one else should have to suffer the difficulties I've been through."
		],
		flaw : [
			"I will run away from a fight if I'm outnumbered.",
			"A gold piece already has a lot of value to me, and I'll do just about anything for more of it.",
			"I will never completely trust another. I only trust myself.",
			"I would rather use an unfair advantage than fight honorably.",
			"It's not theft if I have more use for it than someone else.",
			"People who are incapable of taking care of themselves get what they deserve."
		],
		toolProfs : ["Disguise kit", ["Thieves' tools", "Dex"]],
		lifestyle : "modest"
	}
]
// Add the background variants
// AddBackgroundVariant("entertainer", "gladiator", {
// 	name : "Gladiator",
// 	source : [["P", 131], ["ALbackground", 0]],
// 	equipright : [
// 		["Costume", "", 4],
// 		["Favor of an admirer", "", ""],
// 		["Belt pouch (with coins)", "", 1],
// 		["Inexpensive, unusual weapon", "", ""]
// 	],
// 	feature : "Are You Entertained?",
// 	extra : ""
// });
// AddBackgroundVariant("guild artisan", "guild merchant", {
// 	name : "Guild Merchant",
// 	source : [["P", 133], ["ALbackground", 0]],
// 	equipleft : [
// 		["Letter of introduction from guild", "", ""]
// 	],
// 	equipright : [
// 		["Traveler's clothes", "", 4],
// 		["Belt pouch (with coins)", "", 1],
// 		["Cart", "", ""],
// 		["Mule", "", ""]
// 	],
// 	extra : [
// 		"Select a Guild Business",
// 		"Traders",
// 		"Caravan masters",
// 		"Shopkeepers"
// 	],
// 	toolProfs : ["Navigator's tools (or language)"]
// });
// AddBackgroundVariant("noble", "knight", {
// 	name : "Knight",
// 	source : [["P", 136], ["ALbackground", 0]],
// 	equipright : [
// 		["Fine clothes", "", 6],
// 		["Signet ring", "", ""],
// 		["Purse (with coins)", "", 1],
// 		["Banner or token from devoted love", "", ""]
// 	],
// 	feature : "Retainers"
// });
// AddBackgroundVariant("sailor", "pirate", {
// 	name : "Pirate",
// 	source : [["P", 139], ["ALbackground", 0]],
// 	feature : "Bad Reputation"
// });
