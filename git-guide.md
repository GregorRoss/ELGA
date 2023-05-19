## Checkout a new branch
git checkout -b -branchname-

## Make changes then git add all
git add .

## Commit changes to local repo
git commit -m '-message-'

## Push local changes to server
git push

## Initiate pull request on GitHub
Go to GitHub and you should see a 'Compare and Pull Request' or click Pull request -> New pull request

## Select base and compare branches
Base branch should be your branch and compare branch should be main

## Write comments and assign users to PR
You can write in a comment about the PR as well as assign specific users to complete the PR

## Ask other team member to check PR
Have someone else look over the PR, comment and click Merge. If there are any conflicts those will have to be resolved

## Delete branch
Make sure to delete the branch after the merge has been complete

## Checkout main branch
git checkout main