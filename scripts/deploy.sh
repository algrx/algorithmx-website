# clone and merge
git clone "https://${DEPLOY_GITHUB_TOKEN}@github.com/algrx/algrx.github.io.git" website
find website -path website/docs -prune -o -delete # delete everything except docs
touch website/.nojekyll # allow files with underscores
cp -r public/* website/
cd website

git config --local user.name "GitHub Action"
git config --local user.email "action@github.com"

# deploy
git add .
git commit -m "deploy: website"
git push -u origin master --force

# clean
cd ..
rm -rf website
