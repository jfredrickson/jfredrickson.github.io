---
title: Let's Encrypt on TrueNAS
tags:
  - truenas
---

This is how I use [Let's Encrypt](https://letsencrypt.org/) certificates on TrueNAS with Cloudflare as a DNS authenticator. TrueNAS already has built-in support for ACME DNS authentication, but the only DNS authenticator it supports is Route 53.

This process will create a certbot jail that:

- Configures `certbot` to get a Let's Encrypt wildcard certificate
- Runs `certbot renew` every 12 hours
- Saves certificates to a dataset so that they can be used by other services
- Deploys renewed certificates to the TrueNAS UI

You can skip the stuff about creating a dataset and mounting it to the jail if you don't want to use the certificates for anything other than the TrueNAS UI.

## Create a jail

1. Create a dataset to store the certificates: `/mnt/tank1/letsencrypt`
    - Owner: `root:wheel`
    - Mode:`0700`
2. Create a new jail named `certbot`
    - Disable VNET; it just complicates the network stack for this use case
3. Mount `/mnt/tank1/letsencrypt` to `/usr/local/etc/letsencrypt` within the jail
4. Start the jail
5. Open a console to the jail (`iocage console certbot` or via the TrueNAS UI) and carry out the rest of these steps within the jail

## Set up the jail

```bash
# Install prerequisites
pkg update
pkg install python38 py38-certbot py38-certbot-dns-cloudflare git

# Install the deploy script
git clone https://github.com/danb35/deploy-freenas.git /opt/deploy-freenas
cp /opt/deploy-freenas/deploy_config.example /opt/deploy-freenas/deploy_config
# Now configure the deploy script by editing /opt/deploy-freenas/deploy_config

# Configure Cloudflare credentials
cat <<- EOF > /usr/local/etc/certbot_cloudflare.conf
dns_cloudflare_email = "Cloudflare email address here"
dns_cloudflare_api_key = "API key from Cloudflare here"
EOF
chown root:wheel /usr/local/etc/certbot_cloudflare.conf
chmod 600 /usr/local/etc/certbot_cloudflare.conf

# Run certbot to get the certificates for the first time (fill in the domain and email address)
certbot certonly -d "*.example.com" -m "your.email@example.com" --dns-cloudflare --dns-cloudflare-credentials /usr/local/etc/certbot_cloudflare.conf --preferred-challenges dns-01

# Ensure the deploy script can successfully deploy the certificate to TrueNAS
/opt/deploy-freenas/deploy_freenas.py

# Create a cron job
cat <<- EOF >> /etc/crontab
# Renew Let's Encrypt certificates
0       0,12    *       *       *       root    certbot renew --deploy-hook /opt/deploy-freenas/deploy_freenas.py
EOF
```

Finally, confirm that the new certificate is in use by TrueNAS. The Let's Encrypt certificates should also show up in the new dataset (`/mnt/tank1/letsencrypt`) for use by other services.

## Resources

* [Official certbot instructions for FreeBSD](https://certbot.eff.org/instructions?ws=webproduct&os=freebsd)
* [deploy-freenas script](https://github.com/danb35/deploy-freenas)
