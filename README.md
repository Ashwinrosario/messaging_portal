# messaging_portal

## sendSMS.js

The `sendSMS.js` file contains a simple script to send an SMS message using the Twilio API. It retrieves sensitive credentials (such as the Twilio account SID, auth token, and phone numbers) from environment variables, which are stored in a `.env` file for security.

### Prerequisites

- Ensure you have a Twilio account and have your **Account SID**, **Auth Token**, and **Twilio Phone Number**.
- The script requires a `.env` file that should contain the following environment variables:

```bash
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
TO_NUMBER=recipient_phone_number 
```
## Note: For trial accounts, TO_NUMBER must be a verified number. Once upgraded, this can be any valid phone number and not kept in ENV.it can be used in the api or in the function itself.
