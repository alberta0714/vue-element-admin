#!/usr/bin/env bash
#CURRENT_BRANCH=

DATA_QUERY_DIR=/usr/local/code/architecture/igetcool-data-query
VEA_DIST_DIR=/usr/local/code/albert/vue-element-admin/dist
SW_PUBLIC_DIR=/usr/local/code/architecture/igetcool-data-query/igetcool-data-query-sw-server/src/main/resources/public/
rm -rf "${VEA_DIST_DIR}"
npm run build:prod
rm -rf "${SW_PUBLIC_DIR}"
mkdir "${SW_PUBLIC_DIR}"
cp -r "${VEA_DIST_DIR}" "${SW_PUBLIC_DIR}"
cd "${SW_PUBLIC_DIR}"
mv dist/* ./
rm -rf dist

#cd "${DATA_QUERY_DIR}"
#git add *
#commitSuffix=`date +%Y%m%d%H%M%S`
#git commit -a -m "【sw前端调整】-${commitSuffix}"
#git push
#git checkout dev
#git merge ${CURRENT_BRANCH}
#git push
#git checkout ${CURRENT_BRANCH}
#git status





