<p align="center">
  <img src="https://github.com/BB-Media-IT/StreamGuardian/assets/4085605/1a168e49-91e2-48d2-9442-e34354e0ba6b" height=200/>
</p>

<p align="right"><a><img src="https://github.com/BB-Media-IT/StreamGuardian/assets/4085605/6a5bfe68-3da4-4e08-8838-d821d9cedbd0" height=15/> API v1</a></p>

## Stream Guardian 
Stream Guardian is an advanced monitoring and content protection solution for streaming platforms.

### Project Description
This project generates a QR code in two ways:

#### <img src="https://github.com/BB-Media-IT/StreamGuardian/assets/4085605/5f17e11e-1529-4535-9b17-2d4b14eb3b3c" height=15/> Web Application Method:

This method involves inserting a script written in JavaScript that retrieves data from localStorage to verify the information of the active user. The script generates a QR code by anonymizing this data, allowing the BB Media team to identify an infractor when the QR code is scanned during finger operations. This method is exclusive to web applications.

#### <img src="https://github.com/BB-Media-IT/StreamGuardian/assets/4085605/4f2e87a5-80d2-4006-b8f9-65ae072daa9d" height=15/> Player Plugin Method (In Development):

This method involves generating a plugin directly from the player. It essentially follows the same principle: retrieving the active user's information, anonymizing the data, and creating the QR code from the player level. This approach aims to cover 100% of the devices.

---

### System Requirements

- **Web**: The application must allow JavaScript.
- **Plugin**: Compatibility depends on the OTT player's requirements.

---

### Installation and Configuration

The installation of StreamGuardian requires coordination with the team responsible for the application to insert the code into the frontend, which will render according to the user. For the plugin version, it depends on the player and also requires coordination with the responsible team.

After configuration, it is ideal to perform tests during the early morning hours or, if possible, in a development version of the application that has internet access or is on a test server.

---

### Web Details

The obfuscated JavaScript script should be inserted into the URL or path where the channel is being played. The script is designed to detect the channel's URL and will activate if it is on the specific URL and if the player is in full-screen mode.

```javascript
var _0x73b2=["\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x2F\x70\x6C\x61\x79\x65\x72\x2F\x6C\x69\x76\x65\x2F","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x70\x61\x74\x68\x6E\x61\x6D\x65","\x75\x73\x65\x72","\x67\x65\x74\x49\x74\x65\x6D","\x70\x61\x72\x73\x65","\x64\x65\x76\x69\x63\x65\x49\x64","\x68\x74\x74\x70\x3A\x2F\x2F\x31\x32\x37\x2E\x30\x2E\x30\x2E\x31\x3A\x38\x30\x30\x30\x2F\x66\x69\x6E\x67\x65\x72","\x50\x4F\x53\x54","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x6A\x73\x6F\x6E","","\x71\x72\x5F\x69\x6D\x61\x67\x65","\x6C\x6F\x67","\x64\x69\x76","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x68\x65\x69\x67\x68\x74","\x73\x74\x79\x6C\x65","\x31\x30\x30\x70\x78","\x77\x69\x64\x74\x68","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x7A\x49\x6E\x64\x65\x78","\x62\x6F\x74\x74\x6F\x6D","\x32\x30\x70\x78","\x72\x69\x67\x68\x74","\x69\x6D\x67","\x73\x72\x63","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x2E\x64\x74\x76\x2D\x63\x6F\x6D\x6D\x6F\x6E\x2D\x63\x2D\x73\x68\x61\x6B\x61\x2D\x70\x6C\x61\x79\x65\x72","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72"];var URLactual=window[_0x73b2[0]];if(URLactual[_0x73b2[3]][_0x73b2[2]](_0x73b2[1])){var user_info=JSON[_0x73b2[6]](localStorage[_0x73b2[5]](_0x73b2[4]));user_info[_0x73b2[7]]= localStorage[_0x73b2[5]](_0x73b2[7]);const response= await fetch(_0x73b2[8],{method:_0x73b2[9],headers:{'\x41\x63\x63\x65\x70\x74':_0x73b2[10],'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':_0x73b2[10]},body:JSON[_0x73b2[11]](user_info)});const post= await response[_0x73b2[12]]();if(post!= _0x73b2[13]){console[_0x73b2[15]](post[_0x73b2[14]]);const div=document[_0x73b2[17]](_0x73b2[16]);div[_0x73b2[19]][_0x73b2[18]]= _0x73b2[20];div[_0x73b2[19]][_0x73b2[21]]= _0x73b2[20];div[_0x73b2[19]][_0x73b2[22]]= _0x73b2[23];div[_0x73b2[19]][_0x73b2[24]]= 1000000;div[_0x73b2[19]][_0x73b2[25]]= _0x73b2[26];div[_0x73b2[19]][_0x73b2[27]]= _0x73b2[26];const img=document[_0x73b2[17]](_0x73b2[28]);img[_0x73b2[29]]= post[_0x73b2[14]];img[_0x73b2[18]]= 100;div[_0x73b2[30]](img);document[_0x73b2[32]](_0x73b2[31])[_0x73b2[30]](div)}}
```

