// Add equipment that is not in the SRD
[
	{
		name : "Polearm butt end",
		source : ["P", 168],
		ability : 1,
		type : "Other",
		damage : [1, 4, "bludgeoning"],
		range : "Melee",
		description : "As bonus action after Attack action with only a glaive, halberd, spear, or quarterstaff",
		abilitytodamage : true
	},
	{
		name : "Thorn Whip",
		source : ["P", 282],
		list : "spell",
		ability : 5,
		type : "Cantrip",
		damage : ["C", 6, "piercing"],
		range : "Melee, 30 ft",
		description : "Melee spell attack, pull target 10 ft closer to me (PHB 282)",
		abilitytodamage : false
	}
]