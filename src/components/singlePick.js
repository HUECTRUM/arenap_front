import React from 'react';
import { withStyles } from '@material-ui/styles';
import Gallery from 'react-grid-gallery';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';

const useStyles = theme => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      position: 'relative'
    },
    gridList3: {
      width: 950,
      height: 810,
    },
    gridList2: {
      width: 950,
      height: 540,
    },
    gridList1: {
      width: 950,
      height: 270,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(233,30,99,0.7) 100%, rgba(233,30,99,0.7) 100%, rgba(233,30,99,0.7) 100%)',
    },
});

class SinglePick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tileData: []}
    }

    getImages = (props) => {
        console.log(props)
        var options = props.options
        return options.map(option => {
            return {
                img: 'https://img.scryfall.com/cards' + option,
                title: 'Selected',
                cols: 1,
                isSelected: option == props.pickedCard
            }
        })
    }

    render() {
        const { classes, data } = this.props;
        var tileData = this.getImages(data)

        var cssListClass = data.pickNumber < 5 ? classes.gridList3 : data.pickNumber < 10 ? classes.gridList2 : classes.gridList1

        return (
          <Box borderBottom={1} className={classes.root}>
              <Typography align='center' color='secondary' gutterBottom variant="h6">
                  Pack {data.packNumber + 1} Pick {data.pickNumber + 1}
              </Typography>
              <GridList cellHeight={260} className={cssListClass} cols={5}>
                  {tileData.map(tile => (
                      <GridListTile key={tile.img} cols={tile.cols || 1}>
                          <img src={tile.img} alt={tile.title} />
                          {tile.isSelected ? <GridListTileBar
                              title={tile.title}
                              classes={{
                                  root: classes.titleBar,
                                  title: classes.title,
                              }}
                          /> : null}
                      </GridListTile>
                  ))}
                </GridList>
          </Box>
        )
    }
}

export default withStyles(useStyles)(SinglePick);
