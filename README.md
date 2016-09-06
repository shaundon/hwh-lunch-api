# HWH Lunch API

Front end for [hwh-lunch-api](https://github.com/shaundon/hwh-lunch).

This is specifically built to work as a Slack integration. You can hook
it up to a Slack slash command, and you can use a webhook for automatic
posting.

Make a GET request to `/`. You can supply a param `text` to request a specific
day, or will default to today.

If a GET param of `response_url` is present, instead of functioning via the
usual request/response mechanism, no response will be sent, and instead the
response will be sent as an additional request to the `response_url`.

See the [Slack API documentation](https://api.slack.com/slash-commands) for more information.

It can also post the menu every weekday at 11am, via a Slack webhook. To do
this, set an environment variable `HWH_LUNCH_SLACK_WEBHOOK_URL`.
