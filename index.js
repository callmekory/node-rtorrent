
var url = require("url")
var fs = require('fs');
var xmlrpc = require("xmlrpc");


function Rtorrent(option) {
    this.mode = (option && option['mode']) || "xmlrpc";
    this.host = (option && option['host']) || "127.0.0.1";
    this.port = (option && option['port']) || 80;
    this.path = (option && option['path']) || "/RPC2";
    this.user = (option && option['user']) || null;
    this.pass = (option && option['pass']) || null;
    this.client = null;
    
    if (this.mode == 'xmlrpc')
    {
        options = {
            host: this.host,
            port: this.port,
            path: this.path,
            headers: {
                'User-Agent': 'NodeJS XML-RPC Client',
                'Content-Type': 'text/xml',
                'Accept': 'text/xml',
                'Accept-Charset': 'UTF8',
                'Connection': 'Close'
            }
        }

        if (this.user && this.pass) {
            options.basic_auth = {
                user: this.user,
                pass: this.pass
            }
        }

        this.client = xmlrpc.createClient(options);
    }
    else
    {
        throw new Error('unknown mode: '+this.mode+' (available: xmlrpc)');
    }
};



module.exports = Rtorrent;





