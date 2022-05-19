const path = require('path');
const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const textToImage = require('text-to-image')
const ImageDataURI = require('image-data-uri')

const { ASSET_BASE_PATH } = require('../config');
const { uploadImage } = require('./imageUploader');

const writeFileAsync = promisify(writeFile);
const readFileAsync = promisify(readFile);

const topics = ["Chainlink VRF generated", "Non-fungible", "Fractional", "Generative", "Airdropped", "Exclusive", "Uniswap pooled", "OpenSea promoted", "Rarible listed", "NiftyGateway floated", "Privacy chain focused", "SuperRare distributed", "Testnet", "Chainlink Keepers managed", "Chainlink oracle driven", "Community supported", "LooksRare indexed", "IBC compatible", "Tendermint friendly", "Secret Network dropped", "Oasis Emerald Parachain built", "Terra backed", "Cardano cult member loved", "Solana based", "Cosmos centered", "Wormhole bridgeable", "Polygon hosted", "Alchemy API friendly", "Consensys audited", "EVM compatible", "Polkadot interoperable", "Raydium pooled", "Binance chain built", "OTC traded", "USDT priced", "DAI backed", "Central bank issued", "Luna pegged"];
const genres = ["trash art genre", "ENS domain name", "copy cat", "generative", "transexual", "metaverse", "DeFi", "fine art", "psychedelic", "surrealist", "antisemitic", "Islamophobic", "virtual land", "fashion", "LGBT", "collectible", "collectible card game", "sports memorabilia", "dog meme", "dog", "cat", "monkey", "lizard people", "women empowerment", "piercing fetish", "cam whore", "gay", "rocketship", "goatse giver", "lesbian", "racist", "mutant dinosaur", "stablecoin", "vagina collage", "anime", "Rule 34", "/b/tard", "8chan meme", "Trump supporter", "libertarian", "420 friendly", "escort ad", "alpaca", "frog", "fetish", "anti-government", "gen-Z", "fat acceptance", "female lead", "ugly sweater", "dress-up doll", "football card", "in-game", "rap music", "message app", "bro culture", "1337", "used underwear", "tattoo", "retro", "minimalist", "surrealist", "religious", "feminist", "misogynist", "woke culture", "educational", "propaganda", "pro-war", "anti-war", "pixel art", "looping gif", "voxel art", "isometric game assets", "musical", "multimedia", "female empowerment", "animal rights", "marijuana", "stoner", "juggalo", "environmental activism", "deep space", "fake news", "dynamic"];
const subjects = ["NFTs", "PFPs", "P2E NFTs", "ERC20 tokens", "ERC1155 SFTs"];
const verbs = ["incentivizing", "favoring", "synthesizing", "exploiting", "referencing", "exposing", "privileging", "spinning off into", "engineering", "revolutionizing", "elevating", "contributing to", "monetizing", "growing", "specializing in", "recontextualizing"]
const intensifiers = ["world-renowned", "preeminently established", "five-star rated", "first-class", "top-notch", "fantastically executed", "top-level", "blue-chip", "creatively spectacular", "sure to moon", "ready to break out", "diamond handed", "industry dominant"]
const nftCultureThings = ["rugpulls", "scams", "floor sweeps", "reveals", "tokenomics", "giveaway snapshots", "governance snapshots", "presales", "mints", "bank runs", "bonding curves", "pump and dumps", "token burns", "drops", "presales", "Twitter giveaways", "fake airdrops", "Instagram influencer scams", "insider trading scandals", "curated galleries", "metaverse display cases", "roadmaps", "roadmap deliverables", "post-mint flips", "whitelists", "in-game lootboxes", "gas spikes", "curated wallets", "alternative marketplaces", "royalty free platforms", "10k mints", "mint whitelists", "trading bots", "yield farms", "floor prices"];
const conclusions = ["which benefit washtrading whales", "that will melt faces", "that celebrate known MetaMask bugs", "that massage Dan Finlay's fragile ego", "which pump secondary markets", "that revitalize dead projects", "that glorify Ukraine flag emoticons", "that capture the zeitgeist of the current thing", "which flood the market with schlock", "that contain vulgar easter eggs", "which change appearance seasonally", "that encapsulate Elon Musk's sentiments", "that propagate throughout XRP pump groups on Telegram", "that integrate USDT printing events", "that validate YouTube's censorship policy", "which dilute the derivative Punk market", "that signal a call for regulatory tightening", "which encourage sex worker asset acquisitions", "that glorify Vladimir Putin", "which clarify biographic gender pronouns", "that sexualize underage orcas", "which reference controversial Rolling Stone covers", "that dog whistle to furries", "which incubate community driven discourse", "that demolish social barriers in education", "which consolidate failed communities", "that build up Do Kwon's self esteem", "that exemplify crypto values", "which promote data-driven trading signals", "that Charles Hoskinson promotes blindly", "which Vitalik spotlights on reddit", "that fake Satoshi markets to early adopters", "that agitate Brantly Millegan's moral sensibility", "that SBF uses to virtue signal meaningless hypotheticals", "that Mark Karpeles advertises on late night television", "which Gary Vaynerchuk criticizes publicly", "that demonstrate the strength of the market", "that motivate leverage traders", "that dilute early adopters", "that reward influencer spammers", "which support multiple L2 networks", "that encourage FOMO from moonboys", "which Richard Heart spams", "that Ivan on Tech discusses on stream", "which Bitboy appropriates as his own work", "that reddit teenagers ape in to", "which incentivize Discord phishing attacks", "that Slashdot OGs take the piss out of", "that Ukrainian mail order bride scams target", "that Vitalik lambastes with false child porn equivalencies", "that Russian state sponsored hacks target", "which Lithuanian SEO pros grow", "that Polish Telegram groups misinterpret", "which coincide with stablecoin depegging events", "that Telegram trading groups manipulate", "which generate interest in local government", "which provide grassroots support to impoverished people", "that give charitable causes a means of collaboration", "that right wing trolls ape in to", "that benefit socialist world leaders", "which combat world hunger", "that add corruption to African dictatorships", "which add transparency to DAOs", "that promote mass adoption", "which express detailed sentiments of top-100 project founders", "that Do Kwon promotes", "that mine sentiment of market manipulators", "that Pranksy reverse engineers for his own gain", "which help relieve network congestion", "that scales TPS to an ATH", "that create a social media frenzy", "that the no-coiner community tries to cancel", "which ETH maxis heavily promote", "which encourage dusting attacks", "that limit royalties for newcomers", "which enforces royalties in-contract", "that eliminate front-running", "which distribute assets fairly to all participants"];

