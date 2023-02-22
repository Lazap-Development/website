# This is the source code of https://lazap.tech

## **:: Building from source**
- ### ***Prerequisites***
  #### You need to have these programs installed for this to work:
  - [node](https://nodejs.org/)
  - [yarn](https://yarnpkg.com/getting-started/install)
  #
  #### Are you a Linux user?
  - Arch Linux
    ```
    sudo pacman -Sy nodejs yarn
    ```
  - Debian / Ubuntu
    ```
    // node installation
    curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
    sudo apt install -y nodejs
    
    // yarn installation
    npm i -g corepack
    corepack enable && corepack prepare yarn@stable --activate
    ```
- ### ***Building***
  ```
  yarn serve
  ```
  Thats it :D

## **:: Don't hesitate to contribute to this project by submitting a pull request**
## **:: For any questions and support join our discord server: https://discord.gg/Pctn4xWJaP**

## **:: FAQ:**
- ### **Why is this readme so bad who the hell wrote this ??!?**
  - #### I strongly apologize for making you think that but I'm doing as best as I can to make this informational enough for everyone.