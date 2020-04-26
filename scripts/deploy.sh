# git
cd public
git init
git remote add origin "https://\${GITHUB_DEPLOY_TOKEN}@github.com/\${GITHUB_DEPLOY_REPO}.git"

# deploy
git add .
git commit -m "deploy website"
git push -u origin master --force