const processMintEvent = async (event) => {
    const tokenId = event.returnValues['tokenId'];
    const imagePath = await generateNFTImage(tokenId);
    //Uncomment the server upload path when running locally if you want to upload to a remote server.
    //await uploadImage(imagePath);
}

const getImageDestinationPath = (tokenId) => {
    return path.resolve(ASSET_BASE_PATH, '', `${tokenId}.png`);
}

const getImagesBasePath = () => {
    return path.resolve(ASSET_BASE_PATH, 'img');
}

const renderSentence = (tokenId) => {
    const sentenceProperties = tokenId.slice(-13);
    const topic = topics[(parseInt(sentenceProperties.substring(0, 2)) + 1000000) % topics.length];
    const genre = genres[(parseInt(sentenceProperties.substring(2, 4)) + 1000000) % genres.length];
    const subject = subjects[(parseInt(sentenceProperties.substring(4, 5)) + 1000000) % subjects.length];
    const verb = verbs[(parseInt(sentenceProperties.substring(5, 7)) + 1000000) % verbs.length];
    const intensifier = intensifiers[(parseInt(sentenceProperties.substring(7, 9)) + 1000000) % intensifiers.length];
    const nftCultureThing = nftCultureThings[(parseInt(sentenceProperties.substring(9, 11)) + 1000000) % nftCultureThings.length];
    const conclusion = conclusions[(parseInt(sentenceProperties.substring(11, 13)) + 1000000) % conclusions.length];

    const nftIdea = topic + " " +
        genre + " " +
        subject + " " +
        verb + " " +
        intensifier + " " +
        nftCultureThing + " " + conclusion + "."
    console.log(nftIdea);
    return nftIdea;
}

const generateNFTImage = async (tokenId) => {
    console.log(`Generating an image for ${tokenId} .`);

    const ideaGenerated = renderSentence(tokenId);
    //Generate different backgrounds based on rarity.
    var dataURI;

    switch (true) {
        case (tokenId.slice(-15, -14) == 0):
            dataURI = textToImage.generateSync(ideaGenerated, {
                margin: 24,
                verticalAlign: 'center',
                textAlign: 'center',
                fontSize: 48,
                fontFamily: 'Roboto-Bold',
                fontPath: '/home/degeneratefarm/www/www/test/Roboto-Bold.ttf',
                lineHeight: 64,
                bgColor: '#B22222',
                textColor: '#FFFFFF',
                maxWidth: 700,
                customHeight: 700
            });
            break
        case (tokenId.slice(-15, -14) == 1):
            dataURI = textToImage.generateSync(ideaGenerated, {
                margin: 24,
                verticalAlign: 'center',
                textAlign: 'center',
                fontSize: 48,
                fontFamily: 'Roboto-Bold',
                fontPath: '/home/degeneratefarm/www/www/test/Roboto-Bold.ttf',
                lineHeight: 64,
                bgColor: '#CD7F32',
                textColor: '#FFFFFF',
                maxWidth: 700,
                customHeight: 700
            });
            break
        case (tokenId.slice(-15, -14) == 2):
            dataURI = textToImage.generateSync(ideaGenerated, {
                margin: 24,
                verticalAlign: 'center',
                textAlign: 'center',
                fontSize: 48,
                fontFamily: 'Roboto-Bold',
                fontPath: '/home/degeneratefarm/www/www/test/Roboto-Bold.ttf',
                lineHeight: 64,
                bgColor: '#C0C0C0',
                textColor: '#FFFFFF',
                maxWidth: 700,
                customHeight: 700
            });
            break
        case (tokenId.slice(-15, -14) == 3):
            dataURI = textToImage.generateSync(ideaGenerated, {
                margin: 24,
                verticalAlign: 'center',
                textAlign: 'center',
                fontSize: 48,
                fontFamily: 'Roboto-Bold',
                fontPath: '/home/degeneratefarm/www/www/test/Roboto-Bold.ttf',
                lineHeight: 64,
                bgColor: '#FFD700',
                textColor: '#FFFFFF',
                maxWidth: 700,
                customHeight: 700
            });
            break
    }

    const destImagePath = getImageDestinationPath(tokenId);
    ImageDataURI.outputFile(dataURI, destImagePath);
    console.log(`${tokenId}.png has been saved.`);

    return destImagePath;
}

const getBase64Image = async (imagePath) => {
    const image = await readFileAsync(imagePath);
    const base64Image = new Buffer.from(image).toString('base64');
    return 'data:image/jpeg;base64,' + base64Image;
}

const parseTokenId = (event) => {
    return event.returnValues['tokenID'];
}

module.exports = {
    processMintEvent,
    parseTokenId
}