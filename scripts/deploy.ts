import { exec } from 'child_process'

const script = `
# config
git config --global user.email "travis@travis-ci.com"
git config --global user.name "Travis CI"

# git
cd public
git init
git remote add origin "https://\${GITHUB_DEPLOY_TOKEN}@github.com/\${GITHUB_DEPLOY_REPO}.git"

# deploy
git add .
git commit -m "Deploy website"
git push -u origin master --force
`

exec(script, (error, stdout, stderr) => {
  /* tslint:disable */
  console.log(stdout)
  console.log(stderr)
  /* tslint:enable */
})
