 #!/bin/bash

if $9; then
    set -e
    set -o xtrace
fi

#EXECUTE ./deploy_base.sh ccpm safi2.misiones.gob.ar /home/ccpm/ /var/www/ safi2.misiones.gob.ar/ safi2.misiones.gob.ar false DEV

PASSWORD="WewAteur5"
DATE="$(date +"%d-%m-%Y-%T")"
RM="rm -rf ./build-$8/"
RM_BUILD="rm -rf  build.7z"
YARN_INSTALL="yarn install --verbose"

case $8 in
    stage)
        BUILD="yarn build:stage --verbose"
    ;;
    dev)
        BUILD="yarn build:dev --verbose"
    ;;
    prod)
        BUILD="yarn build --verbose"
    ;;
esac

UPLOADING="scp -r -v ./build-$8/ $1@$2:$3"

echo "Cleaning START"
    echo `$RM`
echo "Cleaning END"

echo "Yarn Install START"
    echo `$YARN_INSTALL` 
echo "Yarn Install END"

echo "Compiling START"
    echo `$BUILD` 
echo "Compiling END"

if [ ! -f "build-$8" ]; then
    if $7; then
        echo "rm build-$8.7z START"
            rm -rf build-$8.7z
        echo "rm build-$8.7z  END"

        echo "Compress START"
            /c/Program\ Files/7-Zip/7z.exe a build-$8.7z build-$8/
        echo "Compress END"
    else
        echo "Compress FALSE"
    fi

    echo "Uploading START"
    echo `$UPLOADING` 
    echo "Uploading END"

    echo "Copy START"
        ssh -t $1@$2 "sudo cp -r -v $4$6 $4$6_$DATE"
    echo "Copy END"

    echo "Remove $6 START"
        ssh -t $1@$2 "sudo rm -rf -v $4$5*"
    echo "Remove $6 END"

    echo "Move START"
        ssh -t $1@$2 "sudo mv -v $3build-$8/* $4$5."
    echo "Move END"

    echo "Restart Service START"
        ssh -t $1@$2 "sudo systemctl restart nginx.service && sudo systemctl status nginx.service"
    echo "Restart Service END"
else
    echo "No se genero el build-$8"
fi;