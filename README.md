Install Fedora Button for LiveCD
================================

This creates a small button on Gnome Shell top bar that serves as a launcher for Anaconda installer. It uses the same icon and title as the desktop launcher.

This extension was announced at [Fedora devel list](http://lists.fedoraproject.org/pipermail/devel/2012-April/165234.html) and the reasons for its creation are described there. It was then [proposed for inclusion](https://www.redhat.com/archives/anaconda-devel-list/2012-April/msg00212.html) in Anaconda.

![example image](https://github.com/kparal/InstallFedoraButton/raw/master/InstallFedoraButton.png)

How to try it out
-----------------

1. Boot Fedora 17 LiveCD.
2. Copy `InstallFedoraButton@kparal.redhat.com/` to `/usr/share/gnome-shell/extensions/`.
3. Restart gnome-shell (`Alt+F2` -> `r`).
4. Install `gnome-tweak-tool` and enable this extension.
