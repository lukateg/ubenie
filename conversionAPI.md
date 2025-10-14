Send events through the API
Once you have an access token, choose which events you want to send from your server, build your payload and make requests. Your payload will include information about the events and parameters you want to send.
Make a POST request
To send new events, make a POST request to this API's /events edge from this path: https://graph.facebook.com/{API_VERSION}/{PIXEL_ID}/events?access_token={TOKEN}.
When you post to this edge, Facebook creates new server events.
Learn more
Resources
List of standard events
Event parameters
User data parameters
Custom data parameters
Build a payload
See how your payload should be structured and check for any structural errors by using the payload helper to create a sample payload for your events.
{
"data": [
{
"event_name": "Purchase",
"event_time": 1760433452,
"action_source": "website",
"user_data": {
"em": [
"7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
],
"ph": [
null
]
},
"attribution_data": {
"attribution_share": "0.3"
},
"custom_data": {
"currency": "USD",
"value": "142.52"
},
"original_event_data": {
"event_name": "Purchase",
"event_time": 1760433452
}
}
]
}
Include selected events and parameters in your payload
Your coworker has defined the required events and parameters for a complete Conversions API setup.
Set up View content event
A visit to a content page you care about, such as a product page, landing page or article. Information about the page viewed can be passed to Facebook for use in dynamic ads.
Event parameters
Event time
Event name
Event source URL
Action source
Customer information parameters
Client user agent – do not hash
Set up Lead event
A submission of information by a customer with the understanding that they may be contacted at a later date by your business.
Event parameters
Event time
Event name
Event source URL
Action source
Event ID
Customer information parameters
Surname
Client user agent – do not hash
Email address
First name
Client IP address – do not hash
Set up WaitlistSignupStarted event
Check with your marketing partner to determine when this event should be sent.
Event parameters
Event time
Event name
Event source URL
Action source
Customer information parameters
Surname
Client user agent – do not hash
Email address
First name
Set up WaitlistModalOpened event
Check with your marketing partner to determine when this event should be sent.
Event parameters
Event time
Event name
Event source URL
Action source
Customer information parameters
Surname
Client user agent – do not hash
Email address
First name
Event transaction time
The "event_time" parameter is the event transaction time. The specified time may be earlier than the time when you send the event to Facebook. If "event_time" is greater than seven days in the past, we return an error for the entire request and process no events. Learn more
Deduplicating pixel and server events
Facebook tries to deduplicate identical events sent through both the Meta pixel and the Conversions API. We determine if events are identical based on their event ID and event name. Learn more
Batching events
You can send up to 1,000 events in data. However, for the best performance, we recommend sending events as soon as they occur. If any event you send within a batch is invalid, we reject the entire batch. Learn more
Test your events
Use a test ID to send test events directly from your server to verify that they're received correctly by Facebook.