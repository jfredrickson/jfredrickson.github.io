---
title: Roomba zones in Home Assistant
description: How to refer to custom Roomba zones in Home Assistant scripts
tags:
  - smart-home
  - home-assistant
  - iot
---

There doesn't appear to be a straightforward way to have Home Assistant work with custom Roomba zones. It takes some legwork.

I've designated a Roomba zone around our [Litter-Robot](https://www.litter-robot.com/) with the intention of having the vacuum clean up any stray litter after one of the cats uses the litter box.

But in order to get a Home Assistant script to send the Roomba to that zone, I need to know the Roomba's `pmap_id` and `region_id` fields from the iRobot API. Fortunately, [dorita980](https://github.com/koalazak/dorita980) makes this easy by providing a JavaScript wrapper around the iRobot API.

## Steps

First, you'll need to know your Roomba's IP address. Your router's DHCP lease table typically has this information.

In Home Assistant, if the [Roomba integration](https://www.home-assistant.io/integrations/roomba/) has continuous mode enabled, turn it off. The continuous mode option can be found by going to Settings -> Devices & Services -> Integrations and clicking Configure under the Roomba integration. This tells Home Assistant to stop hitting the Roomba's local API. The Roomba API can only handle one connection at a time, and we'll need to have access to it.

[Set up a new clean zone](https://homesupport.irobot.com/s/article/28252) in the Roomba app if you haven't already done so.

Install [irobot-tools](https://github.com/jfredrickson/irobot-tools). This will include the dorita980 library, which in turn includes a handy script to find your Roomba's local API authentication data. It gets this by looking it up in the iRobot cloud service using your iRobot username and password:

```bash
npx get-roomba-password-cloud <your iRobot username> <your iRobot password>
```

This will output something like:

```text
Found 1 robot(s)!
Robot "Roomba" (sku: i855020 SoftwareVer: lewis+22.21.1+2022-06-02-570490a425b+Firmware-Build+1339):
BLID=> ABCDEF0123456789ABCDEF0123456789
Password=> :1:0123456789:acbdefghijklmnop <= Yes, all this string.
```

There's your BLID and password! This BLID and password will be used in the next step authenticate to the Roomba's local API.

Use iRobot's app on your mobile device to tell the Roomba to start vacuuming your custom zone. Immediately after it starts, use this script from `irobot-tools` to find the last command that was issued to the Roomba:

```bash
./get-last-command <BLID> <password> <IP address>
```

Example output:

```json
{
  "command": "start",
  "initiator": "rmtApp",
  "time": 1658690508,
  "favorite_id": "0123456789abcdef0123456789abcdef",
  "robot_id": "ABCDEF0123456789ABCDEF0123456789",
  "params": null,
  "pmap_id": "b1x9ivlRXq1N7JfLcywbRV",
  "regions": [
    {
      "params": {
        "noAutoPasses": true,
        "twoPass": true
      },
      "region_id": "0",
      "type": "zid"
    }
  ],
  "user_pmapv_id": "220724T170713",
  "ordered": 1
}
  ```

And there's the `pmap_id` and `region_id`.

At this point, you can now restore continuous mode in Home Assistant.

Now in Home Assistant, you can create a script to tell the Roomba to vacuum this custom zone. The script should include a sequence item containing:

* **Action type:** Call service
* **Service:** Vacuum: Send command
* **Targets:** (select your Roomba)
* **Command:** start
* **Parameters:**
    ```yaml
    pmap_id: b1x9ivlRXq1N7JfLcywbRV
    regions:
      - region_id: '0'
        type: zid
    ```
