import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/Items.scss';

export class Items extends Component {

    propTypes: {
        items: React.PropTypes.array,
        delItem: React.PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    /*componentDidMount(){
      window.addEventListener('onDelete', this.handleOnDelete);
    }
    */
    handleonDelete(event) {
        event.preventDefault();
        const index = event.currentTarget.dataset.index;
        this.props.delItem(index);
    }

    render() {
        const { items } = this.props;
        return (
            <div className={styles}>
                {!items.length && <span>Array is empty</span>}
                {
                    items.map((item, index) =>
                        <div className="checkbox" key={index}>
                            <label>
                            <input type="checkbox"
                              defaultChecked={item.done}
                            />
                              {`${item.text}`}
                            <span className="remove"
                              data-index={index}
                              onClick={this.handleOnDelete}
                            >
                              x
                            </span>
                            </label>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Items;
