export const topicsDataGithub = [
  {
    id: 1,
    name: 'Introduction to GitHub',
    content: (
      <>
        <p>
          GitHub is the world's largest code hosting platform that revolutionized how developers collaborate on software projects. 
          Built on top of Git version control, GitHub provides a cloud-based solution for managing and sharing code repositories.
        </p>
        
        <h4>Key GitHub Features:</h4>
        <ul>
          <li><strong>Version Control:</strong> Track every change to your code with Git integration</li>
          <li><strong>Collaboration Tools:</strong> Pull requests, code reviews, and issue tracking</li>
          <li><strong>Project Management:</strong> GitHub Projects, milestones, and labels</li>
          <li><strong>CI/CD:</strong> GitHub Actions for automated testing and deployment</li>
          <li><strong>Documentation:</strong> Wikis and GitHub Pages for project documentation</li>
          <li><strong>Community:</strong> Discover and contribute to open source projects</li>
        </ul>
        
        <h4>GitHub vs Git:</h4>
        <pre>{`
Git (Local)                  GitHub (Cloud)
-----------                  --------------
git init                     github.com/new
git commit                   Pull Requests
git branch                   Forking
.git/ folder                 Web Interface
Local history                Cloud backup
        `}</pre>
        
        <p>
          GitHub offers both free public repositories and paid private repositories, making it suitable for individual developers, 
          startups, and enterprise teams alike.
        </p>
      </>
    )
  },
  {
    id: 2,
    name: 'Creating a GitHub Repository',
    content: (
      <>
        <p>
          Repositories are the fundamental units of GitHub where your project's code, documentation, and revision history are stored.
        </p>
        
        <h4>Creating a New Repository:</h4>
        <ol>
          <li>Log in to your GitHub account</li>
          <li>Click the <code>+</code> icon in the top-right and select "New repository"</li>
          <li>Enter a repository name (e.g., <code>my-project</code>)</li>
          <li>Add an optional description</li>
          <li>Choose between public (visible to everyone) or private (restricted access)</li>
          <li>Initialize with:
            <ul>
              <li><code>README.md</code> - Project documentation</li>
              <li><code>.gitignore</code> - Specifies files to exclude</li>
              <li>License - Choose an open source license</li>
            </ul>
          </li>
          <li>Click "Create repository"</li>
        </ol>
        
        <h4>Repository Structure Best Practices:</h4>
        <pre>{`
my-project/
├── .github/           # GitHub workflows, issue templates
├── src/               # Source code
├── tests/             # Test files
├── docs/              # Documentation
├── .gitignore         # Files to ignore
├── README.md          # Project overview
├── LICENSE            # License file
└── package.json       # Project config (if applicable)
        `}</pre>
        
        <h4>Creating via Command Line:</h4>
        <pre>{`
# Create new local repository
mkdir my-project
cd my-project
git init

# Connect to GitHub (after creating empty repo on GitHub)
git remote add origin https://github.com/username/my-project.git
git push -u origin main
        `}</pre>
      </>
    )
  },
  {
    id: 3,
    name: 'Cloning a Repository',
    content: (
      <>
        <p>
          Cloning creates a local copy of a remote repository, including all files, branches, and commit history.
        </p>
        
        <h4>Cloning Methods:</h4>
        
        <h5>1. HTTPS (Recommended for beginners):</h5>
        <pre>{`
git clone https://github.com/username/repository.git
cd repository
        `}</pre>
        
        <h5>2. SSH (Recommended for frequent users):</h5>
        <pre>{`
git clone git@github.com:username/repository.git
cd repository
        `}</pre>
        
        <h5>3. GitHub CLI:</h5>
        <pre>{`
gh repo clone username/repository
cd repository
        `}</pre>
        
        <h4>Cloning Specific Branches:</h4>
        <pre>{`
# Clone only the main branch
git clone --branch main --single-branch https://github.com/username/repository.git

# Clone a specific tag
git clone --branch v1.0.0 https://github.com/username/repository.git
        `}</pre>
        
        <h4>Post-Clone Setup:</h4>
        <pre>{`
# View remote connections
git remote -v

# Add upstream repository (for forks)
git remote add upstream https://github.com/original/repository.git

# Fetch all branches
git fetch --all
        `}</pre>
      </>
    )
  },
  {
    id: 4,
    name: 'Committing Changes to GitHub',
    content: (
      <>
        <p>
          The Git workflow involves staging changes, committing them locally, and pushing to the remote repository.
        </p>
        
        <h4>Basic Workflow:</h4>
        <pre>{`
# Check repository status
git status

# Stage all changes
git add .

# Or stage specific files
git add file1.js file2.css

# Commit changes with message
git commit -m "Fix login page styling"

# Push to remote repository
git push origin main
        `}</pre>
        
        <h4>Commit Message Guidelines:</h4>
        <pre>{`
<type>(<scope>): <subject>
[BLANK LINE]
<body>
[BLANK LINE]
<footer>

# Example:
feat(auth): add password reset functionality

- Added forgot password form
- Implemented email service integration
- Updated API endpoints

Fixes #123
        `}</pre>
        
        <h4>Common Commit Types:</h4>
        <ul>
          <li><code>feat</code>: New feature</li>
          <li><code>fix</code>: Bug fix</li>
          <li><code>docs</code>: Documentation changes</li>
          <li><code>style</code>: Formatting changes</li>
          <li><code>refactor</code>: Code restructuring</li>
          <li><code>test</code>: Test-related changes</li>
          <li><code>chore</code>: Maintenance tasks</li>
        </ul>
        
        <h4>Advanced Committing:</h4>
        <pre>{`
# Amend last commit
git commit --amend -m "New message"

# Interactive staging
git add -p

# Reset last commit (before push)
git reset HEAD~1
        `}</pre>
      </>
    )
  },
  {
    id: 5,
    name: 'GitHub Branching and Merging',
    content: (
      <>
        <p>
          Branching allows parallel development by creating isolated lines of development that can be merged later.
        </p>
        
        <h4>Branching Workflow:</h4>
        <pre>{`
# Create and switch to new branch
git checkout -b feature/new-login

# Make and commit changes
git add .
git commit -m "Implement new login UI"

# Push branch to remote
git push -u origin feature/new-login
        `}</pre>
        
        <h4>Creating a Pull Request:</h4>
        <ol>
          <li>Push your branch to GitHub</li>
          <li>On GitHub, click "Compare & pull request"</li>
          <li>Add a descriptive title and description</li>
          <li>Select reviewers if needed</li>
          <li>Link related issues using <code>#</code> or <code>fixes #123</code></li>
          <li>Click "Create pull request"</li>
        </ol>
        
        <h4>Merging Strategies:</h4>
        
        <h5>1. Merge Commit (--no-ff):</h5>
        <pre>{`
git checkout main
git merge --no-ff feature/new-login
git push origin main
        `}</pre>
        
        <h5>2. Rebase and Merge:</h5>
        <pre>{`
git checkout feature/new-login
git rebase main
git checkout main
git merge feature/new-login
        `}</pre>
        
        <h5>3. Squash and Merge:</h5>
        <pre>{`
git checkout main
git merge --squash feature/new-login
git commit -m "Squashed feature/new-login"
git push origin main
        `}</pre>
        
        <h4>Branch Protection Rules:</h4>
        <ul>
          <li>Require pull request reviews before merging</li>
          <li>Require status checks to pass</li>
          <li>Require linear history</li>
          <li>Restrict who can push to matching branches</li>
        </ul>
      </>
    )
  },
  {
    id: 6,
    name: 'Forking a Repository',
    content: (
      <>
        <p>
          Forking creates a personal copy of someone else's project that you can modify without affecting the original.
        </p>
        
        <h4>Forking Process:</h4>
        <ol>
          <li>Navigate to the repository on GitHub</li>
          <li>Click the "Fork" button in the top-right corner</li>
          <li>Select your personal account as the destination</li>
          <li>Wait for the fork to complete</li>
        </ol>
        
        <h4>Syncing a Fork:</h4>
        <pre>{`
# Add original repo as upstream
git remote add upstream https://github.com/original/repository.git

# Fetch upstream changes
git fetch upstream

# Merge changes into your local main
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
        `}</pre>
        
        <h4>Contributing Back:</h4>
        <pre>{`
# Create feature branch
git checkout -b fix/issue-123

# Make your changes and commit
git add .
git commit -m "Fix issue #123"

# Push to your fork
git push origin fix/issue-123

# Create pull request from GitHub UI
        `}</pre>
        
        <h4>Fork vs Clone:</h4>
        <table>
          <thead>
            <tr>
              <th>Fork</th>
              <th>Clone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Creates server-side copy</td>
              <td>Creates local copy</td>
            </tr>
            <tr>
              <td>Used for contributing</td>
              <td>Used for development</td>
            </tr>
            <tr>
              <td>Appears in your GitHub</td>
              <td>Only on your machine</td>
            </tr>
            <tr>
              <td>Maintained separately</td>
              <td>Direct connection</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  },
  {
    id: 7,
    name: 'GitHub Actions for CI/CD',
    content: (
      <>
        <p>
          GitHub Actions automates your software workflows with world-class CI/CD capabilities.
        </p>
        
        <h4>Core Concepts:</h4>
        <ul>
          <li><strong>Workflow:</strong> Automated process defined in YAML</li>
          <li><strong>Job:</strong> Set of steps that execute on the same runner</li>
          <li><strong>Step:</strong> Individual task that can run commands</li>
          <li><strong>Action:</strong> Reusable unit of code</li>
          <li><strong>Runner:</strong> Server that executes your workflows</li>
        </ul>
        
        <h4>Basic Workflow Example (.github/workflows/build.yml):</h4>
        <pre>{`
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'
        
    - run: npm install
    - run: npm test
        `}</pre>
        
        <h4>Common Use Cases:</h4>
        <ul>
          <li>Running tests on every push</li>
          <li>Deploying to production on tag release</li>
          <li>Building Docker images</li>
          <li>Running linters and formatters</li>
          <li>Publishing packages</li>
        </ul>
        
        <h4>Advanced Features:</h4>
        <pre>{`
# Matrix builds
strategy:
  matrix:
    node-version: [12.x, 14.x, 16.x]
    os: [ubuntu-latest, windows-latest]

# Caching dependencies
- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}

# Environment secrets
- name: Deploy to production
  run: ./deploy.sh
  env:
    AWS_ACCESS_KEY: \${{ secrets.AWS_ACCESS_KEY }}
        `}</pre>
      </>
    )
  },
  {
    id: 8,
    name: 'GitHub Issues and Projects',
    content: (
      <>
        <p>
          GitHub Issues and Projects help track work, enhance collaboration, and organize tasks.
        </p>
        
        <h4>Creating Effective Issues:</h4>
        <pre>{`
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain.

**Additional context**
Add any other context about the problem here.
        `}</pre>
        
        <h4>Issue Templates:</h4>
        <pre>{`
# .github/ISSUE_TEMPLATE/bug_report.md
name: Bug Report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''

# ... template content ...
        `}</pre>
        
        <h4>GitHub Projects:</h4>
        <ul>
          <li><strong>Board View:</strong> Kanban-style task tracking</li>
          <li><strong>Table View:</strong> Spreadsheet-like organization</li>
          <li><strong>Roadmap View:</strong> Timeline-based planning</li>
          <li><strong>Automation:</strong> Auto-close issues, move cards</li>
        </ul>
        
        <h4>Project Automation Example:</h4>
        <pre>{`
# .github/workflows/project_automation.yml
name: Project Automation
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]

jobs:
  add-to-project:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@v0
        with:
          project-url: 'https://github.com/orgs/my-org/projects/1'
          github-token: \${{ secrets.GITHUB_TOKEN }}
        `}</pre>
      </>
    )
  },
  {
    id: 9,
    name: 'GitHub Pages for Hosting',
    content: (
      <>
        <p>
          GitHub Pages provides free static site hosting directly from your GitHub repository.
        </p>
        
        <h4>Setting Up GitHub Pages:</h4>
        <ol>
          <li>Create a repository named <code>username.github.io</code></li>
          <li>Add your static website files (HTML, CSS, JS)</li>
          <li>Enable in Settings → Pages</li>
          <li>Select branch (typically <code>main</code> or <code>gh-pages</code>)</li>
          <li>Wait for deployment (may take a few minutes)</li>
        </ol>
        
        <h4>Project Site vs User/Organization Site:</h4>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Repository Name</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User</td>
              <td>username.github.io</td>
              <td>https://username.github.io</td>
            </tr>
            <tr>
              <td>Project</td>
              <td>any-name</td>
              <td>https://username.github.io/repo</td>
            </tr>
          </tbody>
        </table>
        
        <h4>Custom Domains:</h4>
        <pre>{`
# Add CNAME file in your repo
example.com

# DNS Configuration:
Type    Name       Value
----    ----       -----
A       @          185.199.108.153
A       @          185.199.109.153
CNAME   www        username.github.io
        `}</pre>
        
        <h4>Jekyll for Static Sites:</h4>
        <pre>{`
# _config.yml
title: My Awesome Site
theme: minima

# Directory structure
.
├── _config.yml
├── _posts/
│   └── 2023-01-01-welcome.md
├── _layouts/
│   └── default.html
└── index.md
        `}</pre>
      </>
    )
  },
  {
    id: 10,
    name: 'GitHub Security Features',
    content: (
      <>
        <p>
          GitHub provides robust security features to help protect your code and dependencies.
        </p>
        
        <h4>Key Security Features:</h4>
        <ul>
          <li><strong>Dependabot:</strong> Automated dependency updates</li>
          <li><strong>Code Scanning:</strong> Find vulnerabilities with CodeQL</li>
          <li><strong>Secret Scanning:</strong> Detect exposed secrets</li>
          <li><strong>2FA Enforcement:</strong> Require two-factor authentication</li>
          <li><strong>Security Policies:</strong> Define reporting guidelines</li>
        </ul>
        
        <h4>Dependabot Configuration:</h4>
        <pre>{`
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "monthly"
        `}</pre>
        
        <h4>Code Scanning Workflow:</h4>
        <pre>{`
name: CodeQL Analysis
on: [push, pull_request]
jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3
      
    - name: Initialize CodeQL
      uses: github/codeql-action/init@v2
      with:
        languages: 'javascript'
        
    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v2
        `}</pre>
        
        <h4>Security Best Practices:</h4>
        <ul>
          <li>Regularly update dependencies</li>
          <li>Use GitHub's security advisories</li>
          <li>Implement branch protection rules</li>
          <li>Review third-party actions</li>
          <li>Rotate tokens and secrets regularly</li>
        </ul>
      </>
    )
  },
  {
    id: 11,
    name: 'GitHub API and Webhooks',
    content: (
      <>
        <p>
          GitHub's REST and GraphQL APIs allow programmatic interaction with repositories, issues, and more.
        </p>
        
        <h4>REST API Example (Get Repositories):</h4>
        <pre>{`
# Using curl
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/users/username/repos

# Using JavaScript
fetch('https://api.github.com/users/username/repos', {
  headers: {
    'Authorization': 'token YOUR_TOKEN'
  }
})
.then(response => response.json())
.then(data => console.log(data));
        `}</pre>
        
        <h4>GraphQL API Example:</h4>
        <pre>{`
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20) {
      edges {
        node {
          title
          url
          createdAt
        }
      }
    }
  }
}
        `}</pre>
        
        <h4>Webhooks Configuration:</h4>
        <ol>
          <li>Go to repository Settings → Webhooks</li>
          <li>Click "Add webhook"</li>
          <li>Enter Payload URL (your server endpoint)</li>
          <li>Select content type (typically <code>application/json</code>)</li>
          <li>Choose events to trigger the webhook</li>
          <li>Add secret for secure payloads</li>
          <li>Click "Add webhook"</li>
        </ol>
        
        <h4>Common Webhook Events:</h4>
        <ul>
          <li><code>push</code> - Code is pushed to repository</li>
          <li><code>pull_request</code> - PR activity</li>
          <li><code>issues</code> - Issue activity</li>
          <li><code>release</code> - New releases</li>
          <li><code>star</code> - Repository is starred</li>
        </ul>
      </>
    )
  },
  {
    id: 12,
    name: 'GitHub Organizations and Teams',
    content: (
      <>
        <p>
          GitHub Organizations allow companies and groups to manage multiple repositories and users.
        </p>
        
        <h4>Organization Features:</h4>
        <ul>
          <li>Centralized repository management</li>
          <li>Team-based permissions</li>
          <li>Organization-wide projects</li>
          <li>Audit logs</li>
          <li>Single sign-on (SSO)</li>
          <li>Enterprise support</li>
        </ul>
        
        <h4>Creating Teams:</h4>
        <ol>
          <li>Go to Organization → Teams</li>
          <li>Click "New team"</li>
          <li>Enter team name (e.g., "Frontend Developers")</li>
          <li>Add team members</li>
          <li>Set repository permissions:
            <ul>
              <li><strong>Read:</strong> View and clone</li>
              <li><strong>Write:</strong> Push and create branches</li>
              <li><strong>Admin:</strong> Full repository control</li>
            </ul>
          </li>
        </ol>
        
        <h4>Team Synchronization:</h4>
        <pre>{`
# Using GitHub CLI
gh api \
  --method POST \
  -H "Accept: application/vnd.github.v3+json" \
  /orgs/{org}/teams/{team_slug}/team-sync/group-mappings \
  -f groups='[{"group_id":"123","group_name":"AzureAD Group"}]'
        `}</pre>
        
        <h4>Organization Best Practices:</h4>
        <ul>
          <li>Use CODEOWNERS for required reviews</li>
          <li>Implement branch protection rules</li>
          <li>Regularly review team memberships</li>
          <li>Use repository templates</li>
          <li>Monitor audit logs</li>
        </ul>
      </>
    )
  }
];