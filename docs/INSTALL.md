# Unix-Based Install Guide

So you want to run the website on a unix based distro? Then we gotchu covered!

We will assume that you know which section will apply to you, if you're ready then let's do this!

## <b>OpenBSD</b>

Let's install the dependencies, run this command in a terminal emulator:
```sh
# pkg_add node git yarn
```

## <b>FreeBSD</b>
```sh
# pkg install node git yarn
```

## <b>Arch Linux</b>
```sh
# pacman -Sy nodejs yarn git
```

## <b>Debian/Ubuntu based</b>
```sh
// node installation
# curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
# apt install -y nodejs

// yarn installation
# npm i -g corepack
# corepack enable && corepack prepare yarn@stable --activate
```

## <b>Gentoo</b>
```sh
# emerge git yarn nodejs
```
---
## Deployment

Now that we've covered the dependency piece on major server distros, all we have to do now is deploy it!

```sh
# git clone https://github.com/Lazap-Development/website.git
```

Now all you have to do is run:
```sh
# yarn serve
```

That's it!