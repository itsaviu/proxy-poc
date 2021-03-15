Video Reference - https://www.youtube.com/watch?v=AElqiF6VSZI

### Charles Proxy Setup
* Install https://www.charlesproxy.com/latest-release/download.do
* Configure the SSL Certificate
```
    - In top navigation follow, `Help` -> `SSL Proxying` -> `Install Charles Root Certificate`
    - Double click `Charles Proxy CA` or Right click and clock `Get Info`
    - Click on `Trust` & Change `Never Trust` to `Always Trust` in the `When using this certificate` dropdown
```
---

Now that all the request will be pass throuh Charles proxy. The next is to rewrite all the response,  do the following

### Rewrite
We will replace closing Head tag with the script to inject the js file

- In top navigation, `Tools` -> `Rewrite`
- In the Left Panel click `Add` and give a name for that
- Click the created rewrite name, and you will see two section in right Pane
- The first on the right is where you have to add the website you want to rewrite
- Click `Add`
- Paste the  `https://*:443/*` in host and go to click `Ok` ignore the error if it pops  ( for specific website `https://www.amazon.in:443/*` )
- The next section is where we have to give the value to be rewritten
- Click `Add`
- Do the following
    - Select `Type` as `Body`
    - Tick the `Response` Checkbox, Untick `Request` Checkbox
    - In Match section, Tick the `Regex` Checkbox which is adjacent to Value
    - Add `</head>` in the Input box of the value
    - In Replace section, Tick the `Regex` Checkbox which is adjacent to Value
    - Add `<script src="https://cdn.jsdelivr.net/gh/itsaviu/proxy-poc@1.0/script.js"></script></head>` in the Input box of the value (or the js script)
```
  </head> -> <script src="https://cdn.jsdelivr.net/gh/itsaviu/proxy-poc@1.0/support.js"></script></head>   # Alert Msg
        or
  </head> -> <script src="https://cdn.jsdelivr.net/gh/itsaviu/proxy-poc@1.0/script.js"></script></head>   # Amazon & relicx website
```
- Once done click `ok`, rewrite is done


### Test
- Open Chrome browser
- Go to Amazon website, you will see the changes in Navigation logo (Logic written)