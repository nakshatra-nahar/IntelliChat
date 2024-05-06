![intelli Chat](https://github.com/OvidijusParsiunas/intelli-chat/assets/18709577/340b3fe7-4eab-46e3-9711-2ef4042cefea)

This is an example Node server template that can be used to establish a websocket connection with the [intelli Chat](https://www.npmjs.com/package/intelli-chat) component. Read more [here](https://intellichat.dev/docs/connect#Websocket).

### :computer: Local setup

If you are downloading the project via `git clone` - we advise you to use shallow cloning with the use of the [--depth 1](https://www.perforce.com/blog/vcs/git-beyond-basics-using-shallow-clones) option to reduce its size:

```
git clone --depth 1 https://github.com/OvidijusParsiunas/intelli-chat.git
```

Navigate to this directory and run the following command to download the dependencies:

```
npm install
```

Run the project:

```
npm run start
```

### :calling: UI component

The UI component configuration to communicate with this server:

```
<intelli-chat request='{"url": "ws://localhost:8080", "websocket": true}'></intelli-chat>
```

The exact syntax for this example will vary depending on the framework of your choice ([see here](https://intellichat.dev/examples/frameworks)).

### :wrench: Improvements

If you are experiencing issues with this project or have suggestions on how to improve it, do not hesitate to create a new ticket in [Github issues](https://github.com/OvidijusParsiunas/intelli-chat/issues) and we will look into it as soon as possible.
