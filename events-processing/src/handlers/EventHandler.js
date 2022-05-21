const web3 = require('../utils/web3');
const { processMintEvent, parseTokenId } = require('../utils/parser');
const {
    contract: {
        ABI,
        ADDRESS
    },
} = require('../config')

class EventHandler {
    static initialise() {
        EventHandler.listenForEvent().catch((err) => console.error(err.message));
    }

    static async listenForEvent() {
        console.log('Get deployed contract instance.')
        const deployedContract = new web3.eth.Contract(ABI, ADDRESS)

        const blockNumber = 26352271;

        deployedContract.events.Transfer({
            filter: { from: 0 }, //Mints are all transfer events, but coming from the blackhole address (from: 0)
            fromBlock: blockNumber
        }).on('connected', (subscriptionId) => {
            console.log(`Listening for mint events from block: ${blockNumber}, under subscriptionId: ${subscriptionId}`)
        }).on('data', async (event) => {
            console.log(event.returnValues[1] + " has minted token # " + event.returnValues[2] + ". This is NFT Idea #" + event.returnValues[2].substring(0, event.returnValues[2].length - 16) + ".")
            await EventHandler.processTransferEvent(event)
        }).on('error', (error, receipt) => {
            console.error(`Failed to handle a mint event, error: ${JSON.stringify(error)}, receipt: ${receipt}`)
        })
    }

    static async processTransferEvent(event) {
        try {
            await processMintEvent(event);
        } catch (err) {
            console.error(`Failed to handle a mint event, error: ${err.message}`);
        }
    }
}

module.exports = EventHandler;