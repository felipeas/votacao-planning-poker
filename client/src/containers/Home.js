import React, { Component } from 'react';

/* components */
import { TopImage } from '../components/TopImage';
import { Tools } from '../components/Tools';

export class Home extends Component {
    render() {
        return (
            <section>
                <TopImage />
                <Tools />
            </section>
        );
    }
}
