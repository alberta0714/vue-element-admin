#!/usr/bin/env bash
# 设置你的分支
CURRENT_BRANCH=feature/v202112-hotkey

npm run build:prod
rm -rf "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"
mkdir "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

cp -r "D:\alberta0714\vue-element-admin\dist" "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

cd "D:\wks_igetcool\architecture\igetcool-data-query\igetcool-data-query-sw-server\src\main\resources\public"

mv dist/* ./

rm -rf dist

cd "D:\wks_igetcool\architecture\igetcool-data-query"
git add *
commitSuffix=`date +%Y%m%d%H%M%S`
git commit -a -m "【sw前端调整】-${commitSuffix}"
git push
git checkout dev
git merge ${CURRENT_BRANCH}
git push
git checkout ${CURRENT_BRANCH}
git status





