# DnD Character Sheet

## Introduction

The aim is to have a character sheet solution that is not hampered by the tedious spellsheet-generation process encountered in standard PDF and JavaScript-based solutions.



## Back-End

- **SQLite** for database of spells, and other character information
  - Not working now, so put it in Google Sheets, and call from it



SQLite is a **poor choice** for applications that require multiple users with special access permissions.

- Single file, so does not have the ability to do stuff like this. 
- May need full Client-Server setup for peripheral features (DM Account, Player Account, etc)



UNINSTALL PYTHON 3.7