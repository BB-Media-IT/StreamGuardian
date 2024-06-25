# API v1 Documentation - Stream Guardian

## General Information
- **contactEmail:** support@bb-media.com
- **developers:** Joel Moreno, Nicolas Walitzky, Pedro Giustinian
- **poweredBy:** BB Media
- **versionName:** Stream Guardian
- **versionNumber:** 1.0
- **versionTagline:** 🤟 let it rock

## Endpoints

### `/`
**Method:** GET

**Description:** Provides general information on the API.

**Example Response:**
```json
{
    "contactEmail": "support@bb-media.com",
    "developers": ["Joel Moreno", "Nicolas Walitzky", "Pedro Giustinian"],
    "poweredBy": "BB Media",
    "versionName": "Stream Guardian",
    "versionNumber": 1.0,
    "versionTagline": "🤟 let it rock"
}
```

### `/finger/`
**Method:** POST

**Description:** Generates and sends a QR code based on customer information.

**Example Request:**
```json
{
    "country": "AR",
    "partner": "Name_Partner",
    "isLive": true,
    "profile": {
        "email": "john_doe@email.com",
        "id": 123,
        "customerId": 234,
        "userName": "john_doe",
    },
    "uid": 123,
    "deviceId": "device_001",
    "ip": "192.168.1.1",
    "landing": "https://example.com/",
    "datetime": 1623770400
}
```

**Example Response:**
```json
{
    "qr_image": "data:image/png;base64,iVBORw0..."
}
```

### `/activity/`
**Method:** GET

**Description:** Verify if the script is working correctly.

**Example Response:**
```json
{
    "status": "running"
}
```

### `/partner/`
**Method:** POST

**Description:** Requests and returns information about a vendor based on the country, name and version of the operating, according to the date sent by the script.

**Example Request:**
```json
{
    "country": "AR",
    "partner": "Name_Partner",
    "datetime": 1623770400
}
```

**Example Response:**
```json
{
    "partner": "Name_Partner",
    "version": 1,
    "country": "AR",
    "landing": "https://example.com/",
    "channelsAvailable": [
        {
            "channelId": 1,
            "url_channel": "https://example.com/",
            "interval": 10,
            "next_datetime": 1623770400,
            "time_slots": [
                1623770400,
                1623772200,
                1623774000,
                1623775800,
                1623777600,
                1623779400,
                1623781200,
                1623783000,
                1623784800,
                1623786600
            ]
        }
    ]
}
```
