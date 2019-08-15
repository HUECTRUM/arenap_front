import React from 'react';
import Button from '@material-ui/core/Button';


class UploadButton extends React.Component {
    render() {
        return (
            <Button color="primary" variant="contained" component="label">
                Log file pls
                <input name='file' type="file" style={{ display: "none" }} onChange={this.props.change}/>
            </Button>
        );
    }
}

export default UploadButton;
