#!/bin/bash

SOURCES=/home/sources

if [ ! -d "$SOURCES" ]; then
    mkdir $SOURCES
fi

if [ -d "$SOURCES/qprob_frontend2" ]; then
    cd $SOURCES/qprob_frontend2
    git fetch --all
    git reset --hard origin/master
else
    cd $SOURCES
    git clone https://github.com/xenu256/qprob_frontend2
fi

for i in bsnssnws,3001 entreprnrnws,3002 parameterless,3000 qprob,3003 realestenews,3005 stckmrkt,3004 webdnl,3006
do IFS="," read PROJECT PORT  <<< "${i}"
        #rm -R /home/$PROJECT/frontend
        #mkdir /home/$PROJECT/frontend
        cp -R  $SOURCES/qprob_frontend2/. /home/$PROJECT/frontend/
        cd /home/$PROJECT/frontend
        source /usr/local/anaconda/bin/activate $PROJECT
        npm install
        PORT=$PORT nuxt build &
        #PORT=$PORT pm2 start node_modules/nuxt/bin/nuxt-start --name $PROJECT
        #nginx here
        source /usr/local/anaconda/bin/deactivate
done
