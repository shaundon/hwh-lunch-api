# HWH Lunch API

Front end for [hwh-lunch-api](https://github.com/shaundon/hwh-lunch).

Make a GET request to `/`. You can supply a param `text` to request a specific
day, or will default to today.

It can also post the menu every weekday at 11am, via a Slack webhook. To do
this, set an environment variable `HWH_LUNCH_SLACK_WEBHOOK_URL`.
