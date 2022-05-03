# Custom Fetch Implementation

Trawling through an onslaught of interviews and an inummerable measure of Hacker Rank tests, I found that I was not only learning a lot, but I was also finding a way to solve problems that I had never thought of.

During the course of my test taking, I had run into a question twice that had given me issues; writing a custom HTTP implementation. I pride myeself on knowing the basics, yet not once but twice, I had not been able to do just that, create a custom implementation of an http query using the standard node library. This was a great learning experience, and I am proud of it, I will struggle and grow so my failures do not occur more than twice, the second time is a mistake and the third time shows a lack of growth.

# What I Learned

The HTTP Package system follows a similar pattern to the Promise system, but with a few key differences. The differences are highlighted in the key fact that the HTTP package is not a promise, but a request.

A basic tree model of what I used for the HTTP package is shown below.

```
HTTP
└── Request
	├── Response (From the request)
    |	└── on
	|		├── data
	|		|	└──"Data is coming in chunks and is being stored in a buffer"
	|		|
	|		└── end
	|			└──"When chunks stop being sent over the stream, the data is assigned to the provided object"
    ├── on
    |	└─── error
	|		└── "If there is an error, the error is assigned to the provided object"
    └── end
   		└── "When the request is completes it destroys itself"
```

```
Promise
└── Pending
	├── "While the promise is pending, await"
	├── Reject
	|	└── "If the promise is rejected, ƒ(reject) is called"
	└── Fulfill
		└── "If the promise is resolved, ƒ(resolve) is called"
```

While taking advantage of the Request and Response objects we can combine the logic with a Promise implementation. The Promise implementation is shown below.

```
Implementation
└── Pending
	├── Response (From the request)
    |	└── on
	|		├── data
	|		|	└── Fulfill
	|		|		└── "Once the stream of chunks stops, the data is passed to the ƒ(resolve)"
	|   	|
    |		└─── error
	|			 └── Reject
	|			 	└── "On erroring out, the error is passed to ƒ(rejection)"
	└── end
   		└── "When the request is completes it destroys itself"
```

The Promise implementation is a bit more complex, but it is a lot more flexible and can be used in a variety of different situations, while not being feature compelete (Polyfills for multi-browser support, handling different HTTP verbiage, and handling extreme edge cases), it reaches the minimum viable qualifications for my needs.
