## 配置
```
git clone & npm install
```

### webpack-dev-server
```
#default port 5050, u can change in package.json
npm run dev
```
### production
```
#build first
npm run build
#webserver (e.g. Apache)
    #root
        $project_path/dist
    #rewrite config
        RewriteCond %{REQUEST_FILENAME} !-s
        RewriteCond %{REQUEST_FILENAME} !-l
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^.*$ /index.html [NC,L]
```
  