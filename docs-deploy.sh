# Credits of this bash script: https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example
#!/usr/bin/env bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd documentation

git init
git config user.name "Jorge Rodríguez Galán"
git config user.email "jrogalan@gmail.com"

git remote add upstream "https://12d7888f-f26b-4d84-a298-f25a851a77cc@github.com/mallorcajs/mallorca-ng.git"
git fetch upstream
git reset upstream/gh-pages

# echo "your-custom-domain.com" > CNAME

touch .

git add -A .
git commit -m "ci(gh-pages): Rebuild pages ${rev}" 
git push -q upstream HEAD:gh-pages