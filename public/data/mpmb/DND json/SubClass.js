AddSubClass("barbarian", "totem warrior", {
	subname : "Path of the Totem Warrior",
	fullname : "Totem Warrior",
	source : ["P", 50],
	features : {
		"subclassfeature3" : {
			name : "Spirit Seeker",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "I can cast Beast Sense and Speak with Animals as rituals (PHB 217 \u0026 277)",
			spellcastingBonus : [{
				name : "Spirit Seeker",
				spells : ["beast sense"],
				selection : ["beast sense"]
			}, {
				name : "Spirit Seeker",
				spells : ["speak with animals"],
				selection : ["speak with animals"]
			}]
		},
		"subclassfeature3.1" : {
			name : "Totem Spirit",
			source : ["P", 50],
			minlevel : 3,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Spirit using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Spirit",
				description : "\n   " + "While raging, I have resistance to all damage types except psychic",
				dmgres : [["All -Psychic", "All -Psychic (rage)"]],
				eval : "SetProf('resistance', false, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', false, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', false, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');",
				removeeval : "SetProf('resistance', true, 'Bludgeoning', 'Barbarian: Rage', 'Bludgeon. (in Rage)'); SetProf('resistance', true, 'Piercing', 'Barbarian: Rage', 'Piercing (in Rage)'); SetProf('resistance', true, 'Slashing', 'Barbarian: Rage', 'Slashing (in Rage)');"
			},
			"eagle" : {
				name : "Eagle Spirit",
				description : "\n   " + "While raging without heavy armor, others have disadv. on opportunity attacks vs. me" + "\n   " + "I can use the Dash action as a bonus action",
				action : ["bonus action", " (Dash)"]
			},
			"wolf" : {
				name : "Wolf Spirit",
				description : "\n   " + "While raging, friends have advantage on melee attacks vs. hostiles within 5 ft of me"
			}
		},
		"subclassfeature6" : {
			name : "Aspect of the Beast",
			source : ["P", 50],
			minlevel : 6,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Aspect using the \"Choose Feature\" button above",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Aspect of the Bear",
				description : "\n   " + "Advantage on Strength checks to push/pull/lift/break; Carrying capacity is doubled",
				eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 2;",
				removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 2;"
			},
			"eagle" : {
				name : "Aspect of the Eagle",
				description : "\n   " + "I can see up to 1 mile away perfectly; No disadvantage on Perception from dim light"
			},
			"wolf" : {
				name : "Aspect of the Wolf",
				description : "\n   " + "I can track while traveling at a fast pace; I can move stealthily at a normal pace"
			}
		},
		"subclassfeature10" : {
			name : "Spirit Walker",
			source : ["P", 50],
			minlevel : 10,
			description : "\n   " + "I can cast Commune with Nature as a ritual (PHB 224)",
			spellcastingBonus : {
				name : "Spirit Walker",
				spells : ["commune with nature"],
				selection : ["commune with nature"]
			}
		},
		"subclassfeature14" : {
			name : "Totemic Attunement",
			source : ["P", 50],
			minlevel : 14,
			description : "\n   " + "Choose Bear, Eagle, Elk, Wolf, or Tiger Attunement using the \"Choose Feature\" button",
			choices : ["Bear", "Eagle", "Wolf"],
			"bear" : {
				name : "Bear Attunement",
				description : "\n   " + "While raging, any creature that sees me within 5 ft has disadv. on attacks vs. others" + "\n   " + "Enemies that can't perceive me or be frightened are immune"
			},
			"eagle" : {
				name : "Eagle Attunement",
				description : "\n   " + "While raging, I can fly at my current speed, but I can only stay aloft during my turn"
			},
			"wolf" : {
				name : "Wolf Attunement",
				description : "\n   " + "If my melee attack hits while raging, I can knock prone as a bonus action (up to Large)",
				action : ["bonus action", " (raging: knock prone)"]
			}
		}
	}
});
AddSubClass("bard", "college of valor", {
	regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*valor).*$/i,
	subname : "College of Valor",
	source : ["P", 55],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with medium armor, shields, and martial weapons",
			armor : [false, true, false, true],
			weapons : [false, true]
		},
		"subclassfeature3.1" : {
			name : "Combat Inspiration",
			source : ["P", 55],
			minlevel : 3,
			description : "\n   " + "My Bardic Inspiration can also be used to add the die to a weapon damage roll" + "\n   " + "Alternatively, it can be used as a reaction to add the die to AC against one attack"
		},
		"subclassfeature14" : {
			name : "Battle Magic",
			source : ["P", 55],
			minlevel : 14,
			description : "\n   " + "As a bonus action when I use my action to cast a bard spell, I can make a weapon attack",
			action : ["bonus action", " (with Bard spell)"]
		}
	}
});
AddSubClass("cleric", "knowledge domain", {
	subname : "Knowledge Domain",
	source : ["P", 59],
	spellcastingExtra : ["command", "identify", "augury", "suggestion", "nondetection", "speak with dead", "arcane eye", "confusion", "legend lore", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Blessings of Knowledge",
			source : ["P", 59],
			minlevel : 1,
			description : "\n   " + "I learn two languages and gain proficiency and expertise with two skills" + "\n   " + "I can choose from the following: Arcana, History, Nature, or Religion",
			skillstxt : "\n\n" + toUni("Knowledge Domain") + ": Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills.",
			languageProfs : [2]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Knowledge of Ages",
			source : ["P", 59],
			minlevel : 2,
			description : "\n   " + "As an action, I gain proficiency with a chosen skill or tool for 10 minutes",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Read Thoughts",
			source : ["P", 59],
			minlevel : 6,
			description : "\n   " + "As an action, one creature within 60 ft I can see must make a Wisdom save" + "\n   " + "If it fails, I can read its surface thoughts for 1 min, as long as it's within 60 ft of me" + "\n   " + "As an action, I can end this and cast Suggestion on it (it fails its save automatically)" + "\n   " + "If it succeeded on its save, I can't use this feature again on it until I finish a long rest",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 60],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Visions of the Past",
			source : ["P", 60],
			minlevel : 17,
			description : "\n   " + "I can see recent events of an object or area by concentrating and praying for 1 min" + "\n   " + "I can meditate this way for up to a number of minutes equal to my Wisdom score" + "\n   - " + "Object Reading (after meditating for 1 minute per owner):" + "\n      " + "If an owner owned it in the last Wis score in days, I learn how that owner got/lost it" + "\n      " + "I also learn the most recent significant event involving the object and the owner" + "\n   - " + "Area Reading (my immediate surroundings, up to a 50-foot cube):" + "\n      " + "Going back my Wisdom score in days, per minute I meditate, I learn about one event" + "\n      " + "This starts with the most recent event; It can be significant or just important to me",
			usages : 1,
			recovery : "short rest"
		}
	}
});
AddSubClass("cleric", "light domain", {
	subname : "Light Domain",
	source : ["P", 61],
	spellcastingExtra : ["burning hands", "faerie fire", "flaming sphere", "scorching ray", "daylight", "fireball", "guardian of faith", "wall of fire", "flame strike", "scrying"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["P", 61],
			minlevel : 1,
			description : "\n   " + "I learn the Light cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip (Light)",
				spells : ["light"],
				selection : ["light"]
			}
		},
		"subclassfeature1.1" : {
			name : "Warding Flare",
			source : ["P", 61],
			minlevel : 1,
			description : desc([
				"When a creature within 30 ft attacks me and I can see it, I can interpose divine light",
				"As a reaction, I impose disadv. on the attacker's attack roll (unless it can't be blinded)"
			]),
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Radiance of the Dawn",
			source : ["P", 61],
			minlevel : 2,
			description : "\n   " + "As an action, in 30 ft, magical darkness is dispelled and hostiles must make a Con save" + "\n   " + "Each takes radiant damage, saves for half, and negates with total cover",
			additional : ["", "2d10 + 2 damage", "2d10 + 3 damage", "2d10 + 4 damage", "2d10 + 5 damage", "2d10 + 6 damage", "2d10 + 7 damage", "2d10 + 8 damage", "2d10 + 9 damage", "2d10 + 10 dmg", "2d10 + 11 dmg", "2d10 + 12 dmg", "2d10 + 13 dmg", "2d10 + 14 dmg", "2d10 + 15 dmg", "2d10 + 16 dmg", "2d10 + 17 dmg", "2d10 + 18 dmg", "2d10 + 19 dmg", "2d10 + 20 dmg"],
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Improved Flame",
			source : ["P", 61],
			minlevel : 6,
			description : "\n   " + "I can also use my Warding Flare if another is attacked by a creature within 30 ft of me"
		},
		"subclassfeature8" : {
			name : "Potent Spellcasting",
			source : ["P", 61],
			minlevel : 8,
			description : "\n   " + "I can add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Corona of Light",
			source : ["P", 61],
			minlevel : 17,
			description : "\n   " + "As an action, I have an aura of 60 ft sunlight and 30 ft dim light for 1 min" + "\n   " + "Enemies in the sunlight have disadv. on saves vs. spells that deal fire or radiant damage",
			action : ["action", " (start/stop)"]
		}
	}
});
AddSubClass("cleric", "nature domain", {
	subname : "Nature Domain",
	source : ["P", 62],
	spellcastingExtra : ["animal friendship", "speak with animals", "barkskin", "spike growth", "plant growth", "wind wall", "dominate beast", "grasping vine", "insect plague", "tree stride"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with heavy armor",
			armor : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Acolyte of Nature",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I learn a druid cantrip and proficiency with a skill: Animal Handling, Nature, Survival",
			skillstxt : "\n\n" + toUni("Nature Domain") + ": Choose one from Animal Handling, Nature, or Survival.",
			spellcastingBonus : {
				name : "Acolyte of Nature",
				"class" : "druid",
				level : [0, 0]
			}
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Charm Animals and Plants",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "As an action, all beasts and plants within 30 ft that I can see must make a Wis save" + "\n   " + "If failed, each is charmed and friendly to allies and me for 1 min or until damaged",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Dampen Elements",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "As a reaction, if an ally in 30 ft or I takes acid/cold/fire/lightning/thunder damage," + "\n   " + "I can grant resistance against that instance of damage",
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 cold/fire/lightning damage (choice)";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 cold/fire/lightning damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra cold, fire, or lightning damage (my choice)."]
			}
		},
		"subclassfeature17" : {
			name : "Master of Nature",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "As a bonus action, I can command creatures that are charmed by my Channel Divinity",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("cleric", "tempest domain", {
	subname : "Tempest Domain",
	source : ["P", 62],
	spellcastingExtra : ["fog cloud", "thunderwave", "gust of wind", "shatter", "call lightning", "sleet storm", "control water", "ice storm", "destructive wave", "insect plague"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "Wrath of the Storm",
			source : ["P", 62],
			minlevel : 1,
			description : "\n   " + "As a reaction, when a creature I can see within 5 ft hits me, I can thunderously rebuke" + "\n   " + "It takes 2d8 lightning or thunder damage (my choice) that a Dex save can halve",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["reaction", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Destructive Wrath",
			source : ["P", 62],
			minlevel : 2,
			description : "\n   " + "Instead of rolling, I can do maximum damage when I do lightning or thunder damage"
		},
		"subclassfeature6" : {
			name : "Thunderbolt Strike",
			source : ["P", 62],
			minlevel : 6,
			description : "\n   " + "When I deal lightning damage to a Large or smaller foe, I can push it up to 10 ft away"
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 62],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 thunder damage";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 thunder damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra thunder damage."]
			}
		},
		"subclassfeature17" : {
			name : "Stormborn",
			source : ["P", 62],
			minlevel : 17,
			description : "\n   " + "Whenever I'm not underground or indoors, I have a fly speed equal to my current speed",
			speed : { fly : { spd : "walk", enc : "walk" } }
		}
	}
});
AddSubClass("cleric", "trickery domain", {
	subname : "Trickery Domain",
	source : ["P", 63],
	spellcastingExtra : ["charm person", "disguise self", "mirror image", "pass without trace", "blink", "dispel magic", "dimension door", "polymorph", "dominate person", "modify memory"],
	features : {
		"subclassfeature1" : {
			name : "Blessing of the Trickster",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "As an action, a willing creature I touch (not me) has adv. on Dex (Stealth) checks" + "\n   " + "This lasts for 1 hour or until I use it again",
			action : ["action", ""]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invoke Duplicity",
			source : ["P", 63],
			minlevel : 2,
			description : desc([
				"As an action, I create illusory duplicates of myself within 30 ft of me for 1 min (conc)",
				"As a bonus action, I can move them 30 ft to space(s) I can see within 120 ft of me",
				"I can cast spells as though I was in an duplicate's space, using my own senses",
				"I have advantage on attacks if the target is within 5 ft of a duplicate and me"
			]),
			additional : levels.map(function (n) { return n < 2 ? "" : (n < 17 ? 1 : 2) + " illusory duplicate" + (n < 17 ? "" : "s"); }),
			action : ["action", ""],
			eval : "AddAction('bonus action', 'Move Duplicate(s)', 'Cleric (Trickery Domain) - Channel Divinity: Invoke Duplicity')",
			removeeval : "RemoveAction('bonus action', 'Move Duplicate(s)')"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Cloak of Shadows",
			source : ["P", 63],
			minlevel : 6,
			description : "\n   " + "As an action, I become invisible until the end of my next turn or I attack/cast a spell",
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) { return n < 8 ? "" : "+" + (n < 14 ? 1 : 2) + "d8 poison damage"; }),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 poison damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra poison damage."]
			}
		},
		"subclassfeature17" : {
			name : "Improved Duplicity",
			source : ["P", 63],
			minlevel : 17,
			description : desc([
				"When I use Invoke Duplicity, I make four illusory duplicates instead of one",
				"I can move any number of the illusory duplicates as part of the same bonus action"
			])
		}
	}
});
AddSubClass("cleric", "war domain", {
	subname : "War Domain",
	source : ["P", 63],
	spellcastingExtra : ["divine favor", "shield of faith", "magic weapon", "spiritual weapon", "crusader's mantle", "spirit guardians", "freedom of movement", "stoneskin", "flame strike", "hold monster"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "I gain proficiency with martial weapons and heavy armor",
			armor : [false, false, true, false],
			weapons : [false, true]
		},
		"subclassfeature1.1" : {
			name : "War Priest",
			source : ["P", 63],
			minlevel : 1,
			description : "\n   " + "When I use the Attack action, I can make a weapon attack as a bonus action",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest",
			action : ["bonus action", " (with Attack action)"]
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Guided Strike",
			source : ["P", 63],
			minlevel : 2,
			description : "\n   " + "When I make an attack roll, I can add a +10 bonus to the roll after seeing the d20 roll"
		},
		"subclassfeature6" : {
			name : "Channel Divinity: War God's Blessing",
			source : ["P", 63],
			minlevel : 6,
			description : desc([
				"As a reaction, when a creature within 30 ft makes an attack roll, I can grant a ",
				"The creature then adds a +10 bonus to the roll; I can do this after seeing the d20 roll"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature8" : {
			name : "Divine Strike",
			source : ["P", 63],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 damage of the weapon's type";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra damage."]
			}
		},
		"subclassfeature17" : {
			name : "Avatar of Battle",
			source : ["P", 63],
			minlevel : 17,
			description : "\n   " + "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});
AddSubClass("druid", "circle of the moon", {
	subname : "Circle of the Moon",
	source : ["P", 69],
	features : {
		"subclassfeature2" : {
			name : "Circle Forms",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "I am able to transform into more dangerous animal forms when using Wild Shape"
		},
		"subclassfeature2.wild shape" : {
			name : "Wild Shape",
			source : ["P", 66],
			minlevel : 2,
			description : "\n   " + "As a bonus action, I assume the shape of a beast I have seen before with these rules:" + "\n    - " + "I gain all its game statistics except Intelligence, Wisdom, or Charisma" + "\n    - " + "I get its skill/saving throw prof. while keeping my own, using whichever is higher" + "\n    - " + "I assume the beast's HP and HD; I get mine back when I revert back" + "\n    - " + "I can't cast spells in beast form, but transforming doesn't break concentration" + "\n    - " + "I retain features from class, race, etc., but I don't retain special senses" + "\n    - " + "I can choose whether equipment falls to the ground, merges, or stays worn" + "\n    - " + "I revert if out of time or unconscious; if KOd by damage, excess damage carries over",
			usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "\u221E\u00D7 per "],
			recovery : "short rest",
			additional : ["", "CR 1, no fly/swim; 1 hour", "CR 1, no fly/swim; 1 hour", "CR 1, no fly; 2 hours", "CR 1, no fly; 2 hours", "CR 2, no fly; 3 hours", "CR 2, no fly; 3 hours", "CR 2; 4 hours", "CR 3; 4 hours", "CR 3; 5 hours", "CR 3; 5 hours", "CR 4; 6 hours", "CR 4; 6 hours", "CR 4; 7 hours", "CR 5; 7 hours", "CR 5; 8 hours", "CR 5; 8 hours", "CR 6; 9 hours", "CR 6; 9 hours", "CR 6; 10 hours"],
			action : ["bonus action", " (start/stop)"],
			eval : "RemoveAction('action', 'Wild Shape (start)'); RemoveAction('bonus action', 'Wild Shape (end)');"
		},
		"subclassfeature2.1" : {
			name : "Combat Wild Shape",
			source : ["P", 69],
			minlevel : 2,
			description : "\n   " + "As a bonus action while in Wild Shape, I can expend spell slots to heal myself" + "\n   " + "I regain 1d8 HP per expended spell slot level; I can use Wild Shape as a bonus action",
			action : ["bonus action", " (heal)"],
			removeeval : "AddAction('action', 'Wild Shape (start)', 'Druid'); AddAction('bonus action', 'Wild Shape (end)', 'Druid');"

		},
		"subclassfeature6" : {
			name : "Primal Strike",
			source : ["P", 69],
			minlevel : 6,
			description : "\n   " + "My attacks count as magical while in Wild Shape"
		},
		"subclassfeature10" : {
			name : "Elemental Wild Shape",
			source : ["P", 69],
			minlevel : 10,
			description : "\n   " + "I can transform into an air/earth/fire/water elemental by expending 2 Wild Shape uses"
		},
		"subclassfeature14" : {
			name : "Thousand Forms",
			source : ["P", 69],
			minlevel : 14,
			description : "\n   " + "I can cast Alter Self at will without using spell slots (PHB 211)"
		}
	}

});
AddSubClass("fighter", "battle master", {
	subname : "Battle Master",
	fullname : "Battle Master",
	source : ["P", 73],
	abilitySave : 1,
	abilitySaveAlt : 2,
	features : {
		"subclassfeature3" : {
			name : "Combat Superiority",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I gain a number of superiority dice that I can use to fuel special Maneuvers" + "\n   " + "I regain all superiority dice after a short rest",
			additional : ["", "", "d8", "d8", "d8", "d8", "d8", "d8", "d8", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d10", "d12", "d12", "d12"],
			usages : [0, 0, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
			recovery : "short rest"
		},
		"subclassfeature3.1" : {
			name : "Maneuvers",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "Use the \"Choose Feature\" button above to add a Maneuver to the third page" + "\n   " + "I can use a Maneuver by expending a superiority die (only one Maneuver per attack)",
			additional : ["", "", "3 known", "3 known", "3 known", "3 known", "5 known", "5 known", "5 known", "7 known", "7 known", "7 known", "7 known", "7 known", "9 known", "9 known", "9 known", "9 known", "9 known", "9 known"],
			extraname : "Maneuver",
			extrachoices : ["Commander's Strike", "Disarming Attack", "Distracting Strike", "Evasive Footwork", "Feinting Attack", "Goading Attack", "Lunging Attack", "Maneuvering Attack", "Menacing Attack", "Parry", "Precision Attack", "Pushing Attack", "Rally", "Riposte", "Sweeping Attack", "Trip Attack"],
			"commander's strike" : {
				name : "Commander's Strike",
				source : ["P", 74],
				description : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
				action : ["bonus action", " (with Attack action)"]
			},
			"disarming attack" : {
				name : "Disarming Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Strength save or drops a held object of my choice to its feet"
			},
			"distracting strike" : {
				name : "Distracting Strike",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature"
			},
			"evasive footwork" : {
				name : "Evasive Footwork",
				source : ["P", 74],
				description : "\n   " + "Use when moving; I add the superiority die to my AC until I stop moving"
			},
			"feinting attack" : {
				name : "Feinting Attack",
				source : ["P", 74],
				description : "\n   " + "As a bonus action, I can feint to gain adv. on my next attack this turn vs. a target in 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["bonus action", ""]
			},
			"goading attack" : {
				name : "Goading Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn"
			},
			"lunging attack" : {
				name : "Lunging Attack",
				source : ["P", 74],
				description : "\n   " + "I can spend a superiority die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage"
			},
			"maneuvering attack" : {
				name : "Maneuvering Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target"

			},
			"menacing attack" : {
				name : "Menacing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn"
			},
			"parry" : {
				name : "Parry",
				source : ["P", 74],
				description : "\n   " + "When damaged in melee, I can use a reaction to reduce it by superiority die + Dex mod",
				action : ["reaction", " (when damaged in melee)"]
			},
			"precision attack" : {
				name : "Precision Attack",
				source : ["P", 74],
				description : "\n   " + "I add the superiority die to my attack roll, either before or after rolling"
			},
			"pushing attack" : {
				name : "Pushing Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away"
			},
			"rally" : {
				name : "Rally",
				source : ["P", 74],
				description : "\n   " + "Ally that can see/hear me gets temporary HP equal to superiority die + Charisma mod",
				action : ["bonus action", ""]
			},
			"riposte" : {
				name : "Riposte",
				source : ["P", 74],
				description : "\n   " + "When missed in melee, I can use my reaction to make one melee attack vs. the attacker" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
				action : ["reaction", " (after missed in melee)"]
			},
			"sweeping attack" : {
				name : "Sweeping Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature and a second creature is within 5 ft of the first" + "\n   " + "If the original attack roll hits this second creature, it takes the superiority die in damage"
			},
			"trip attack" : {
				name : "Trip Attack",
				source : ["P", 74],
				description : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be knocked prone"
			}
		},
		"subclassfeature3.2" : {
			name : "Student of War",
			source : ["P", 73],
			minlevel : 3,
			description : "\n   " + "I have proficiency with one artisan's tool set of my choice",
			toolProfs : [["Artisan's tools", 1]]
		},
		"subclassfeature7" : {
			name : "Know Your Enemy",
			source : ["P", 73],
			minlevel : 7,
			description : "\n   " + "If I spend 1 min studying someone, the DM will tell me info about him/her"
		},
		"subclassfeature10" : {
			name : "Improved Combat Superiority",
			source : ["P", 74],
			minlevel : 10,
			description : "\n   " + "My superiority dice turn into d10s at 10th level and into d12s at 18th level"
		},
		"subclassfeature15" : {
			name : "Relentless",
			source : ["P", 74],
			minlevel : 15,
			description : "\n   " + "I regain one superiority die if I have no more remaining when I roll initiative"
		}
	}
});
AddSubClass("fighter", "eldritch knight", {
	subname : "Eldritch Knight",
	fullname : "Eldritch Knight",
	source : ["P", 75],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Evoc", "Abjur"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"action surge" : {
			name : "Action Surge",
			source : ["P", 72],
			minlevel : 2,
			description : "\n   " + "I can take one additional action on my turn on top of my normally allowed actions",
			usages : [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery : "short rest",
			additional : ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport", "30 ft teleport"]
		},
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
			spellcastingBonus : { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}
		},
		"subclassfeature3.1" : {
			name : "Weapon Bond",
			source : ["P", 75],
			minlevel : 3,
			description : "\n   " + "I can bond with up to two weapons by spending a short rest with each" + "\n   " + "I can't be disarmed of a bonded weapon and I can summon one as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "War Magic",
			source : ["P", 75],
			minlevel : 7,
			description : "\n   " + "When I use my action to cast a cantrip, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Eldritch Strike",
			source : ["P", 75],
			minlevel : 10,
			description : "\n   " + "A creature hit by my weapon attack has disadv. on the save vs. the next spell I cast" + "\n   " + "This lasts until the end of my next turn"
		},
		"subclassfeature15" : {
			name : "Arcane Charge",
			source : ["P", 75],
			minlevel : 15,
			description : "\n   " + "When I use Action Surge, I can also teleport up to 30 ft to an empty space I can see" + "\n   " + "I can do so before or after the extra action"
		},
		"subclassfeature18" : {
			name : "Improved War Magic",
			source : ["P", 75],
			minlevel : 18,
			description : "\n   " + "When I use my action to cast a spell, I can make a weapon attack as a bonus action",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("monk", "way of the four elements", {
	subname : "Way of the Four Elements",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Disciple of the Elements",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know Elemental Attunement and additional Elemental Disciplines, depending on level" + "\n   " + "Use the \"Choose Feature\" button above to add Elemental Disciplines to the third page" + "\n   " + "From 5th level onward, I can use additional ki points to increase their spell slot level" + "\n   " + "I can trade known Elemental Disciplines for others when I gain new ones",
			additional : ["", "", "2 known", "2 known", "2 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 3 max ki", "3 known; 4 max ki", "3 known; 4 max ki", "4 known; 4 max ki", "4 known; 4 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "4 known; 5 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki", "5 known; 6 max ki"],
			extraname : "Elemental Discipline",
			extrachoices : ["Breath of Winter (prereq: level 17 monk)", "Clench of the North Wind (prereq: level 6 monk)", "Eternal Mountain Defense (prereq: level 17 monk)", "Fangs of the Fire Snake", "Fist of Four Thunders", "Fist of Unbroken Air", "Flames of the Phoenix (prereq: level 11 monk)", "Gong of the Summit (prereq: level 6 monk)", "Mist Stance (prereq: level 11 monk)", "Ride the Wind (prereq: level 11 monk)", "Rive of Hungry Flame (prereq: level 17 monk)", "Rush of the Gale Spirits", "Shape the Flowing River", "Sweeping Cinder Strike", "Water Whip", "Wave of Rolling Earth (prereq: level 17 monk)"],
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'elemental attunement', 'extra'], 'remove');",
			"elemental attunement" : {
				name : "Elemental Attunement",
				source : ["P", 81],
				description : "\n   " + "As an action, I can briefly control elemental forces within 30 ft of me" + "\n   " + "I can make a harmless sensory effect, light/snuff light, chill/warm 1 lb for 1 hour," + "\n   " + "or I cause earth/fire/water/mist in a 1 ft cube to shape itself into a form for 1 minute",
				action : ["action", ""]
			},
			"breath of winter (prereq: level 17 monk)" : {
				name : "Breath of Winter",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Cone of Cold without material components (PHB 224)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Breath of Winter",
					spells : ["cone of cold"],
					selection : ["cone of cold"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"clench of the north wind (prereq: level 6 monk)" : {
				name : "Clench of the North Wind",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Hold Person without material components (PHB 251)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Clench of the North Wind",
					spells : ["hold person"],
					selection : ["hold person"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"eternal mountain defense (prereq: level 17 monk)" : { // errata from level 11 to level 17
				name : "Eternal Mountain Defense",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Stoneskin on myself without material components (PHB 278)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Eternal Mountain Defense",
					spells : ["stoneskin"],
					selection : ["stoneskin"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"fangs of the fire snake" : {
				name : "Fangs of the Fire Snake",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "With Attack action, my unarmed strikes +10 ft reach and deal fire damage this turn" + "\n   " + "Also, I can spent an additional 1 ki point to cause an attack to deal +1d10 fire damage",
				calcChanges : {
					atkAdd : ["if ((/unarmed strike/i).test(WeaponName) && (/^(?=.*fire)(?=.*snake).*$/i).test(WeaponText)) {fields.Description += (fields.Description ? '; ' : '') + 'After hit, spend 1 ki point for +1d10 fire damage'; fields.Range = 'Melee (15 ft reach)'; fields.Damage_Type = 'fire'; }; ", "If I include the words 'Fire Snake' in the name of an unarmed strike, it gets +10 ft reach, does fire damage, and gains the option to deal +1d10 fire damage by spending 1 additional ki point."]
				}
			},
			"fist of four thunders" : {
				name : "Fist of Four Thunders",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Thunderwave (PHB 282)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Fist of Four Thunders",
					spells : ["thunderwave"],
					selection : ["thunderwave"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"fist of unbroken air" : {
				name : "Fist of Unbroken Air",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, target within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also pushed up to 20 ft away from me and knocked prone" + "\n   " + "It can make a Strength save to halve damage and avoid being pushed and knocked prone",
				action : ["action", ""]
			},
			"flames of the phoenix (prereq: level 11 monk)" : {
				name : "Flames of the Phoenix",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fireball without material components (PHB 241)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Flames of the Phoenix",
					spells : ["fireball"],
					selection : ["fireball"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"gong of the summit (prereq: level 6 monk)" : {
				name : "Gong of the Summit",
				source : ["P", 81],
				description : " [3 ki points]" + "\n   " + "As an action, I can cast Shatter without material components (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Gong of the Summit",
					spells : ["shatter"],
					selection : ["shatter"],
					firstCol : 3
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 6"
			},
			"mist stance (prereq: level 11 monk)" : {
				name : "Mist Stance",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Gaseous Form on myself without material components (PHB 244)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Mist Stance",
					spells : ["gaseous form"],
					selection : ["gaseous form"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"ride the wind (prereq: level 11 monk)" : {
				name : "Ride the Wind",
				source : ["P", 81],
				description : " [4 ki points]" + "\n   " + "As an action, I can cast Fly on myself without material components (PHB 243)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Ride the Wind",
					spells : ["fly"],
					selection : ["fly"],
					firstCol : 4
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 11"
			},
			"rive of hungry flame (prereq: level 17 monk)" : {
				name : "Rive of Hungry Flame",
				source : ["P", 81],
				description : " [5 ki points]" + "\n   " + "As an action, I can cast Wall of Fire without material components (PHB 285)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rive of Hungry Flame",
					spells : ["wall of fire"],
					selection : ["wall of fire"],
					firstCol : 5
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			},
			"rush of the gale spirits" : {
				name : "Rush of the Gale Spirits",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Gust of Wind without material components (PHB 248)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Rush of the Gale Spirits",
					spells : ["gust of wind"],
					selection : ["gust of wind"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"shape the flowing river" : {
				name : "Shape the Flowing River",
				source : ["P", 81],
				description : " [1 ki point]" + "\n   " + "As an action, I can affect ice/water up to a 30-foot cube within 120 ft" + "\n   " + "I can switch it between water/ice states and reshape ice up to half its largest dimension",
				action : ["action", ""]
			},
			"sweeping cinder strike" : {
				name : "Sweeping Cinder Strike",
				source : ["P", 81],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Burning Hands (PHB 220)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Sweeping Cinder Strike",
					spells : ["burning hands"],
					selection : ["burning hands"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"water whip" : {
				name : "Water Whip",
				source : ["P", 81],
				description : " [2 ki points; +1d10/extra ki point]" + "\n   " + "As an action, a creature within 30 ft takes 3d10 bludgeoning damage (spend ki for more)" + "\n   " + "It is also knocked prone or pulled up to 25 ft closer to me (my choice)" + "\n   " + "It can make a Dexterity save to halve damage and avoid being pulled or knocked prone",
				action : ["action", ""]
			},
			"wave of rolling earth (prereq: level 17 monk)" : {
				name : "Wave of Rolling Earth",
				source : ["P", 81],
				description : " [6 ki points]" + "\n   " + "As an action, I can cast Wall of Stone without material components (PHB 287)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Wave of Rolling Earth",
					spells : ["wall of stone"],
					selection : ["wall of stone"],
					firstCol : 6
				},
				spellFirstColTitle : "Ki",
				prereqeval : "classes.known.monk.level >= 17"
			}
		}
	}
});
AddSubClass("monk", "way of shadow", {
	subname : "Way of Shadow",
	source : ["P", 80],
	features : {
		"subclassfeature3" : {
			name : "Shadow Arts",
			source : ["P", 80],
			minlevel : 3,
			description : "\n   " + "I know the Minor Illusion cantrip and can cast certain spells by using ki (see page 3)",
			spellcastingBonus : {
				name : "Shadow Arts",
				spells : ["minor illusion"],
				selection : ["minor illusion"],
				atwill : true
			},
			extraname : "Shadow Art",
			eval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra']); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra']);",
			removeeval : "ClassFeatureOptions(['monk', 'subclassfeature3', 'darkness', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'darkvision', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'pass without trace', 'extra'], 'remove'); ClassFeatureOptions(['monk', 'subclassfeature3', 'silence', 'extra'], 'remove');",
			"darkness" : {
				name : "Darkness",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkness without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkness",
					spells : ["darkness"],
					selection : ["darkness"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"darkvision" : {
				name : "Darkvision",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Darkvision without material components (PHB 230)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Darkvision",
					spells : ["darkvision"],
					selection : ["darkvision"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"pass without trace" : {
				name : "Pass Without Trace",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Pass without Trace without material components (PHB 264)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Pass Without Trace",
					spells : ["pass without trace"],
					selection : ["pass without trace"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			},
			"silence" : {
				name : "Silence",
				source : ["P", 80],
				description : " [2 ki points]" + "\n   " + "As an action, I can cast Silence (PHB 275)",
				action : ["action", ""],
				spellcastingBonus : {
					name : "Silence",
					spells : ["silence"],
					selection : ["silence"],
					firstCol : 2
				},
				spellFirstColTitle : "Ki"
			}
		},
		"subclassfeature6" : {
			name : "Shadow Step",
			source : ["P", 80],
			minlevel : 6,
			description : "\n   " + "As a bonus action, I can teleport from and into dim light or darkness within 60 ft" + "\n   " + "After I do this, I have adv. on the next melee attack I make before the end of my turn",
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Cloak of Shadows",
			source : ["P", 80],
			minlevel : 11,
			description : "\n   " + "As an action, I can become invisible in dim light or darkness until I attack/cast",
			action : ["action", ""]
		},
		"subclassfeature17" : {
			name : "Opportunist",
			source : ["P", 80],
			minlevel : 17,
			description : "\n   " + "As a reaction, if a creature in 5 ft is hit by another, I can make a melee attack vs. it",
			action : ["reaction", ""]
		}
	}
});
AddSubClass("paladin", "oath of the ancients", {
	subname : "Oath of the Ancients",
	source : ["P", 87],
	spellcastingExtra : ["ensnaring strike", "speak with animals", "moonbeam", "misty step", "plant growth", "protection from energy", "ice storm", "stoneskin", "commune with nature", "tree stride"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Nature's Wrath",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, a creature I can see within 10 ft must make a Str/Dex save (its choice)" + "\n   " + "If it fails this save, it is restrained until it succeeds on a save at the end of its turn",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Turn the Faithless",
			source : ["P", 87],
			minlevel : 3,
			description : "\n   " + "As an action, all fey/fiends within 30 ft that can hear me must make a Wisdom save" + "\n   " + "If one fails, it is turned for 1 minute or until it takes damage and must show true form" + "\n   " + "Turned: move away, never within 30 ft of me, no reactions or actions other than Dash" + "\n   " + "Turned: may Dodge instead of Dash when nowhere to move and unable to escape bonds",
			action : ["action", ""]
		},
		"subclassfeature7" : {
			name : "Aura of Warding",
			source : ["P", 87],
			minlevel : 7,
			description : "\n   " + "Allies within range and I have resistance to damage from spells",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : ["Spells"]
		},
		"subclassfeature15" : {
			name : "Undying Sentinel",
			source : ["P", 87],
			minlevel : 15,
			description : "\n   " + "If dropped to 0 hit points and not killed outright, I can choose to stay at 1 hit point" + "\n   " + "Additionally, I suffer no drawbacks of old age and can't be aged magically",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature20" : {
			name : "Elder Champion",
			source : ["P", 87],
			minlevel : 20,
			description : "\n   " + "As an action, I assume the form of a force of nature for 1 minute and gain benefits:" + "\n    - " + "At the start of each of my turns, I regain 10 hit points" + "\n    - " + "I can cast paladin spells with a casting time of 1 action as a bonus action instead" + "\n    - " + "Enemies within 10 ft have disadv. on saves vs. my paladin spells and channel divinity",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("paladin", "oath of vengeance", {
	subname : "Oath of Vengeance",
	source : ["P", 88],
	spellcastingExtra : ["bane", "hunter's mark", "hold person", "misty step", "haste", "protection from energy", "banishment", "dimension door", "hold monster", "scrying"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Abjure Enemy",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As an action, one creature within 60 ft that I can see me must make a Wisdom save" + "\n   " + "If failed, it is frightened and its speed is 0 despite bonuses; if success, its speed is halved" + "\n   " + "This lasts for 1 minute or until it takes damage; Undead/fiends have disadv. on save",
			action : ["action", ""]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Vow of Enmity",
			source : ["P", 88],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I utter a vow against a creature I can see within 10 ft" + "\n   " + "I get adv. on attacks against it for 1 minute or until it drops to 0 HP or falls unconscious",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Relentless Avenger",
			source : ["P", 88],
			minlevel : 7,
			description : "\n   " + "After I hit with an opportunity attack, I can move 1/2 my speed in the same reaction" + "\n   " + "This movement doesn't provoke opportunity attacks"
		},
		"subclassfeature15" : {
			name : "Soul of Vengeance",
			source : ["P", 88],
			minlevel : 15,
			description : "\n   " + "When an enemy I have an active Vow of Enmity against makes an attack, I can react" + "\n   " + "As a reaction, I can make a melee weapon attack against it if it is within range",
			action : ["reaction", " (with Vow of Enmity"]
		},
		"subclassfeature20" : {
			name : "Avenging Angel",
			source : ["P", 88],
			minlevel : 20,
			description : "\n   " + "As an action, I gain a flying speed of 60 ft and a 30 ft aura of menace for 1 hour" + "\n   " + "When a creature first enters or starts its turn in the aura, it must make a Wis save" + "\n   " + "If failed, for 1 min or until it takes damage, it is frightened and attacks vs. it have adv.",
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("ranger", "beast master", {
	subname : "Beast Master",
	fullname : "Beast Master",
	source : ["P", 93],
	features : {
		"subclassfeature3" : {
			name : "Ranger's Companion",
			source : ["P", 93],
			minlevel : 3,
			description : desc([
				"It adds my proficiency bonus to AC, attacks, damage, and save/skill proficiencies",
				"Its hit point maximum equals four times my ranger level if higher than its normal HP",
				"It takes a turn on my initiative; It takes the Dodge action unless I command it otherwise",
				"As an action, I can have it take the Attack, Dash, Disengage, or Help action on its turn",
				"I can still use Extra Attack while commanding it to Attack; No action to order to move"
			]),
			additional : "1/4 CR up to medium sized beast",
			action : ["action", " (Command)"]
		},
		"subclassfeature7" : {
			name : "Exceptional Training",
			source : ["P", 93],
			minlevel : 7,
			description : desc([
				"My beast's attacks count as magical for overcoming resistances and immunities",
				"As a bonus action, I can command it to take the Dash/Disengage/Help action on its turn"
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature11" : {
			name : "Bestial Fury",
			source : ["P", 93],
			minlevel : 11,
			description : "\n   " + "When I command my beast to use the Attack action, it can attack twice on its turn"
		},
		"subclassfeature15" : {
			name : "Share Spells",
			source : ["P", 93],
			minlevel : 15,
			description : "\n   " + "When I cast a spell on myself, I can have it also affect my beast if it is within 30 ft"
		}
	}
});
AddSubClass("rogue", "arcane trickster", {
	subname : "Arcane Trickster",
	fullname : "Arcane Trickster",
	source : ["P", 98],
	abilitySave : 4,
	spellcastingFactor : 3,
	spellcastingList : {
		"class" : "wizard",
		school : ["Ench", "Illus"],
		level : [0, 4] //lower and higher limit
	},
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
	},
	features : {
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
			spellcastingBonus : [{//for the Mage Hand cantrip gained at level 1
				name : "Mage Hand cantrip",
				spells : ["mage hand"],
				selection : ["mage hand"]
			}, { //for the spells gained at level 3, 8, 14, 20
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4], //lower and higher limit
			}]
		},
		"subclassfeature3.1" : {
			name : "Mage Hand Legerdemain",
			source : ["P", 98],
			minlevel : 3,
			description : "\n   " + "As a bonus action, I can direct my Mage Hand" + "\n   " + "With a Dex (Sleight of Hand) vs. Wis (Perception) checks, I can do so discreetly" + "\n   " + "I can make it invisible and perform the following tasks:" + "\n    - " + "Stow/retrieve an object the hand is holding in a container worn/carried by another" + "\n    - " + "Use thieves' tools to pick locks and disarm traps at range",
			action : ["bonus action", ""]
		},
		"subclassfeature9" : {
			name : "Magical Ambush",
			source : ["P", 98],
			minlevel : 9,
			description : "\n   " + "When I cast a spell while hidden, the target(s) have disadvantage against that spell"
		},
		"subclassfeature13" : {
			name : "Versatile Trickster",
			source : ["P", 98],
			minlevel : 13,
			description : "\n   " + "As a bonus action, gain adv. on attacks this turn on creature within 5 ft of Mage Hand",
			action : ["bonus action", ""]
		},
		"subclassfeature17" : {
			name : "Spell Thief",
			source : ["P", 98],
			minlevel : 17,
			description : "\n   " + "As a reaction, after a spell is cast at me, I can try to negate and steal it" + "\n   " + "The caster makes a save against my spell DC with his/her spellcasting ability" + "\n   " + "On failure, the caster forgets how to cast that spell for eight hours" + "\n   " + "If I have a spell slot of a high enough level for it, I learn how to cast it during this time",
			action : ["reaction", ""],
			recovery : "long rest",
			usages : 1
		}
	}
});
AddSubClass("rogue", "assassin", {
	subname : "Assassin",
	fullname : "Assassin",
	source : ["P", 97],
	abilitySave : 2,
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiencies",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I am proficient with disguise kits and poisoner's kits",
			toolProfs : ["Disguise kit", "Poisoner's kit"]
		},
		"subclassfeature3.1" : {
			name : "Assassinate",
			source : ["P", 97],
			minlevel : 3,
			description : "\n   " + "I have adv. on attack rolls against creatures that have not taken a turn in combat yet" + "\n   " + "Any hit I score against a creature that is surprised is a critical hit"
		},
		"subclassfeature9" : {
			name : "Infiltration Expertise",
			source : ["P", 97],
			minlevel : 9,
			description : "\n   " + "I can create false identities in 7 days for 25 gp"
		},
		"subclassfeature13" : {
			name : "Imposter",
			source : ["P", 97],
			minlevel : 13,
			description : "\n   " + "After 3 hours of studying a person, I can mimic speech, writing, and behavior" + "\n   " + "I have advantage on Charisma (Deception) checks to maintain this ruse"
		},
		"subclassfeature17" : {
			name : "Death Strike",
			source : ["P", 97],
			minlevel : 17,
			description : "\n   " + "When I hit a surprised creature, it must make a Con save or take double damage",
			additional : "Save DC: 8 + Dex mod + Proficiency bonus"
		}
	}
});
AddSubClass("sorcerer", "wild magic", {
	subname : "Wild Magic",
	fullname : "Wild Mage",
	source : ["P", 103],
	features : {
		"subclassfeature1" : {
			name : "Wild Magic Surge",
			source : ["P", 103],
			minlevel : 1,
			description : desc([
				"Wild Magic Surges happen 5% of the time that I cast a sorcerer spell",
				"This doesn't happen with cantrips and I only take this chance if the DM tells me to",
				"See the \"Notes\" page for the table"
			]),
			wmsurgetable1 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 01-50]" + desc([
				"d100  Effect",
				"01-02 Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
				"03-04 For the next minute, you can see any invisible creature if you have line of sight to it.",
				"05-06 A modron chosen and controlled by the DM appears in an unoccupied space within 5 ft of you, then disappears 1 minute later.",
				"07-08 You cast fireball as a 3rd-level spell centered on yourself.",
				"09-10 You cast magic missile as a 5th-level spell.",
				"11-12 Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
				"13-14 You cast confusion centered on yourself.",
				"15-16 For the next minute, you regain 5 hit points at the start of each of your turns.",
				"17-18 You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
				"19-20 You cast grease centered on yourself.",
				"21-22 Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
				"23-24 Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
				"25-26 An eye appears on your forehead for the next minute.",
				"27-28 For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
				"29-30 You teleport up to 60 ft to an unoccupied space of your choice that you can see.",
				"31-32 You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
				"33-34 Maximize the damage of the next damaging spell you cast within the next minute.",
				"35-36 Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
				"37-38 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 ft of you and are frightened of you. They vanish after 1 minute.",
				"39-40 You regain 2d10 hit points.",
				"41-42 You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
				"43-44 For the next minute, you can teleport up to 20 ft as a bonus action on each of your turns.",
				"45-46 You cast levitate on yourself.",
				"47-48 A unicorn controlled by the DM appears in a space within 5 ft of you, then disappears 1 minute later.",
				"49-50 You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
			]),
			wmsurgetable2 : "\u25C6 Wild Magic Surge Table (Wild Magic 1, PHB 104) [results 51-100]" + desc([
				"d100  Effect",
				"51-52 A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
				"53-54 You are immune to being intoxicated by alcohol for the next 5d6 days.",
				"55-56 Your hair falls out but grows back within 24 hours.",
				"57-58 For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
				"59-60 You regain your lowest-level expended spell slot.",
				"61-62 For the next minute, you must shout when you speak.",
				"63-64 You cast fog cloud centered on yourself.",
				"65-66 Up to three creatures you choose within 30 ft of you take 4d10 lightning damage.",
				"67-68 You are frightened by the nearest creature until the end of your next turn.",
				"69-70 Each creature within 30 ft of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
				"71-72 You gain resistance to all damage for the next minute.",
				"73-74 A random creature within 60 ft of you becomes poisoned for 1d4 hours.",
				"75-76 You glow with bright light in a 30-ft radius for the next minute. Any creature that ends its turn within 5 ft of you is blinded until the end of its next turn.",
				"79-80 Illusory butterflies and flower petals flutter in the air within 10 ft of you for the next minute.",
				"77-78 You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
				"81-82 You can take one additional action immediately.",
				"83-84 Each creature within 30 ft of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
				"85-86 You cast mirror image.",
				"87-88 You cast fly on a random creature within 60 ft of you.",
				"89-90 You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
				"91-92 If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
				"93-94 Your size increases by one size category for the next minute.",
				"95-96 You and all creatures within 30 ft of you gain vulnerability to piercing damage for the next minute.",
				"97-98 You are surrounded by faint, ethereal music for the next minute.",
				"99-100 You regain all expended sorcery points."
			]),
			eval : "try {AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1, \"Wild Mage's Wild Magic Surge table, part 1\"); AddToNotes(ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2, \"Wild Mage's Wild Magic Surge table, part 2\");} catch (er) {};",
			removeeval : "try {AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable1); AddToNotes('', '', ClassSubList['sorcerer-wild magic'].features.subclassfeature1.wmsurgetable2);} catch (er) {};"
		},
		"subclassfeature1.1" : {
			name : "Tides of Chaos",
			source : ["P", 103],
			minlevel : 1,
			description : "\n   " + "I can gain advantage on either one attack roll, ability check, or saving throw" + "\n   " + "After I cast a 1st-level or higher sorcerer spell, the DM can impose a Wild Magic Surge" + "\n   " + "After I roll on the Wild Magic Surge table, I regain my use of Tides of Chaos",
			recovery : "long rest",
			usages : 1
		},
		"subclassfeature6" : {
			name : "Bend Luck",
			source : ["P", 103],
			minlevel : 6,
			description : "\n   " + "As a reaction, I can add/subtract 1d4 from another's attack roll, ability check, or save",
			action : ["reaction", " (2 sorcery points)"],
			additional : "2 sorcery points"
		},
		"subclassfeature14" : {
			name : "Controlled Chaos",
			source : ["P", 103],
			minlevel : 14,
			description : "\n   " + "Whenever I roll on the Wild Magic Surge table, I can roll twice and use either result"
		},
		"subclassfeature18" : {
			name : "Spell Bombardment",
			source : ["P", 103],
			minlevel : 18,
			description : "\n   " + "Once per turn, when I roll spell damage, I can take one damage die that rolled max" + "\n   " + "I can then roll this die again and add it to the spell's damage"
		}
	}
});
AddSubClass("warlock", "the archfey", {
	subname : "the Archfey",
	source : ["P", 109],
	spellcastingExtra : ["faerie fire", "sleep", "calm emotions", "phantasmal force", "blink", "plant growth", "dominate beast", "greater invisibility", "dominate person", "seeming"],
	features : {
		"subclassfeature1" : {
			name : "Fey Presence",
			source : ["P", 109],
			minlevel : 1,
			description : "\n   " + "As an action, all creatures in a 10-ft cube around me must make a Wisdom save" + "\n   " + "If failed, they're all charmed or frightened (my choice) until the end of my next turn",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Misty Escape",
			source : ["P", 109],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I take damage, I can turn invisible and teleport up to 60 ft" + "\n   " + "I stay invisible until the start of my next turn or until I attack or cast a spell",
			action : ["reaction", " (taking damage)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Beguiling Defenses",
			source : ["P", 109],
			minlevel : 10,
			description : "\n   " + "As a reaction, when a creature tries to charm me, I can turn the charm back on it" + "\n   " + "It must make a Wis save or be charmed by me for 1 minute or until taking damage" + "\n   " + "I am immune to being charmed",
			action : ["reaction", " (when charmed)"],
			savetxt : { immune : ["charmed"] }
		},
		"subclassfeature14" : {
			name : "Dark Delirium",
			source : ["P", 109],
			minlevel : 14,
			description : "\n   " + "As an action, a creature within 60 ft must make a Wis save or be charmed/frightened" + "\n   " + "This lasts for 1 minute or until my concentration is broken or it takes damage" + "\n   " + "During this time, it can't see or hear anything but the illusion, me, and itself",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddSubClass("warlock", "the great old one", {
	subname : "the Great Old One",
	source : ["P", 110],
	spellcastingExtra : ["dissonant whispers", "tasha's hideous laughter", "detect thoughts", "phantasmal force", "clairvoyance", "sending", "dominate beast", "evard's black tentacles", "dominate person", "telekinesis"],
	features : {
		"subclassfeature1" : {
			name : "Awakened Mind",
			source : ["P", 110],
			minlevel : 1,
			description : "\n   " + "I can telepathically speak to creatures I can see within 30 ft if they know a language" // 'to' not 'with', so one-way
		},
		"subclassfeature6" : {
			name : "Entropic Ward",
			source : ["P", 110],
			minlevel : 6,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose disadvantage to that attack roll" + "\n   " + "If it misses me, I have adv. on my next attack vs. the attacker during my next turn",
			action : ["reaction", " (when attacked)"],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Thought Shield",
			source : ["P", 110],
			minlevel : 10,
			description : "\n   " + "No one can read my mind unless I allow it; I have resistance to psychic damage" + "\n   " + "When I take psychic damage, the dealer of the psychic damage takes the same amount",
			dmgres : ["Psychic"]
		},
		"subclassfeature14" : {
			name : "Create Thrall",
			source : ["P", 110],
			minlevel : 14,
			description : "\n   " + "As an action, I can charm an incapacitated humanoid by touch" + "\n   " + "While it is charmed, I can communicate with it telepathically if it is on the same plane" + "\n   " + "This lasts until the charm is removed (can be by Remove Curse) or I use this again",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "abjuration", {
	subname : "School of Abjuration",
	fullname : "Abjurer",
	source : ["P", 115],
	features : {
		"subclassfeature2" : {
			name : "Abjuration Savant",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy abjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Arcane Ward",
			source : ["P", 115],
			minlevel : 2,
			description : "\n   " + "Whenever I cast an 1st-level or higher abjuration spell, I make/heal a ward" + "\n   " + "I make it at max HP; When I cast again, it heals two HP per spell level" + "\n   " + "It stays active at 0 HP and doesn't go away until my next long rest" + "\n   " + "If I take damage, the ward takes the damage instead, but excess damage carries over",
			additional : levels.map( function(n) {
				if (n < 2) return "";
				return "Ward max HP: " + (n * 2) + "+Int mod";
			}),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Projected Ward",
			source : ["P", 115],
			minlevel : 6,
			description : "\n   " + "As a reaction, my Arcane Ward can absorb damage done to a creature within 30 ft",
			action : ["reaction", ""]
		},
		"subclassfeature10" : {
			name : "Improved Abjuration",
			source : ["P", 115],
			minlevel : 10,
			description : "\n   " + "When I cast an abjuration spell requiring an ability check, I add my proficiency bonus"
		},
		"subclassfeature14" : {
			name : "Spell Resistance",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "I have adv. on spell saves and resistance to damaging spells",
			dmgres : ["Spells"],
			savetxt : { adv_vs : ["spells"] }
		}
	}
});
AddSubClass("wizard", "conjuration", {
	subname : "School of Conjuration",
	fullname : "Conjurer",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Conjuration Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy conjuration spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Conjuration",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "As an action, I can conjure an object up to 3 ft on each side and no more than 10 lbs" + "\n   " + "It must be of a form of a nonmagical object I have seen and is created within 10 ft" + "\n   " + "The object disappears after 1 hour, if it takes or deals damage, or when I use this again",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Benign Transposition",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "As an action, I can teleport to a place within 30 ft that I can see" + "\n   " + "Instead, I can swap places with a willing Small/Medium creature in 30 ft that I can see" + "\n   " + "I can do this again after a long rest or casting a 1st-level or higher conjuration spell",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Focused Conjuration",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "While I am concentrating on a conjuration spell, it can't be broken by taking damage"
		},
		"subclassfeature14" : {
			name : "Durable Summons",
			source : ["P", 116],
			minlevel : 14,
			description : "\n   " + "Any creature I summon or create with a conjuration spell has 30 temporary hit points"
		}
	}
});
AddSubClass("wizard", "divination", {
	subname : "School of Divination",
	fullname : "Diviner",
	source : ["P", 116],
	features : {
		"subclassfeature2" : {
			name : "Divination Savant",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy divination spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Portent",
			source : ["P", 116],
			minlevel : 2,
			description : "\n   " + "After a long rest, I roll dice and keep the results to be used before my next rest" + "\n   " + "A result can replace an attack/save/ability check made by me or a creature I can see" + "\n   " + "I choose to switch them before the dice to be replaced are rolled; Max once per turn",
			additional : ["", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "2d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest", "3d20 after a long rest"]
		},
		"subclassfeature6" : {
			name : "Expert Divination",
			source : ["P", 116],
			minlevel : 6,
			description : "\n   " + "When I cast a divination spell, I recover a spell slot of a lower level than the one I cast",
			additional : "Spell slot < 6th-level"
		},
		"subclassfeature10" : {
			name : "The Third Eye",
			source : ["P", 116],
			minlevel : 10,
			description : "\n   " + "As an action, I gain one of the following until my next short or long rest:" + "\n   " + "Darkvision 60ft, see the Ethereal Plane 60ft, read any language, or see invisibility 10ft",
			recovery : "short rest",
			usages : 1,
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Greater Portent",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "I can roll 3d20 instead of 2d20 when using my Portent feature"
		}
	}
});
AddSubClass("wizard", "enchantment", {
	subname : "School of Enchantment",
	fullname : "Enchanter",
	source : ["P", 117],
	features : {
		"subclassfeature2" : {
			name : "Enchantment Savant",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy enchantment spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Hypnotic Gaze",
			source : ["P", 117],
			minlevel : 2,
			description : "\n   " + "As an action, a seen enemy within 5 ft must make a Wis save or be charmed" + "\n   " + "This doesn't work if it can't see/hear me; It's also incapacitated and reduced to 0 speed" + "\n   " + "This lasts until the end of my next turn, but I can use an action to extend the duration" + "\n   " + "It also ends if it takes damage, can't see or hear me, or is more than 5 ft from me" + "\n   " + "On success or once it ends, I can't use this on it again until after a long rest",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Instinctive Charm",
			source : ["P", 117],
			minlevel : 6,
			description : "\n   " + "As a reaction, when someone I can see in 30 ft attacks me, it must make a Wis save" + "\n   " + "If failed, it must instead attack the closest creature within range (not me or self)" + "\n   " + "On a success, the target is immune to this until after my long rest; This is a charm effect",
			action : ["reaction", " (when attacked)"]
		},
		"subclassfeature10" : {
			name : "Split Enchantment",
			source : ["P", 117],
			minlevel : 10,
			description : "\n   " + "When I cast an enchantment spell with only one target, I can target a second in range" + "\n   " + "This does not apply to cantrips"
		},
		"subclassfeature14" : {
			name : "Alter Memories",
			source : ["P", 117],
			minlevel : 14,
			description : "\n   " + "When I cast an enchantment spell that charms, I can have one target be unaware of it" + "\n   " + "Also, once before that spell ends, I can have that target forget time while affected" + "\n   " + "It must make an Intelligence save or lose up to 1 + Charisma modifier hours of memory"
		}
	}
});
AddSubClass("wizard", "illusion", {
	subname : "School of Illusion",
	fullname : "Illusionist",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Illusion Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy illusion spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Improved Minor Illusion",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I gain the knowledge of the Minor Illusion cantrip (or another if I already knew it)" + "\n   " + "When I cast it, I can create both a sound and an image with a single casting",
			spellcastingBonus : {
				name : "Minor Illusion cantrip",
				spells : ["minor illusion"],
				selection : ["minor illusion"]
			}
		},
		"subclassfeature6" : {
			name : "Malleable Illusion",
			source : ["P", 118],
			minlevel : 6,
			description : "\n   " + "After I cast an illusion spell that lasts 1 min or longer, I can use an action to change it",
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Illusory Self",
			source : ["P", 118],
			minlevel : 10,
			description : "\n   " + "As a reaction, when I'm attacked, I can impose an illusion that makes the attack miss",
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Illusory Reality",
			source : ["P", 118],
			minlevel : 14,
			description : "\n   " + "As a bonus action, after I cast a 1st-level or higher illusion spell, I can make it real" + "\n   " + "One inanimate, nonmagical object that is part of the illusion becomes real for 1 minute" + "\n   " + "The object can't be something that directly harms someone",
			action : ["bonus action", ""]
		}
	}
});
AddSubClass("wizard", "necromancy", {
	subname : "School of Necromancy",
	fullname : "Necromancer",
	source : ["P", 118],
	features : {
		"subclassfeature2" : {
			name : "Necromancy Savant",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy necromancy spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Grim Harvest",
			source : ["P", 118],
			minlevel : 2,
			description : "\n   " + "Once per turn, when I kill something with a 1st-level or higher spell, I regain hit points" + "\n   " + "The number of hit points regained is 2\u00D7 the spell's level (or 3\u00D7 with necromancy spells)" + "\n   " + "This doesn't occur for constructs/undead"
		},
		"subclassfeature6" : {
			name : "Undead Thralls",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "I add Animate Dead to my spellbook and can have an additional target when casting it" + "\n   " + "Undead created by my necromancy spells have the following benefits:" + "\n   " + "They add my proficiency bonus to damage and my wizard level to their HP maximums"
		},
		"subclassfeature10" : {
			name : "Inured to Undead",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I have resistance to necrotic damage and my hit point maximum can't be reduced",
			dmgres : ["Necrotic"]

		},
		"subclassfeature14" : {
			name : "Command Undead",
			source : ["P", 11],
			minlevel : 14,
			description : "\n   " + "As an action, an undead within 60 ft that I can see must make a Charisma save" + "\n   " + "If its Int is > 7, it has adv. on the save; If its Int is > 11, it repeats the save every hour" + "\n   " + "If failed, it becomes friendly to me and obeys my commands until I use this on another" + "\n   " + "On success, it becomes permanently immune to my further attempts",
			action : ["action", ""]
		}
	}
});
AddSubClass("wizard", "transmutation", {
	subname : "School of Transmutation",
	fullname : "Transmuter",
	source : ["P", 119],
	features : {
		"subclassfeature2" : {
			name : "Transmutation Savant",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I halve the gp and time needed to copy transmutation spells into my spellbook"
		},
		"subclassfeature2.1" : {
			name : "Minor Alchemy",
			source : ["P", 119],
			minlevel : 2,
			description : "\n   " + "I can transform an object of wood/stone/iron/copper/silver into another of those" + "\n   " + "For each 10 min I spend, I can transform up to 1 cubic foot of the material" + "\n   " + "It reverts back when I lose concentration or after 1 hour"
		},
		"subclassfeature6" : {
			name : "Transmuter's Stone",
			source : ["P", 119],
			minlevel : 6,
			description : "\n   " + "In 8 hours, I can create a transmuter's stone that gives its wielder one of the following:" + "\n    - " + "Darkvision 60 ft" + "\n    - " + "10 ft increase to speed while unencumbered" + "\n    - " + "Proficiency in Constitution saving throws" + "\n    - " + "Resistance to either acid, cold, fire, lightning, or thunder damage" + "\n   " + "The benefit is chosen at creation; I can have only one active stone at a time" + "\n   " + "I can change the benefit when I cast a 1st-level or higher transmutation spell with it"
		},
		"subclassfeature10" : {
			name : "Shapechanger",
			source : ["P", 119],
			minlevel : 10,
			description : "\n   " + "I add Polymorph to my spellbook; I can cast it on myself without using a spell slot" + "\n   " + "When I do that, I can only transform into a beast with a challenge rating of 1 or lower",
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature14" : {
			name : "Master Transmuter",
			source : ["P", 119],
			minlevel : 14,
			description : "\n   " + "As an action, I can destroy my transmuter's stone and do one of the four following:" + "\n    " + "1) Major Transformation" + "\n      " + "In 10 minutes, I transmute one nonmagical object up to 5 cubic foot into another" + "\n      " + "This new, nonmagical object must be of similar size and mass and equal or less value" + "\n    " + "2) Panacea" + "\n      " + "One touched has all curses, diseases, and poisons removed and is healed to max HP" + "\n    " + "3) Restore Life" + "\n      " + "I cast Raise Dead without using spell slots or needing to have it in my spellbook" + "\n    " + "4) Restore Youth" + "\n      " + "A touched creature's apparent age is reduced by 3d10 years (to a minimum of 13)",
			action : ["action", ""]
		}
	}
});