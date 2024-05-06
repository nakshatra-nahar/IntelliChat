import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';

// Used to allow client side rendering
export default function intelliChatBrowser(props) {
  return (
    <BrowserOnly>
      {() => {
        const intelliChatReact = require('intelli-chat-react').intelliChat;
        return <intelliChatReact {...props}>{props.children}</intelliChatReact>;
      }}
    </BrowserOnly>
  );
}
