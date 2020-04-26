# git
cd public
git init
git remote add origin "https://${GITHUB_TOKEN}@github.com/algrx/algrx.github.io.git"

# deploy
git add .
git commit -m "deploy website"
git push -u origin master --force
