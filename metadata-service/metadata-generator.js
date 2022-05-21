const idea = {
    "attributes": [{
            "trait_type": "Background",
            "value": ""
        },
        {
            "trait_type": "Character Count",
            "value": ""
        }
    ],
    "description": "",
    "external_url": "",
    "image": "",
    "name": ""
}

const topics = ["Chainlink VRF generated", "Non-fungible", "Fractional", "Generative", "Airdropped", "Exclusive", "Uniswap pooled", "OpenSea promoted", "Rarible listed", "NiftyGateway floated", "Privacy chain focused", "SuperRare distributed", "Testnet", "Chainlink Keepers managed", "Chainlink oracle driven", "Community supported", "LooksRare indexed", "IBC compatible", "Tendermint friendly", "Secret Network dropped", "Oasis Emerald ParaTime built", "Terra backed", "Cardano cult member loved", "Solana based", "Cosmos centered", "Wormhole bridgeable", "Polygon hosted", "Alchemy API friendly", "Consensys audited", "EVM compatible", "Polkadot interoperable", "Raydium pooled", "Binance chain built", "OTC traded", "USDT priced", "DAI backed", "Central bank issued", "Luna pegged", "SAFU secured", "BitConnect themed", "OnlyFans promoted", "Degenerate gambler funded", "Poloniex listed", "BitMEX futures traded", "Bitfinex audited", "AML compliant", "HitBTC locked", "Bitstamp affiliated", "Russian hacker themed", "BSC compatible", "Gnosis governed", "Community gifted", "Government backed", "Janet Yellen approved", "Kim Kardashian promoted", "Gary Vaynerchuk seeded", "Nick Johnson engineered", "Joe Exotic illustrated", "VeChain launched", "Hardforked", "No-coiner targeted", "Beeple animated", "Turing-complete", "Trustless", "Timelocked", "Immutable", "FUD inducing", "Custodial", "Bitcoin backed", "Bull market rationalized", "Bear market accepted", "Underground", "Live gallery exhibited", "Genesis", "FOMO inducing", "ADL envisaged", "Michael Jackson-esque"]
const genres = ["trash art genre", "ENS domain name", "copy cat", "generative", "transexual", "metaverse", "DeFi", "fine art", "psychedelic", "surrealist", "antisemitic", "Islamophobic", "Jewish", "halal", "virtual land", "fashion", "LGBT", "collectible", "collectible card game", "sports memorabilia", "dog meme", "dog", "cat", "monkey", "lizard people", "female empowerment", "piercing fetish", "cam whore", "gay", "rocketship", "goatse giver", "lesbian", "racist", "mutant dinosaur", "stablecoin", "vagina collage", "anime", "Rule 34", "/b/tard", "8chan meme", "Trump supporter", "libertarian", "420 friendly", "escort ad", "alpaca", "frog", "fetish", "anti-government", "gen-Z", "fat acceptance", "female lead", "ugly sweater", "dress-up doll", "football card", "in-game", "rap music", "message app", "bro culture", "1337", "used underwear", "tattoo", "retro", "minimalist", "surrealist", "religious", "feminist", "misogynist", "woke culture", "educational", "propaganda", "pro-war", "anti-war", "pixel art", "looping gif", "voxel art", "isometric game assets", "musical", "multimedia", "female empowerment", "animal rights", "marijuana", "stoner", "juggalo", "environmental activism", "deep space", "fake news", "dynamic", "polyamorous", "kinky boots", "methhead", "tribal", "pro-abortion", "neo-Nazi", "baseball", "trucker", "anti-fascist", "Black empowerment", "sex abuse victim"]
const subjects = ["NFTs", "PFPs", "P2E NFTs", "ERC20 tokens", "ERC1155 SFTs"]
const verbs = ["incentivizing", "favoring", "synthesizing", "exploiting", "referencing", "exposing", "privileging", "spinning off into", "engineering", "revolutionizing", "elevating", "contributing to", "monetizing", "growing", "specializing in", "recontextualizing", "delivering", "straddling", "powering", "helping"]
const intensifiers = ["world-renowned", "preeminently established", "perfectly positioned", "five-star rated", "first-class", "top-notch", "fantastically executed", "top-level", "blue-chip", "creatively spectacular", "sure to moon", "ready to break out", "diamond handed", "industry dominant", "best in class", "pump worthy", "moonshot", "big league", "ice-cold", "unstoppable", "big time", "badass"]
const nftCultureThings = ["rugpulls", "scams", "floor sweeps", "reveals", "tokenomics", "giveaway snapshots", "governance snapshots", "presales", "mints", "bank runs", "bonding curves", "pump and dumps", "token burns", "drops", "presales", "Twitter giveaways", "fake airdrops", "Instagram influencer scams", "insider trading scandals", "curated galleries", "metaverse display cases", "roadmaps", "roadmap deliverables", "post-mint flips", "whitelists", "in-game lootboxes", "gas spikes", "curated wallets", "alternative marketplaces", "royalty free platforms", "10k mints", "mint whitelists", "trading bots", "yield farms", "floor prices", "digital identities", "weak hands", "flippers"]
const conclusions = ["that benefit washtrading whales", "that will melt faces", "that celebrate known MetaMask bugs", "that massage Dan Finlay's fragile ego", "which pump secondary markets", "that Snoop Dogg namechecks on his next album", "that revitalize dead projects", "that glorify Ukraine flag emoticons", "that capture the zeitgeist of the current thing", "which flood the market with schlock", "that contain vulgar easter eggs", "which change appearance seasonally", "that encapsulate Elon Musk's sentiments", "that propagate throughout XRP pump groups on Telegram", "that integrate USDT printing events", "that validate YouTube's censorship policy", "which dilute the derivative Punk market", "that signal a call for regulatory tightening", "which encourage sex worker asset acquisitions", "that glorify Vladimir Putin", "which clarify biographic gender pronouns", "that sexualize underage orcas", "which reference controversial Rolling Stone covers", "that dog whistle to furries", "which incubate community driven discourse", "that demolish social barriers in education", "which consolidate failed communities", "that build up Do Kwon's self esteem", "that exemplify crypto values", "which promote data-driven trading signals", "that Charles Hoskinson promotes blindly", "which Vitalik spotlights on reddit", "that fake Satoshi markets to early adopters", "which Logan Paul uses in a promotional stunt", "that agitate Brantly Millegan's moral sensibility", "that SBF uses to virtue signal meaningless hypotheticals", "that Mark Karpeles advertises on late night television", "which Gary Vaynerchuk criticizes publicly", "that demonstrate the strength of the market", "that motivate leverage traders", "that dilute early adopters", "that reward influencer spammers", "which support multiple L2 networks", "that encourage FOMO from moonboys", "which Richard Heart spams", "that Ivan on Tech discusses on stream", "which Bitboy appropriates as his own work", "that reddit teenagers ape in to", "which incentivize Discord phishing attacks", "that Slashdot OGs take the piss out of", "that Ukrainian mail order bride scams target", "that Vitalik lambastes with false child porn equivalencies", "that Russian state sponsored hacks target", "which Lithuanian SEO pros grow", "that Polish Telegram groups misinterpret", "which coincide with stablecoin depegging events", "that Telegram trading groups manipulate", "which generate interest in local government", "which provide grassroots support to impoverished people", "that give charitable causes a means of collaboration", "that right wing trolls ape in to", "that benefit socialist world leaders", "which combat world hunger", "that add corruption to African dictatorships", "which add transparency to DAOs", "that promote mass adoption", "which express detailed sentiments of top-100 project founders", "that Do Kwon promotes", "that mine sentiment of market manipulators", "that Pranksy reverse engineers for his own gain", "which help relieve network congestion", "that scales TPS to an ATH", "that create a social media frenzy", "that the no-coiner community tries to cancel", "which ETH maxis heavily promote", "which encourage dusting attacks", "that limit royalties for newcomers", "which enforces royalties in-contract", "that eliminate front-running", "which distribute assets fairly to all participants", "that Paris Hilton shills on Twitter", "which know-it-all poker players turned NFT traders fawn over", "that Mike Novogratz discusses on CNBC", "which CryptoFinally says is still undervalued on Twitter", "that challenge the dominance of existing projects", "which Tone Vays says is a very bearish sign", "that interrupt Solana's network stability", "that explore back office integration of frontend functionalities", "that harken back early crypto culture", "that function as a KYC trap to discourage off-ramping", "which serve to expose fraud", "that compel IOTA devs to defend their political views", "which Helium miner syndicates exploit for gain", "that Lil Bubble raps about in a song", "that are evangelized by Patrick Collins passionately", "that encourage scamcoin adoption", "which promote synergy", "that facilitate zero knowledge proofs", "which enrich Zhou Tong."]

