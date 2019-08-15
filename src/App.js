import React from 'react';
import './App.css';
import $ from 'jquery';
import uploadDraft from './api/post_draft.js';
import DraftViewer from './components/draftViewer.js';
import UploadButton from './components/uploadButton.js';
import {Helmet} from "react-helmet";


//TODO: MOVE TO COMPONENTS
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drafts: null}
        this.procees = this.procees.bind(this);
    }

    procees = () => {
       uploadDraft($('input[type=file]'))
          .then(res => this.setState({drafts: res.draftData[0]}))
    }

    render() {
        return (
            <div>
                <Helmet>
                  <style>{'body { background-color: #2f383d; }'}</style>
                </Helmet>
                <UploadButton change={this.procees}/>
                {this.state.drafts ? <DraftViewer data={this.state.drafts}/> : null}
            </div>
        );
    }
}


export default App;
