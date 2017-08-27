
//Throw me some SIA if this helps! <3
//927a0cea8a76e5a54ae5b59aeb5accb4ddcb65b8f396e147d193fddc776e0c321acaa50f392d

const ADDRESS = 'PUT YOUR PAYOUT ADDRESS HERE';
const GMAIL_ACCOUNT = 'PUT YOUR GMAIL ADDRESS HERE';
const PASSWORD = 'PUT THE GMAIL PASSWORD HERE';
const DESTINATION = 'PUT THE DESTINATION EMAIL ADDRESS HERE';
const CHECK_INTERVAL = 300000; //in milliseconds. It's set to 5 minutes. change as you wish
const HEARTBEAT_INTERVAL = 86400000; //in milliseconds. Every 24 hours.

const SIAMINING_API = 'https://siamining.com/api/v1/addresses/';
const request = require('request');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport('smtps://' + GMAIL_ACCOUNT + ':' + PASSWORD + '@smtp.gmail.com');		

//regularly get the status of our miners from siamining.com's API
//Send alert if data shows zero hash rate over past 5 minutes
setInterval(function(){
	request(SIAMINING_API + ADDRESS + '/workers', function(err, res, body){
		if (!err){
			var jsonResponse = JSON.parse(body),
				alerts = [];

			jsonResponse.forEach(function(el){
				if (el.intervals[0].hash_rate == 0) alerts.push(el.name);
			});
		}

		if (alerts.length) sendMailAlert(alerts);
	});
}, CHECK_INTERVAL);

//Send a hearbeat email every 24 hours
setInterval(() => sendMail('SIAlert Hearbeat', 'Still alive! Still alive...'), HEARTBEAT_INTERVAL);

//email an alert
function sendMailAlert(alertArray){
	sendMail('SIAMiner.com Alert', 
		`<p>The following miners have not checked in recently:</p>
	 	 <p>${alertArray.join(', ')}</p>`
	);
}

function sendMail(email_subject, email_body){ //email_body is a html-formatted string
	let mailOptions = {
	    from: 'SIAlert',
	    to: DESTINATION,
	    subject: email_subject,
	    html: email_body
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
}

console.log('Running...');