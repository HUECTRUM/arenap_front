import connectionparams from './../consts/connection_params.js';
import $ from 'jquery';

var fileUploadFormData = inputs => {
    var result = new FormData()
    result.append('file', inputs[0].files[0])
    return result
}

var postDataParams = inputs => {
    return {
        type: 'POST',
        url: connectionparams.backend + '/draft',
        data: fileUploadFormData(inputs),
        contentType: false,
        processData: false
    };
}

export default inputs => $.ajax(postDataParams(inputs));
