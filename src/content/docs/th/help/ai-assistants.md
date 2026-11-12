---
title: เชื่อมต่อ ChatGPT, Claude หรือ Grok
description: ใช้ Santara AI จาก ChatGPT, Claude, Grok และผู้ช่วย AI อื่น ๆ — วิธีเชื่อมต่อแต่ละตัว สิ่งที่ผู้ช่วยทำเองได้ วิธีที่ผู้ช่วยถามคุณก่อน และวิธียกเลิกการเชื่อมต่อ
sidebar:
  order: 2
---

คุณคุยกับพื้นที่ทำงาน Santara AI ได้จากผู้ช่วย AI ที่คุณใช้อยู่แล้ว ถาม *“วันนี้ใครเข้าพักบ้าง?”* หรือ *“ปิด Garden Room สุดสัปดาห์นี้”* ใน ChatGPT, Claude หรือ Grok แล้วผู้ช่วยจะตอบจาก — และทำงานใน — ปฏิทิน การจอง แขก และบอร์ดงานทำความสะอาดจริงของคุณ

ผู้ใช้ Claude: เชื่อมต่อจากหน้าของ Santara AI ใน **[Claude connector directory](https://claude.ai/directory/santara-ai)** — ไม่ต้องใช้ที่อยู่ ผู้ช่วยอื่นทั้งหมดเชื่อมต่อด้วยที่อยู่เดียวกัน:

```
https://mcp.santara.ai/mcp
```

![สี่ขั้นตอนการเชื่อมต่อผู้ช่วย AI: เพิ่ม URL ในแอป AI ของคุณ จากนั้นเข้าสู่ระบบและอนุญาตใน Santara AI แล้วเริ่มถาม](/diagrams/ai-connect.th.svg)

:::note
รหัสผ่านของคุณไม่เคยถูกส่งไปยังแอป AI Santara AI ให้คุณเข้าสู่ระบบเอง แล้วมอบกุญแจให้แอปซึ่งใช้ได้เฉพาะกับพื้นที่ทำงานที่คุณเลือก — และคุณเรียกคืนได้ทุกเมื่อ
:::

## Claude

Santara AI อยู่ใน connector directory อย่างเป็นทางการของ Claude: **[claude.ai/directory/santara-ai](https://claude.ai/directory/santara-ai)** ใช้ได้ใน claude.ai, Claude Desktop และแอป Claude บนมือถือ

1. เปิด **[Santara AI ใน Claude directory](https://claude.ai/directory/santara-ai)**

   ![หน้าของ Santara AI ใน Claude connector directory พร้อมปุ่ม Connect ที่มุมขวาบน](/screens/ai/claude-dir-1-listing.webp)

   หรือหาใน Claude: เปิด **Customize** ในแถบด้านข้าง เลือก **Connectors → Discover** แล้วค้นหา **Santara**

   ![หน้า Customize ของ Claude ที่ Connectors พร้อม Santara AI ที่พบจากการค้นหา “Santara”](/screens/ai/claude-dir-2-search.webp)

2. คลิก **Connect** Santara AI จะเปิดขึ้น: เข้าสู่ระบบ เลือกพื้นที่ทำงาน แล้วคลิก **อนุญาต** จากนั้นปุ่มจะเปลี่ยนเป็น **Connected**
3. ในแชต เปิด **+ → Connectors** ตรวจว่าเปิด **Santara AI** อยู่ แล้วถามได้เลย

   ![เมนู + ของ Claude ที่เปิดอยู่ที่ Connectors พร้อม Santara AI ที่เปิดใช้งาน](/screens/ai/claude-dir-3-toggle.webp)

:::note
ใช้ connector ที่อยู่ใน directory ไม่ใช่แบบกำหนดเอง — ไม่มีที่อยู่ให้วาง และไม่มีอะไรต้องตั้งค่า ถ้าคุณเคยเพิ่ม Santara AI เป็น **custom connector** ไว้ก่อนหน้านี้ ให้ลบออกที่ **Customize → Connectors** แล้วเชื่อมต่อจาก directory แทน ในแพ็กเกจ Team และ Enterprise เจ้าของอาจต้องเปิดใช้ connector ก่อน
:::

## ChatGPT

1. เปิด **Plugins** ในแถบด้านข้าง คลิก **Add** แล้วเลือก **Add custom MCP server**

   ![หน้า Plugins ของ ChatGPT พร้อมเมนู Add ที่เปิดอยู่ที่ “Add custom MCP server”](/screens/ai/chatgpt-1-add.webp)

2. ตั้งชื่อว่า **Santara AI** วาง `https://mcp.santara.ai/mcp` ใต้ **Connection → Server URL** และคง **Authentication: OAuth** ไว้

   ![แบบฟอร์ม “Add custom MCP server” ของ ChatGPT พร้อมชื่อและ server URL ของ Santara AI](/screens/ai/chatgpt-2-form.webp)

3. ไม่มีอะไรต้องตั้งใน **Advanced OAuth settings** — ChatGPT หาหน้าเข้าสู่ระบบของ Santara AI และเลือก **Client Identifier Metadata Document (CIMD)** ได้เอง

   ![การตั้งค่า OAuth ขั้นสูงของ ChatGPT แสดงวิธีลงทะเบียน CIMD ที่เลือกเอง](/screens/ai/chatgpt-3-cimd.webp)

4. คลิก **Create as a plugin** Santara AI จะเปิดขึ้น: เข้าสู่ระบบ เลือกพื้นที่ทำงาน แล้วคลิก **อนุญาต**
5. ในแชต เพิ่ม **Santara AI** จาก **+ → Plugins** แล้วถามได้เลย

:::note
custom MCP server ต้องใช้แพ็กเกจ ChatGPT แบบเสียเงิน ในแพ็กเกจ Business และ Enterprise แอดมินอาจต้องอนุญาตก่อน
:::

## Grok

1. ไปที่ **grok.com/connectors** แล้วเข้าสู่ระบบ Grok

   ![หน้า Connectors ของ Grok](/screens/ai/grok-1-connectors.webp)

2. เลือก **New Connector → Custom** แล้ววาง `https://mcp.santara.ai/mcp`
3. Santara AI จะเปิดขึ้น: เข้าสู่ระบบ เลือกพื้นที่ทำงาน แล้วคลิก **อนุญาต**

Grok ลงทะเบียนตัวเองโดยอัตโนมัติ ตอนนี้จึงได้สิทธิ์ **อ่านอย่างเดียว**: ตอบคำถามได้ แต่เปลี่ยนอะไรไม่ได้

## แอป AI อื่น ๆ

แอปใดก็ได้ที่รองรับ MCP ใช้ได้ — Claude Code, Cursor, VS Code และอื่น ๆ แอปเหล่านี้ลงทะเบียนตัวเอง จึงได้สิทธิ์ **อ่านอย่างเดียว** เช่นกัน

```
claude mcp add --transport http santara https://mcp.santara.ai/mcp
```

ครั้งแรกที่แอปใช้ Santara AI เบราว์เซอร์ของคุณจะเปิดขึ้นให้เข้าสู่ระบบและคลิก **อนุญาต**

## สิ่งที่ผู้ช่วยทำได้

ChatGPT และ Claude ได้รับการยืนยันตัวตนจากที่อยู่เว็บของตัวเอง จึงทำงานแทนคุณได้ อะไรทำได้เอง และอะไรต้องรอคุณตอบตกลง คุณเป็นคนกำหนด:

| ประเภทการเปลี่ยนแปลง | ค่าเริ่มต้น | ตัวอย่าง |
| --- | --- | --- |
| ปฏิทิน ใบงาน และงานทำความสะอาด | ทำทันที | ปิดหรือเปิดวันที่ เปิดใบงาน มอบหมายงานทำความสะอาด |
| ราคา | ทำทันที | ราคาต่อคืน จำนวนคืนขั้นต่ำ |
| ข้อความถึงแขก | ถามคุณก่อน | คำตอบ ข้อเสนอบริการเสริม การตอบรีวิว |
| การจองและค่าใช้จ่าย | ถามคุณก่อน | สร้าง เปลี่ยน หรือยกเลิกการจอง เพิ่มค่าใช้จ่าย |
| การเรียกเก็บเงิน การตั้งค่า ทีม ช่องทาง | ไม่ได้เลย | ไม่มีผู้ช่วยใดเปลี่ยนสิ่งเหล่านี้ได้ ไม่ว่าเมื่อไร |

ผู้ช่วยยังทำเกินกว่าที่ **บทบาทของคุณเอง** อนุญาตไม่ได้ด้วย

### เมื่อผู้ช่วยถามก่อน

ครั้งแรกที่ผู้ช่วยลองทำ จะไม่มีอะไรเปลี่ยน ผู้ช่วยจะแสดงการเปลี่ยนแปลงอย่างละเอียด — ข้อความถึงแขกทุกคำ — แล้วถามคุณ Santara AI จะทำการเปลี่ยนแปลงหลังจากคุณตอบตกลงในแชตเท่านั้น Claude และ ChatGPT ยังแสดงหน้าต่าง **Allow** ของตัวเองก่อนทุกการกระทำของ Santara AI

![หน้าต่างขออนุมัติของ Claude เองก่อนใช้ Santara AI](/screens/ai/claude-4-allow.webp)

![Claude แสดงการเปลี่ยนแปลงอย่างละเอียดและถามก่อนยกเลิกการจอง](/screens/ai/claude-5-asks.webp)

:::caution
ข้อความจากแขกไม่มีวันเป็นคำสั่ง ผู้ช่วยได้รับคำสั่งให้เพิกเฉยต่อคำสั่งที่อยู่ในข้อความ รีวิว หรือรายการที่พัก และการยืนยันแบบครั้งเดียวไม่สามารถปลอมขึ้นจากสิ่งเหล่านั้นได้
:::

## เปลี่ยนสิ่งที่ผู้ช่วยทำได้

เปิด **[ผู้ช่วย AI](https://www.santara.ai/dashboard/assistant-actions/)** ใน Santara AI สำหรับการเปลี่ยนแปลงแต่ละประเภท เลือก **ทำเองโดยอัตโนมัติ** **ถามฉันในแชท** หรือ **ไม่อนุญาต** เฉพาะเจ้าของหรือแอดมินที่เปลี่ยนค่าเหล่านี้ได้ หน้าเดียวกันแสดงทุกอย่างที่ผู้ช่วยแต่ละตัวทำ และสิ่งที่ผู้ช่วยถาม

## ยกเลิกการเชื่อมต่อ

ใน Santara AI ไปที่ **การตั้งค่า → ช่องทาง → แอป** แล้วคลิก **ยกเลิกการเชื่อมต่อ** ข้างผู้ช่วยนั้น การเปลี่ยนแปลงจะหยุดภายในไม่กี่วินาที สิ่งที่ผู้ช่วยอ่านได้จะหยุดภายในสิบนาที การลบ connector ใน ChatGPT หรือ Claude ก็ใช้ได้เหมือนกัน แต่มีเพียงรายการของ Santara AI เท่านั้นที่แสดงว่าสิทธิ์เข้าถึงถูกยกเลิกแล้ว

## สำหรับนักพัฒนา

ข้อมูลอ้างอิงเครื่องมือฉบับเต็ม — ทุกเครื่องมือ พารามิเตอร์ และสิ่งที่ทำ — สร้างจากตัวเซิร์ฟเวอร์เองที่ [mcp.santara.ai/docs](https://mcp.santara.ai/docs) และในรูปแบบที่เครื่องอ่านได้ที่ [mcp.santara.ai/tools.json](https://mcp.santara.ai/tools.json)
