// (sub)Races that are not in the SRD
[
	{
		name : "Mountain dwarf",
		sortname : "Dwarf, Mountain",
		source : ["P", 20],
		plural : "Mountain dwarves",
		size : 3,
		speed : {
			walk : { spd : 25, enc : 25 }
		},
		languageProfs : ["Common", "Dwarvish"],
		vision : [["Darkvision", 60]],
		savetxt : { adv_vs : ["poison"] },
		dmgres : ["Poison"],
		weaponprofs : [false, false, ["battleaxe", "handaxe", "warhammer", "light hammer"]],
		armor : [true, true, false, false],
		toolProfs : [["Smith, brewer, or mason tools", 1]],
		age : " are considered young until they are 50 and live about 350 years",
		height : " stand between 4 and 5 feet tall (4' + 2d4\")",
		weight : " weigh around 150 lb (130 + 2d4 \xD7 2d6 lb)",
		heightMetric : " stand between 1,2 and 1,5 metres tall (120 + 5d4 cm)",
		weightMetric : " weigh around 75 kg (60 + 5d4 \xD7 4d6 / 10 kg)",
		improvements : "Mountain Dwarf: +2 Strength, +2 Constitution;",
		scores : [2, 0, 2, 0, 0, 0],
		trait : "Mountain Dwarf (+2 Strength, +2 Constitution)\n\nStonecunning:\n   Whenever I make an Intelligence (History) check related to the origin of stonework, I am considered proficient in the History skill and add double my proficiency bonus to the check, instead of my normal proficiency bonus."
	},
	{
		name : "Drow",
		sortname : "Elf, Dark (Drow)",
		source : ["P", 24],
		plural : "Drow",
		size : 3,
		speed : {
			walk : { spd : 30, enc : 20 }
		},
		languageProfs : ["Common", "Elvish"],
		vision : [["Darkvision", 120], ["Sunlight Sensitivity", 0]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		weaponprofs : [false, false, ["rapier", "shortsword", "hand crossbow"]],
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to 5 1/2 feet tall (4'5\" + 2d6\")",
		weight : " weigh around 100 lb (75 + 2d6 \xD7 1d6 lb)",
		heightMetric : " range from under 1,5 to 1,7 metres tall (135 + 5d6 cm)",
		weightMetric : " weigh around 45 kg (35 + 5d6 \xD7 2d6 / 10 kg)",
		improvements : "Drow: +2 Dexterity, +1 Charisma;",
		scores : [0, 2, 0, 0, 0, 1],
		trait : "Drow (+2 Dexterity, +1 Charisma)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. This gives the same benefit as a human gets from 8 hours of sleep (long rest takes only 4 hours).\nSunlight Sensitivity: Disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when I or what I am trying to attack/perceive is in direct sunlight.\nDrow Magic: 1st level: Dancing Lights cantrip; 3rd level: Faerie Fire; 5th level: Darkness. Both spells can be used once per long rest. Charisma is my spellcasting ability for these.", // errata to specify once per day is long rest
		abilitySave : 6,
		spellcastingAbility : 6,
		spellcastingBonus : {
			name : "Drow Magic (level 1)",
			spells : ["dancing lights"],
			selection : ["dancing lights"],
			atwill : true
		},
		features : {
			"faerie fire" : {
				name : "Faerie Fire",
				minlevel : 3,
				usages : 1,
				recovery : "long rest",
				tooltip : " (Drow Magic)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Drow Magic (level 3)",
					spells : ["faerie fire"],
					selection : ["faerie fire"],
					oncelr : true
				}
			},
			"darkness" : {
				name : "Darkness",
				minlevel : 5,
				usages : 1,
				recovery : "long rest",
				tooltip : " (Drow Magic)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Drow Magic (level 5)",
					spells : ["darkness"],
					selection : ["darkness"],
					oncelr : true
				}
			}
		}
	},
	{
		name : "Wood elf",
		sortname : "Elf, Wood",
		source : ["P", 24],
		plural : "Wood elves",
		size : 3,
		speed : {
			walk : { spd : 35, enc : 25 }
		},
		languageProfs : ["Common", "Elvish"],
		vision : [["Darkvision", 60]],
		savetxt : {
			text : ["Magic can't put me to sleep"],
			adv_vs : ["charmed"]
		},
		weaponprofs : [false, false, ["longsword", "shortsword", "longbow", "shortbow"]],
		skills : ["Perception"],
		age : " typically claim adulthood around age 100 and can live to be 750 years old",
		height : " range from under 5 to over 6 feet tall (4'6\" + 2d10\")",
		weight : " weigh around 115 lb (90 + 2d10 \xD7 1d4 lb)",
		heightMetric : " range from under 1,5 to over 1,8 metres tall (140 + 5d10 cm)",
		weightMetric : " weigh around 55 kg (40 + 5d10 \xD7 2d4 / 10 kg)",
		improvements : "Wood Elf: +2 Dexterity, +1 Wisdom;",
		scores : [0, 2, 0, 0, 1, 0],
		trait : "Wood Elf (+2 Dexterity, +1 Wisdom)\nTrance: Elves don't need to sleep, but meditate semiconsciously, for 4 hours a day. While meditating, I can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, I gain the same benefit that a human does from 8 hours of sleep, thus needing only 4 hours for a long rest.\nMask of the Wild: I can attempt to hide even when I am only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
	},
	{
		name : "Forest gnome",
		sortname : "Gnome, Forest",
		source : ["P", 37],
		plural : "Forest gnomes",
		size : 4,
		speed : {
			walk : { spd : 25, enc : 15 }
		},
		languageProfs : ["Common", "Gnomish"],
		vision : [["Darkvision", 60]],
		savetxt : { text : ["Adv. on Int/Wis/Cha saves vs. magic"] },
		age : " start adult life around age 40 and can live 350 to almost 500 years",
		height : " are 3 to 4 feet tall (2'11\" + 2d4\")",
		weight : " weigh around 40 lb (35 + 2d4 lb)",
		heightMetric : " are 90 to 120 cm tall (2'11\" + 5d4)",
		weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
		improvements : "Forest Gnome: +1 Dexterity, +2 Intelligence;",
		scores : [0, 1, 0, 2, 0, 0],
		trait : "Forest Gnome (+1 Dexterity, +2 Intelligence)" + (typePF ? "\n" : " ") + "\nNatural Illusionist:\n   I know the Minor Illusion cantrip. Intelligence is my spellcasting ability for it.\n\nSpeak with Small Beasts:\n   Through sounds and gestures, I can communicate simple ideas with Small or smaller beasts.",
		spellcastingAbility : 4,
		spellcastingBonus : {
			name : "Natural Illusionist",
			spells : ["minor illusion"],
			selection : ["minor illusion"],
			atwill : true
		}
	},
	{
		name : "Stout halfling",
		sortname : "Halfling, Stout",
		source : ["P", 28],
		plural : "Stout halflings",
		size : 4,
		speed : {
			walk : { spd : 25, enc : 15 }
		},
		languageProfs : ["Common", "Halfling"],
		savetxt : { adv_vs : ["frightened", "poison"] },
		dmgres : ["Poison"],
		age : " reach adulthood at age 20 and live around 150 years",
		height : " average about 3 feet tall (2'7\" + 2d4\")",
		weight : " weigh around 40 lb (35 + 2d4 lb)",
		heightMetric : " average about 90 cm tall (80 + 5d4)",
		weightMetric : " weigh around 18 kg (16 + 5d4 / 10 kg)",
		improvements : "Stout Halfling: +2 Dexterity, +1 Constitution;",
		scores : [0, 2, 1, 0, 0, 0],
		trait : "Stout Halfling (+2 Dexterity, +1 Constitution)\n\nLucky: When I roll a 1 on an attack roll, ability check, or saving throw, I can reroll the die and must use the new roll.\n\nHalfling Nimbleness: I can move through the space of any creature that is of a size larger than me."
	}
]

// Add Racial variants that are not part of the SRD
// AddRacialVariant("human", "variant", {
// 	regExpSearch : /variant/i,
// 	source : ["P", 31],
// 	skillstxt : "Choose any one skill",
// 	improvements : "Human: +1 to two different ability scores of my choice;",
// 	scores : [0, 0, 0, 0, 0, 0],
// 	trait : "Human (+1 to two different ability scores of my choice)\n\nSkills: I gain proficiency in one skill of my choice.\n\nFeat: I gain one feat of my choice.",
// 	eval : "AddString('Feat Note 1', 'Human bonus feat', '; ');",
// 	removeeval : "RemoveString('Feat Note 1', 'Human bonus feat');"
// });
