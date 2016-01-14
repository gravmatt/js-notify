# js-notify

Wrapper for the Notification object.

Works on Chrome, Safari and Firefox.

Maybe on Opera, IE an Edge as well.

If someone tested it on other browser please let me know.

## Get it on Bower

```
bower install js-notify
```

## How it works

```
var jsNotify = new JsNotify();

// request Notification permission
jsNotify.init();

// send notification
jsNotify.notify('title', {
    body: 'Notification Text',
    icon: 'path/to/image.png',
    onclick: function(e) {}, // e -> Notification object
    onclose: function(e) {},
    ondenied: function(e) {}
  });
```

You just have to set a title to make it work.

The json object on the second argument is optional.

If the function runs for the first time, is asks the user for permissions.

Follow me on [Twitter @gravmatt](https://twitter.com/gravmatt).
