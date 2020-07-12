import React from 'react';
import { render } from '@testing-library/react';

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        return <span>hi</span>
    }
}


export default Detail;