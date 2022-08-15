---
title: Borg on TrueNAS Core
description: Backing up data to a Borg server running on TrueNAS Core
tags:
  - truenas
---

This is how I run [Borg](https://www.borgbackup.org/) on TrueNAS Core.

## Create a jail

1. Add a Borg group and user account to TrueNAS Core:
    - Username: `borg`
    - Group: `borg`
    - Disable password: Yes
    - Shell: nologin
2. Create a dataset to store the Borg repositories: `/mnt/tank1/backups/borg`
3. Create a new jail named `borg`
    - Give it a static IP address so that other hosts on the network know where to connect for backups
4. Mount `/mnt/tank1/backups/borg` to `/backups` within the jail
5. Start the jail
6. Open a console to the jail (`iocage console borg` or via the TrueNAS UI) and carry out the rest of these steps within the jail

## Set up the jail

```bash
# Install prerequisites
pkg update
pkg install python38 py38-borgbackup

# Enable the SSH server
sysrc sshd_enable=YES

# Add a Borg group
pw group add borg -g <same GID as the Borg user you created in TrueNAS>

# Add a Borg user
pw user add borg -u <same UID as the Borg user you created in TrueNAS> -d /backups -g borg -s /bin/sh

# Give the Borg user ownership of the backup repositories
chown borg:borg /backups

# For each backup client, add its SSH public key to the Borg user's authorized_keys
echo <client SSH public key> >> /backups/.ssh/authorized_keys
```

Now you should be able to back up to this jail using Borg on each client, using a repo name such as `borg@borg:/backups/REPONAME`. Don't forget to add SSH public keys for any new clients.

## Resources

* [Borg installation](https://borgbackup.readthedocs.io/en/stable/installation.html)
