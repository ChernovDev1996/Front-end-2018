// obj.key == "Hello";

// key = 'some'
// obj[key] = "Hello"
// obj['key'] == "Hello";

// key: "Hello";



1. git--version

2. git init

3. git remote add origin < url > -"remote"
and "add" - name of distanced repo - origin - < url >

        -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

4. git status




Four states:

        unmodified, modified, tracked / in index, commited




5. git add.

6. git commit - m "Update"


7. git branch

8. git branch Dev

9. git checkout Dev
git checkout - b dev-- --create and
switch to dev

10. git branch - D dev-- --deleting a branch






//     Home Lection

git checkout - b EXAMPLE

git add.

git commit - m "c1"



git log - 1-- - history of commits
git log - 2-- - two last

git commit--amend-- -- -- -- -- ++ + i(insert in VIM)

Exit from VIM
        : wq-- - write & quit


git push--force origin EXAMPLE-- - always when history is re - recorded with--amend


git merge example(dev1 - ads to example)



git checkout - b Dev2

        ++console.log();


git merge dev2(merge with master) --fastforward


git checkout - b Dev3

git checkout master

git merge--no - ff Dev3


git reset--hard HEAD~1




// rebase

git checkout - b dev4

        +
        commit etc


back to master

++commit etc


checkout to dev4

git rebase master

git add.
git rebase--
continue

git push--force origin dev4