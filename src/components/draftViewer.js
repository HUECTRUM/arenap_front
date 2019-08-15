import React from 'react';
import { withStyles } from '@material-ui/styles';
import SinglePick from './singlePick.js';
import List from '@material-ui/core/List';

const useStyles = theme => ({
    root: {
       position: 'absolute',
       left: '12%',
       width: 870,
       height: 1500,
    },
    typo: {
      left: '12%',
    }
});

class DraftView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tileData: []}
    }

    getImages = (props) => {
        var options = props.picks[0].options
        return options.map(option => {
            return {
                src: 'https://img.scryfall.com/cards' + option,
                thumbnail: 'https://img.scryfall.com/cards' + option,
                thumbnailWidth: 212,
                thumbnailHeight: 300,
                isSelected: props.picks[0].pickedCard === option,
            }
        })
    }

    render() {
        const { data } = this.props;


        return (
            <div>
                {data.picks.map(pick => <SinglePick data={pick} />)}
            </div>
        );
    }
}

export default withStyles(useStyles)(DraftView);
