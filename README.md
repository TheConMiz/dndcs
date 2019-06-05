# DnD Character Sheet

## Introduction

The aim is to have a character sheet solution that is not hampered by the tedious spellsheet-generation process encountered in standard PDF and JavaScript-based solutions.

## Back-End

- **SQLite** for database of spells, and other character information
  - Works now, use **Electron Builder** to build...
    - [x] Windows 10
    - [ ] Mac OS

## To-Do 

- [ ] Replace `electron-webpack` with `webpack`

- [ ] Test building with **Electron-Builder**

- [ ] Test SQLite queries with React UI

  

## Front-End

- React for the front-end implementation
  - Material UI

## Packaging

- Electron Builder
  - Can make one executable
  - Not sure how to make cross-platform packages
  - Already using it to compile native **SQLite**

***NOTE!*** SQLite is a **poor choice** for applications that require multiple users with special access permissions.

- Single file, so does not have the ability to do stuff like this. 
- May need full Client-Server setup for peripheral features (DM Account, Player Account, etc.)

