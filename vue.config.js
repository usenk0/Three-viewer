module.exports = {
    'transpileDependencies': [
        'vuetify'
    ],
    lintOnSave: false,
    devServer: {
        /*https: {
            key: fs.readFileSync('cert/cert.key'),
            cert: fs.readFileSync('cert/cert.crt')
        },*/
        before(app) {
            app.post('/login', function(req, res) {
                var json = "";
                req.on('data', (chunck) => {
                    json += chunck.toString();
                });
                req.on('end', () => {
                    try {
                        res.end(JSON.stringify({
                            status: "success",
                            msg: "Logged In"
                        }).toString('utf8'));
                    } catch (error) {
                        res.end(JSON.stringify({
                            status: "error",
                            msg: "Wrong login or password"
                        }).toString('utf8'));
                    }
                });
            });
            app.post('/check_user', function(req, res) {
                var json = "";
                req.on('data', (chunck) => {
                    json += chunck.toString();
                });
                req.on('end', () => {
                    try {
                        res.end(JSON.stringify({
                            status: "success",
                            msg: "Logged In"
                        }).toString('utf8'));
                    } catch (error) {
                        res.end(JSON.stringify({
                            status: "error",
                            msg: "Wrong login or password"
                        }).toString('utf8'));
                    }
                });
            });
        }
    }
}