const countSentence = (tokenID) => {
    const sentenceProperties = tokenID.toString().slice(-13);
    const topic = topics[(parseInt(sentenceProperties.substring(0, 2)) + 1000000) % topics.length];
    const genre = genres[(parseInt(sentenceProperties.substring(2, 4)) + 1000000) % genres.length];
    const subject = subjects[(parseInt(sentenceProperties.substring(4, 5)) + 1000000) % subjects.length];
    const verb = verbs[(parseInt(sentenceProperties.substring(5, 7)) + 1000000) % verbs.length];
    const intensifier = intensifiers[(parseInt(sentenceProperties.substring(7, 9)) + 1000000) % intensifiers.length];
    const nftCultureThing = nftCultureThings[(parseInt(sentenceProperties.substring(9, 11)) + 1000000) % nftCultureThings.length];
    const conclusion = conclusions[(parseInt(sentenceProperties.substring(11, 13)) + 1000000) % conclusions.length];

    const characterCount = topic.length + genre.length + subject.length + verb.length + intensifier.length + nftCultureThing.length + conclusion.length + 7 //Add 7 because this doesn't count the spaces between the strings when not concatenated.

    return characterCount;
}

const renderSentence = (tokenID) => {
    const sentenceProperties = tokenID.slice(-13);
    const topic = topics[(parseInt(sentenceProperties.substring(0, 2)) + 1000000) % topics.length];
    const genre = genres[(parseInt(sentenceProperties.substring(2, 4)) + 1000000) % genres.length];
    const subject = subjects[(parseInt(sentenceProperties.substring(4, 5)) + 1000000) % subjects.length];
    const verb = verbs[(parseInt(sentenceProperties.substring(5, 7)) + 1000000) % verbs.length];
    const intensifier = intensifiers[(parseInt(sentenceProperties.substring(7, 9)) + 1000000) % intensifiers.length];
    const nftCultureThing = nftCultureThings[(parseInt(sentenceProperties.substring(9, 11)) + 1000000) % nftCultureThings.length];
    const conclusion = conclusions[(parseInt(sentenceProperties.substring(11, 13)) + 1000000) % conclusions.length];

    const sentenceGenerated = topic + " " +
        genre + " " +
        subject + " " +
        verb + " " +
        intensifier + " " +
        nftCultureThing + " " + conclusion + "."

    return sentenceGenerated;
}

