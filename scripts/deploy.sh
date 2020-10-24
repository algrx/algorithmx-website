# clone and merge
git clone "https://${DEPLOY_GITHUB_TOKEN}@github.com/algrx/algrx.github.io.git" full_public
cp -r public/* full_public/
cd full_public

git config --local user.name "GitHub Action"
git config --local user.email "action@github.com"

# deploy
git add .
git commit -m "deploy: website"
git push -u origin master --force
