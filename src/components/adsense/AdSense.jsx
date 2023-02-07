import React from 'react';

export default class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-1655669335191511'
          data-ad-slot='4447855162'
          data-ad-format='auto' />
    );
  }
}