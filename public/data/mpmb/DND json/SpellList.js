// Add spells that are not in the SRD
[
	{
		name : "Arcane Gate",
		classes : ["sorcerer", "warlock", "wizard"],
		source : ["P", 214],
		level : 6,
		school : "Conj",
		time : "1 a",
		range : "500 ft",
		components : "V,S",
		duration : "Conc, 10 min",
		description : "Two portals, up to 500 ft apart, teleport any to other side; portals are filled with opaque mist",
		descriptionFull : "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost." + "\n   " + "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal." + "\n   " + "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other, passing through a portal from the non-portal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
	},
	{
		name : "Armor of Agathys",
		classes : ["warlock"],
		source : ["P", 215],
		level : 1,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "A cup of water",
		duration : "1 h",
		description : "5+5/SL temp hp; as long as temp hp last any crea that hits in melee takes 5+5/SL Cold dmg",
		descriptionFull : "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
	},
	{
		name : "Arms of Hadar",
		classes : ["warlock"],
		source : ["P", 215],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "10-ft rad",
		components : "V,S",
		duration : "Instantaneous",
		save : "Str",
		description : "2d6+1d6/SL Necrotic dmg; save halves; on failed save no reactions until next turn",
		descriptionFull : "You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	},
	{
		name : "Aura of Life",
		classes : ["paladin"],
		source : ["P", 216],
		level : 4,
		school : "Abjur",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Conc, 10 min",
		description : "You + any crea while in area Necrotic dmg resist.; heals all living crea at 0 hp at start of turn to 1 hp",
		descriptionFull : "Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can't be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
	},
	{
		name : "Aura of Purity",
		classes : ["paladin"],
		source : ["P", 216],
		level : 4,
		school : "Abjur",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Conc, 10 min",
		description : "You + any crea while in area Poison dmg resist., immune to disease, adv. on saves vs. conditions",
		descriptionFull : "Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can't become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions - blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned."
	},
	{
		name : "Aura of Vitality",
		classes : ["paladin"],
		source : ["P", 216],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Conc, 1 min",
		description : "You can heal 1 creature in range for 2d6 hp as a bonus action for the duration",
		descriptionFull : "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
	},
	{
		name : "Banishing Smite",
		classes : ["paladin"],
		source : ["P", 216],
		level : 5,
		school : "Abjur",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		description : "Next melee hit +5d10 Force dmg; if this brings target hp<50, you banish it until spell ends",
		descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the one you're on, the target disappears, returning to its home plane. If the target is native to the plane you're on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the tart reappears in the space it left or in the nearest unoccupied space if that space is occupied."
	},
	{
		name : "Beast Sense",
		classes : ["druid", "ranger"],
		source : ["P", 217],
		ritual : true,
		level : 2,
		school : "Div",
		time : "1 a",
		range : "Touch",
		components : "S",
		duration : "Conc, 1 h",
		description : "Use 1 willing beast's senses; you are blinded and deafened while doing so",
		descriptionFull : "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast's eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses."
	},
	{
		name : "Blade Ward",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["P", 218],
		level : 0,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S",
		duration : "1 rnd",
		description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
		descriptionFull : "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
	},
	{
		name : "Blinding Smite",
		classes : ["paladin"],
		source : ["P", 219],
		level : 3,
		school : "Evoc",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Con",
		description : "Next melee hit +3d8 Radiant dmg; save or blinded; extra save at end of every turn",
		descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends." + "\n   " + "A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
	},
	{
		name : "Chromatic Orb",
		classes : ["sorcerer", "wizard"],
		source : ["P", 221],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S,M\u0192",
		compMaterial : "A diamond worth at least 50 gp",
		duration : "Instantaneous",
		description : "Spell attack for 3d8+1d8/SL Acid, Cold, Fire, Lightning, Poison or Thunder dmg (50gp)",
		descriptionFull : "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
	},
	{
		name : "Circle of Power",
		classes : ["paladin"],
		source : ["P", 221],
		level : 5,
		school : "Abjur",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Conc, 10 min",
		description : "Any crea while in area adv. on saves vs. magical effects; if save would half dmg it takes no dmg",
		descriptionFull : "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw."
	},
	{
		name : "Cloud of Daggers",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["P", 222],
		level : 2,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A sliver of glass",
		duration : "Conc, 1 min",
		description : "5-ft cube 4d4+2d4/SL Slashing dmg to all that enter or start turn in area",
		descriptionFull : "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell's area for the first time on a turn or starts its turn there." + AtHigherLevels + "when you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd."
	},
	{
		name : "Compelled Duel",
		classes : ["paladin"],
		source : ["P", 224],
		level : 1,
		school : "Ench",
		time : "1 bns",
		range : "30 ft",
		components : "V",
		duration : "Conc, 1 min",
		save : "Wis",
		description : "1 crea save or dis. on attacks vs. not-you and save if moving more than 30 ft away",
		descriptionFull : "You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you, if it succeeds on this saving throw, this spell doesn't restrict the target's movement for that turn." + "\n   " + "The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target."
	},
	{
		name : "Conjure Barrage",
		classes : ["ranger"],
		source : ["P", 225],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "60-ft cone",
		components : "V,S,M",
		compMaterial : "One piece of ammunition or a thrown weapon",
		duration : "Instantaneous",
		save : "Dex",
		description : "Throw weapon or ammo; copies rain down for 3d8 dmg; dmg type as weapon; save halves",
		descriptionFull : "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
	},
	{
		name : "Conjure Volley",
		classes : ["ranger"],
		source : ["P", 226],
		level : 5,
		school : "Conj",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "One piece of ammunition or one thrown weapon",
		duration : "Instantaneous",
		save : "Dex",
		description : "Turn ammo/thrown wea into volley; 40-ft rad 20-ft high 8d8 dmg; dmg type as weapon; save halves",
		descriptionFull : "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
	},
	{
		name : "Cordon of Arrows",
		classes : ["ranger"],
		source : ["P", 228],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "5 ft",
		components : "V,S,M",
		compMaterial : "Four or more arrows or bolts",
		duration : "8 h",
		save : "Dex",
		description : "4+2/SL arrows/bolts attack first crea in 30 ft one at a time for 1d6 Piercing dmg; save halves",
		descriptionFull : "You plant four pieces of nonmagical ammunition - arrows or crossbow bolts - in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains." + "\n   " + "When you cast this spell, you can designate any creatures you choose, and the spell ignores them." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd."
	},
	{
		name : "Crown of Madness",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["P", 229],
		level : 2,
		school : "Ench",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Wis",
		description : "1 humanoid save or charmed and must melee attack against crea chosen by you; extra save/rnd",
		descriptionFull : "One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes." + "\n   " + "The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach." + "\n   " + "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends."
	},
	{
		name : "Crusader's Mantle",
		classes : ["paladin"],
		source : ["P", 230],
		level : 3,
		school : "Evoc",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Conc, 1 min",
		description : "You and allies in range deal extra 1d4 Radiant dmg with weapon attacks",
		descriptionFull : "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
	},
	{
		name : "Destructive Wave",
		classes : ["paladin"],
		source : ["P", 231],
		level : 5,
		school : "Evoc",
		time : "1 a",
		range : "30-ft rad",
		components : "V",
		duration : "Instantaneous",
		save : "Con",
		description : "Any crea 5d6 Thunder + 5d6 Radiant/Necrotic dmg and knocked prone; save halves not prone",
		descriptionFull : "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
	},
	{
		name : "Dissonant Whispers",
		classes : ["bard"],
		source : ["P", 234],
		level : 1,
		school : "Ench",
		time : "1 a",
		range : "60 ft",
		components : "V",
		duration : "Instantaneous",
		save : "Wis",
		description : "1 crea 3d6+1d6/SL Psychic dmg and flee; save halves and no fleeing; deaf crea are immune",
		descriptionFull : "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn't move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn't have to move away. A deafened creature automatically succeeds on the save." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	},
	{
		name : "Elemental Weapon",
		classes : ["paladin"],
		source : ["P", 237],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "Touch",
		components : "V,S",
		duration : "Conc, 1 h",
		description : "+1 magical weapon; +1d4 Acid, Cold, Fire, Lightning, or Thunder dmg; SL5: +2/+2d4, SL7: +3/+3d4",
		descriptionFull : "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types - acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits." + AtHigherLevels + "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
	},
	{
		name : "Ensnaring Strike",
		classes : ["ranger"],
		source : ["P", 237],
		level : 1,
		school : "Conj",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Str",
		description : "Next crea hit save (Large adv.) or restrained, 1d6+1d6/SL Piercing dmg/rnd; Str check to escape",
		descriptionFull : "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away." + "\n   " + "While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
	},
	{
		name : "Feign Death",
		classes : ["bard", "cleric", "druid", "wizard"],
		source : ["P", 240],
		ritual : true,
		level : 3,
		school : "Necro",
		time : "1 a",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A pinch of graveyard dirt",
		duration : "1 h (D)",
		description : "Willing creature appears dead; it is blinded, incapacitated, has dmg resist. all but Psychic, and speed 0",
		descriptionFull : "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death." + "\n   " + "For the spell's duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target's status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell's effect, the disease and poison have no effect until the spell ends."
	},
	{
		name : "Friends",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["P", 244],
		level : 0,
		school : "Ench",
		time : "1 a",
		range : "Self",
		components : "S,M",
		compMaterial : "A small amount of makeup applied to the face as this spell is cast",
		duration : "Conc, 1 min",
		description : "Adv. on Cha checks vs. 1 crea currently not hostile; when spell ends, crea knows and becomes hostile",
		descriptionFull : "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn't hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM's discretion), depending on the nature of your interaction with it."
	},
	{
		name : "Grasping Vine",
		classes : ["druid", "ranger"],
		source : ["P", 246],
		level : 4,
		school : "Conj",
		time : "1 bns",
		range : "30 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "Conjure vine with 30 ft reach; bns a to direct to 1 crea save or pulled 20 ft to vine",
		descriptionFull : "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine." + "\n   " + "Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
	},
	{
		name : "Hail of Thorns",
		classes : ["ranger"],
		source : ["P", 249],
		level : 1,
		school : "Conj",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "Next ranged weapon attack, all within 5 ft of target 1d10+1d10/SL Piercing dmg; save halves",
		descriptionFull : "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10)."
	},
	{
		name : "Hex",
		classes : ["warlock"],
		source : ["P", 251],
		level : 1,
		school : "Ench",
		time : "1 bns",
		range : "90 ft",
		components : "V,S,M",
		compMaterial : "The petrified eye of a newt",
		duration : "Conc, 1 h",
		description : "1 crea +1d6 Necrotic dmg from your atks; dis. on chosen ability checks; SL3: conc, 8h; SL5: conc, 24h",
		descriptionFull : "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability." + "\n   " + "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature." + "\n   " + "A remove curse cast on the target ends this spell early." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours."
	},
	{
		name : "Hunger of Hadar",
		classes : ["warlock"],
		source : ["P", 251],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "150 ft",
		components : "V,S,M",
		compMaterial : "A pickled octopus tentacle",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "20-ft rad blinds all while in; all start turn in 2d6 Cold dmg; all end turn in save or 2d6 Acid dmg",
		descriptionFull : "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded." + "\n   " + "The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it."
	},
	{
		name : "Lightning Arrow",
		classes : ["ranger"],
		source : ["P", 255],
		level : 3,
		school : "Trans",
		time : "1 bns",
		range : "Self",
		components : "V,S",
		duration : "Conc, 1 min",
		save : "Dex",
		description : "Next rngd wea atk +4d8+1d8/SL Lightn. dmg, miss half; 10 ft all 2d8+1d8/SL Lightn. dmg, save half",
		descriptionFull : "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon's normal damage." + "\n   " + "Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one." + "\n   " + "The piece of ammunition or weapon then returns to its normal form." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd."
	},
	{
		name : "Phantasmal Force",
		classes : ["bard", "sorcerer", "wizard"],
		source : ["P", 264],
		level : 2,
		school : "Illus",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "A bit of fleece",
		duration : "Conc, 1 min",
		save : "Int",
		description : "1 crea save or sees 10 ft cube illusion that does 1d6 Psychic dmg/rnd; Int(Investigation) vs. Spell DC",
		descriptionFull : "You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs." + "\n   " + "The phantasm includes sound, temperature, and other stimuli, also evident only to the creature." + "\n   " + "The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends." + "\n   " + "While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fall - it was pushed, it slipped, or a strong wind might have knocked it off." + "\n   " + "An affected target is so convinced of the phantasm's reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm's area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
	},
	{
		name : "Power Word Heal",
		classes : ["bard"],
		source : ["P", 266],
		level : 9,
		school : "Evoc",
		time : "1 a",
		range : "Touch",
		components : "V,S",
		duration : "Instantaneous",
		description : "1 crea heals all hp and stops being charmed, frightened, paralyzed, stunned; it can use rea to stand up",
		descriptionFull : "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs."
	},
	{
		name : "Ray of Sickness",
		classes : ["sorcerer", "wizard"],
		source : ["P", 271],
		level : 1,
		school : "Necro",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		save : "Con",
		description : "Spell attack for 2d8+1d8/SL Poison dmg; save or also poisoned until end of your next turn",
		descriptionFull : "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
	},
	{
		name : "Searing Smite",
		classes : ["paladin"],
		source : ["P", 274],
		level : 1,
		school : "Evoc",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Con",
		description : "Next melee weapon hit +1d6+1d6/SL Fire dmg and target ignites; save to end spell or 1d6 Fire dmg",
		descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot above the 1st."
	},
	{
		name : "Staggering Smite",
		classes : ["paladin"],
		source : ["P", 278],
		level : 4,
		school : "Evoc",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Wis",
		description : "Next melee weapon hit +4d6 Psychic dmg and save or dis. on atks/chks, no rea, until end next turn",
		descriptionFull : "The next time you hit a creature with a melee weapon attack during this spell's duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn."
	},
	{
		name : "Swift Quiver",
		classes : ["ranger"],
		source : ["P", 279],
		level : 5,
		school : "Trans",
		time : "1 bns",
		range : "Touch",
		components : "V,S,M",
		compMaterial : "A quiver containing at least one piece of ammunition",
		duration : "Conc, 1 min",
		description : "Quiver gives nonmagical ammo; bns a to make 2 atks with weapon that uses ammo from that quiver",
		descriptionFull : "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it." + "\n   " + "On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
	},
	{
		name : "Telepathy",
		classes : ["wizard"],
		source : ["P", 281],
		level : 8,
		school : "Evoc",
		time : "1 a",
		range : "Unlimited",
		components : "V,S,M",
		compMaterial : "A pair of linked silver rings",
		duration : "24 h",
		description : "1 willing crea Int>0 and you telepathic link; share words, sensory information if on same plane",
		descriptionFull : "You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane." + "\n   " + "Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
	},
	{
		name : "Thorn Whip",
		classes : ["druid"],
		source : ["P", 282],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "The stem of a plant with thorns",
		duration : "Instantaneous",
		description : "Melee spell attack for 1d6 Piercing dmg and pull crea 10 ft to you; +1d6 at CL 5, 11, and 17",
		descriptionFull : "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
	},
	{
		name : "Thunderous Smite",
		classes : ["paladin"],
		source : ["P", 282],
		level : 1,
		school : "Evoc",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Str",
		description : "Next melee weapon hit +2d6 Thunder dmg and save or 10 ft push and prone; audible in 300 ft",
		descriptionFull : "The first time you hit with a melee weapon attack during this spell's duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
	},
	{
		name : "Tsunami",
		classes : ["druid"],
		source : ["P", 284],
		level : 8,
		school : "Conj",
		time : "1 min",
		range : "Sight",
		components : "V,S",
		duration : "Conc, 6 rnd",
		save : "Str",
		description : "300\u00D750\u00D7300ft (l\u00D7w\u00D7h) wall of water moves away at 50 ft/rnd; 6d10 Bludg. dmg; save halves; see B",
		descriptionMetric : "90\u00D715\u00D790m (l\u00D7w\u00D7h) wall of water moves away at 15 m/rnd; 6d10 Bludg. dmg; save halves; see B",
		descriptionFull : "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration." + "\n   " + "When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save." + "\n   " + "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall's height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends." + "\n   " + "A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can't move. A creature that moves out of the area falls to the ground."
	},
	{
		name : "Witch Bolt",
		classes : ["sorcerer", "warlock", "wizard"],
		source : ["P", 289],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "A twig from a tree that has been struck by lightning",
		duration : "Conc, 1 min",
		description : "Spell attack 1d12+1d12/SL Lightning dmg; 1 a, if consecutive, for dmg again; ends if out of range",
		descriptionFull : "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell's range or if it has total cover from you." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
	},
	{
		name : "Wrathful Smite",
		classes : ["paladin"],
		source : ["P", 289],
		level : 1,
		school : "Evoc",
		time : "1 bns",
		range : "Self",
		components : "V",
		duration : "Conc, 1 min",
		save : "Wis",
		description : "Next melee weapon hit +1d6 Psychic dmg and save or frightened; it can take 1 a for extra save",
		descriptionFull : "The next time you hit with a melee weapon attack during this spell's duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
	}
]

// Add a function if not already defined
// if (typeof AddToNotes === 'undefined') {
// 	AddToNotes = function(noteStr, alertTxt, oldNoteStr) {
// 		if (What("Unit System") === "metric") {
// 			noteStr = ConvertToMetric(noteStr, 0.5);
// 			if (oldNoteStr) oldNoteStr = ConvertToMetric(oldNoteStr, 0.5);
// 		};
// 		noteStr = noteStr.replace(/\n/g, "\r");
// 		if (oldNoteStr) oldNoteStr = oldNoteStr.replace(/\n/g, "\r");
// 		var replaceOldNote = false;
// 		if (!isTemplVis("ASnotes")) {
// 			var noteFld = DoTemplate("ASnotes", "Add");
// 			noteFld += "Notes.Left";
// 		} else {
// 			var noteFld = false;
// 			var noteFlds = ["Notes.Left", "Notes.Right"];
// 			var notesPrefix = What("Template.extras.ASnotes").split(",");
// 			for (var i = 1; i < notesPrefix.length; i++) {
// 				for (var n = 0; n < noteFlds.length; n++) {
// 					var aFld = notesPrefix[i] + noteFlds[n];
// 					var inFld = What(aFld);
// 					if (noteStr && inFld.toLowerCase().indexOf(noteStr.toLowerCase()) !== -1) {
// 						return;
// 					} else if (oldNoteStr && inFld.toLowerCase().indexOf(oldNoteStr.toLowerCase()) !== -1) {
// 						noteFld = aFld;
// 						replaceOldNote = true;
// 						i = noteFlds.length;
// 						break;
// 					} else if (inFld === "" && !noteFld) {
// 						noteFld = aFld;
// 					};
// 				};
// 			};
// 			if (!noteFld && noteStr) {
// 				noteFld = DoTemplate("ASnotes", "Add");
// 			} else if (!noteStr && !oldNoteStr) {
// 				return;
// 			};
// 		};
// 		ReplaceString(noteFld, noteStr, false, oldNoteStr ? oldNoteStr : "");
// 		if (!replaceOldNote && noteStr && alertTxt) {
// 			app.alert({
// 				cTitle : alertTxt + " is added on the Notes page",
// 				cMsg : "You can find the rules for " + alertTxt + " on the \"Notes\" page at page no. " + (tDoc.getField(noteFld).page + 1) + ".\n\nThese rules are simply to much for the Class Features section and do not fit with the rest that needs to go in the third page's Notes section. Thus, these rules will be put on a Notes page and will be updated there.",
// 				nIcon : 3
// 			});
// 		};
// 	};
// };
