# SIAlert

A quick and dirty alert bot that helps users of [SiaMining.com](https://siamining.com/) stay on top of their miners, because mining time lost = money lost. It monitors the output of your miners from the perspective of siamining.com, and sends you an email alert if it notices any miners are down.

##  Prerequisites

You need the following before you begin:
* a recent version of [NodeJS](https://nodejs.org/) installed on the computer you want this bot run on
* a recent version of NPM. It should have come with the NodeJS install.
* a payout address that is visible on Siamining.com (If you're not sure what this is, check out [SiaMining's guide](https://siamining.com/help).)
* a dedicated gmail account you set up for sending the alerts. Create one [here](https://accounts.google.com/SignUp?service=mail). You need to enable it's 
 ["Less secure apps" option](https://support.google.com/accounts/answer/6010255?hl=en)

### Setting it up

1) Clone or download this repo to the desired folder
2) Open your command line and navigate to the folder
3) Run the command "npm install --save" (may take a few moments)
4) Open 'app.js' in your favorite text editor
5) Look to line 5 ; enter your payout sia address
6) Look to line 6 ; enter the gmail account that the bot will use to send alerts
7) Look to line 7 ; enter the password for that gmail account
8) Look to line 8 ; enter the email address alerts will be sent to
9) Look to line 9 ; If you want, change the interval the bot checks the status of your miners. (its set to 5 minutes)
10) Look to line 10 ; If you want, change the interval the bot sends heartbeats (set to 24 hours)
11) Save and close
12) Run the command 'node app.js'. It should say "Running..."
13) Test it by bringing down a miner for a moment. You should get an alert within five minutes

Done!

##Please feel free to submit issues and pull requests. Thanks!

Donate Sia

927a0cea8a76e5a54ae5b59aeb5accb4ddcb65b8f396e147d193fddc776e0c321acaa50f392d
