<br />

<b>Intellichat</b> is a highly customizable AI chat component designed to seamlessly integrate into your website. Whether you're looking to create a chatbot that utilizes popular APIs like ChatGPT or connect to a custom service, this component offers extensive functionality with minimal setup.

### :rocket: Key Features

- Flexible API connectivity
- Customizable avatars and names
- File sharing capabilities
- Webcam photo capture
- Microphone audio recording
- Speech-to-Text for easy message input
- Text-to-Speech for hearing message responses
- Markdown and custom elements for text structuring and code rendering
- Introduction panel and dynamic modals for user guidance
- Direct integration with popular AI APIs like OpenAI and Hugging Face
- Compatibility with all major UI frameworks/libraries
- Browser-based model hosting
- Complete customization options

### :computer: Getting started

```
npm install intelli-chat
```

If using React, install the following instead:

```
npm install intelli-chat-react
```

To test the component - simply add the following to your markup:

```
<intelli-chat></intelli-chat>
```

### :zap: Connect

Establishing a connection is straightforward. Simply define the API details using the [request] property:

```
<intelli-chat request='{"url":"https://service.com/chat"}'/>
```

Ensure that the service can handle the request and response formats used in intelli Chat. Refer to the [Connect] section in the documentation and explore the [server template] examples for more details.

If you prefer to connect without modifying the target service, utilize the [interceptor] properties to enhance the transferred objects or the [handler] function to manage the request code.

### :electric_plug: Direct connection

Easily connect to popular AI APIs directly from your browser using the [directConnection] property:

```
<intelli-chat directConnection='{"openAI":true}'/>

<intelli-chat directConnection='{"openAI":{"key": "optional-key-here"}}'/>
```

It's important to note that this method is suitable for local, prototyping, or demo purposes only, as it exposes the API Key to the browser. When ready to deploy, switch to using the [request] property along with a [proxy service] for a more secure setup.

Currently supported direct API connections:
[OpenAI](https://openai.com/blog/openai-api), [HuggingFace](https://huggingface.co/docs/api-inference/index), [Cohere](https://docs.cohere.com/docs), [Stability AI](https://stability.ai/), [Azure](https://learn.microsoft.com/en-gb/azure/cognitive-services/), [AssemblyAI](https://www.assemblyai.com/)

### :robot: Web model

No servers, no connections, host an LLM model entirely on your browser.

Simply add the [intelli-chat-web-llm] module and define the [webModel] property:

```
<intelli-chat webModel="true" />
```

### :camera: :microphone: Camera and Microphone

Use intelli Chat to capture photos with your webcam and record audio with the microphone. You can enable this using the [`camera`]and [`microphone`] properties:

```
<intelli-chat camera="true" microphone="true" ...other properties />
```

## :heart: Contributions

Open source projects are created and maintained by the community, and we welcome all contributions to this project.<br>
If you have any suggestions for improvements, ideas on how to enhance the project, or if you've encountered a bug, please feel free to create a new issue ticket. We will address it promptly and work towards making the project better for everyone.
