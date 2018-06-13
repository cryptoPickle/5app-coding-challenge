# 5app-coding-challenge

Please create a webservice which modifies an incoming payload and returns a response. 

The response should be a JSON object with property `response` with an Array of items.

i.e...
```
{
   response: [{name, count, thumbnail}, ...]
}
```

- Where `name` and `count` match their respective properties from the payload
- The payload is filtered, so only items with a `count` greater than `1` are returned.
- The `thumbnail` is a `url` selected from the payload item's list of `logos` no larger than 128x128 but no smaller than 64x64.

Please see [/samples](/samples) for example request and response

# Submit

To submit your service please enter the details in https://fiveapp-coding-challenge.herokuapp.com
