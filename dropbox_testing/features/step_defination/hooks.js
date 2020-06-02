const { After, Before} = require('cucumber');
const DropboxAgent = require('./world');





After({tags: '@get_metadata'}, () => {
    DropboxAgent.deleteFile('/test_folder');
});

After({tags: '@delete_file'}, () => {

});

