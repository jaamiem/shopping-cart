import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function formatContent(content, cutoff) {
  if(content < cutoff) return content;
  return content.slice(0, cutoff) + '...'
}

class StoreCard extends Component {
  state = {
    dialogVisible: false
  }

  render() { 
    const header = (
      <img alt='card' src='http://placekitten.com/180/100' />
    );

    const item = this.props.item;
    const title = formatContent(item.title, 15);
    const content = formatContent(item.body, 100);

    return (
      <React.Fragment>
        <div 
          style={cardStyle}
          onClick={() => this.setState({ dialogVisible: true })} >
          <Card 
            header={header}
            title={title} 
            subTitle={'#'+item.id} 
            className='ui-card-shadow'> 
            {content}
          </Card>
        </div>
        <Dialog 
          header="Header Text" 
          visible={this.state.dialogVisible} 
          style={{width: '50vw'}} 
          modal={true} 
          dismissableMask={true}
          onHide={() => this.setState({ dialogVisible: false })}>
          Content
        </Dialog>
      </React.Fragment>
    );
  }
}

const cardStyle = {
  flex: '0 2 15%',
  margin: '1rem .25em',
  cursor: 'pointer',
  userSelect: 'none',
}
 
export default StoreCard;