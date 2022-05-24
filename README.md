## Background and Inspiration

I cut my teeth in the dotcom boom as a teenager shorting AOL months too soon, and posting as a dot (anon) on the first Web 2.0 mass free speech message board FuckedCompany.com (known colloquially as FC). FC was a predecessor to 4chan, reddit, and Twitter.

One of the legendary sites from that era was Dack.com run by a guy known as Dack. Dack was an OG shitposter who created the Web Economy Bullshit generator. He was an early poster on FC, and did things his own way. He was also one of the inspirations for The Best Page in the Universe by Maddox (of pedo smile fame). What I remember most from that era, apart from all of the spectacular bankruptcies, was the Bullshit Generator. I never once took adults seriously when I came of age having grown up around all of these socially dangerous maniacs. They trolled the self-important for the sheer joy of feeling alive. 

As a co-founder of the very first Chainlink VRF NFT project, you can imagine my surprise when the project sold out. Amazing! However, I misunderestimated the reason, and that pissed me off. While the art of my wife underpinning the project was absolutely amazing, most bought them to flip them for a quick profit, and then summarily everyone forgot about the project. It was one Furby frenzy after another after that. I couldn't keep up with all the schlock being 'dropped' and subsequently wash traded for thousands of ETH to scam newcomers to crypto thinking they bought something of long-term value.

My wife and I originally came to asset tokenization help stop her from being ripped off, but nobody seems to care about the technology now – It's all about getting rich quick. Until the landscape improves, I'm just in this for the lulz at this point, and that's something I feel really happy about. Many from those early FC forum days ended up doing great things in life, just like the hoards of NFT flimflammers will in the Web3 world. May this useless project serve as documentation of the amazing times the pandemic gave us. Maybe some people will be inspired to learn more about how simple it is to integrate Chainlink VRF into their project. It's something that is absolutely vital.

## What does the project do?

Absolutely f-all. When you mint, you request a Chainlink VRF number that burns precious LINK and ETH gas. The VRF comes back with a number to the contract, then the contract assigns you a random phrase commemorating the insanity of NFTs in 2020-2022.

While VRF works best to secure value of assets, it can also just be used to create provenance of ephemeral actions, or assuredly worthless things like these NFTs.

## Engineering and Challenges

This project is an iteration of all of the things I've learn in the last year in regards to dynamic NFTs. There's a lot of things that go into such a project. There's the contract, the backend, ENS to IPFS hosting, the frontend, and then writing out the content of the word bank. The easy part was the contract this time. I refactored an existing contract to generate token IDs from the VRF returned number. This was easy because I went for the hyper-simple method of using a deterministic script pre-published in the comments of the contract to create the sentence. This saved a lot of gas and coding. I'm a very lazy panda.

However, saving time on the contract meant that the backend became more complex. I have good experience with nodejs stuff, so it was easier, but there was a key issue I improved from previous dynamic NFT efforts. The last project (DegenerateFarm) rendered html + css into an image. This is something VPS providers restrict, because existing libraries for doing this in nodejs utilize GUI libraries of Linux which is a security no-no for them. The good news was with just text and no layers of images stack on top of each other I could avoid this. The image rendering is nearly instant once an event comes through. It is there before indexers even query the metadata after an event to find the image of the newly minted NFT.

That brings me to the metadata server. I believe fully in IPFS, but for minting it is ok to centralize it temporarily to get performance for the minting experience. I used AWS Lambda, and this sucked. AWS ops is a career in itself, but it took me the longest period of time to get this running, and I already deployed something very similar a few months ago. I have to say AWS has the worst UX ever. It's designed by smart people for idiots, but as an idiot I still had no clue with the process tree in many spots with contradictory info. I even had trouble logging into AWS. They now require I enter 2FA for my Amazon account, and then again for my AWS account. They added this, and then switch the order. Horrible, but it shows what Chainlink is doing right with v2 VRF.


I was really excited to finally use VRF v2 for this project, and made some tests of the UX, which was amazing. I did see a problem for this dapp deployment as v1 allowed the contract to hold the Link, which is much more transparent to users expecting a finite mint size. It was around this time of experimenting that I decided the price to mint should be free. Anything free is suspect, so I wanted things moving as transparently as possible for users expecting a certain transaction flow. The terms of v2 changed also to confusing new function names, and as an experienced dev it threw even me off, especially since I was making a random word generator and the new function described random words, even though it was the same old uint256 return to me.

The decision to go for v1 highlights how slow things should move in blockchain. Habits form security policies, but if processes change habits, then security can be impacted. There are just so many scams out there now that we need to take each step with purpose, even if that means using seemingly less efficient patterns. I have ideas for new projects from the experiments I ran, but for this one I went for the conservative play.

## Accomplishments

I did what I said I would do. Again. This is something not currently valued in crypto, but maybe someday.

## Lessons Learned

I thought I hated the majority of people currently actively trading NFTs for profit, especially the wash trading 'promotors' spamming me on Twitter. As the Do Kwon cult crash unfolded, and Link hit single digits I realized I loved Chainlink and the people around it. Skepticism, trash talk, memes, and blind belief mixed in make me happy.

Abstractly, I learned how fragile the whole ecosystem with the hot garbage that is Web3.js, MetaMask, and the poorly implemented IPFS gateways. I have unshakable belief in the power NFTs offer to content creators, but zero faith in the current stable of crypto millionaires who jack each other off for internet authority. I came to crypto to avoid that. I am bearish on Ethereum long term. Hubris always finds a day of reckoning. The words of this project's conclusion bank allude to my heartfelt opinions on it all.

## What's Next

Nothing. The utility is showing people there is utility in NFTs beyond what they have seen so far. It's about introducing people to a different thought process by showcasing what is possible with Chainlink VRF. The idea of this might seem silly, but I did it out of love for the future I want to be part of. I think people learn best through humor, pain, and near-death experiences. Without some effort at making thing interesting, ultimately to the layman it will just be a bunch of code that returns a random number. 