# iCalendar Syntax

<p align="center">
    <span> 简体中文</span>
    ·
    <a href="https://github.com/septwong/vscode-iCalendar/blob/main/README.md">English</a>
</p>

iCalendar for VS Code

iCalendar 是一款适用于 VS Code 的日历语法高亮插件，支持 `.ics`、`.ical`、`.ifb` 等 iCalendar 文件格式。

基于 [RFC 5545](https://tools.ietf.org/html/rfc5545) 标准，提供完整的 iCalendar 组件和属性的高亮显示，方便开发者和用户快速阅读和编辑日历文件。

## 主要功能

- **完整语法高亮**：准确高亮所有 iCalendar 标准组件、属性、常量和参数。
- **代码折叠**：轻松折叠 `BEGIN` / `END` 块，包括 `VCALENDAR`、`VEVENT`、`VTODO`、`VTIMEZONE` 等主要组件。
- **符合 RFC 5545 标准**：保证语法规范和兼容性。
- **时区友好**：默认优化为 CN / Asia/Shanghai 时区，VEVENT 组件自动继承日历时区。
- **日期时间区分**：UTC 时间和本地时间高亮区分，更清晰易读。
- **参数高亮**：对 `TZID` 及其他参数值进行高亮显示，增强可读性。
- **独立语法作用域**：为关键词、属性、参数、值及自定义 `X-` 属性提供清晰可区分的高亮样式。

## 适用场景

- 编辑 iCalendar 文件（.ics/.ical/.ifb）
- 查看节假日、会议、任务、提醒等日历事件
- 开发或调试支持 iCalendar 的应用程序

## 安装与使用

1. 打开 VS Code
2. 在扩展市场搜索 `iCalendar` 或访问 [Marketplace 页面](https://marketplace.visualstudio.com/items?itemName=af4jm.vscode-icalendar)
3. 点击安装
4. 打开 iCalendar 文件，即可享受高亮和折叠功能

## 资源

- [iCalendar Marketplace 页面](https://marketplace.visualstudio.com/items?itemName=af4jm.vscode-icalendar)
- [RFC 5545 标准](https://tools.ietf.org/html/rfc5545)