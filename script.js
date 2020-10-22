for (a = 1; a <= 100; a++) {
    if(a % 3 == 0) {
        console.log(a + " " + "кратно 3");
    } if(a % 5 == 0) {
        console.log(a + " " + "кратно 5");
    } if(a % 3 == 0 & a % 5 == 0) {
        console.log(a + " " + "кратно 3 и кратно 5");
    }
}