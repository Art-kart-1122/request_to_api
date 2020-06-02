const fs = require('fs');
const path = require('path');
const BaseAgentApi = require('./BaseAgentApi');

class DropboxAgentApi extends BaseAgentApi{
    constructor(token) {
        super('https://api.dropboxapi.com/2');
        this.token = token;
    }

    async createFolder(path) {
        const res = await this.requestAPI({
            method: 'post',
            url: '/files/create_folder_v2',
            data: {
                'path': path
            },
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.error ? 'Error : Folder is not created' : true;
    }

    async uploadFile(filePath, filename) {
        const res = await this.requestAPI({
            method: 'post',
            url: '/files/upload',
            data: fs.createReadStream(path.join(__dirname, filePath)),
            headers: {
                'Authorization': `Bearer ${this.token}`,
                "Dropbox-API-Arg": `{ "path": "${filename}", "mode": "add", "autorename": true, "mute": false, "strict_conflict": false }`,
                "Content-Type": "application/octet-stream"
            }
        });
        return res.error ?  "Error file not uploaded" : true;
    }

    async getFileMetadata(path) {
        const res = await this.requestAPI({
            method: 'post',
            url: '/files/get_metadata',
            data: {
                "path": path,
                "include_media_info": false,
                "include_deleted": false,
                "include_has_explicit_shared_members": false
            },
            headers: {
                'Authorization': `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        });
        return res.error ? 'Error bad request': true;
    }

    async deleteFile(path) {
        const res = await this.requestAPI({
            method: 'post',
            url: '/files/delete_v2',
            data: {
                "path": path
            },
            headers: {
                'Authorization': `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        });
        return res.error ? 'Error file was not deleted' : true;
    }

}

module.exports = DropboxAgentApi;