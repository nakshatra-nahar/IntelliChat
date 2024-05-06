import {intelliChat as intelliChatCore} from 'intelli-chat';
import {createComponent} from '@lit-labs/react';
import * as React from 'react';

export const intelliChat = createComponent({
  tagName: 'intelli-chat',
  elementClass: intelliChatCore,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
