import Options from './options';
import './startSmallScreen.css';
import React from 'react';

export default function StartSmallScreen() {
  return (
    <div id="start-page-small-screen">
      <Options
        options={[
          {text: 'Setup the component', link: 'https://intellichat.dev/docs/installation'},
          {text: 'Connect to a popular AI API', link: 'https://intellichat.dev/docs/directConnection'},
          {text: 'Connect to a custom API', link: 'https://intellichat.dev/docs/connect'},
          {text: 'AI in your browser', link: 'https://intellichat.dev/docs/webModel'},
        ]}
      ></Options>
    </div>
  );
}
