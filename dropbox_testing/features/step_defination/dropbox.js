const fs = require('fs');
const path = require('path');
const assert = require('assert').strict;
const { Given, When, Then } = require('cucumber');
const DropboxAgent = require('./world');


Given('I have {string} file to upload', (filename) => {
    fs.writeFile(
        path.join(__dirname, filename),
        'Service Testing',
    (err) => {
          if(err) console.log('File is not created');
    });
});

When('I try to create a folder {string}', async (foldername) => {
    await DropboxAgent.createFolder(foldername);
});

When('I upload the file {string} {string}', async (path, filename) => {
    await DropboxAgent.uploadFile(path, filename);
});

When('I try to get metadata {string}', async (path) => {
    this.result = await DropboxAgent.getFileMetadata(path);
});

When('I perform a delete {string}', async (path) => {
    this.result = await DropboxAgent.deleteFile(path);
});

Then('request occurred without error', () => {
    assert.equal(true, this.result);
})