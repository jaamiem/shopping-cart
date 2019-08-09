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
    dialogVisible: false,
  }

  render() { 
    const item = this.props.item;
    const abridgedTitle = formatContent(item.title, 25);
    const abridgedContent = formatContent(item.body, 100);

    const header = (
      <img alt='Cat' src='http://placekitten.com/180/100' />
    );
    const basketButton = (
      <button className='btn btn-info btn-sm' onClick={this.props.onAddToBasket.bind(this, item)}> <i className='pi pi-check'/> Add to Basket</button>
    )
    const footer = (
      <div>
        <button 
          className="btn btn-outline-secondary btn-sm mr-2" 
          onClick={() => this.setState({ dialogVisible: true })}
        >Quick View</button>
        {basketButton}
      </div>
    );

    //
    return (
      <React.Fragment>
        <div style={cardStyle}>
          <Card 
          header={header}
          footer={footer}
          title={'#'+item.id} 
          subTitle={abridgedTitle}
          className='ui-card-shadow'> 
            {abridgedContent}
          </Card>
        </div>
        <Dialog 
          header={item.title}
          footer={basketButton}
          visible={this.state.dialogVisible} 
          style={{width: '50vw'}} 
          modal={true} 
          dismissableMask={true}
          onHide={() => this.setState({ dialogVisible: false })}
          >
          {item.body}
        </Dialog>
      </React.Fragment>
    );
  }
}

const cardStyle = {
  flex: '0 2 15%',
  minWidth: '250px',
  margin: '1rem .25em',
  // cursor: 'pointer',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
}
 
export default StoreCard;