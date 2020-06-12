var app = new Vue({
    el: "#app",
    data: {
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        radius: 50,
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: "red",
            background: "lightgray"
        },
        item: {
            id: 1,
            src: "item1.jpg", //存在しないファイル名です。
            alt: "商品サムネイル",
            width: 200,
            height: 200
        }
    }
})
