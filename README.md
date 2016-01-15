# js-notify

Wrapper for the browser Notification object.

Tested on Chrome, Safari and Firefox.

If someone tested it on other browser please let me know.

**Support for AMD and Node Module Pattern (Including browserify)**

## Get it on Bower

```
bower install js-notify
```

## How it works

```
notify('title', {
    body: 'Notification Text',
    icon: 'path/to/image.png',
    onclick: function(e) {}, // e -> Notification object
    onclose: function(e) {},
    ondenied: function(e) {}
  });
```

The json object as the second argument is optional and all its properties.

If the function runs for the first time, it asks the user for permissions.

## Request Permissions (optional)

To request permissions without to call a new notification, execute the notify function without any parameters.

```
notify()
```

Follow me on [Twitter @gravmatt](https://twitter.com/gravmatt).
