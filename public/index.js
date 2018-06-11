var app = new Vue({
    el: '#app',
    data: {
        name: "BNK48 Photoset",
        price: 0,
        copyright: "CC Lebranc Convas ; Github : lebrancconvas"
    },
    methods: {
        confirm: function () {
            if (confirm("ยืนยันที่จะขายสินค้า ?")) {
                window.location.assign("https://otashopcenter.firebaseapp.com/formregis.html");
                console.log("Success");
            } else {
                console.log("Cancel");
            }
        },
        freeconfirm: function () {
            if (confirm("ยืนยันที่จะปล่อยแบบฟรี ?")) {
                window.location.assign("https://otashopcenter.firebaseapp.com/formregis.html");
                console.log("Success");
            } else {
                console.log("Cancel");
            }
        },
        nextgoods: function () {
            alert("ไม่มีการระบุสินค้าชิ้นถัดไป");
        },
        previousgoods: function () {
            alert("ไม่มีการระบุสินค้าชิ้นก่อนหน้า");
        }
    }
});


// var regis = new Vue ({
//     el: "regis",
//     data: {

//     }
// });