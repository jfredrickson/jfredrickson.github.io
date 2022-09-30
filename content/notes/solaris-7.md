---
title: Solaris 7
description: Random tidbits on configuring Solaris 7
tags:
  - retrocomputing
---

These are various to-do items after a Solaris 7 install, as well as fixes for common issues.


## Configure the default domain

Assuming example.com is the system's domain name:

```sh
echo example.com > /etc/defaultdomain
```

Configuring the domain name will address a potential error on startup: `starting rpc services: rpcbindkeyserv: failed to generate host's netname when establishing root's key`


## Configure the default gateway

Assuming 192.168.1.1 is the gateway:

```sh
echo 192.168.1.1 > /etc/defaultrouter
```


## Specify an IP address and hostname

* Add an entry for your IP address and hostname to `/etc/hosts`
* Ensure that the `hosts` file entry matches up with what's in `/etc/hostname.le0` (replace `le0` with whatever the network interface is)

Configuring the IP address and hostname will address the potential startup error: `configuring network interfaces:ifconfig: foo.example.com: bad address le0.`


## Enable ntpd

```sh
echo server pool.ntp.org > /etc/inet/ntp.conf
/etc/init.d/xntpd start
```


## SNMP related errors at boot time

Errors on startup related to `snmpXdmid`:

* `Error in Adding Row for Subscription Table Entry`
* `Failed to add filter to SP for Event delivery`

The workaround is to disable these two services (assuming you don't need SNMP anyway):

```sh
/etc/rc3.d/S76snmpdx stop
/etc/rc3.d/S77dmi stop
mv /etc/rc3.d/S76snmpdx /etc/rc3.d/_disable_S76snmpdx
mv /etc/rc3.d/S77dmi /etc/rc3.d/_disable_77dmi
```


## Backspace key

To get the backspace key to work properly on the console (`^H` is a literal Ctrl+H; you can get it by typing Ctrl+V Ctrl+H):

```sh
stty erase ^H
```

