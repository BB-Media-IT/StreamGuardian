// Validation and campaign execution
function validateAndExecuteCampaign(campaign) {
    const start = new Date(campaign.start);
    const end = new Date(campaign.end);
    const now = new Date();

    if (now >= start && now <= end) {
        console.log('The campaign was launched correctly');

        const period = campaign.period * 1000; 
        const display = campaign.display * 1000;

        const intervalId = setInterval(() => {
            commonCampaignExecution(display);
        }, period);

        setTimeout(() => {
            document.querySelector(".dtv-common-campaign").remove();
            clearInterval(intervalId);
        }, end - now);
    } else {
        console.log('The campaign has not yet started or has already ended.');
    }
}

function commonCampaignExecution(displayDuration) {
    console.log('Display QR Campaign');

    var URLactual = window.location;
    if (URLactual.pathname.includes("/player/live/")) {           

        var campaign_url = localStorage.getItem('campaign_channel');
        if (campaign_url != URLactual.pathname){
            console.log('Change channel', campaign_url, URLactual.pathname);
            createdCampaignQR()
        } 

        var campaign_qr = JSON.parse( localStorage.getItem('campaign_qr') ); 
        if (campaign_qr != "") {
            const div = document.createElement("div");
            div.classList.add("dtv-common-campaign");

            div.style.height = "100px";
            div.style.width = "100px";
            div.style.position = "absolute";
            div.style.zIndex = 1000000;
            div.style.bottom = "20px";
            div.style.right = "20px";
        
            const img = document.createElement("img");
            img.src = campaign_qr;
            img.height = 100;
            
            div.appendChild(img);
            document.querySelector(".dtv-common-c-shaka-player").appendChild(div);
        }
    }
    
    setTimeout(() => {
        document.querySelector(".dtv-common-campaign").remove();
        console.log('Hidde QR Campaign');
    }, displayDuration);
}

async function createdCampaignQR(){
    console.log("Save campaign to display");

    var user_info = JSON.parse( localStorage.getItem('user') );
    user_info['deviceId'] = localStorage.getItem('deviceId');
    
    var campaign = JSON.parse( localStorage.getItem('campaign') );
    user_info['campaignName'] = campaign.name;
    user_info['tag'] = campaign.tag;

    var URLactual = window.location;
    user_info['channel'] = URLactual.pathname;
    localStorage.setItem('campaign_channel', URLactual.pathname);

    const response = await fetch('https://streamguardian.bb-media.com/finger', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_info) 
    });
    const post = await response.json();
    localStorage.setItem('campaign_qr', JSON.stringify(post.qr_image));
}

fetch('https://streamguardian.bb-media.com/campaign?tag=DGO')
.then(response => response.json())
.then(data => {
    localStorage.setItem('campaign', JSON.stringify(data.campaign));
    createdCampaignQR();
    validateAndExecuteCampaign(data.campaign);
})
.catch(error => console.error('Error fetching the campaign:', error));
