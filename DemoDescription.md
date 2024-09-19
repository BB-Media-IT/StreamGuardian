# Campaign Validation and Execution

This code is responsible for validating and executing a campaign on the OTT platform, displaying a QR code on the screen for a specific period. Below is a detailed explanation of each part of the code:

## 1. Function `validateAndExecuteCampaign(campaign)`
- **Purpose**: Validates if the campaign is active and, if so, executes the campaign.
- **Parameters**: `campaign` (object containing the campaign details).
- **Process**:
  - Converts the campaign's start and end dates to Date objects.
  - Checks if the campaign is currently active by comparing the current date with the start and end dates.
  - If the campaign is active:
    - Calculates the execution and display periods in milliseconds.
    - Executes the `commonCampaignExecution(display)` function at regular intervals.
    - Schedules the removal of the campaign element and stops the periodic execution at the end of the campaign.

## 2. Function `commonCampaignExecution(displayDuration)`
- **Purpose**: Displays the campaign's QR code on the screen.
- **Parameters**: `displayDuration` (duration in milliseconds for which the QR code is displayed).
- **Process**:
  - Checks if the current URL contains `/player/live/`.
  - If the current URL does not match the stored campaign URL, calls `createdCampaignQR()` to update the QR code.
  - Retrieves the campaign's QR code from local storage and displays it in a div on the screen.
  - Schedules the removal of the div containing the QR code after `displayDuration`.

## 3. Function `createdCampaignQR()`
- **Purpose**: Creates and saves the campaign's QR code.
- **Process**:
  - Retrieves user and campaign information from local storage.
  - Sends a POST request to a server to obtain the campaign's QR code.
  - Saves the received QR code in local storage.

## 4. Campaign Initialization
- **Process**:
  - Makes a fetch request to obtain the campaign details from a server.
  - Saves the campaign details in local storage.
  - Calls `createdCampaignQR()` to create the QR code.
  - Calls `validateAndExecuteCampaign(data.campaign)` to validate and execute the campaign.

## Considerations
- The demo campaign can function even if the player is not in full-screen mode.
- The campaign lasts for 6 days.
- The QR code will appear and disappear regularly throughout the campaign (Test mode).
- The URLs are for testing and may change, possibly to avoid mentioning the word "Stream Guardian".