---

### Plugin Details (in development)

**Compatibility:** The plugin's compatibility will depend on the partner.

**Integration:** The integration will depend on the player, and the team will determine how to implement it.

**Functionality:** The plugin will activate based on the parameters set in the API, including channel name, time, QR code appearance frequency, and display time. This applies to both the web version and the plugin version.

---

### QR Code Functionality
**Collected Information:** Information such as the user's email, ID, and location is collected, if possible.

**Data Anonymization:** The data is anonymized using hashing algorithms like MD5 and SHA-256.

**Privacy and Security:** No personal data is stored; the data stored is only for statistical and legal purposes.

---

### Operational Use
**Manual Process:** The BB Media team uses an internal application on their mobile phones to scan QR codes.

**Detection and Action:** When a QR code is detected on an illegal page or site, an action is triggered to an API that stores the anonymized data along with the time, page or site information, and details such as the event and channel name.

**Automation:** BB Media also has software that systematically and automatically explores the requested URLs. Using AI, it detects the QR code and performs the same process as the manual one.

**Analysis and Integration:** The collected data is analyzed and integrated into dashboards for efficient monitoring and control.

---

### Use Cases

#### Detection of Re-streaming Infringers
**Situation:** StreamGuardian is used to identify users who are re-streaming signals by screen capturing streaming content.

##### Process

**Script Implementation:** The JavaScript script is inserted into the web page of the streaming player.

**QR Code Generation:** The script generates a QR code that includes anonymized information of the active user.

**Manual Detection:** The BB Media team scans the QR code using an internal application on their mobile phones when a suspicious transmission is detected.

**Automated Detection:** The automated software systematically explores URLs and uses AI to detect the QR code in illegal transmissions.

**API Trigger:** Once the QR code is scanned, an action is triggered to an API that stores the anonymized data along with the time, page or site, and details such as the event and channel name.

**Analysis and Integration:** The collected data is analyzed and integrated into dashboards for monitoring and tracking.

#### Improving Security and Content Control
**Situation:** StreamGuardian helps improve security and control of content on streaming platforms, ensuring that content is not pirated or re-streamed illegally.

##### Process

**Continuous Monitoring:** Scripts and plugins are implemented on streaming platforms to continuously generate and monitor QR codes.

**Proactive Detection:** Using AI and automation, StreamGuardian detects and alerts any unauthorized re-streaming attempts.

**Quick Actions:** The BB Media team can take quick actions to identify and mitigate infringements based on anonymized data and alerts received.

---

### Troubleshooting
Common Issues and Solutions

**Issue:** The JavaScript script does not activate.

**Solution:** Ensure that the script is correctly inserted into the specific URL or path of the player. Make sure the player is in full-screen mode.

**Issue:** The QR code is not generated.

**Solution:** Ensure that the necessary data is available in localStorage and there are no connectivity issues with the API.

**Issue:** Scanning the QR code does not trigger the expected action.

**Solution:** Check the connectivity with the API and ensure that the mobile device has internet access. Review the logs of the internal application for any errors.

---

### Frequently Asked Questions (FAQ)
**What user information is collected?** Information such as the user's email, ID, and location is collected, if possible, and anonymized.

**How is data privacy ensured?** We use hashing algorithms like MD5 and SHA-256 to anonymize data, and no personal data is stored. The data is used only for statistical and legal purposes.

**Which video players are compatible with the StreamGuardian plugin?** Compatibility depends on the partner and the player used. Integration will be determined by the responsible team.

**How can users contact the support team?** Users can contact the support team via email at support@bb-media.com

---

### Contacts and Support
For any inquiries or technical issues, you can contact the BB Media support team:

Email: support@bb-media.com