function getBackground(n) {

    switch (true) {
        case (n == 0):
            return "Blue"
        case (n == 1):
            return "Green"
        case (n == 2):
            return "Brown"
        case (n == 3):
            return "Red"
    }
}

function buildMetadata(tokenID) {

    const properties = tokenID.slice(-13)
    const characterTotal = countSentence(tokenID)
    const background = idea.attributes[0]
    const ideaNumber = tokenID.substring(0, tokenID.length - 16)

    //Set the background value.
    background.value = getBackground(tokenId.slice(-15, -14))
    //Set the total characters (including spaces) in the sentence.
    idea.attributes[1].value = characterTotal
    //Set the description based on the idea.
    idea.description = "NFT project idea #" + ideaNumber + " was generated with Chainlink VRF at the time of minting as, '" + renderSentence(tokenID) + "' This paradigm shifting concept contains " + characterTotal + " characters emblematically emblazoned on a classy " + background.value.toLowerCase() + " background."
    //Set the external_url.
    idea.external_url = "ideamachine.eth"
    //Set the animation_url.
    idea.image = "https://www.ideamachine.lol/nft-pig/images/" + tokenID + ".png"
    //Set the image url.
    //Set the NFT name.
    idea.name = "Idea #" + ideaNumber

    return { idea };
}

function validateTokenId(event) {
    if (!(event.pathParameters && event.pathParameters.tokenId)) {
        throw new Error("Missing 'tokenId' path parameter");
    }
    const tokenId = event.pathParameters.tokenId;
    if (tokenId.length <= 16) {
        throw new Error("Invalid 'tokenId'");
    }
    return tokenId;
}

module.exports = {
    buildMetadata,
    validateTokenId
}