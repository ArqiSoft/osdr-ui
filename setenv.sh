#! /bin/sh
sed -i -e "s~I___IDENTITY_SERVER_URL___I~$IDENTITY_SERVER_URL~g;s~I___CORE_API_URL___I~$CORE_API_URL~g;s~I___BLOB_STORAGE_API_URL___I~$BLOB_STORAGE_API_URL~g;s~I___IMAGING_URL___I~$IMAGING_URL~g;s~I___SIGNALR_URL___I~$SIGNALR_URL~g;s~I___METADATA_URL___I~$METADATA_URL~g;s~I___PROXY_JSMOL_URL___I~$PROXY_JSMOL_URL~g;s~I___KETCHER_URL___I~$KETCHER_URL~g;s~I___DISTRIBUTION_CODE___I~$DISTRIBUTION_CODE~g;s~I___DISTRIBUTION_TITLE___I~$DISTRIBUTION_TITLE~g;" /usr/share/nginx/html/*.js