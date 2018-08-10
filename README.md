## 使用说明

step1:

    npm i svg-symbol-sprite-cli -g


step2:

    使用 Sketch 或 AI 等工具导出 svg 图片，存放在同一文件夹中 PS: ./src, (建议每个svg的名字规范, 最好英文，因为这就是后面每个icon的名字)


![](http://coolnuanfeng.github.io/assets/images/step_svg.png)

step3:

    执行 svg -e ./src
    此时会生成 一个dist目录


step4:

    用编辑工具 打开 dist目录下 sprite.svg 文件,将sprite.svg中的源码内容，复制到代码文件中，建议放置的隐藏的div中如下

    <div style="display:none;">
        <?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 49 49" id="close" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M24.5 0C10.97 0 0 10.969 0 24.5 0 38.03 10.969 49 24.5 49S49 38.03 49 24.5C49 10.969 38.03 0 24.5 0z" fill="#EBEBEB"/><path d="M27.485 25.01l7.414 7.414a1.75 1.75 0 0 1-2.474 2.475l-7.415-7.414-7.466 7.465a1.764 1.764 0 0 1-2.494-2.494l7.465-7.466-7.414-7.415a1.75 1.75 0 1 1 2.474-2.474l7.415 7.414 7.52-7.52a1.764 1.764 0 1 1 2.495 2.494l-7.52 7.52z" fill="#CCC" fill-rule="nonzero"/></g></symbol><symbol class="bicon" viewBox="0 0 1024 1024" id="star" xmlns="http://www.w3.org/2000/svg"><defs><style/></defs><path d="M1010.522 378.126a18.42 18.42 0 0 0-17.245-11.947l-317.167-.025L531.542 29.566a18.42 18.42 0 0 0-16.924-11.15h-.065a18.418 18.418 0 0 0-16.91 11.27L355.918 366.154l-319.96.025a18.42 18.42 0 0 0-12.17 32.244l264.486 232.854-87.218 311.044a18.419 18.419 0 0 0 27.646 20.499l285.917-182.504L800.534 962.82a18.395 18.395 0 0 0 9.91 2.892 18.42 18.42 0 0 0 17.847-22.98l-43.378-169.779a18.65 18.65 0 0 0-.372-1.264c-7.653-22.957-15.89-63.612-9.263-77.968 4.264-9.236.234-20.18-9.004-24.444-9.24-4.264-20.18-.233-24.444 9.004-7.04 15.252-7.662 37.274-1.899 67.321 3.518 18.348 8.341 33.672 9.441 37.062l31.687 124.02-256.53-163.746a18.418 18.418 0 0 0-19.821 0L249.555 905.804l77.315-275.73a18.418 18.418 0 0 0-5.564-18.797L84.75 403.014l283.397-.022c7.41 0 14.097-4.44 16.973-11.27L514.783 83.895 647.05 391.84a18.419 18.419 0 0 0 16.923 11.15l280.238.022-232.822 203.456c-7.66 6.693-8.443 18.329-1.749 25.99 6.694 7.659 18.332 8.442 25.99 1.748l269.766-235.739a18.42 18.42 0 0 0 5.126-20.342z"/></symbol></svg>
    </div>

step5:

    在需要icon的地方 如下引用, 其中 xlink:href="", 即为每个svg的名字

    <li>
        <svg class="icon"><use xlink:href="#email"></use></svg>
        <p>用户邮箱</p>
    </li>
    <li>
        <svg class="icon"><use xlink:href="#user"></use></svg>
        <p>用户名</p>
    </li>

step6:

    预览效果


![](http://coolnuanfeng.github.io/assets/images/step_preview.png)


### Examples

    svg -e ./src
    svg -e ./src -n mysprite.svg -o dist
    svg -l ./src/star.svg,./src/close.svg,./src/user.svg -n my.svg -o test
