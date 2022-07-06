---
title: Contact Me
menu:
  primary:
    name: Contact
    weight: 900
---

{{< form action="https://getform.io/f/d7f87367-f6dc-46f8-97a0-8efa19f3f73e" method="POST" submit="Send" >}}
  {{< field name="name" type="text" label="Name" icon="user" required="true" >}}
  {{< field name="email" type="email" label="Email" icon="envelope" required="true" >}}
  {{< field name="message" type="textarea" label="Message" required="true">}}
{{< /form >}}
