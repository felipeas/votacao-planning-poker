import React, { Component } from 'react';

/* component styles */
import { styles } from '../styles/Sprint.scss';

export class SprintList extends Component {
    static propTypes = {
        sprints: React.PropTypes.array,
    }

    render() {
        const { sprints } = this.props;
        debugger;
        return (
            <div className={styles}>
                {sprints.map((item, index) =>
                    <div className="checkbox" key={index}>
                        <label>
                            {`${item.name}`}
                        </label>
                    </div>
                )}
            </div>
        );
    }
}

export default SprintList;
