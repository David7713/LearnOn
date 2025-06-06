export const topicsDataGit = [
  {
    id: 1,
    name: 'Introduction to Git',
    content: (
      <>
        <p>
          Git is a distributed version control system that helps track changes in source code during software development. 
          It allows multiple developers to work on a project simultaneously by providing tools to manage and synchronize changes.
        </p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Repository:</strong> A collection of files and their complete history</li>
          <li><strong>Commit:</strong> A snapshot of your repository at a point in time</li>
          <li><strong>Branch:</strong> An independent line of development</li>
          <li><strong>Remote:</strong> A shared repository that team members use to exchange changes</li>
        </ul>
        
        <h4>Basic Workflow:</h4>
        <pre>{`1. Modify files in your working directory
2. Stage the changes you want to commit
3. Commit the changes to your local repository
4. Push your changes to share with others`}</pre>
      </>
    )
  },
  {
    id: 2,
    name: 'Creating a Git Repository',
    content: (
      <>
        <p>
          To start using Git, you need to initialize a repository in your project directory.
        </p>
        
        <h4>Initialize a New Repository:</h4>
        <pre>{`# Create a new directory
mkdir my-project
cd my-project

# Initialize Git repository
git init`}</pre>
        <p>This creates a hidden <code>.git</code> directory that stores all repository data.</p>
        
        <h4>Clone an Existing Repository:</h4>
        <pre>{`git clone https://github.com/user/repo.git
cd repo`}</pre>
        <p>This creates a local copy of a remote repository, including all files and commit history.</p>
      </>
    )
  },
  {
    id: 3,
    name: 'Git Status and Staging',
    content: (
      <>
        <p>
          Understanding the status of your files is crucial before committing changes.
        </p>
        
        <h4>Check Repository Status:</h4>
        <pre>{`git status`}</pre>
        <p>This shows:</p>
        <ul>
          <li>Untracked files (new files not yet added to Git)</li>
          <li>Changes not staged for commit</li>
          <li>Changes staged for commit</li>
        </ul>
        
        <h4>Staging Changes:</h4>
        <pre>{`# Stage a specific file
git add filename.txt

# Stage all changes in current directory
git add .

# Stage only modified files (not new files)
git add -u

# Interactive staging (choose changes)
git add -p`}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'Committing Changes in Git',
    content: (
      <>
        <p>
          Commits create permanent snapshots of your project at specific points in time.
        </p>
        
        <h4>Basic Commit:</h4>
        <pre>{`git commit -m "Add user authentication feature"`}</pre>
        
        <h4>Good Commit Messages:</h4>
        <ul>
          <li>First line: Short summary (50 characters or less)</li>
          <li>Second line: Blank</li>
          <li>Subsequent lines: Detailed explanation if needed</li>
        </ul>
        
        <h4>Example of Good Commit:</h4>
        <pre>{`Fix login page validation

- Add email format validation
- Fix password length requirement
- Add error message display`}</pre>
        
        <h4>Amend a Commit:</h4>
        <pre>{`git commit --amend`}</pre>
        <p>Use this to modify the most recent commit (message or content).</p>
      </>
    )
  },
  {
    id: 5,
    name: 'Pushing Changes to Remote Repository',
    content: (
      <>
        <p>
          Sharing your commits with others requires pushing to a remote repository.
        </p>
        
        <h4>View Remotes:</h4>
        <pre>{`git remote -v`}</pre>
        
        <h4>Push to Remote:</h4>
        <pre>{`# Push to default remote (origin) and branch
git push

# Push specific branch
git push origin branch-name

# First push to new branch
git push -u origin branch-name`}</pre>
        
        <h4>Push Tags:</h4>
        <pre>{`git push --tags`}</pre>
      </>
    )
  },
  {
    id: 6,
    name: 'Branching in Git',
    content: (
      <>
        <p>
          Branches allow you to develop features, fix bugs, or experiment without affecting the main codebase.
        </p>
        
        <h4>Branch Commands:</h4>
        <pre>{`# List all branches
git branch

# Create new branch
git branch feature/login

# Switch to branch
git checkout feature/login

# Create and switch in one command
git checkout -b feature/login

# Delete branch
git branch -d feature/login`}</pre>
        
        <h4>Branching Strategy Example:</h4>
        <pre>{`main        - Production-ready code
develop     - Integration branch
feature/*   - New features
bugfix/*    - Bug fixes
release/*   - Release preparation`}</pre>
      </>
    )
  },
  {
    id: 7,
    name: 'Merging Branches in Git',
    content: (
      <>
        <p>
          Merging combines changes from different branches.
        </p>
        
        <h4>Basic Merge:</h4>
        <pre>{`# Switch to target branch
git checkout main

# Merge feature branch
git merge feature/login`}</pre>
        
        <h4>Merge Conflicts:</h4>
        <p>When conflicts occur:</p>
        <pre>{`# After merge command shows conflicts
# Open files and look for conflict markers:
<<<<<<< HEAD
Current branch code
=======
Incoming branch code
>>>>>>> branch-name

# Edit files to resolve conflicts
git add resolved-file.txt
git commit`}</pre>
      </>
    )
  },
  {
    id: 8,
    name: 'Reverting Changes in Git',
    content: (
      <>
        <p>
          Git provides several ways to undo changes at different stages.
        </p>
        
        <h4>Undo Unstaged Changes:</h4>
        <pre>{`# Discard changes to specific file
git checkout -- filename.txt

# Discard all unstaged changes
git checkout -- .`}</pre>
        
        <h4>Undo Staged Changes:</h4>
        <pre>{`# Unstage file (keep changes)
git reset HEAD filename.txt`}</pre>
        
        <h4>Revert a Commit:</h4>
        <pre>{`# Create new commit that undoes changes
git revert commit-hash`}</pre>
        
        <h4>Reset to Previous Commit:</h4>
        <pre>{`# Move branch pointer (keep changes)
git reset --soft commit-hash

# Move pointer and reset staging (keep working dir)
git reset --mixed commit-hash

# Completely reset to commit (dangerous)
git reset --hard commit-hash`}</pre>
      </>
    )
  },
  {
    id: 9,
    name: 'Git Log and History',
    content: (
      <>
        <p>
          Viewing commit history helps understand project evolution and find specific changes.
        </p>
        
        <h4>Basic Log Commands:</h4>
        <pre>{`# Show commit history
git log

# One-line per commit
git log --oneline

# Show changes
git log -p

# Filter by author
git log --author="name"

# Filter by date
git log --since="1 week ago"`}</pre>
        
        <h4>Pretty Format:</h4>
        <pre>{`git log --pretty=format:"%h - %an, %ar : %s"`}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'Git Stash',
    content: (
      <>
        <p>
          Stash lets you temporarily shelve changes so you can work on something else.
        </p>
        
        <h4>Basic Stash Commands:</h4>
        <pre>{`# Stash current changes
git stash

# Stash with message
git stash save "work in progress"

# List stashes
git stash list

# Apply last stash
git stash apply

# Apply specific stash
git stash apply stash@{1}

# Create branch from stash
git stash branch new-branch`}</pre>
      </>
    )
  },
  {
    id: 11,
    name: 'Git Tags',
    content: (
      <>
        <p>
          Tags mark specific points in history as important (typically releases).
        </p>
        
        <h4>Tag Commands:</h4>
        <pre>{`# List tags
git tag

# Create lightweight tag
git tag v1.0.1

# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Show tag details
git show v1.0.0

# Push tags to remote
git push origin --tags`}</pre>
      </>
    )
  },
  {
    id: 12,
    name: 'Git Fetch and Pull',
    content: (
      <>
        <p>
          These commands help synchronize your local repository with remote changes.
        </p>
        
        <h4>Fetch vs Pull:</h4>
        <pre>{`# Download changes but don't merge
git fetch origin

# Download and merge changes
git pull origin main

# Pull with rebase instead of merge
git pull --rebase origin main`}</pre>
      </>
    )
  },
  {
    id: 13,
    name: 'Git Rebase',
    content: (
      <>
        <p>
          Rebasing rewrites commit history by applying commits on top of another branch.
        </p>
        
        <h4>Basic Rebase:</h4>
        <pre>{`# Switch to feature branch
git checkout feature

# Rebase onto main
git rebase main`}</pre>
        
        <h4>Interactive Rebase:</h4>
        <pre>{`# Rebase last 3 commits
git rebase -i HEAD~3`}</pre>
        <p>This opens an editor where you can:</p>
        <ul>
          <li>pick - use commit</li>
          <li>reword - edit commit message</li>
          <li>edit - amend commit</li>
          <li>squash - combine with previous commit</li>
          <li>drop - remove commit</li>
        </ul>
      </>
    )
  },
  {
    id: 14,
    name: 'Git Workflows',
    content: (
      <>
        <p>
          Common workflows help teams collaborate effectively using Git.
        </p>
        
        <h4>Centralized Workflow:</h4>
        <p>Single central repository, developers push/pull directly to main branch.</p>
        
        <h4>Feature Branch Workflow:</h4>
        <p>All development happens in dedicated branches, merged via pull requests.</p>
        
        <h4>Gitflow Workflow:</h4>
        <pre>{`main        - Production releases
develop     - Integration branch
feature/*   - New features
release/*   - Prepare releases
hotfix/*    - Critical bug fixes`}</pre>
        
        <h4>Forking Workflow:</h4>
        <p>Each developer has their own server-side repository, changes shared via pull requests.</p>
      </>
    )
  },
  {
    id: 15,
    name: 'Git Hooks',
    content: (
      <>
        <p>
          Hooks are scripts that run automatically when certain Git events occur.
        </p>
        
        <h4>Common Hook Locations:</h4>
        <pre>{`.git/hooks/
  pre-commit
  commit-msg
  pre-push
  post-receive`}</pre>
        
        <h4>Example Pre-commit Hook:</h4>
        <pre>{`#!/bin/sh
# Run tests before allowing commit
npm test`}</pre>
      </>
    )
  },
  {
    id: 16,
    name: 'Git Submodules',
    content: (
      <>
        <p>
          Submodules let you include other Git repositories within your project.
        </p>
        
        <h4>Submodule Commands:</h4>
        <pre>{`# Add submodule
git submodule add https://github.com/user/repo.git lib/repo

# Clone project with submodules
git clone --recursive https://github.com/user/project.git

# Update submodules
git submodule update --init --recursive`}</pre>
      </>
    )
  },
  {
    id: 17,
    name: 'Git Bisect',
    content: (
      <>
        <p>
          Bisect helps find which commit introduced a bug using binary search.
        </p>
        
        <h4>Using Bisect:</h4>
        <pre>{`# Start bisect session
git bisect start

# Mark current commit as bad
git bisect bad

# Mark known good commit
git bisect good v1.0.0

# Test current commit, then mark
git bisect good  # or git bisect bad

# Reset when done
git bisect reset`}</pre>
      </>
    )
  },
  {
    id: 18,
    name: 'Git Aliases',
    content: (
      <>
        <p>
          Aliases create shortcuts for frequently used Git commands.
        </p>
        
        <h4>Creating Aliases:</h4>
        <pre>{`# Short log
git config --global alias.lg "log --oneline --graph --decorate"

# Status shortcut
git config --global alias.st status

# Complex alias
git config --global alias.ll "log --pretty=format:'%C(yellow)%h%Creset %s %Cgreen(%cr)%Creset %C(blue)<%an>%Creset'"`}</pre>
      </>
    )
  },
  {
    id: 19,
    name: 'Git Large File Storage (LFS)',
    content: (
      <>
        <p>
          Git LFS handles large files by storing references in Git and contents separately.
        </p>
        
        <h4>Using Git LFS:</h4>
        <pre>{`# Install Git LFS
git lfs install

# Track large files
git lfs track "*.psd"
git lfs track "assets/**"

# View tracked patterns
git lfs track`}</pre>
      </>
    )
  },
  {
    id: 20,
    name: 'Git Best Practices',
    content: (
      <>
        <p>
          Following best practices makes working with Git more effective.
        </p>
        
        <h4>Key Practices:</h4>
        <ul>
          <li>Commit often, in logical chunks</li>
          <li>Write clear, descriptive commit messages</li>
          <li>Use branches for features/bugfixes</li>
          <li>Pull before you push</li>
          <li>Review changes before staging</li>
          <li>Use .gitignore for files not to track</li>
          <li>Keep your repository clean</li>
          <li>Agree on a workflow with your team</li>
        </ul>
        
        <h4>Sample .gitignore:</h4>
        <pre>{`# Compiled source
*.com
*.class
*.dll
*.exe
*.o
*.so

# Packages
node_modules/
*.gem

# Logs and databases
*.log
*.sqlite

# OS generated files
.DS_Store
.DS_Store?
._*`}</pre>
      </>
    )
  }
];