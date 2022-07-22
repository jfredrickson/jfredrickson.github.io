---
title: Contact Me
description: echo "hello" | sendmail jeff
menu:
  primary:
    name: Contact
    weight: 900
---

## Where to find me on the internet

{{< contact >}}

## Or just fire off a message right here

{{< form action="https://getform.io/f/d7f87367-f6dc-46f8-97a0-8efa19f3f73e" method="POST" submit="Send" captcha=true >}}
  {{< field name="name" type="text" label="Name" icon="user" required="true" >}}
  {{< field name="email" type="email" label="Email" icon="envelope" required="true" >}}
  {{< field name="message" type="textarea" label="Message" required="true">}}
{{< /form >}}
