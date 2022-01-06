name: Update elec-notes table of contents

on:
  workflow_dispatch:
  push:
    branches:
    - master
    paths:
    - elec-notes.md

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Check out repo
      uses: actions/checkout@v2
    - name: Update TOC
      run: npx markdown-toc elec-notes.md -i
    - name: Commit and push if elec-notes.md changed
      run: |-
        git diff
        git config --global user.email "taptapdan@gmail.com"
        git config --global user.name "Daniel Fiore"
        git diff --quiet || (git add elec-notes.md && git commit -m "Update elec-notes.md TOC")
        git push
