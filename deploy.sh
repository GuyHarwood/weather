
# Deployment
# ----------

# 2. Install npm packages  
if [ -e "$DEPLOYMENT_SOURCE/package.json" ]; then  
  eval $NPM_CMD install  
  exitWithMessageOnError "npm failed"  
fi  
  
# 3. Install bower packages  
if [ -e "$DEPLOYMENT_SOURCE/bower.json" ]; then  
  eval $NPM_CMD install bower  
  exitWithMessageOnError "installing bower failed"  
  ./node_modules/.bin/bower install  
  exitWithMessageOnError "bower failed"  
fi  