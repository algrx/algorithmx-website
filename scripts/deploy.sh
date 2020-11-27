# clone and merge
git clone "https://${DEPLOY_GITHUB_TOKEN}@github.com/algrx/algrx.github.io.git" website
find website/* ! -name docs -delete
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
