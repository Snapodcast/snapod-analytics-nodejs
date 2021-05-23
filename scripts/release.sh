# Compile TypeScript files into JavaScript
rm -rf releases
rm $npm_package_name.zip || true
tsc

# If the directory, `dist`, doesn't exist, create `dist`
stat releases || mkdir releases

# Archive artifacts
cd releases
zip ../$npm_package_name.zip -r *  ../package.json ../package-lock.json