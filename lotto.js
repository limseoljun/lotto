// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


// 내 번호들
// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;
while (true) {
    if (win = 6) {
        var p = [11, 45, 6, 41, 31, 42];
        // p[0] = 2;
        // p[1] = 18;
        // p[2] = 21;
        // p[3] = 32;
        // p[4] = 33;
        // p[5] = 41;

        // 랜덤 번호들
        var r = [0, 0, 0, 0, 0, 0, 0];
        r[0] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
        document.write(r[0]);
        document.write("<br>");

        ////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기(그렇게 해서 나온 번호도 또 검사를 계속 해야함)
        while (true) {

            r[1] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

            if (r[0] != r[1]) {   // r2가 r1과 같지 않으면 빠져나감
                document.write(r[1]);
                document.write("<br>");
                break;
            }
        }

        ////    중복제거
        //todo r3  가 r1 이나 r2와 같으면 다시뽑게하기(무한히)
        while (true) {

            r[2] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

            // case 1
            if (r[2] != r[0] && r[2] != r[1]) {   // r3  가 r1 이나 r2와 같으면 다시뽑게하기(무한히)
                document.write(r[2]);
                document.write("<br>");
                break;
            }

            //case 2
            // if(r3 != r1){   // r3  가 r1 이나 r2와 같으면 다시뽑게하기(무한히)
            //     if(r3 != r2){
            //         document.write(r3);
            //         document.write("<br>");
            //         break;
            //     }
            // }

        }

        while (true) {
            r[3] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
            if (r[3] != r[0] && r[3] != r[1] && r[3] != r[2]) {
                document.write(r[3]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            r[4] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
            if (r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
                document.write(r[4]);
                document.write("<br>");
                break;
            }
        }

        while (true) {
            r[5] = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
            if (r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]) {
                document.write(r[5]);
                document.write("<br>");
                break;
            }
        }

        var b = 0;
        while (true) {
            b = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
            if (b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]) {
                document.write("보너스 번호: " + b);
                document.write("<br>");
                break;
            }
        }

        //todo:
        // 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	
        // p1 ~ p6


        var win = 0;    //내가 맞춘 수

        // if(p[0] == r[0]){
        //     win = win + 1;
        // }
        // if(p[0] == r[1]){
        //     win = win + 1;
        // }
        // if(p[0] == r[2]){
        //     win = win + 1;
        // }
        // if(p[0] == r[3]){
        //     win = win + 1;
        // }
        // if(p[0] == r[4]){
        //     win = win + 1;
        // }
        // if(p[0] == r[5]){
        //     win = win + 1;
        // }

        // if(p[1] == r[0]){
        //     win = win + 1;
        // }
        // if(p[1] == r[1]){
        //     win = win + 1;
        // }
        // if(p[1] == r[2]){
        //     win = win + 1;
        // }
        // if(p[1] == r[3]){
        //     win = win + 1;
        // }
        // if(p[1] == r[4]){
        //     win = win + 1;
        // }
        // if(p[1] == r[5]){
        //     win = win + 1;
        // }

        // //3

        // if(p[2] == r[0]){
        //     win = win + 1;
        // }
        // if(p[2] == r[1]){
        //     win = win + 1;
        // }
        // if(p[2] == r[2]){
        //     win = win + 1;
        // }
        // if(p[2] == r[3]){
        //     win = win + 1;
        // }
        // if(p[2] == r[4]){
        //     win = win + 1;
        // }
        // if(p[2] == r[5]){
        //     win = win + 1;
        // }

        // //4

        // if(p[3] == r[0]){
        //     win = win + 1;
        // }
        // if(p[3] == r[1]){
        //     win = win + 1;
        // }
        // if(p[3] == r[2]){
        //     win = win + 1;
        // }
        // if(p[3] == r[3]){
        //     win = win + 1;
        // }
        // if(p[3] == r[4]){
        //     win = win + 1;
        // }
        // if(p[3] == r[5]){
        //     win = win + 1;
        // }

        // //5

        // if(p[4] == r[0]){
        //     win = win + 1;
        // }
        // if(p[4] == r[1]){
        //     win = win + 1;
        // }
        // if(p[4] == r[2]){
        //     win = win + 1;
        // }
        // if(p[4] == r[3]){
        //     win = win + 1;
        // }
        // if(p[4] == r[4]){
        //     win = win + 1;
        // }
        // if(p[4] == r[5]){
        //     win = win + 1;
        // }

        // //6

        // if(p[5] == r[0]){
        //     win = win + 1;
        // }
        // if(p[5] == r[1]){
        //     win = win + 1;
        // }
        // if(p[5] == r[2]){
        //     win = win + 1;
        // }
        // if(p[5] == r[3]){
        //     win = win + 1;
        // }
        // if(p[5] == r[4]){
        //     win = win + 1;
        // }
        // if(p[5] == r[5]){
        //     win = win + 1;
        // }


        for (var i = 0; i <= 5; i = i + 1) {
            for (var j = 0; j <= 5; j = j + 1) {
                if (p[i] == r[j]) {
                    win = win + 1;
                }
            }
        }

        document.write("win:" + win + "<br>");

        // var str = "";
        // switch(win){
        //     case 0:
        //     case 1:
        //     case 2:
        //         str = "꽝!!! 다음기회에";
        //         break;
        //     case 3:
        //         str = "5등에 당첨되셨습니다.";
        //         break;
        //     case 4:
        //         str = "4등에 당첨되셨습니다.";
        //         break;
        //     case 5:
        //         str = "3등에 당첨되셨습니다.";
        //         break;
        //     case 6:
        //         str = "1등에 당첨되셨습니다.";
        //         break;        
        // }

        var str = "";
        switch (win) {
            case 0:
            case 1:
            case 2:
                str = "꽝!!! 다음기회에";
                break;
            case 3:
                str = "5등에 당첨되셨습니다.";
                break;
            case 4:
                str = "4등에 당첨되셨습니다.";
                break;
            case 5:
                str = "3등에 당첨되셨습니다.";
                //2등 처리
                for (var i = 0; i < 6; i = i + 1) {
                    if (b == p[i]) {    // 보너스 번호가 3등 당첨 유저의 나머지 한번호와 일치하는경우
                        // 2등 처리
                        str = "2등에 당첨되셨습니다.";
                    }
                }
                break;
            case 6:
                str = "1등에 당첨되셨습니다.";
                break;
        }
    }
    break;
}
document.write(str);
