#! /bin/sh
sed -i -e "s/I___IDENTITY_SERVER_URL___I/$IDENTITY_SERVER_URL/g;s/I___OSDR_API_URL___I/$OSDR_API_URL/g;s/I___BLOB_STORAGE_API_URL___I/$BLOB_STORAGE_API_URL/g;s/I___IMAGING_URL___I/$IMAGING_URL/g;s/I___SIGNALR_URL___I/$SIGNALR_URL/g;s/I___METADATA_URL___I/$METADATA_URL/g;s/I___PROXY_JSMOL_URL___I/$PROXY_JSMOL_URL/g;s/I___KETCHER_URL___I/$KETCHER_URL/g;" /usr/share/nginx/html/main.*.js
