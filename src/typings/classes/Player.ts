export interface APIPlayer {
	_id: string;
	uuid: string;
	displayname: string;
	rank: string;
	packageRank: string;
	firstLogin: string;
	knownAliases: string[];
	knownAliasesLower: string[];
	lastLogin: number;
	playername: string;
	achievementsOneTime: string[];
	lastLogout: number;
	stats: Record<any, any>;
	achievementPoints: number;
	achievements: Record<any, any>;
	karma: number;
	networkExp: number;
	parkourCheckpointBests: Record<any, any>;
	parkourCompletions: Record<any, any>;
	channel: string;
	challenges: Record<any, any>;
	newPackageRank: string;
	levelUp_VIP: number;
	achievementRewardsNew: Record<any, any>;
	quests: Record<any, any>;
	levelUp_MVP_PLUS: number;
	currentGadget: string;
	questSettings: Record<any, any>;
	particlePack: string;
	vanityMeta: Record<any, any>;
	monthlycrates: Record<any, any>;
	eugene: Record<any, any>;
	petConsumables: Record<any, any>;
	tourney: Record<any, any>;
	rankPlusColor: string;
	housingMeta: Record<any, any>;
	monthlyPackageRank: string;
	mostRecentMonthlyPackageRank: string;
	socialMedia: Record<any, any>;
	achievementSync: Record<any, any>;
	lastAdsenseGenerateTime: number;
	lastClaimedReward: number;
	rewardHighScore: number;
	rewardScore: number;
	rewardStreak: number;
	totalDailyRewards: number;
	totalRewards: number;
	currentClickEffect: string;
	disabledProjectileTrails: boolean;
	seasonal: Record<any, any>;
	adsense_tokens: number;
	monthlyRankColor: string;
	currentPet: string;
	petStats: Record<any, any>;
	petJourneyTimestamp: number;
	giftingMeta: Record<any, any>;
	achievementTotem: Record<any, any>;
	mostRecentGameType: string;
}
