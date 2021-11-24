#!/usr/bin/env bash
npm run build:prod
rm -rf "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"
mkdir "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

cp -r "D:\alberta0714\vue-element-admin\dist" "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

cd "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

mv dist/* ./

rm -rf dist

cd "D:\wks_igetcool\architecture\igetcool-data-query"
git add *
git commit -a -m "【sw前端调整】"
git push
git checkout dev
git merge optimize/v202111-trace
git push
git checkout optimize/v202111-trace
git status





